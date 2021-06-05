//take the input from user

const userInput = document.querySelector(".userInput");
const submit = document.querySelector(".submit");
const showTask = document.querySelector(".showTask");
const form = document.querySelector(".form");

function createTask(e) {
  e.preventDefault();

  const realTask = userInput.value;

  const stuff = document.createElement("div");
  const makeLi = document.createElement("li");
  const input = document.createElement("input");
  const button = document.createElement("button");

  stuff.className = " stuff";

  makeLi.textContent = realTask;
  makeLi.className = " makeLi";

  input.type = "checkbox";
  input.className = "checkbox";
  input.addEventListener("click", function () {
    stuff.firstChild.classList.toggle("good");
  });

  button.className = "deleteTask";
  button.textContent = "X";
  button.addEventListener("click", function () {
    stuff.remove();
  });

  showTask.appendChild(stuff);
  stuff.appendChild(makeLi);
  stuff.appendChild(button);
  stuff.appendChild(input);
  form.reset();
}

submit.addEventListener("click", createTask);
