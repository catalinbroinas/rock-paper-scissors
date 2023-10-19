// Buttons
const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');
const again = document.querySelector('#retry-button');

// Section
const gameSect = document.querySelector('.game');
const scoreSect = document.querySelector('.score');
const resultSect = document.querySelector('#result');
const retrySect = document.querySelector('#retry-game');

// Image
const img = document.querySelector('#winner');

// Text
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const title = document.querySelector('#title');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[randomNumber];
}

function compareChoices(playerSelection, computerSelection) {
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
        let whoWin = compareChoices(playerSelection, computerSelection);
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
    let color = 'darkblue';

    if (status === 'player' || status === 'computer') {
        if (status === 'player') {
            title.textContent = 'Congratulation! YOU win this game!';
            color = 'green';
            img.src = './img/player.jpg';
        }
        else {
            title.textContent = 'LOSE! Computer win this game.';
            color = 'red';
            img.src = './img/computer.jpg';
        }
        player.textContent = 0;
        computer.textContent = 0;
        gameSect.style.display = 'none';
        scoreSect.style.display = 'none';
        title.style.cssText = 'color: ' + color + ';';
        resultSect.style.cssText = 'display: block';

        retrySect.style.display = 'flex';
    }
}

function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
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
again.addEventListener('click', () => {
    gameSect.style.display = 'block';
    scoreSect.style.display = 'flex';
    resultSect.style.display = 'none';
    retrySect.style.display = 'none';
    title.textContent = "Play Game";
    title.style.color = "black";
});
again.addEventListener('click', createRipple);