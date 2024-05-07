let allTask = [], bool = false, gobalIndex;
function addTask() {
    let task = document.getElementById('input-id').value;
    if (bool == true) {
        let temp = [...allTask];
        temp[gobalIndex] = task;
        console.log(temp);
        bool = false;
        allTask = [...temp];
    } else {
        if (!task) {
            alert("Please Enter the task.!")
        } else {
            allTask.push(task);
        }
    }
    document.getElementById('input-id').value = "";
    displayTask();
}

function displayTask() {
    let tableBody = document.getElementById('tbdy');
    let row = "";
    allTask.map((item, index) => {
        row += "<tr><td><label class='task-name'>" + item + "</label><button onclick='deleteTask(" + index + ")'>" + "Delete" + "</button><button onclick='updateTask(" + item + "," + index + ")'>" + "Update" + "</button></td></tr>";
    });
    tableBody.innerHTML = row;
}

function deleteTask(deleteIndex) {
    allTask = allTask.filter((item, index) => {
        return index !== deleteIndex;
    })
    displayTask();
}
function updateTask(item, index) {
    document.getElementById('input-id').value = item;
    bool = true;
    gobalIndex = index;
}