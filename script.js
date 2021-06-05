//take the input from user

const userInput = document.querySelector(".userInput");
const submit = document.querySelector(".submit");
const task = document.querySelector(".task");
const showTask = document.querySelector(".showTask");
const body = document.body;
console.log(userInput);

function createTask(e) {
  e.preventDefault();
  const realTask = userInput.value;

  const taskHtml = `<form class="completeForm">
    <span class="task"> ${realTask} </span>
    <input type="checkbox" class="checkbox">
    <button class="deleteTask">X</button>
  </form>`;
  showTask.innerHTML = taskHtml;
}

//add button for adding it to the list
submit.addEventListener("click", createTask);

//store it in the local storage
//show it on the screen
//delete btn for deleting it from the local storage

console.log("in the production baby");
