
function getComputerChoice()
{
    let computerChoice;

    if (Math.random() <= .3)
    {
        computerChoice = "rock";
    } else if (Math.random() >= .6)
    {
        computerChoice = "paper";
    } else computerChoice = "scissors";

    return computerChoice;

}


function getHumanChoice()
{
    let humanChoice = `${prompt("choose: 'rock' OR 'paper' OR 'scissors'")}`;
    humanChoice;

}


function playGame()
{
    let humanScore = 0;
    let ComputerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === "paper")
        {
            if (computerChoice === "paper")
            {
                console.log("Try again!🥶");

            } else if (computerChoice === "rock")
            {
                humanScore += 1;
                console.log("You win Paper defeats Rock.");

            } else 
            {
                ComputerScore += 1;
                console.log("You lose Rock defeats Scissors.");

            }

        } else if (humanChoice === "scissors")
        {
            if (computerChoice === "scissors")
            {
                console.log("Try again!🥶");

            } else if (computerChoice === "paper") {
                humanScore += 1;
                console.log("You win Scissors defeats Paper.");
            } else 
            {
                ComputerScore += 1;
                console.log("You lose Rock defeats Scissors.");

            }

        } else
        {
            if (computerChoice === "rock") {
                console.log("Try again!🥶");
            
            } else if (computerChoice === "scissors") {
                humanScore += 1;
                console.log("You win Rock defeats Scissors.")

            } else
            {
                ComputerScore += 1;
                console.log("You lose Paper defeats Rock.")

            }

        }

    }

    for (let round = 0; round < 5; round++)
    {
        playRound(getHumanChoice(), getComputerChoice());

    }

    // Log the winner!
    if (humanScore > ComputerScore)
    {
        window.alert(`You win.\nYour scores: '${humanScore}'\nComputer scores: '${ComputerScore}'`)

    } else 
    {
        window.alert(`You lose.\nYour scores: '${humanScore}'\nComputer scores: '${ComputerScore}'`)

    }

}

playGame();
