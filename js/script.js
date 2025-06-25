 const taskname=document.querySelector("#taskname");
const addBtn=document.querySelector("#addBtn");
const container=document.querySelector("#container");
let tasks=[];
let id=1;

// addBtn.addEventListener("click", function(){

//     const p=document.createElement("p");
//     p.innerText=taskname.value;
//     container.appendChild(p);
//     taskname.value='';
// });

taskname.addEventListener("keypress",function(evt){
    if(evt.code=="Enter"){
        let task={taskid: id, title: taskname.value, status:' pending'} 
       id++;
        tasks.push(task);
        
        

        addToDom(task);
        console.log(tasks);
    }
})
function addToDom(task)
{
    const div=document.createElement("div");


    const p=document.createElement("span");
    p.innerText=task.title;
    div.appendChild(p);

    const chk=document.createElement("input");
    chk.setAttribute ("type","checkbox");
    div.appendChild(chk);
    chk.addEventListener("click",function(){
        let status="pending";
        if(chk.checked==true){
            p.style.textDecoration="line-through";
            status="completed";
        }
        else
            p.style.textDecoration='none';
            tasks=tasks.map(function(item){
                if(item.taskid==task.taskid)
                    item.status=status;
                    return item;
            })
    })

    const delButton=document.createElement("button");
    delButton.innerText="Del";
    //delButton.addEventListener("click",function(){
      //  div.remove();
    //})
    delButton.addEventListener("click",deleteHandler)

     
    div.appendChild(delButton);


    container.appendChild(div);
    taskname.value='';
}
function deleteHandler(evt){
    evt.target.parentNode.remove();
}
