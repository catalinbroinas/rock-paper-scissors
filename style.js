const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');

const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const result = document.querySelector('#result');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[randomNumber];
}
function getPlayerChoice(playerChoice) {
    return playerChoice;
}
function getResult(playerSelection, computerSelection) {
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

function playRound(playerSelection, computerSelection) {
    let playerScore = parseInt(player.textContent);
    let computerScore = parseInt(computer.textContent);

    for (let i = 0; i < 1; i++) {
        let whoWin = getResult(playerSelection, computerSelection);
        if (whoWin === 'player') {
            playerScore++;
            player.textContent = playerScore;

        }
        else if (whoWin === 'computer') {
            computerScore++;
            computer.textContent = computerScore;
        }
        else {
            playerScore += 0;
            computerScore += 0;
            player.textContent = playerScore;
            computer.textContent = computerScore;
        }
    }

    const score = [playerScore, computerScore];
    return score;
}

function getScore() {
    const score = playRound();
    const playerScore = score[0];
    const computerScore = score[1];

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            return 'player';
        }
        else {
            return 'computer';
        }
    }

    return 'Player score: ' + playerScore + ', computer score: ' + computerScore;
}

function playGame() {
    let status = getScore();

    if (status === 'player' || status === 'computer') {
        if (status === 'player') {
            result.textContent = 'Player win this game!';
        }
        else {
            result.textContent = 'Computer win this game!';
        }
        player.textContent = 0;
        computer.textContent = 0;
    }
}

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame();
});
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame();
});
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame();
});
