import { elements } from "./elements.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import DarkMode from "./darkmode.js";
import SoundControl from "./soundControls.js";

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
  page,
  cards,
  cardsImg,
  volumeSlider,
  timerControls,
} = elements;

const darkmode = DarkMode({
  lightModeButton,
  darkModeButton,
  page,
  cards,
  cardsImg,
  volumeSlider,
  timerControls,
});

const soundControl = SoundControl({
  forestCard,
  rainCard,
  coffeeshopCard,
  fireplaceCard,
  forestImg,
  rainImg,
  storeImg,
  fireplaceImg,
});

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

forestCard.addEventListener("click", soundControl.forestSoundControl);
rainCard.addEventListener("click", soundControl.rainSoundControl);
coffeeshopCard.addEventListener("click", soundControl.storeSoundControl);
fireplaceCard.addEventListener("click", soundControl.fireplaceSoundControl);

lightModeButton.addEventListener("click", function () {
  darkmode.dark();
});
darkModeButton.addEventListener("click", function () {
  darkmode.light();
});
