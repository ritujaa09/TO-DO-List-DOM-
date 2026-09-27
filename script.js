const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

if (taskInput && addButton && taskList) {
    addButton.addEventListener("click", function () {
        const task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = task;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    });

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
}