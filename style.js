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
    if(playerSelection)
    {
        if(playerSelection === computerSelection)
        {
            return message = "Equality";
        }
        else if(playerSelection === "rock")
        {
            if(computerSelection === "paper")
            {
                return message = "You Lose this round.";
            }
            else
            {
                return message = "You WIN this round";
            }
        }
        else if (playerSelection === "paper")
        {
            if(computerSelection === "rock")
            {
                return message = "You WIN this round.";
            }
            else
            {
                return message = "You lose this round";
            }
        }
        else
        {
            if(computerSelection === "paper")
            {
                return message = "You Lose this round.";
            }
            else
            {
                return message = "You WIN this round";
            }
        }
    }
    else
    {
        return message = "Your choice is nor valid!"
    }
}