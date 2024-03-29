// Buttons
const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');

const again = document.querySelector('#retry-button');
const reload = document.querySelector('#reload-button');

const play = document.querySelector('#play-button');
const yourNameButton = document.querySelector('#your-name-button');
const computerNameButton = document.querySelector('#computer-name-button');

const closeButton = document.querySelector('#close-button');
const applyButton = document.querySelector('#set-name');

// Headings
const yourNameHeading = document.querySelector('#your-name');
const computerNameHeading = document.querySelector('#computer-name');
const infoPlayerName = document.querySelector('#info-player-name');
const infoComputerName = document.querySelector('#info-computer-name');

// Modal
const modalBox = document.querySelector("#set-name-modal");
const nameInput = document.querySelector('#name');

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
    const player = document.querySelector('#player-score');
    const computer = document.querySelector('#computer-score');
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
    let color = '#6200ee';
    let bgColor = '#6200ee';

    const player = document.querySelector('#player-score');
    const computer = document.querySelector('#computer-score');

    const title = document.querySelector('#title');
    const img = document.querySelector('#winner');

    const gameSect = document.querySelector('#game');
    const scoreSect = document.querySelector('#score');
    const resultSect = document.querySelector('#result');
    const retrySect = document.querySelector('#retry-game');
    const choicesButton = document.querySelectorAll('.list-button');

    let yourName = 'YOU';
    let computerName = 'Computer';

    if (localStorage.getItem('myName')) {
        yourName = localStorage.getItem('myName');
    }
    if (localStorage.getItem('computerName')) {
        computerName = localStorage.getItem('computerName');
    }

    if (status === 'player' || status === 'computer') {
        title.textContent = 'The game is over';
        if (status === 'player') {
            text = `Congratulation! ${yourName} won this game.`;
            color = '#43A047';
            bgColor = '#00BFA5';
            img.src = './img/player.jpg';
        }
        else {
            text = `LOSE! ${computerName} won this game.`;
            color = '#CC0000';
            bgColor = '#CC0000';
            img.src = './img/computer.jpg';
        }
        for (let btn of choicesButton) {
            btn.disabled = true;
        }
        setTimeout(() => {
            player.textContent = 0;
            computer.textContent = 0;
            gameSect.style.display = 'none';
            scoreSect.style.display = 'none';
            title.textContent = text;
            title.style.cssText = 'color: ' + color + ';';
            again.style.backgroundColor = bgColor;
            reload.style.color = bgColor;
            resultSect.style.cssText = 'display: block';

            retrySect.style.display = 'flex';
        }, 3000);
    }
}

function displayChoice(playerSelection, computerSelection) {
    const playerChoice = document.querySelector('#player-choice');
    const computerChoice = document.querySelector('#computer-choice');
    const imgPlayerChoice = document.querySelector('#img-player-choice');
    const imgComputerChoice = document.querySelector('#img-computer-choice');

    playerChoice.style.display = 'flex';
    computerChoice.style.display = 'flex';

    imgPlayerChoice.src = './img/' + playerSelection + '.jpg';
    imgComputerChoice.src = './img/' + computerSelection + '.jpg';
}

function reset() {
    const title = document.querySelector('#title');
    const gameSect = document.querySelector('#game');
    const scoreSect = document.querySelector('#score');
    const resultSect = document.querySelector('#result');
    const retrySect = document.querySelector('#retry-game');

    const playerChoice = document.querySelector('#player-choice');
    const computerChoice = document.querySelector('#computer-choice');

    const choicesButton = document.querySelectorAll('.list-button');

    gameSect.style.display = 'block';
    scoreSect.style.display = 'flex';
    resultSect.style.display = 'none';
    retrySect.style.display = 'none';
    title.textContent = "Play Game";
    title.style.color = "black";

    playerChoice.style.display = 'none';
    computerChoice.style.display = 'none';

    for (let btn of choicesButton) {
        btn.disabled = false;
    }
}

function createRipple(event) {
    const button = event.currentTarget;

    // Calculate diameter and radius by width/height of element
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Ripple properties
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    // Verify if exist ripple 
    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    // Insert element with class
    button.appendChild(circle);
}

