document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");

        btn.onclick = function () {
            li.remove();
          }
  
        li.appendChild(btn);
        taskList.appendChild(li);
  
        taskInput.value = ""; 
      } else {
        window.alert("enter a task");
      }
    }
  
    addButton.addEventListener("click", () => {
      addTask();
    });
  
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });

  });
  
