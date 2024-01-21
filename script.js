const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');
let notes = [];



function addNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notes = [];
    }
    else{
        notes = JSON.parse(notes);
    }
    if(addText.value == ''){
        alert('Add your note')
        return;
    }

    const noteObj = {
        title: addTitle.value,
        note: addText.value
    }
    notes.push(noteObj);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function showNotes(){
    let notesHTML = '';
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    for(let i=0; i<notes.length; i++){
        console.log(notes[i])
        notesHTML += `
                <div class="note">
                    <button class="deleteNote" >Delete</button>
                    <div class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</div>
                    <div class="text">${notes[i].text}</div>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}
addNoteButton.addEventListener('click', addNotes);