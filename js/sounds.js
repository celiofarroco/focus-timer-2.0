export default function () {
  const forestSound = new Audio("../assets/sounds/forest.wav");
  const fireplaceSound = new Audio("../assets/sounds/fireplace.wav");
  const rainSound = new Audio("../assets/sounds/rain.wav");
  const coffeeshopSound = new Audio("../assets/sounds/coffeeshop.wav");

  forestSound.loop = true;
  fireplaceSound.loop = true;
  rainSound.loop = true;
  coffeeshopSound.loop = true;

  forestSound.volume = 0.5;
  fireplaceSound.volume = 0.5;
  rainSound.volume = 0.5;
  coffeeshopSound.volume = 0.5;

  return {
    forestSound,
    fireplaceSound,
    rainSound,
    coffeeshopSound,
  };
}
