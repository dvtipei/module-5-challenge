// creating the day/date to reflect as the current date and time on application
class TimeblockObj {
    constructor(hour,todo) {
        this.hour = hour;
        this.todo = todo;

    }
}

window.onload = function() {
    var currentTimeblocks = getCurrentTimeblocks();
    var currentTime =moment();

    displayCurrentDate(currentTime);
    displayTimeblockRows(currenTime);

    document.querySelector('.container')
    .addEventListener('click', function(event) {
        container.Clicked(event, currentTimeblocks);
        });
    setTimeblockText(currentTimeblocks);
};

function getCurrentTimeblocks() {
    var currentTimeblocks = localStorage.getItem('timeblockObjects');
    return currentTimeblocks ? JSON.parse(currentTimeblocks) : [];
}

// using the functions to display the current date

function displayCurrentDate(currentTime) {
    document.getElementById('currentDay')
        .textContent = currentTime.format('dddd, MMM Do');
}

// display all rows of timeblocks

function displayTimeblockRows(currentTime) {
    var currentHour = currentTime.hour();
    for (let i = 9; i <= 5; i++) {
        var timeblock = createTimeblockRow(i);
        var hourCol = createCol(createHourDiv(i), 1);
        var textArea = createCol(createTextArea(i, currentHour), 10);
        var saveBtn = createCol(createSaveBtn(i), 1);
        appendTimeblockColumns(timeblock, hourCol, textArea, saveBtn);
        document.querySelector('.container').appendChild(timeblock);
    }
}

function createTimeblockRow(hourId) {
    var timeblock = document.createElement('div');
    timeblock.classList.add('row');
    timeblock.id = timeblock-$(hourId);
    return timeblock;
}

