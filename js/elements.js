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

//Light and Dark Mode
const lightModeButton = document.querySelector(".light-mode");
const darkModeButton = document.querySelector(".dark-mode");

const page = document.querySelector(".page");
const cards = document.querySelectorAll(".card");
const cardsImg = document.querySelectorAll(".card-img");
const volumeSlider = document.querySelectorAll(".volume-slider");
const timerControls = document.querySelector(".timer-controls");

export const elements = {
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
};
