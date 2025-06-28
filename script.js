document.addEventListener("DOMContentLoaded", () => {
  const inputTask = document.getElementById("inputTodoTask");
  const addTask = document.getElementById("addTodoTask");
  const taskList = document.getElementById("todoTaskList");

  let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  tasks.forEach((task) => renderTask(task));

  addTask.addEventListener("click", () => {
    let inputTaskText = inputTask.value.trim();
    if (inputTaskText === "") return;

    const newTask = {
      id: Date.now(),
      text: inputTaskText,
      completed: false,
    };
    tasks.push(newTask);
    renderTask(newTask);
    console.log(tasks);
    saveTask();
    inputTask.value = "";
  });

  function renderTask(task) {
    console.log(task.text);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `<span>${task.text}</span> <button>delete</button>`;
    taskList.appendChild(li);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });
  }

  function saveTask() {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }
});
