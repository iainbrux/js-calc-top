function computerPlay() {

    let randomNumber = (Math.floor(Math.random() * 3));

    if (randomNumber === 0) {
        console.log('Computer has chosen rock!');
        return "rock";
    } else if (randomNumber === 1) {
        console.log('Computer has chosen paper!');
        return "paper";
    } else if (randomNumber === 2) {
        console.log('Computer has chosen scissors!');
        return "scissors";
    }
}

let computerSelection = computerPlay();

// let userInput = prompt('Please enter your pick of poison.');

function playerSelection(userInput) {
    return userInput.toLowerCase();
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        return "It's a tie.";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Computer wins!";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "Player wins!";
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return "It's a tie.";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Computer wins!";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "Player wins!";
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        return "It's a tie.";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Computer wins!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "Player wins!";
    }
}

function playGame() {
    alert(playRound(computerSelection, playerSelection(userInput)));
}