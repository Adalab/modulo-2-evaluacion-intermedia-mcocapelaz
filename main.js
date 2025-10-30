//QUERY SELECTOR

const playBtn = document.querySelector(".btn-play_js");

// VARIABLES

function getRandomNumber(max) {
  return 1 + parseInt(Math.random() * max);
}

function getComputerChoice() {
  const randomNum = getRandomNumber(3);

  let result;

  if (randomNum === 1) {
    result = "rock";
  } else if (randomNum === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

function revealWinner(player, computer) {
  const startBtn = document.querySelector(".btnStart_js");

  if (player === computer) {
    startBtn.textContent = "Empate";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    startBtn.textContent = "¡Has ganado!";
  } else {
    startBtn.textContent = "¡Has perdido!";
  }
}

playBtn.addEventListener("click", (ev) => {});
