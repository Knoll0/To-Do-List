

function addListItem() {
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Item 3"));
    ul.appendChild(li);
}

function deleteListItem() {
    var ul = document.getElementById("taskList");
    if (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
}

