const crashRide = document.querySelector("#crash-ride");
const hiHatTop = document.querySelector("#hihat-top");
const drumKeys = document.querySelectorAll(".key");

const animateCrashOrRide = () => {
  crashRide.style.transform = "rotate(0deg) scale(1.5)";
};

const animateHiHatClosed = () => {
  hiHatTop.style.top = "171px";
};

const removeCrashRideTansition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.style.transform = "rotate(-7.2deg) scale(1.5)";
};

const removeHiHatTopTransition = (e) => {
  if (e.propertyName !== "top") return;
  e.target.style.top = "166px";
};

const removeKeyTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

drumKeys.forEach((key) => {
  key.addEventListener("transitionend", removeKeyTransition);
});

window.addEventListener("keydown", (event) => {
  let code = event.key;
  let keyLetter = document.querySelector(`div[data-key="${code}"]`);
  if (!keyLetter) return;
  let audio = document.querySelector(`audio[data-key='${code}']`);
  audio.currentTime = 0;
  audio.play();

  switch (code) {
    case "e":
    case "r":
      animateCrashOrRide();
      break;
    case "k":
    case "i":
      animateHiHatClosed();
      break;
  }
  keyLetter.classList.add("playing");
});

crashRide.addEventListener("transitionend", removeCrashRideTansition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);
