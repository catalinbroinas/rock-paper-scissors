function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[randomNumber];
}
function getPlayerChoice()
{
    let playerChoice = prompt("Rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")
    {
        return playerChoice;
    }
    else
    {
        return false;
    }
}
function playRound(playerSelection, computerSelection)
{
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if(playerSelection)
    {
        if(playerSelection === computerSelection)
        {
            return message = "equality";
        }
        else if(playerSelection === "rock")
        {
            if(computerSelection === "paper")
            {
                return message = "computer";
            }
            else
            {
                return message = "player";
            }
        }
        else if (playerSelection === "paper")
        {
            if(computerSelection === "rock")
            {
                return message = "player";
            }
            else
            {
                return message = "computer";
            }
        }
        else
        {
            if(computerSelection === "paper")
            {
                return message = "computer";
            }
            else
            {
                return message = "player";
            }
        }
    }
    else
    {
        return message = "Your choice is nor valid!";
    }
}

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;
    let result = "EQUALITY! Nobody win this game.";
    let status;
    for(let i = 0; i < 5; i++)
    {
        let whoWin =  playRound();
        if(whoWin === "player")
        {
            playerScore++;
            status = "Player score: " + playerScore + ". " + " Computer score: " + computerScore + ".";
            console.log(status);
        }
        else if(whoWin === "computer")
        {
            computerScore++;
            status = "Player score: " + playerScore + ". " + " Computer score: " + computerScore + ".";
            console.log(status);
        }
        else
        {
            playerScore += 0;
            computerScore += 0;
            status = "Player score: " + playerScore + ". " + " Computer score: " + computerScore + ".";
            console.log(status);
        }
    }

    let finalScore = "Final result: player " + playerScore + ", computer " + computerScore;
    
    if(playerScore > computerScore)
    {
        result = "CONGRATULATION! You win this game.";
    }
    if(playerScore < computerScore)
    {
        result = "LOSE! Computer win this game.";
    }

    return finalScore + ". " + result;
}