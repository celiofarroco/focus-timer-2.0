export default function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  minutesDisplay,
  secondsDisplay,
  updateDisplay,
  setMinutes,
}) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    setButton.classList.add("hide");
    stopButton.classList.remove("hide");
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }

  function set() {
    let minutes = String(prompt()).padStart(2, 0);
    setMinutes = Number(minutes);
    console.log(setMinutes);
    minutesDisplay.textContent = minutes;
    setButton.classList.add("hide");
    stopButton.classList.remove("hide");
  }

  function stop() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    setButton.classList.remove("hide");
    stopButton.classList.add("hide");
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

  function updateDisplay(newMinutes, newSeconds) {
    secondsDisplay.textContent = String(newSeconds).padStart(2, 0);
    minutesDisplay.textContent = String(newMinutes).padStart(2, 0);
  }

  return {
    play,
    pause,
    set,
    stop,
    addFiveMinutes,
    removeFiveMinutes,
  };
}
