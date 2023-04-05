import Sound from "./sounds.js";

//Player Buttons
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const setButton = document.querySelector(".set-button");
const stopButton = document.querySelector(".stop-button");
const addButton = document.querySelector(".add-button");
const removeButton = document.querySelector(".remove-button");

//Displays da tela
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

//Variáveis de controle
let setMinutes;
let timerTimeout;

//Cards de Temas
const forestCard = document.querySelector(".forest-card");
const rainCard = document.querySelector(".rain-card");
const coffeeshopCard = document.querySelector(".store-card");
const fireplaceCard = document.querySelector(".fire-card");

//Imagens dos temas
const forestImg = document.querySelector(".forest-img");
const rainImg = document.querySelector(".rain-img");
const storeImg = document.querySelector(".store-img");
const fireplaceImg = document.querySelector(".fireplace-img");

const sound = Sound();

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

//SOUNDS CONTROLS
let isPlaying = false;
function forestSoundControl() {
  if (isPlaying) {
    sound.forestSound.pause();
    isPlaying = false;
    forestCard.style.background = "#e1e1e6";
    forestImg.style.filter = "invert(0)";
    return;
  }

  sound.forestSound.play();
  forestImg.style.filter = "invert(1) sepia(1) saturate(0) hue-rotate(180deg)";
  isPlaying = true;

  forestCard.style.background = "#02799d";
}

function rainSoundControl() {
  if (isPlaying) {
    sound.rainSound.pause();
    isPlaying = false;
    rainCard.style.background = "#e1e1e6";
    rainImg.style.filter = "invert(0)";
    return;
  }

  sound.rainSound.play();
  rainImg.style.filter = "invert(1) sepia(1) saturate(0) hue-rotate(180deg)";
  isPlaying = true;

  rainCard.style.background = "#02799d";
}

function storeSoundControl() {
  if (isPlaying) {
    sound.coffeeshopSound.pause();
    isPlaying = false;
    coffeeshopCard.style.background = "#e1e1e6";
    storeImg.style.filter = "invert(0)";
    return;
  }

  sound.coffeeshopSound.play();
  storeImg.style.filter = "invert(1) sepia(1) saturate(0) hue-rotate(180deg)";
  isPlaying = true;

  coffeeshopCard.style.background = "#02799d";
}

function fireplaceSoundControl() {
  if (isPlaying) {
    sound.fireplaceSound.pause();
    isPlaying = false;
    fireplaceCard.style.background = "#e1e1e6";
    fireplaceImg.style.filter = "invert(0)";
    return;
  }

  sound.fireplaceSound.play();
  fireplaceImg.style.filter =
    "invert(1) sepia(1) saturate(0) hue-rotate(180deg)";
  isPlaying = true;

  fireplaceCard.style.background = "#02799d";
}

forestCard.addEventListener("click", forestSoundControl);
rainCard.addEventListener("click", rainSoundControl);
coffeeshopCard.addEventListener("click", storeSoundControl);
fireplaceCard.addEventListener("click", fireplaceSoundControl);