function rippleEffect() {
    const item = document.querySelectorAll('.ripple-effects');

    for (let i = 0; i < item.length; i++) {
        item[i].onmousedown = function (e) {
            const newRound = document.createElement('div');

            newRound.className = 'cercle';
            this.appendChild(newRound);

            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;

            newRound.style.left = x + "px";
            newRound.style.top = y + "px";
            newRound.className += " anim";

            setTimeout(function () {
                newRound.remove();
            }, 1000);
        };
    }
}

function setName(who) {
    const name = nameInput.value;

    infoGameSect.style.display = 'flex';

    if (name) {
        switch (who) {
            case 'user':
                localStorage.setItem('myName', name);
                yourNameHeading.textContent = localStorage.getItem('myName');
                infoPlayerName.textContent = localStorage.getItem('myName');
                break;
            case 'computer':
                localStorage.setItem('computerName', name);
                computerNameHeading.textContent = localStorage.getItem('computerName');
                infoComputerName.textContent = localStorage.getItem('computerName');
                break;
        }
    }
}

function showModal() {
    modalBox.style.display = 'block';
}

function closeModal() {
    modalBox.style.display = 'none';
}

closeButton.addEventListener('click', () => {
    setTimeout(closeModal, 500);
});

window.addEventListener('load', rippleEffect);
window.addEventListener('load', () => {
    if (localStorage.getItem('myName')) {
        yourNameHeading.textContent = localStorage.getItem('myName');
    }
    if (localStorage.getItem('computerName')) {
        computerNameHeading.textContent = localStorage.getItem('computerName');
    }
});
window.addEventListener('click', (event) => {
    setTimeout(() => {
        if (event.target == modalBox) {
            modalBox.style.display = "none";}
    }, 500)
});

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    setTimeout(() => {
        displayChoice(playerSelection, computerSelection);
    }, 500);
    playRound(playerSelection, computerSelection);
    playGame();
});
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    setTimeout(() => {
        displayChoice(playerSelection, computerSelection);
    }, 500);
    playRound(playerSelection, computerSelection);
    playGame();
});
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    setTimeout(() => {
        displayChoice(playerSelection, computerSelection);
    }, 500);
    playRound(playerSelection, computerSelection);
    playGame();
});

again.addEventListener('click', () => {
    setTimeout(reset, 500);
});
reload.addEventListener('click', () => {
    setTimeout(() => {
        location.reload();
    }, 500);
});

// Add ripple effect on all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', createRipple);
});

// Set your name
let whoSet = undefined; 
const infoGameSect = document.querySelector('#info-game');

window.addEventListener('load', () => {
    if (localStorage.getItem('myName'))
    {
        infoGameSect.style.display = 'flex';
        infoPlayerName.textContent = localStorage.getItem('myName');
    }
    if (localStorage.getItem('computerName'))
    {
        infoGameSect.style.display = 'flex';
        infoComputerName.textContent = localStorage.getItem('computerName');
    }
});

yourNameButton.addEventListener('click', () => {
    whoSet = 'user';
    setTimeout(() => {
        showModal();
    }, 500);
});
computerNameButton.addEventListener('click', () => {
    whoSet = 'computer'; 
    setTimeout((who) => {
        showModal();
        setName(who);
    }, 500, 'computer');
});

applyButton.addEventListener('click', () => {
    setName(whoSet);
    setTimeout(() => {
        closeModal();
    }, 500);
    nameInput.value = '';
    setTimeout(() => {
        closeModal();
    }, 500);
});

// Play game with checked options
play.addEventListener('click', () => {
    setTimeout(() => {
        const settingSect = document.querySelector('#setting');
        const gameSect = document.querySelector('#game');
        const scoreSect = document.querySelector('#score');
        const title = document.querySelector('#title');

        settingSect.style.display = 'none';

        title.textContent = 'Play Game';

        gameSect.style.display = 'block';
        scoreSect.style.display = 'flex';
        infoGameSect.style.display = 'none';

    }, 500);
});