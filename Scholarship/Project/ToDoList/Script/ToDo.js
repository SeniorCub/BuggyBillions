    // Variable to store the current list style class
    let currentListStyle = "";


    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    }

    // Function to save a list
    function saveList() {
        const listTitleInput = document.getElementById("listTitle");
        const taskList = document.getElementById("taskList");
        const savedListItems = document.getElementById("savedListItems");

        const listTitle = listTitleInput.value.trim();
        if (listTitle !== "") {
            const listContainer = document.createElement("div");
            const newList = document.createElement("ul");
            newList.innerHTML = taskList.innerHTML;
            listContainer.appendChild(document.createElement("h2")).textContent = listTitle;

            // Add a class attribute to store the list style class
            listContainer.setAttribute("data-list-style", currentListStyle);

            listContainer.appendChild(newList);
            savedListItems.appendChild(listContainer);
            listTitleInput.value = "";
            taskList.innerHTML = "";
        }
    }