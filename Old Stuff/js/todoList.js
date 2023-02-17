"use strict";


let allTaskEl = document.getElementById('all-tasks');
let listEl = document.getElementById('todo-list'); 
let taskFormEl = document.getElementById('newTaskForm');
let todoFormEl = document.getElementById('newTodoForm');

let activeTaskIndex = 0;

let taskArr = [];

function Task(name, list = []) {
    this.name = name;
    this.list = list;
}

function displayTaskList(event){
    // if(listEl.childNodes.length);
    for (let i = 0; listEl.children.length > 0; i++){ 
        // console.log(listEl.children.length);
        listEl.removeChild(listEl.lastChild);
        // console.log(listEl.children.length);
    };
    taskArr.forEach(element => {
        if (element.name === event.target.innerText){
        activeTaskIndex = taskArr.indexOf(element);
        }
    });
    taskArr[activeTaskIndex].list.forEach(item => { 
        populateTodoItem(item);
    })
}

function addTask(event) {
    event.preventDefault();
    let taskEl = document.createElement('li');
    taskArr.push(new Task(event.target.taskName.value));
    taskEl.innerText = event.target.taskName.value;
    taskEl.setAttribute('class', 'list-name');
    allTaskEl.appendChild(taskEl);
    taskEl.addEventListener('click', displayTaskList);
    taskFormEl.reset();
}

function addTodoItem(event) {
    event.preventDefault();
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'task');
    let inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('id', event.target.todoName.value);
    let labelEl = document.createElement('label');
    labelEl.setAttribute('for', event.target.todoName.value);
    let spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'custom-checkbox');
    labelEl.innerText = event.target.todoName.value;
    labelEl.prepend(spanEl);
    divEl.appendChild(inputEl);
    divEl.appendChild(labelEl);
    listEl.appendChild(divEl);
    taskArr[activeTaskIndex].list.push(event.target.todoName.value);
    todoFormEl.reset();
}

function populateTodoItem(item){
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'task');
    let inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('id', item);
    let labelEl = document.createElement('label');
    labelEl.setAttribute('for', item);
    let spanEl = document.createElement('span');
    spanEl.setAttribute('class', 'custom-checkbox');
    labelEl.innerText = item;

    labelEl.prepend(spanEl);
    divEl.appendChild(inputEl);
    divEl.appendChild(labelEl);
    listEl.appendChild(divEl);

}

taskFormEl.addEventListener('submit', addTask);
todoFormEl.addEventListener('submit', addTodoItem);