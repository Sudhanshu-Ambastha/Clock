let allTypes = document.querySelectorAll(".container .time-options button");
let timer = document.querySelector(".container .progress-bar h3");
let startBtn = document.querySelector(".container .control-buttons .start-btn");
let stopBtn = document.querySelector(".container .control-buttons .stop-btn");
let resetBtn = document.querySelector(".container .control-buttons .reset-btn");
let circularProgressBar = document.querySelector(".container .progress-bar");
const audio = new Audio('./Timer clock.m4a');

let getType = (elem, type)=>{
    for(x of allTypes){
        x.classList.remove("active");
    }
    elem.classList.add("active");
    pomodoroType = type;
    resetTimer();
}

const timer_type_pomodoro = "Pomodoro";
const timer_type_shortbreak = "Shortbreak";
const timer_type_longbreak = "Longbreak";
let pomodoroType = timer_type_pomodoro;
const pomodoroTimeInSec = 1500;
const shortBreakTimeInSec = 300;
const longBreakTimeInSec = 900;
let timerValue = pomodoroTimeInSec;
let multipleFactor = 360 / timerValue;
let progressInterval;

let resetTimer =()=>{
    clearInterval(progressInterval);
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    if(pomodoroType === "Pomodoro"){
        timerValue = pomodoroTimeInSec;
    } else if(pomodoroType === "Shortbreak"){
        timerValue = shortBreakTimeInSec;
    } else if(pomodoroType === "Longbreak"){
        timerValue = longBreakTimeInSec;
    } 
    multipleFactor = 360 / timerValue;
    timeProgress();
    audio.stop();
}

let FormatedNumberInMinutes =(number)=>{
    let minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    let seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

let timeProgress =()=>{
    if(timerValue == 0){
        stopTimer();
        audio.play();
    }
    timer.innerHTML = `${FormatedNumberInMinutes(timerValue)}`;
    circularProgressBar.style.background = `conic-gradient(#664efe ${timerValue * multipleFactor}deg, #422f66 0deg)`;
}

let startTimer =()=>{
    progressInterval  = setInterval(()=>{
        timerValue--;
        timeProgress();
    }, 1000);
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
}

let stopTimer =()=>{
    clearInterval(progressInterval);
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
}

resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);
startBtn.addEventListener("click", startTimer);