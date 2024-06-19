function createTask(taskName, taskDuration, taskTime, progress) {
	let taskClass = progress === "Completed" ? "completed" : "";
	let checked = progress === "Completed" ? "checked" : "";
	let taskElement = document.createElement("div");
	taskElement.className = `task ${taskClass}`;
	taskElement.innerHTML = `
        <input type="text" class="editable-input task-name-input" value="${taskName}" readonly />
        <input type="text" class="editable-input task-duration-input" value="${taskDuration}" readonly />
        <input type="text" class="editable-input task-time-input" value="${taskTime}" readonly />
        <p><span class="tasks-progress">${progress}</span> <span><input type="checkbox" class="task-checkbox" ${checked}></span></p>
        <button class="edit-button">Edit</button>
    `;
	document.querySelector(".tasks-container").appendChild(taskElement);

	// Add event listener to the newly created checkbox
	let checkbox = taskElement.querySelector(".task-checkbox");
	checkbox.addEventListener("click", function () {
		let progressElement = taskElement.querySelector(".tasks-progress");
		if (checkbox.checked) {
			progressElement.textContent = "Completed";
			taskElement.classList.add("completed");
		} else {
			progressElement.textContent = "In Progress";
			taskElement.classList.remove("completed");
		}
	});

	// Add event listener to the edit button
	let editButton = taskElement.querySelector(".edit-button");
	let taskNameInput = taskElement.querySelector(".task-name-input");
	let taskDurationInput = taskElement.querySelector(".task-duration-input");
	let taskTimeInput = taskElement.querySelector(".task-time-input");

	editButton.addEventListener("click", function () {
		if (editButton.textContent === "Edit") {
			taskNameInput.removeAttribute("readonly");
			taskDurationInput.removeAttribute("readonly");
			taskTimeInput.removeAttribute("readonly");
			taskNameInput.focus();
			editButton.textContent = "Save";
		} else {
			taskNameInput.setAttribute("readonly", "readonly");
			taskDurationInput.setAttribute("readonly", "readonly");
			taskTimeInput.setAttribute("readonly", "readonly");
			editButton.textContent = "Edit";
		}
	});
}

document.getElementById("new-task-btn").addEventListener("click", function () {
	// Create a new task with default values when the button is clicked
	createTask("New Task", "00:00am", "0hr", "In Progress");
});
