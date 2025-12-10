const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  taskText = taskInput.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}
        <button class="delTask">X</button>
        </span>
        `;

    listItem.querySelector(".delTask").addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});

taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    taskInput.value = "";
  }
});

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});
