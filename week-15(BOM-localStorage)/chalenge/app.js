let input =document.querySelector('.input');
let submit=document.querySelector('.add');
let tasks=document.querySelector('.tasks');

let arrayTasks=[];




if(localStorage.getItem("tasks")){
    arrayTasks=JSON.parse(localStorage.getItem('tasks'));
}

getTasksFromLocalStorage();


submit.onclick= function(){
    if(input.value!=""){
        addTaskToArray(input.value);
        input.value="";
        
    }
}

tasks.addEventListener("click",e=>{
    if(e.target.classList.contains('delet')){//span
        removeTaskFromArrayTasks(e.target.parentElement.getAttribute('task-id'));
        
        
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains('task'))
        e.target.classList.toggle('completed')
     
})




function addTaskToArray(Text){
    const task={
        id: Date.now(),
        title :Text,
        completed:false,
    }
    arrayTasks.push(task);
    
    addTasksToPage(arrayTasks)

    addTasksToLocalStorage(arrayTasks);
    
}

function addTasksToPage(arrayTasks){
    // clear the page first from the tasks 
        tasks.innerHTML="";

    // loop again and creat tasks from arrayTasks
    arrayTasks.forEach(task=> {
        const div=document.createElement('div');
        div.className='task';
        if(task.completed){
            div.className="task done";
        }
        div.setAttribute("task-id",task.id);
        div.appendChild(document.createTextNode(task.title));

        let span=document.createElement('span');
        span.appendChild(document.createTextNode("Delet"));
        span.className="delet";

        div.appendChild(span);
        tasks.appendChild(div);
    });
}

function addTasksToLocalStorage(arrayTasks){
    localStorage.setItem("tasks",JSON.stringify(arrayTasks));
}

function getTasksFromLocalStorage(){
    let storedData=localStorage.getItem('tasks');
    if(storedData){
        let Tasks=JSON.parse(storedData);
        addTasksToPage(Tasks);
    }
}


function removeTaskFromArrayTasks(taskID){
    arrayTasks=arrayTasks.filter(task => task.id != taskID);
    addTasksToLocalStorage(arrayTasks); 
}


let clear=document.querySelector('.btn');
clear.addEventListener('click', el=>{
    arrayTasks.length=0;
    localStorage.clear();
    addTasksToPage(arrayTasks);
})