
const moves = ["r", "p", "s"];
let compScore = 0;
let userScore = 0;

//Scores
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
//Score board
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
//Choices
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Choice clicks
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function computerPlay () {
    let num = getRandomInt(0,2);
    return moves[num];
}

function playerPlayPrompt() {
    let input = prompt("Your move?", "Rock").toLowerCase();

    if (moves.includes(input)) { //Keep asking until valid input
        return input;
    } else {
        return playerPlay();
    } 


}

function playRound (playerSelection, computerSelection) {

    switch (playerSelection + computerSelection) {
        case "rs":
        case "pr":
        case "sp":
            //Player wins
            userScore++;
            userScore_span.innerHTML = userScore;
            return "Player";
        case "rp":
        case "ps":
        case "sr":
            //Computer wins
            compScore++;
            compScore_span.innerHTML = compScore;
            return "Computer";
        default:
            return "Draw";
    }
}

function convertToWord (letter) {
    switch (letter) {
        case "r":
            return "rock";
        case "p":
            return "paper";
        case "s":
            return "scissors";
    }
}



function game (userChoice) {
    let computerSelection = computerPlay();
    let playerSelection = userChoice;

    let winner = playRound(playerSelection, computerSelection);

    if (winner == "Player") {
        //Wording above choices
        result_div.innerHTML = winner + " wins with " + convertToWord(playerSelection) + 
        " against " + convertToWord(computerSelection) + "."; 
        document.getElementById(userChoice).classList.add("green-glow");
        //Glow
        setTimeout(function () {document.getElementById(userChoice).classList.remove("green-glow")}, 400);
    } else if (winner == "Computer") {
        result_div.innerHTML = winner + " wins with " + convertToWord(computerSelection) + 
        " against " + convertToWord(playerSelection) + ".";
        document.getElementById(userChoice).classList.add("red-glow");
        setTimeout(function () {document.getElementById(userChoice).classList.remove("red-glow")}, 400);
    } else {
        result_div.innerHTML = "Draw with " + convertToWord(playerSelection) + ".";
        document.getElementById(userChoice).classList.add("gray-glow");
        setTimeout(function () {document.getElementById(userChoice).classList.remove("gray-glow")}, 400);
    }
}