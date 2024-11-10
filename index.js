const submit = document.getElementById("addTaskBtn");
const deleteAll = document.getElementById("deleteTaskBtn");
const tasklistElement = document.getElementById("taskList");

let taskList = [];

function renderTasklist() {
  tasklistElement.innerHTML = "";
  taskList.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${task.task}-${task.status} <button id='deleteTaskBtn' onClick="deleteTask(${index})">Delete</button>`;
    tasklistElement.appendChild(listItem);
  });
}

submit.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskStatus = document.getElementById("taskStatus");

  console.log(taskInput.value);
  console.log(taskStatus.value);

  taskList.unshift({ task: taskInput.value, status: taskStatus.value });
  renderTasklist();
  taskInput.value = "";
  taskStatus.value = "Completed";
});

deleteAll.addEventListener("click", () => {
  taskList = [];
  renderTasklist();
});

window.deleteTask = (index) => {
  taskList.splice(index, 1);
  renderTasklist();
};
