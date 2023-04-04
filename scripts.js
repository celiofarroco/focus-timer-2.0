const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const setButton = document.querySelector(".set-button");
const stopButton = document.querySelector(".stop-button");
const addButton = document.querySelector(".add-button");
const removeButton = document.querySelector(".remove-button");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

let setMinutes;
let timerTimeout;

playButton.addEventListener("click", playTimer);
pauseButton.addEventListener("click", pauseTimer);
setButton.addEventListener("click", setTime);
stopButton.addEventListener("click", stopTimer);
addButton.addEventListener("click", addFiveMinutes);
removeButton.addEventListener("click", removeFiveMinutes);

function playTimer() {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
  setButton.classList.add("hide");
  stopButton.classList.remove("hide");
  setMinutes = minutesDisplay.textContent;
  countdown();
}

function pauseTimer() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  pause();
}

function setTime() {
  minutes = String(prompt()).padStart(2, 0);
  setMinutes = Number(minutes);
  console.log(setMinutes);
  minutesDisplay.textContent = minutes;
  setButton.classList.add("hide");
  stopButton.classList.remove("hide");
}

function stopTimer() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  setButton.classList.remove("hide");
  stopButton.classList.add("hide");
  reset();
  minutesDisplay.textContent = setMinutes;
}

function addFiveMinutes() {
  let currentMinutes = Number(minutesDisplay.textContent);
  let currentSeconds = Number(secondsDisplay.textContent);
  currentMinutes += 5;
  minutesDisplay.textContent = currentMinutes;
  setMinutes = minutesDisplay.textContent;
  updateDisplay(currentMinutes, currentSeconds);
}

function removeFiveMinutes() {
  let currentMinutes = Number(minutesDisplay.textContent);
  let currentSeconds = Number(secondsDisplay.textContent);
  currentMinutes -= 5;
  if (currentMinutes <= 0) {
    return;
  }
  minutesDisplay.textContent = currentMinutes;
  setMinutes = minutesDisplay.textContent;
  updateDisplay(currentMinutes, currentSeconds);
}

function countdown() {
  timerTimeout = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (minutes <= 0 && seconds <= 0) {
      stopTimer();
      reset();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateDisplay(minutes, seconds - 1);
    countdown();
  }, 1000);
}

function updateDisplay(newMinutes, newSeconds) {
  secondsDisplay.textContent = String(newSeconds).padStart(2, 0);
  minutesDisplay.textContent = String(newMinutes).padStart(2, 0);
}

function reset() {
  clearTimeout(timerTimeout);
  updateDisplay(setMinutes, "00");
}

function pause() {
  clearTimeout(timerTimeout);
}
