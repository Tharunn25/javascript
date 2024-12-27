const todoinput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");


let tasks = [];

addTaskBtn.addEventListener('click',()=>{
    const taskText = todoinput.value.trim();
    if(taskText==="") return;

    const newTask = {
        id:Date.now(),
        text:taskText,
        completed:false
    };
    tasks.push(newTask);
    todoinput.value = "";
    console.log(tasks);   
});
