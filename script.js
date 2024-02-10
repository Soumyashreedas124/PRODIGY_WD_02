const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime;
let running = false;
let elapsedTime = 0;

function displayTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const formattedTime = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  display.textContent = formattedTime;
}

function startTimer() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      displayTime(elapsedTime);
    }, 10);
  }
}

function stopTimer() {
  if (running) {
    running = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  running = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  displayTime(elapsedTime);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
