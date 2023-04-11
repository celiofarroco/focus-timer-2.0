import Sound from "./sounds.js";

export default function SoundControl({
  forestCard,
  rainCard,
  coffeeshopCard,
  fireplaceCard,
  forestImg,
  rainImg,
  storeImg,
  fireplaceImg,
}) {
  let isPlaying = null;
  const sound = Sound();

  function soundControl(soundObject, cardElement, imgElement) {
    if (isPlaying === soundObject) {
      soundObject.pause();
      isPlaying = null;
      resetCardStyle(cardElement, imgElement);
    } else {
      if (isPlaying) {
        isPlaying.pause();
        resetCardStyle(getCardElement(isPlaying), getImgElement(isPlaying));
        isPlaying = null;
      }
      soundObject.play();
      imgElement.style.filter =
        "invert(1) sepia(1) saturate(0) hue-rotate(180deg)";
      isPlaying = soundObject;
      cardElement.style.background = "#02799d";
    }
  }

  // Função para redefinir o estilo do card
  function resetCardStyle(cardElement, imgElement) {
    cardElement.style.background = "#e1e1e6";
    imgElement.style.filter = "invert(0)";
  }

  // Função para obter o elemento do card a partir do objeto de som
  function getCardElement(soundObject) {
    switch (soundObject) {
      case sound.forestSound:
        return forestCard;
      case sound.rainSound:
        return rainCard;
      case sound.coffeeshopSound:
        return coffeeshopCard;
      case sound.fireplaceSound:
        return fireplaceCard;
      default:
        return null;
    }
  }

  // Função para obter o elemento de imagem do card a partir do objeto de som
  function getImgElement(soundObject) {
    switch (soundObject) {
      case sound.forestSound:
        return forestImg;
      case sound.rainSound:
        return rainImg;
      case sound.coffeeshopSound:
        return storeImg;
      case sound.fireplaceSound:
        return fireplaceImg;
      default:
        return null;
    }
  }

  function forestSoundControl() {
    soundControl(sound.forestSound, forestCard, forestImg);
    const volumeSlider = forestCard.querySelector(".volume-slider");
    volumeSlider.addEventListener("input", (event) => {
      const volume = event.target.value / 100;
      sound.forestSound.volume = volume;
    });

    volumeSlider.addEventListener("click", (event) => {
      if (isPlaying === sound.forestSound) {
        sound.forestSound.pause();
        resetCardStyle(forestCard, forestImg);
        isPlaying = null;
      }
    });
  }

  function rainSoundControl() {
    soundControl(sound.rainSound, rainCard, rainImg);
    const volumeSlider = rainCard.querySelector(".volume-slider");
    volumeSlider.addEventListener("input", (event) => {
      const volume = event.target.value / 100; // Converte o valor para uma escala de 0 a 1
      sound.rainSound.volume = volume; // Ajusta o volume do som de acordo com o valor da barra de volume
    });
    volumeSlider.addEventListener("click", (event) => {
      if (isPlaying === sound.rainSound) {
        sound.rainSound.pause();
        resetCardStyle(rainCard, rainImg);
        isPlaying = null;
      }
    });
  }

  function storeSoundControl() {
    soundControl(sound.coffeeshopSound, coffeeshopCard, storeImg);
    const volumeSlider = coffeeshopCard.querySelector(".volume-slider");
    volumeSlider.addEventListener("input", (event) => {
      const volume = event.target.value / 100; // Converte o valor para uma escala de 0 a 1
      sound.coffeeshopSound.volume = volume; // Ajusta o volume do som de acordo com o valor da barra de volume
    });
    volumeSlider.addEventListener("click", (event) => {
      if (isPlaying === sound.coffeeshopSound) {
        sound.coffeeshopSound.pause();
        resetCardStyle(coffeeshopCard, storeImg);
        isPlaying = null;
      }
    });
  }

  function fireplaceSoundControl() {
    soundControl(sound.fireplaceSound, fireplaceCard, fireplaceImg);
    const volumeSlider = fireplaceCard.querySelector(".volume-slider");
    volumeSlider.addEventListener("input", (event) => {
      const volume = event.target.value / 100; // Converte o valor para uma escala de 0 a 1
      sound.fireplaceSound.volume = volume; // Ajusta o volume do som de acordo com o valor da barra de volume
    });
    volumeSlider.addEventListener("click", (event) => {
      if (isPlaying === sound.fireplaceSound) {
        sound.fireplaceSound.pause();
        resetCardStyle(fireplaceCard, fireplaceImg);
        isPlaying = null;
      }
    });
  }
  return {
    forestSoundControl,
    rainSoundControl,
    storeSoundControl,
    fireplaceSoundControl,
  };
}
