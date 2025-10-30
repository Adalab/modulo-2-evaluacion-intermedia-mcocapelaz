const playBtn = document.querySelector(".btn-play_js");
const startBtn = document.querySelector(".btnStart_js");

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

function revealWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    startBtn.textContent = "Empate";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    startBtn.textContent = "¡Has ganado!";
  } else {
    startBtn.textContent = "¡Has perdido!";
  }
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
});
