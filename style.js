function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[randomNumber];
}
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection)
    {
        return message = "Equality";
    }
    else if(playerSelection === "rock")
    {

    }
    else if (playerSelection === "paper")
    {

    }
    else if(playerSelection === "scissors")
    {

    }
    else
    {
        return message = "Your selection is not alow!";
    }
}