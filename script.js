const textInputArea = document.getElementById('text-input');
const submitButton = document.getElementById('submit-button');
const noteArea = document.getElementById('note-area');

function createNote() {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note')
    noteDiv.appendChild(createTimeTitle());
    noteDiv.appendChild(createNoteText());
    noteDiv.appendChild(createBufferSection());
    noteDiv.appendChild(createDeleteButton());
    return noteDiv;
};

function createNoteText() {
    const noteTextDiv = document.createElement('div');
    noteTextDiv.classList.add('note-text')
    noteTextDiv.appendChild(document.createTextNode(textInputArea.value));
    return noteTextDiv;
}

//following function solves delete button overlapping text due to absolute positioning
function createBufferSection() {
    const bufferSection = document.createElement('div');
    bufferSection.classList.add('buffer-section');
    return bufferSection;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList = 'delete';
    return deleteButton;
}

function deleteNote(element) {
    if (element.target.classList.contains('delete')) {
        element.target.closest('.note').remove();
    }
}

function removeText() {
    if (textInputArea.value != '') {
        textInputArea.value = '';
    }
}

//Start functions to get date and time.

function createTimeTitle() {
    getCurrentTime();
    const dateAndTimeDiv = document.createElement('div');
    dateAndTimeDiv.classList.add('date-and-time');
    dateAndTimeDiv.appendChild(document.createTextNode(`${month()} ${date()} ${year()} ${hours()}:${minutes()}:${seconds()}`));
    return dateAndTimeDiv;
}

function getCurrentTime() {
    const date = new Date();
    return date;
}

function hours() {
    let hours = getCurrentTime().getHours();
    switch (hours) {
        case 0:
            hours = '12';
            break;
        case 13:
            hours = "1";
            break;
        case 14: 
            hours = '2';
            break;
        case 15:
            hours = '3';
            break;
        case 16:
            hours = '4';
            break;
        case 17:
            hours = '5';
            break;
        case 18:
            hours = '6';
            break;
        case 19:
            hours = '7';
            break;
        case 20:
            hours = '8';
            break;
        case 21:
            hours = '9';
            break;
        case 22:
            hours = '10';
            break;
        case 23:
            hours = '11';
            break;
        case 24:
            hours = '12';
            break;
    };
    hours = hours.toString().padStart(2, '0');
    return hours;
}

function minutes() {
    let minutes = getCurrentTime().getMinutes();
    minutes = minutes.toString().padStart(2, '0');
    return minutes;
}

function seconds() {
    let seconds = getCurrentTime().getSeconds();
    seconds = seconds.toString().padStart(2, '0');
    return seconds;
}

function day() {
    let day = getCurrentTime().getDay();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = weekday[day];
    return day;
}

function month() {
    let month = getCurrentTime().getMonth();
    const calendarMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    month = calendarMonth[month];
    return month;
}

function date() {
    let date = getCurrentTime().getDate();
    date = date.toString();
    if (date.charAt(date.length - 1) === '1') {
        date = date + 'st';
    } else if (date.charAt(date.length - 1) === '2') {
        date = date + 'nd';
    } else if (date.charAt(date.length - 1) === '3') {
        date = date + 'rd';
    } else {
        date = date + 'th';
    }
    return date;
}

function year() {
    let year = getCurrentTime().getFullYear();
    return year;
}
//End functions to get date and time.

function drawNote() {
    if (textInputArea.value === '') {
        alert(`Please enter text.`)
        return;
    }
    noteArea.appendChild(createNote());
    removeText();
};

submitButton.addEventListener('click', drawNote);
textInputArea.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        drawNote();
    }
})
document.getElementById('note-area').addEventListener('click', deleteNote);