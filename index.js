function getComputerChoice() {
  // Generate a random number from one to three
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Enter either Rock, Papers or Scissors ");

  //Change it to lower case
  playerChoice = playerChoice.toLowerCase(playerChoice);

  switch (playerChoice) {
    case "rock":
      return 1;

    case "papers":
      return 2;

    case "scissors":
      return 3;
  }

  return playerChoice;
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
