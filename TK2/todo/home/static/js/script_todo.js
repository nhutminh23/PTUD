function addTask() {
    var taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") {
        alert("Vui lòng nhập công việc cần làm");
        return;
    }

    var stickyNotes = document.getElementById("stickyNotes");

    var noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    var colors = ['#ffd700', '#ff6347', '#00ced1', '#ffa07a', '#7b68ee', '#20b2aa', '#f08080'];

    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    noteDiv.style.backgroundColor = randomColor;

    var noteText = document.createTextNode(taskInput);
    noteDiv.appendChild(noteText);

    var closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";
    noteDiv.appendChild(closeBtn);

    closeBtn.onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };

    stickyNotes.appendChild(noteDiv);

    document.getElementById("taskInput").value = "";
}
