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
}