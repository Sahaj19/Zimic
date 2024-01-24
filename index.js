let dynamicText = document.querySelector(".dynamic_text");
let btns = document.querySelectorAll(".btn");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let gameSequence = [];
let userSequence = [];
let gameLevel = 0;
let started = false;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (started == false) {
      startGame();
      started = true;
    } else {
      console.log("Game start hogayi hai gendu!");
    }
  }
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function startGame() {
  gameLevel++;
  dynamicText.innerHTML = `LEVEL-${gameLevel}`;
  buttonFlash();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function buttonFlash() {
  let randomNumber = Math.floor(Math.random() * btns.length);
  btns[randomNumber].classList.add("flash");
  setTimeout(() => {
    btns[randomNumber].classList.remove("flash");
  }, 300);
}
