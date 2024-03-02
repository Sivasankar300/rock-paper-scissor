function getComputerChoice() {
  // Generate a random number from one to three
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  

  //console.log(computerChoice);
  return computerChoice;
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let results = document.querySelector('#results');
let body =document.querySelector('body');
let playerSelection;
let computerSelection = getComputerChoice();


rock.addEventListener("click", () => {
  const playerSelection = 1;
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
  results.textContent = playRound();
  results.textContent = playGame();
  body.appendChild(results);
  
});

paper.addEventListener("click", () => {
  const playerSelection = 2;
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
  
});

scissors.addEventListener("click", () => {
  const playerSelection = 3;
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
  
});

function playRound(playerSelection, computerSelection) {
  getComputerChoice();

  // Compare the strings from player and computer
  // Take the first input and assign them to a switch case to make the choice easier
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
  
  //const computerSelection = getComputerChoice();

  let playerScore = 0;
  let computerScore = 0;
  let draw= 0;

  while(playerScore && computerScore < 5) {
    playRound(playerSelection, computerSelection);

    if (playRound() === "You lose") {
      computerScore++;
    } else if(playRound()==="You win") {
      playerScore++;
    }
    else{
        draw++;
    }
  }

  
} 
