// Function to calculate the time remaining until the target date
function getTimeRemaining(endTime) {
    var totalSeconds = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor((totalSeconds / 1000) % 60);
    var minutes = Math.floor((totalSeconds / 1000 / 60) % 60);
    var hours = Math.floor((totalSeconds / (1000 * 60 * 60)) % 24);
    var days = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));

    return {
        'total': totalSeconds,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}



// Function to update the timer display
function updateTimer() {
    var targetDate = new Date('June 16, 2023 00:00:00');
    var timeRemaining = getTimeRemaining(targetDate);

    var days = document.getElementById('days');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    days.innerHTML = timeRemaining.days;
    hours.innerHTML = timeRemaining.hours;
    minutes.innerHTML = timeRemaining.minutes;
    seconds.innerHTML = timeRemaining.seconds;
    

    if (timeRemaining.total <= 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = 'Timer has expired!';
    }
    var audio = document.getElementById('audio');
    
    audio = new Audio('time.mp3');
    audio.play();

}


// Update the timer every second
var timerInterval = setInterval(updateTimer, 1000);
