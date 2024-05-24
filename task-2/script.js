let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function startStop() {
    if (isRunning) {
        pause();
    } else {
        start();
    }
}

function start() {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    document.getElementById("startStopBtn").textContent = "Pause";
}

function pause() {
    isRunning = false;
    clearInterval(timerInterval);
    document.getElementById("startStopBtn").textContent = "Resume";
}

function reset() {
    isRunning = false;
    clearInterval(timerInterval);
    print("00:00:00.000");
    elapsedTime = 0;
    document.getElementById("startStopBtn").textContent = "Start";
    document.getElementById("lapsList").innerHTML = "";
}

function recordLap() {
    if (isRunning) {
        let lapTime = timeToString(elapsedTime);
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById("lapsList").appendChild(lapItem);
    }
}
