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
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();


  switch (playerSelection) {
    case 1:
      if (computerSelection === 1) {
        return "Draw";
      } else if (computerSelection === 2) {
        return "You Lose";
      } else {
        return "You Win";
      }
    case 2:
      if (computerSelection === 2) {
        return "Draw";
      } else if (computerSelection === 1) {
        return "You win";
      } else {
        return "You lose";
      }
    case 3:
      if (computerSelection === 3) {
        return "Draw";
      } else if (computerSelection === 2) {
        return "You win";
      } else {
        return "You lose";
      }
  }

}

function playGame() { 

  let playerSelection = getPlayerChoice;
  let computerSelection = getComputerChoice;

  let rounds = 0;
  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;

  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));
  if(playRound() === "You win") {
    playerScore++;
  } else if(playRound() === "You lose") {
    computerScore++;
  } else {
    draw++
  }


  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));
  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));
  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));
  playRound(playerSelection,computerSelection);
  console.log(playRound(playerSelection,computerSelection));


}
playGame();
