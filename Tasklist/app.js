const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks')
//console.log(taskInput);

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
        
    taskList.addEventListener('click',removeTask);
}

function addTask(event){
    //console.log('test');
    console.log(taskInput.value);


    if (taskInput.value === ''){
        alert('Add a task!')
    }
    else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        
        const removeLink = document.createElement('a');
        removeLink.classList = 'delete-item secondary-content';
        removeLink.innerHTML = 'x';
        taskList.appendChild(removeLink);
        taskList.appendChild(li);
    }
    StorageInLocalStorage(taskInput.value);
    event.preventDefault();
}

function StorageInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeTask(event){
    if(event.target.classList.contains('delete-item')){
        if(confirm('Do you want to delete task?')){
            event.target.parentElement.remove();
        }
    }
}
