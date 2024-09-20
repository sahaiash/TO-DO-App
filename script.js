// Get references to the input box and the add button
const taskInput = document.getElementById("taskbox");
const addButton = document.getElementById("addbtn");
const taskList = document.createElement("ul"); // Create a list to hold tasks
document.querySelector('.container').appendChild(taskList); // Append list to container

// Function to add tasks
addButton.onclick = () => {
    // Get the value from the input box
    const taskText = taskInput.value.trim();
    
    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new <li> element for the task
        const newTask = document.createElement("li");
        newTask.textContent = taskText;  // Set the text content to the input value
        
        // Style the new task
        newTask.style.padding = '10px';
        newTask.style.backgroundColor = '#fff';
        newTask.style.marginBottom = '10px';
        newTask.style.borderRadius = '5px';
        newTask.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
        newTask.style.position = 'relative';
        
        // Optionally, add a delete button to remove tasks
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.position = 'absolute';
        deleteButton.style.right = '10px';
        deleteButton.style.top = '10px';
        deleteButton.style.backgroundColor = '#FF6B6B';
        deleteButton.style.color = '#fff';
        deleteButton.style.border = 'none';
        deleteButton.style.cursor = 'pointer';
        
        // Append the delete button to the task
        newTask.appendChild(deleteButton);
        
        // Add the new task to the task list (ul)
        taskList.appendChild(newTask);
        
        // Clear the input box for a new task
        taskInput.value = "";

        // Add functionality to remove the task when delete button is clicked
        deleteButton.onclick = () => {
            taskList.removeChild(newTask); // Remove the task from the list
        };
    } else {
        alert("Please enter a task."); // Alert the user if the input is empty
    }
};