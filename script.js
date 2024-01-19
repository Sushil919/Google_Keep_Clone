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
    notes.push(noteObj);
    showNotes();
}

function showNotes(){
    let notesHTML = '';
    for(let i=0; i<notes.length; i++){
        console.log(notes[i])
        notesHTML += `
                <div class="note">
                    <button>Delete</button>
                    <div class="title">${notes[i].title}</div>
                    <div class="text">${notes[i].text}</div>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}
addNoteButton.addEventListener('click', addNotes);