export default function () {
  const forestSound = new Audio("../assets/sounds/forest.wav");
  const fireplaceSound = new Audio("../assets/sounds/fireplace.wav");
  const rainSound = new Audio("../assets/sounds/rain.wav");
  const coffeeshopSound = new Audio("../assets/sounds/coffeeshop.wav");

  forestSound.loop = true;
  fireplaceSound.loop = true;
  rainSound.loop = true;
  coffeeshopSound.loop = true;

  return {
    forestSound,
    fireplaceSound,
    rainSound,
    coffeeshopSound,
  };
}
