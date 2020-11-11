var inputCover = document.querySelector('.cover');
var newInput = document.getElementById('newInput');
var addButton = document.querySelector('.addButton');
var removeButton = document.querySelector('.removeButton');
var container = document.querySelector('.container');
var add = document.querySelector('.add');
// var remove = document.querySelector('.remove');


class dailyList {
    constructor(itemName) {
        this.createDiv(itemName);
    }
    createDiv(itemName) {
        let randomDeg = Math.floor(Math.random() * 20) - 10;

        var box = document.createElement('div');
        box.classList.add('box');
        box.style.transform = 'rotate(' + randomDeg + 'deg)';
        box.style.background = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";

        var text = document.createElement('p');
        text.classList.add('text');
        // text.style.transform = 'rotate(-' + randomDeg + 'deg)';
        text.setAttribute('style', 'transform: rotateZ('+-randomDeg+'deg)');
        text.textContent = itemName;

        var trash = document.createElement('i');
        trash.classList.add('trash');
        trash.classList.add('fas');
        trash.classList.add('fa-trash');
        trash.setAttribute(
            'title',
            'Delete To Trash'
        );
        trash.addEventListener('click', () => {
            container.removeChild(box);
        })

        container.appendChild(box);
        box.appendChild(text);
        box.appendChild(trash);
    }
}

removeButton.addEventListener('click', deleteNote);

function deleteNote() {
    var box = document.querySelectorAll('.box');
    box.forEach(box => {
        box.remove();
    });
}

addButton.addEventListener('click', makeNote);

function makeNote() {
    inputCover.classList.toggle('active');
    addButton.classList.toggle('rotate');
}


add.addEventListener('click', addNote);

function addNote() {
    if (newInput.value) {
        new dailyList(newInput.value);
        inputCover.classList.toggle('active');
        addButton.classList.toggle('rotate');
    }
    newInput.value = "";
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 35) {
        addNote();
    }
    if (e.keyCode == 36) {
        makeNote();
    }
    if (e.keyCode == 46) {
        deleteNote();
    }
})

// window.alert("Press 'home' to make a note. Press 'end' at your number pad to add a note. Press 'delete' key to delete a note.")