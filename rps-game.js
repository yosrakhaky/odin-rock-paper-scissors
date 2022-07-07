function computerPlay () {
    const max = 3, min = 1;
    RandomSelection = Math.floor(Math.random() * (max - min + 1) + min)
    if (RandomSelection == 1) {
        computerSelection = "rock";
    } else if (RandomSelection == 2) {
        computerSelection = "paper";
    }else if (RandomSelection == 3) {
        computerSelection = "scissors"}

    return computerSelection
}

var computerScore = 0
var playerScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        alert("Draw, play again!");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore = computerScore + 1
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1
        alert("You win! Rock beats Scissors!")
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerScore = playerScore + 1
        alert("You won! Paper beats Rock!")
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore = computerScore + 1
        alert("You Lose! Scissors beat Paper")
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore = computerScore + 1
        alert("You Lose! Rock beats Scissors")
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerScore = playerScore + 1
        alert("You Win! Scissors beat Paper")
    }
}

function game() {
    computerPlay();
    playerSelection = prompt("rock, paper, or scissors?")
    playRound(playerSelection, computerSelection);
}

for (let i=0; i < 5; i++) {
    game();
    console.log("Your score is " + playerScore + " and the computer's score is " + computerScore)
}