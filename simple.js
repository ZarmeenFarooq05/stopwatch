var startTime;
var stopwatchInterval;
var elapsedPausedTime = 0;

function startsw() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopsw() {
  clearInterval(stopwatchInterval);
  elapsedPausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
}
function resetsw(){
    stopsw()
    elapsedPausedTime=0
    document.getElementById('stopwatch').innerHTML='00:00:00'
}
function updatesw() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime; 
    var seconds = Math.floor(elapsedTime / 1000) % 60;
    var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; 
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60); 
    var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("stopwatch").innerHTML = displayTime;
  }
  
  function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
  }