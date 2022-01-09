const textInputArea = document.getElementById('text-input');
const submitButton = document.getElementById('submit-button');
const noteArea = document.getElementById('note-area');

function getInputText() {
    let inputText = textInputArea.value;
    return inputText;
}

function createNoteDiv() {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note')
    noteArea.appendChild(noteDiv);
}