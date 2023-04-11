export default function DarkMode({
  lightModeButton,
  darkModeButton,
  page,
  cards,
  cardsImg,
  volumeSlider,
  timerControls,
}) {
  let darkMode = false;
  function dark() {
    lightModeButton.classList.add("hide");
    darkModeButton.classList.remove("hide");
    timerControls.classList.add("darker");
    page.classList.add("dark-toggle");
    darkMode = true;
    cards.forEach((cards) => {
      cards.style.background = "#29292E";
    });
    cardsImg.forEach((cardsImg) => {
      cardsImg.style.filter =
        "invert(1) sepia(1) saturate(0) hue-rotate(180deg)";
    });
    volumeSlider.forEach((volumeSlider) => {
      volumeSlider.style.background = "white";
    });
  }
  function light() {
    lightModeButton.classList.remove("hide");
    darkModeButton.classList.add("hide");
    timerControls.classList.remove("darker");
    page.classList.remove("dark-toggle");
    darkMode = false;
    cards.forEach((cards) => {
      cards.style.background = "#e1e1e6";
    });
    cardsImg.forEach((cardsImg) => {
      cardsImg.style.filter = "invert(0) ";
    });
    volumeSlider.forEach((volumeSlider) => {
      volumeSlider.style.background = "black";
    });
  }

  function isDarkMode() {
    return darkMode;
  }
  return {
    light,
    dark,
    isDarkMode,
  };
}
