document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); 
}


  function addTask(taskText, save = true) {
    // const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.classList.add("remove-btn");

      btn.onclick = function () {
        li.remove();
        removeTask(taskText);
      };

      li.appendChild(btn);
      taskList.appendChild(li);

      taskInput.value = "";

      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    } else {
      window.alert("enter a task");
    }
  }

  function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  addButton.addEventListener("click", () => {
    addTask(taskInput.value.trim());
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value.trim());
    }
  });

  loadTasks();
  
});

