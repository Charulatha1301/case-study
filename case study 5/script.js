function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let task = document.createElement("span");
    task.textContent = taskText;

    let completeButton = document.createElement("button");
    completeButton.textContent = "Completed";

    completeButton.onclick = function () {
        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Completed";
        }
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(task);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
