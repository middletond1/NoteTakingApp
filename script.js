const textInputArea = document.getElementById('text-input');
const submitButton = document.getElementById('submit-button');
const noteArea = document.getElementById('note-area');

// function getInputText() {
//     let inputText = textInputArea.value;
//     return inputText;
// }

function createNote() {
    const noteDiv = document.createElement('div');
    const inputText = textInputArea.value;
    noteDiv.classList.add('note')
    noteDiv.appendChild(document.createTextNode(inputText));
    noteArea.appendChild(noteDiv);
}

function drawNote() {

}