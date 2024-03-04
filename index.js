function getComputerChoice() {
  // Generate a random number from one to three
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  return computerChoice;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let result = document.querySelector("#results");
const body = document.querySelector("body");
const reset = document.querySelector('#reset');

rock.addEventListener("click", () => {
  playRound(1, getComputerChoice());
  let scores = `Player's score: ${playerScore} Computer's score ${computerScore} Draws: ${draw}`;
  result.textContent = scores;
  if(playerScore === 5){
    result.textContent = "The winner is the Player!"
  } else if(computerScore === 5){
    result.textContent = "The winner is the Computer!"
  }
});

paper.addEventListener("click", () => {
  playRound(2, getComputerChoice());
  
  let scores = `Player's score: ${playerScore} Computer's score ${computerScore} Draws: ${draw}`;
  result.textContent = scores;
  if(playerScore === 5){
    result.textContent = "The winner is the Player!"
  } else if(computerScore === 5){
    result.textContent = "The winner is the Computer!"

   }
});
scissors.addEventListener("click", () => {
  playRound(3, getComputerChoice());
  let scores = `Player's score: ${playerScore} Computer's score ${computerScore} Draws: ${draw}`;
  result.textContent = scores;
  if(playerScore === 5){
    result.textContent = "The winner is the Player!"
  } else if(computerScore === 5){
    result.textContent = "The winner is the Computer!"
  

  result.textContent = scores; }
});

reset.addEventListener('click',() => {
  playerScore = 0;
  computerScore = 0;
  draw = 0;
})

function playRound(playerSelection, computerSelection) {
  // Compare the strings from player and computer
  // Take the first input and assign them to a switch case to make the choice easier

  switch (playerSelection) {
    case 1:
      if (computerSelection === 1) {
        draw++;
        round++;
        return "Draw";
      } else if (computerSelection === 2) {
        computerScore++;
        round++;

        return "You Lose";
      } else {
        playerScore++;
        round++;
        return "You Win";
      }
    case 2:
      if (computerSelection === 2) {
        draw++;
        round++;
        return "Draw";
        
      } else if (computerSelection === 1) {
        playerScore++;
        round++;
        return "You win";
      } else {
        computerScore++;
        round++;
        return "You lose";
      }
    case 3:
      if (computerSelection === 3) {
        draw++;
        round++;
        return "Draw";
      } else if (computerSelection === 2) {
        playerScore++;
        round++;
        return "You win";
      } else {
        computerScore++;
        round++;
        return "You lose";
      }
  }
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;
