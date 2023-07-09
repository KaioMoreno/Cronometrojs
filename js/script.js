// Para começar a gente deve pegar os elementos do HTML com o query selector e inputar em variaveis

const hourEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");

// Depois devemos criar as variaveis dos botões

const startBtn = document.querySelector("#startbtn");
const pauseBtn = document.querySelector("#pausebtn");
const continueBtn = document.querySelector("#continuebtn");
const resetBtn = document.querySelector("#resetbtn");



let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click" , startTimer);
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    
    interval = setInterval(() => {
        if(!isPaused) {
            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            if(minutes === 60) {
                hours++;
                minutes = 0;
            }


            hourEl.textContent = formatTime(hours);
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}


function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
}

function continueTimer() {
    isPaused = false
    continueBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer() {
    isPaused = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    hourEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
    
}


// Ao usar a crase para criar uma template string, você pode inserir variáveis dentro da string usando a sintaxe `${variavel}`

function formatTime(time) {
     return time < 10 ? `0${time}` : time;
}

// Eu poderia usar sem a função (padstart) na segunda function, apenas acrescentaria `00${time}` mais um zero. Eu tambem poderia usar o (padstart) na primeira function.

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") :time;
}

