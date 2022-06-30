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
