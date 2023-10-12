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