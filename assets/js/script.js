var formEl = document.querySelector("#task-form"); //for button
var tasksToDoEl = document.querySelector("#tasks-to-do"); //target area of html (via class)

var createTaskHandler = function() {
    event.preventDefault(); //prevent refresh

    var listItemEl = document.createElement("li"); //type of html element
    listItemEl.className = "task-item"; //assign ID
    listItemEl.textContent = "This is a new task."; //asign text to html
    tasksToDoEl.appendChild(listItemEl); //add to tasks-to-do list
}

formEl.addEventListener("submit", createTaskHandler); //submit uses enter and click