

function addListItem() {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Item"));
    ul.appendChild(li);
}

function deleteListItem() {
    var ul = document.getElementById("taskList");
    if (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
}

function clearList() {
    var ul = document.getElementById("taskList");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}