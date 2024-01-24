let dynamicText = document.querySelector(".dynamic_text");
let btns = document.querySelectorAll(".btn");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let gameSequence = [];
let userSequence = [];
let gameLevel = 0;
let started = false;
let highestScore = 0;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (started == false) {
      started = true;
      setTimeout(startGame, 150);
    }
  }
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function startGame() {
  userSequence = [];
  gameLevel++;
  dynamicText.innerHTML = `Your highest score : ${highestScore} <br> LEVEL-${gameLevel}`;
  gameButtonFlash();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function gameButtonFlash() {
  let randomNumber = Math.floor(Math.random() * btns.length);
  btns[randomNumber].classList.add("gameFlash");

  let gameNumberChoices = btns[randomNumber].textContent;
  gameSequence.push(gameNumberChoices);
  //   console.log("Game sequence : ", gameSequence);

  setTimeout(() => {
    btns[randomNumber].classList.remove("gameFlash");
  }, 300);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function userButtonFlash(btn) {
  btn.classList.add("userFlash");

  let userNumberChoices = btn.textContent;
  userSequence.push(userNumberChoices);
  //   console.log("User Sequence : ", userSequence);

  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 300);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function userButtonPress() {
  let userSelectedButton = this;
  //   console.log(userSelectedButton);
  userButtonFlash(userSelectedButton);

  //It will keep the track!!!
  sequenceChecker(userSequence.length - 1);
}

btns.forEach((btn) => {
  btn.addEventListener("click", userButtonPress);
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function sequenceChecker(index) {
  if (userSequence[index] == gameSequence[index]) {
    if (userSequence.length == gameSequence.length) {
      highestScore = Math.max(highestScore, gameLevel);
      setTimeout(startGame, 2000);
    }
  } else {
    // console.log("diferent value");
    dynamicText.innerHTML = `Your previous highest score : ${highestScore} <br> Game Over! Press Enter to restart. <br> you made it till LEVEL : ${
      gameLevel - 1
    }`;
    started = false;
    gameLevel = 0;
    gameSequence = [];
    userSequence = [];
  }
}
