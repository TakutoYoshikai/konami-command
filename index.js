
function setKonamiCommand(callback) {
  const konamiCommand = [
    38,
    38,
    40,
    40,
    37,
    39,
    37,
    39,
    66,
    65,
  ];
  let currentIndex = 0;
  document.addEventListener("keydown", (event) => {
    if (!event) {
      return;
    }
    if (event.keyCode === konamiCommand[currentIndex]) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    if (currentIndex === konamiCommand.length) {
      callback();
      currentIndex = 0;
    }
  });
}
