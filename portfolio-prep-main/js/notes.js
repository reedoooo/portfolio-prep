'use strict';

function Note(title, text) {
    this.title = title;
    this.text = text;
}

function saveNoteToState (savedNote) {
    // does savedNote.title already exist in state.notes?
    let foundNoteIndex = state.notes.findIndex(note => note.title === savedNote.title);
    // if it does, replace/update the information.
    if (foundNoteIndex === -1) {
        state.notes.push(savedNote);
    // if it does not, add a new note
    } else {
        state.notes.splice(foundNoteIndex, 1, savedNote);
    }
    // updates local storage with new information; called from app.js
    saveAllToLocalStorage();
    clearNoteButtonContainer();
    renderNotesButtons();
    
}

function loadNoteFromState () {

}

function clearNoteButtonContainer () {
    let scrollEl = document.getElementById('notesButtonScroll');

    for (let i = 0; scrollEl.childNodes.length > 0; i++) {
        scrollEl.removeChild(scrollEl.lastChild);
    }
}


// renders note onto screen 
function renderNote (event) {
    let textAreaEl = document.querySelector('textarea');
    let titleEl = document.getElementById('noteTitle');

    textAreaEl.innerText = '';
    console.log(state.notes[event.target.id].title, state.notes[event.target.id].text)
    titleEl.value = state.notes[event.target.id].title;
    textAreaEl.innerText = state.notes[event.target.id].text;
}

function renderNotesButtons () {
    let scrollEl = document.getElementById('notesButtonScroll');

    // if (scrollEl.hasChildNodes) {
    //     clearNoteButtonContainer();
    // }
    console.log(scrollEl.childNodes);

    state.notes.forEach(note => {
        // create buttons for each note in the state.notes array
        let containerEl = document.createElement('div');
        let buttonEl = document.createElement('button');
        let removeEl = document.createElement('button');

        // 'id' attribute values correspond to the index position of each note in state.notes
        containerEl.setAttribute('class', 'scroll button container');
        buttonEl.innerText = note.title;
        buttonEl.setAttribute('id', state.notes.indexOf(note));
        buttonEl.setAttribute('class', 'title')
        removeEl.innerText = '-';
        removeEl.setAttribute('id', state.notes.indexOf(note));

        // add event listeners to each button
        buttonEl.addEventListener('click', renderNote);
        removeEl.addEventListener('click', handleRemoveNote);

        containerEl.appendChild(removeEl);
        containerEl.appendChild(buttonEl);

        scrollEl.appendChild(containerEl);
    });

    
}

function handleSaveNote (event) {
    event.preventDefault();
    let savedNote = new Note(event.target.noteTitle.value, event.target.noteText.value);
    saveNoteToState(savedNote);
}

function handleRemoveNote (event) {
    event.preventDefault();
    // console.log(state.notes[event.target.id]);
    state.notes.splice(event.target.id, 1);
    console.log(state.notes);
    saveAllToLocalStorage();
    clearNoteButtonContainer();
    renderNotesButtons();

}


// 'starts' below
document.getElementById('noteDisplay').addEventListener('submit', handleSaveNote);
renderNotesButtons();