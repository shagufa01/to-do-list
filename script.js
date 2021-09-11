function addElement() {
    let first = document.getElementById("root");
    let set = document.getElementById("inputBox");
    let para = document.createElement("p");
    para.classList.add("odd");
    para.innerHTML = set.value;
    first.appendChild(para);
}

function removeElement() {
    let xyz = document.getElementsByTagName("p");
    xyz[0].remove();
}

function add() {
    let para2 = document.getElementById("root2");
    para2.classList.add("odd");
}

function undo() {
    let para2 = document.getElementById("root2");
    para2.classList.remove("odd");
}