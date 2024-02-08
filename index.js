let dynamicText = document.querySelector(".dynamic_text");
let btns = document.querySelectorAll(".btn");
let startGameBtn = document.querySelector(".start_game_btn");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let gameSequence = [];
let userSequence = [];
let gameLevel = 0;
let started = false;
let highestScore = 0;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
startGameBtn.addEventListener("click", () => {
  if (started == false) {
    started = true;
    setTimeout(startGame, 200);
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
  // console.log("Game sequence : ", gameSequence);

  setTimeout(() => {
    btns[randomNumber].classList.remove("gameFlash");
  }, 300);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function userButtonFlash(btn) {
  btn.classList.add("userFlash");

  let userNumberChoices = btn.textContent;
  userSequence.push(userNumberChoices);
  // console.log("User Sequence : ", userSequence);

  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 300);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function userButtonPress() {
  let userSelectedButton = this;
  // console.log(userSelectedButton);
  if (started == true) {
    userButtonFlash(userSelectedButton);
  } else {
    dynamicText.innerHTML = "First Click Start Game button to start the game!";
    return;
  }

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
    dynamicText.innerHTML = `Your previous highest score : ${highestScore} <br> Game Over! Click the Start Game button to restart. <br> you made it till LEVEL : ${
      gameLevel - 1
    }`;
    started = false;
    gameLevel = 0;
    gameSequence = [];
    userSequence = [];
  }
}
