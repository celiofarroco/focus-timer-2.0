export default function DarkMode({
  lightModeButton,
  darkModeButton,
  page,
  cards,
  timerControls,
}) {
  function dark() {
    lightModeButton.classList.add("hide");
    darkModeButton.classList.remove("hide");
    timerControls.classList.add("darker");
    page.classList.add("dark-toggle");
    cards.forEach((cards) => {
      cards.classList.add("dark-toggle");
    });
  }
  function light() {
    lightModeButton.classList.remove("hide");
    darkModeButton.classList.add("hide");
    timerControls.classList.remove("darker");
    page.classList.remove("dark-toggle");
    cards.forEach((cards) => {
      cards.classList.remove("dark-toggle");
    });
  }
  return {
    light,
    dark,
  };
}
