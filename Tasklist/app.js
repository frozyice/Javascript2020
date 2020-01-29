const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks')
//console.log(taskInput);

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    
    taskList.addEventListener('click',removeTask);
    filter.addEventListener('keyup',filterTasks)
    clearBtn.addEventListener('click', ClearTasks)
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const removeLink = document.createElement('a');
        removeLink.classList = 'delete-item secondary-content';
        removeLink.innerHTML = 'x';
        taskList.appendChild(removeLink);
        taskList.appendChild(li);
    });
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
    
        StorageInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
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

            //removeFromLocalStorage(event.target.parentElement);
        }
    }
}

function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent.slice(0,-1) === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function filterTasks (event){
    const text = event.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
        const taskValue = task.firstChild.textContent;
        if(taskValue.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}

function ClearTasks (event){
    clearTasksFromLocalStorage();
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function clearTasksFromLocalStorage (){
    localStorage.clear();
}
