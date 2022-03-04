initializeNoteApp()

function initializeNoteApp() {
    const textInputArea = document.getElementById('text-input');
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', appendNote);
    textInputArea.addEventListener('keydown', function(event) {
        if(event.code === 'enter') {
            event.preventDefault();
            appendNote();
            removeText();
        }
    })
}

function getTextInput() {
    return document.getElementById('text-input').value;
}

function setTextInput() {
    document.getElementById('text-input').value = '';
}

function appendNote() {
    const noteArea = document.getElementById('note-area');
    if (getTextInput() === '') {
        alert(`Please enter text.`)
        return;
    }
    noteArea.appendChild(createNote());
};




function createNote() {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note')
    noteDiv.appendChild(createTimeTitle());
    noteDiv.appendChild(createNoteText());
    noteDiv.appendChild(createDeleteButton());
    return noteDiv;
};

function createNoteText() {
    const noteTextDiv = document.createElement('div');
    noteTextDiv.classList.add('note-text')
    noteTextDiv.appendChild(document.createTextNode(getTextInput()));
    return noteTextDiv;
}

function createDeleteButton() {
    const deleteBtnWrapper = document.createElement('div');
    deleteBtnWrapper.classList = 'deleteBtnWrapper';
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete';
    deleteBtnWrapper.appendChild(deleteButton)
    return deleteBtnWrapper;
}

function deleteNote(element) {
    if (element.target.classList.contains('delete')) {
        element.target.closest('.note').remove();
    }
}

function removeText() {
    if (getTextInput != '') {
        setTextInput();
    }
}

//Start functions to get date and time.

function createTimeTitle() {
    getDateObject();
    const dateAndTimeDiv = document.createElement('div');
    dateAndTimeDiv.classList.add('date-and-time');
    dateAndTimeDiv.appendChild(document.createTextNode(`${getMonth()} ${getDate()} ${getYear()} ${getHours()}:${getMinutes()}:${getSeconds()}`));
    return dateAndTimeDiv;
}

function getDateObject() {
    const date = new Date();
    return date;
}

function getHours() {
    let hours = getDateObject().getHours();
    if (hours > 12) {
        hours = hours - 12
    } else if (hours === 0){
        hours = 12
    }
    return hours.toString().padStart(2, '0');;
}

function getMinutes() {
    let minutes = getDateObject().getMinutes();
    return minutes.toString().padStart(2, '0');;
}

function getSeconds() {
    let seconds = getDateObject().getSeconds();
    return seconds.toString().padStart(2, '0');
}

function getDay() {
    let day = getDateObject().getDay();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[day];
}

function getMonth() {
    let month = getDateObject().getMonth();
    const calendarMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    return calendarMonth[month];
}

function getDate() {
    let date = getDateObject().getDate().toString();
    const dateOnesPlace = date.charAt(date.length - 1)
    if (dateOnesPlace === '1') {
        return `${date}st`
    }
    if (dateOnesPlace === '2') {
        return `${date}nd`
    }
    if (dateOnesPlace === '3') {
        return `${date}rd`
    }
        return `${date}th`
}

function getYear() {
    let year = getDateObject().getFullYear();
    return year;
}
//End functions to get date and time.

document.getElementById('note-area').addEventListener('click', deleteNote);