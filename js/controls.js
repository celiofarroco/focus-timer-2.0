export default function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  setMinutes,
  minutesDisplay,
}) {
  function play() {
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
    let minutes = String(prompt()).padStart(2, 0);
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

    updateDisplay(currentMinutes, currentSeconds);
  }
}
