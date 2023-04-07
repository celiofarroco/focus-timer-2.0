import Sound from "./sounds.js";
import { elements } from "./elements.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
let setMinutes;

const {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  addButton,
  removeButton,
  minutesDisplay,
  secondsDisplay,
  forestCard,
  rainCard,
  coffeeshopCard,
  fireplaceCard,
  forestImg,
  rainImg,
  storeImg,
  fireplaceImg,
  lightModeButton,
  darkModeButton,
} = elements;

const controls = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  minutesDisplay,
  secondsDisplay,
  setMinutes,
});

const timer = Timer({
  stopControls: controls.stop,
  minutesDisplay,
  secondsDisplay,
  setMinutes,
});

const sound = Sound();

playButton.addEventListener("click", () => {
  controls.play();
  timer.countdown();
});
pauseButton.addEventListener("click", () => {
  controls.pause();
  timer.pause();
});
setButton.addEventListener("click", () => {
  controls.set();
});
stopButton.addEventListener("click", () => {
  controls.stop();
  timer.reset();
});
addButton.addEventListener("click", () => {
  controls.addFiveMinutes();
});
removeButton.addEventListener("click", () => {
  controls.removeFiveMinutes();
});

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
