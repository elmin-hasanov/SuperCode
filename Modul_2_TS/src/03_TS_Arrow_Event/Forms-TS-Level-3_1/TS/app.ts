
// RED BALL
const redSwitch = document.querySelector("#SB1");
const bodyElement = document.querySelector("body");

redSwitch?.addEventListener("click", redmode);

function redmode() {
  if (bodyElement) {
    bodyElement.classList.remove("green", "yellow", "black");
    bodyElement.classList.toggle("red");
  }
}

//GREEN BALL
const greenSwitch = document.querySelector("#SB2");
greenSwitch?.addEventListener("click", grenmode);

function grenmode() {
  if (bodyElement) {
    bodyElement.classList.remove("red", "yellow", "black");
    bodyElement.classList.toggle("green");
  }
}

//YELLOW BALL
const yellowSwitch = document.querySelector("#SB3");
yellowSwitch?.addEventListener("click", yellow);

function yellow() {
  if (bodyElement) {
    bodyElement.classList.remove("red", "green", "black");
    bodyElement.classList.toggle("yellow");
  }
}

//BACK BALL
const blackSwitch = document.querySelector("#SB4");
blackSwitch?.addEventListener("click", black);

function black() {
  if (bodyElement) {
    bodyElement.classList.remove("red", "green", "yellow");
    bodyElement.classList.toggle("black");
  }
}
