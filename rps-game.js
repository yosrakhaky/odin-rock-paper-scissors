function computerPlay () {
    const max = 3, min = 1;
    RandomSelection = Math.floor(Math.random() * (max - min + 1) + min)
    if (RandomSelection == 1) {
        computerSelection = "Rock";
    } else if (RandomSelection == 2) {
        computerSelection = "Paper";
    }else if (RandomSelection == 3) {
        computerSelection = "Scissors"}

    return computerSelection
}