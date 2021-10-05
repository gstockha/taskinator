var formEl = document.querySelector("#task-form"); //for button
var tasksToDoEl = document.querySelector("#tasks-to-do"); //target area of html (via class)

var taskFormHandler = function() {
    event.preventDefault(); //prevent refresh
    //we used this to see that 'value' was the relevant thing for string input
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    //we use this to see what type user selected on the <select> drop down
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false; //get out of here
    }
    formEl.reset(); //seems non-important? but ok
    //send it as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler); //submit uses enter and click