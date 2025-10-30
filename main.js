//QUERY SELECTOR

const playBtn = document.querySelector(".btn-play_js");
const startBtn = document.querySelector(".btnStart_js");

// VARIABLES

function getRandomNumber(max) {
  return 1 + parseInt(Math.random() * max);
}

playBtn.addEventListener("click", (ev) => {
  const randomNum = getRandomNumber(3);
  console.log(randomNum);

  let result;

  if (randomNum === 1) {
    result = "rock";
  } else if (randomNum === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }

  console.log(result);
});

// EVENTOS

// FUNCIONES
