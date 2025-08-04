const textInput = document.getElementById("textInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const theme = document.getElementById("theme")

theme.addEventListener("click", () => {
    if (theme.textContent == "dark") {
        theme.textContent = "light"
    }
    document.body.classList.toggle("dark");
})

function addedTask() {
    taskText = textInput.value.trim();
    if (taskText == ""){
        alert("Task can't be empty!")
        return;
    }
            
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete")
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    })
    li.appendChild(deleteBtn);

    //Mark as done on click
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    })

    taskList.appendChild(li);
    textInput.value = ""; //clear input
}

addTask.addEventListener("click", () => {
    addedTask();
})

textInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addedTask();
    }
})