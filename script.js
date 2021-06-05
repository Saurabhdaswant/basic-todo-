//take the input from user

const userInput = document.querySelector(".userInput");
const submit = document.querySelector(".submit");
const task = document.querySelector(".task");
const showTask = document.querySelector(".showTask");
const body = document.body;
const form = document.querySelector(".form");

function createTask(e) {
  e.preventDefault();

  const realTask = userInput.value;
  const taskHtml = `<span class="task">${realTask}</span>
  <input type="checkbox" class="checkbox">
  <button class="deleteTask">X</button>`;
  showTask.innerHTML = taskHtml;
  form.reset();
}

//check btn for completion
function completeTask(e) {
  // console.log(e);
  if (!e.target.matches(".checkbox")) return;
  showTask.firstChild.classList.toggle("good");
  console.log("hidden");
}

//delete btn for deleting it from the local storage
function deleteTask(e) {
  if (!e.target.matches(".deleteTask")) return;
  showTask.innerHTML = "";
  console.log("deleted");
}

//add button for adding it to the list
submit.addEventListener("click", createTask);
showTask.addEventListener("click", completeTask);
showTask.addEventListener("click", deleteTask);
// showTask.addEventListener("click", fuck);

//store it in the local storage
//show it on the screen

console.log("in the production baby");
