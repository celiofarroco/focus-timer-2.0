const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const setButton = document.querySelector(".set-button");
const stopButton = document.querySelector(".stop-button");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let setMinutes;

playButton.addEventListener("click", playTimer);
pauseButton.addEventListener("click", pauseTimer);
setButton.addEventListener("click", setTime);
stopButton.addEventListener("click", resetButtons);

function playTimer() {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
  countdown();
}

function pauseTimer() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
}

function setTime() {
  minutes = String(prompt()).padStart(2, 0);
  setMinutes = minutes;
  minutesDisplay.textContent = minutes;
  setButton.classList.add("hide");
  stopButton.classList.remove("hide");
}

function resetButtons() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  setButton.classList.remove("hide");
  stopButton.classList.add("hide");
  minutesDisplay.textContent = setMinutes;
}

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if (seconds <= 0) {
      seconds = 5;
      --minutes;
    }

    updateDisplay(minutes, seconds - 1);

    if (minutes <= 0 && seconds <= 1) {
      resetButtons();

      return;
    }

    countdown();
  }, 1000);
}

function updateDisplay(newMinutes, newSeconds) {
  secondsDisplay.textContent = String(newSeconds).padStart(2, 0);
  minutesDisplay.textContent = String(newMinutes).padStart(2, 0);
}
