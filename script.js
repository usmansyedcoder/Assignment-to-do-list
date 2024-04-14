function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}
