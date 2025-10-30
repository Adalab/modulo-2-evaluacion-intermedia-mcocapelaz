const playBtn = document.querySelector(".btn-play_js");
const startBtn = document.querySelector(".btnStart_js");
const playerScoreItem = document.querySelector(".playerScore_js");
const computerScoreItem = document.querySelector(".computerScore_js");

let plays = 0;
let playerScore = 0;
let computerScore = 0;

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

function updateScores() {
  playerScoreItem.textContent = playerScore;
  computerScoreItem.textContent = computerScore;
}

function revealWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    startBtn.textContent = "Empate";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    startBtn.textContent = "¡Has ganado!";
    playerScore++;
  } else {
    startBtn.textContent = "¡Has perdido!";
    computerScore++;
  }
  updateScores();
}

function resetGame() {
  plays = 0;
  playerScore = 0;
  computerScore = 0;
  updateScores();
  startBtn.textContent = "Vamos a Jugar!";
}

playBtn.addEventListener("click", (ev) => {
  const playerChoice = document.querySelector(".select-choice_js").value;

  if (!playerChoice || playerChoice === "") {
    alert("¡Selecciona tu jugada!");
    return;
  }

  const computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice);
  revealWinner(playerChoice, computerChoice);

  plays++;

  if (plays === 10) {
    alert(`¡Juego terminado! 
Jugador: ${playerScore} - Computadora: ${computerScore}`);
    resetGame();
  }
});
