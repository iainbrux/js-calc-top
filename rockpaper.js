let rockButton = document.querySelector('.btn1');
let paperButton = document.querySelector('.btn2');
let scissorsButton = document.querySelector('.btn3');
let userInput = "";
let result = "";

function playGame() {


    let computerSelection = computerPlay(result);

    function computerPlay(result) {

        let randomNumber = (Math.floor(Math.random() * 3));

        if (randomNumber === 0) {
            console.log('Computer has chosen rock!');
            return result = "rock";
        } else if (randomNumber === 1) {
            console.log('Computer has chosen paper!');
            return result = "paper";
        } else if (randomNumber === 2) {
            console.log('Computer has chosen scissors!');
            return result = "scissors";
        }
    }

    function playerSelection(userInput) {
        return userInput.toLowerCase();
    }


    function playRound(computerSelection, playerSelection) {
        if (computerSelection == "rock" && playerSelection == "rock") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. It's a tie.`;
        } else if (computerSelection == "paper" && playerSelection == "rock") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Computer wins!`;
        } else if (computerSelection == "scissors" && playerSelection == "rock") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Player wins!`;
        } else if (computerSelection == "scissors" && playerSelection == "scissors") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. It's a tie.`;
        } else if (computerSelection == "rock" && playerSelection == "scissors") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Computer wins!`;
        } else if (computerSelection == "paper" && playerSelection == "scissors") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Player wins!`;
        } else if (computerSelection == "paper" && playerSelection == "paper") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. It's a tie.`;
        } else if (computerSelection == "scissors" && playerSelection == "paper") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Computer wins!`;
        } else if (computerSelection == "rock" && playerSelection == "paper") {
            return `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Player wins!`;
        }
    }

    return alert(playRound(computerSelection, playerSelection(userInput)));
}



rockButton.onclick = () => {
    userInput = "rock";
    playGame();
}

paperButton.onclick = () => {
    userInput = "paper";
    playGame();
}

scissorsButton.onclick = () => {
    userInput = "scissors";
    playGame();
}