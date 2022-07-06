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

playerSelection = prompt("rock, paper, or scissors?")

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        alert("Draw, play again!");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        alert("You win! Rock beats Scissors!")
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        alert("You won! Paper beats Rock!")
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        alert("You Lose! Scissors beat Paper")
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        alert("You Lose! Rock beats Scissors")
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        alert("You Win! Scissors beat Paper")
    }
}

