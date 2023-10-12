const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[randomNumber];
}
function getPlayerChoice(playerChoice) {
    return playerChoice;
}
function playRound(playerSelection, computerSelection) {
    let message = 'ERROR';

    if (playerSelection === computerSelection) {
        message = "equality";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            message = "computer";
        }
        else {
            message = "player";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            message = "player";
        }
        else {
            message = "computer";
        }
    }
    else {
        if (computerSelection === "paper") {
            message = "player";
        }
        else {
            message = "computer";
        }
    }

    return message;
}
