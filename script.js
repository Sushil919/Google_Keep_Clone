const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
let notes = [];

function addNotes(){
    if(addText.value == ''){
        alert('Add your note')
        return;
    }
    const noteObj = {
        title: addTitle.value,
        note: addText.value
    }
    notes.push(noteObj)
}

addNoteButton.addEventListener('click', addNotes);