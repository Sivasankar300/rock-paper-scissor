
function getComputerChoice() {
    // Generate a random number from one to three
    let computerChoice = Math.floor(Math.random() * 3 +1);

    //console.log(computerChoice);
    return computerChoice;   
}


function getPlayerChoice() {
    let playerChoice = prompt("Enter either Rock, Papers or Scissors ");

    //Change it to lower case
    playerChoice = playerChoice.toLowerCase(playerChoice);
    //console.log(playerChoice);

    switch(playerChoice) {
         case "rock":
             return 1;
         case "papers":
             return 2;
         case "scissors":
             return 3;
            }
            
return playerChoice;  
}


function playRound(playerSelection,computerSelection) {
    getComputerChoice();
    getPlayerChoice();

    
    
    // Compare the strings from player and computer
    // Take the first input and assign them to a switch case to make the choice easier
    switch(playerSelection){
        case 1:
            if (computerSelection === 1)
            { return "Draw"; }
            else if(computerSelection === 2)
            { return "You Lose"; }
            else 
            { return "You Win"; } 
        case 2:
            if(computerSelection === 2)
            { return "Draw"; }
            else if(computerSelection === 1)
            { return "You win"; }
            else
            { return "You lose"; }
        case 3:
            if(computerSelection === 3)
            { return "Draw"; }
            else if(computerSelection === 2)
            { return "You win"; }
            else
            { return "You lose"; }


               
    }
}

function playGame() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    

    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (rounds;rounds<=5;rounds++)
    {   

    
        playRound(playerSelection,computerSelection);
        
        
        if(playRound()==="You Lose") {
            computerScore++;
        }
        else
        {
            playerScore++;
        }

        
    }
    console.log(playerScore);
    console.log(computerScore);
}
    playGame();
    
    






