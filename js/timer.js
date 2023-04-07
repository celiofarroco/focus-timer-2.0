export default function Timer({
  stopControls,
  minutesDisplay,
  secondsDisplay,
}) {
  let setMinutes = Number(minutesDisplay.textContent);
  let timerTimeout;

  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if (minutes <= 0 && seconds <= 0) {
        stopControls();
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

  return {
    countdown,
    updateDisplay,
    reset,
    pause,
  };
}
