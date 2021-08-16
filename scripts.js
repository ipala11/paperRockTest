
const moves = ["rock", "paper", "scissors"];

console.log(game());

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function computerPlay () {
    let num = getRandomInt(0,2);
    return moves[num];
}

function playerPlay() {
    let input = prompt("Your move?", "Rock").toLowerCase();

    if (moves.includes(input)) { //Keep asking until valid input
        return input;
    } else {
        return playerPlay();
    } 


}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("Draw with " + computerSelection)
        return;

    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            console.log("Computer wins with " + computerSelection + " against " + playerSelection);
            return "Computer";
        } else {
            console.log("Player wins with " + playerSelection + " against " + computerSelection);
            return "Player";
        }

    } else if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            console.log("Computer wins with " + computerSelection + " against " + playerSelection);
            return "Computer";
        } else {
            console.log("Player wins with " + playerSelection + " against " + computerSelection);
            return "Player";
        }

    } else if (playerSelection === "scissors") {
        if (computerSelection == "rock") {
            console.log("Computer wins with " + computerSelection + " against " + playerSelection);
            return "Computer";
        } else {
            console.log("Player wins with " + playerSelection + " against " + computerSelection);
            return "Player";
        }
    }
}

function game () {
    let compScore = 0;
    let playScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();

        let winner = playRound(playerSelection, computerSelection);

        if (winner == "Computer") {
            compScore++;
        } else if (winner == "Player") {
            playScore++;
        }
    }
    return ("Computer won " + compScore + " times, and player won " + playScore + " times");

}