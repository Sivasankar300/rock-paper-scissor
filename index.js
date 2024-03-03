function getComputerChoice() {
  // Generate a random number from one to three
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  return computerChoice;
}

function getPlayerChoice() {
  
  

  
}

function playRound(playerSelection, computerSelection) {
  // Compare the strings from player and computer
  // Take the first input and assign them to a switch case to make the choice easier

  switch (playerSelection) {
    case 1:
      if (computerSelection === 1) {
        draw++;
        return "Draw";
      } else if (computerSelection === 2) {
        computerScore++;
        return "You Lose";
      } else {
        playerScore++;
        return "You Win";
      }
    case 2:
      if (computerSelection === 2) {
        draw++;
        return "Draw";
      } else if (computerSelection === 1) {
        playerScore++;
        return "You win";
      } else {
        computerScore++;
        return "You lose";
      }
    case 3:
      if (computerSelection === 3) {
        draw++;
        return "Draw";
      } else if (computerSelection === 2) {
        playerScore++;
        return "You win";
      } else {
        computerScore++;
        return "You lose";
      }
  }
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;

function playGame() {
  let rounds = 5;
  for (i = 0; i < rounds; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
  console.log("Player Score is:", playerScore);
  console.log("Computer Score is", computerScore);
  console.log("Draw Score is", draw);
}

playGame();