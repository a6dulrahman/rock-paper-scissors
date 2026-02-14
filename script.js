
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

const ROCK = document.querySelector("button#rock");
const PAPER = document.querySelector("button#paper");
const SCISSORS = document.querySelector("button#scissors");

ROCK.addEventListener("click", event =>
{
    playRound(event.target.textContent);
});

PAPER.addEventListener("click", event =>
{
    playRound(event.target.textContent);
});

SCISSORS.addEventListener("click", event =>
{
    playRound(event.target.textContent);
});

// PAPER.addEventListener("click", playRound(event.textContent, getComputerChoice()));
// SCISSORS.addEventListener("click", playRound(event.textContent, getComputerChoice()));

let humanScore = 0;
let ComputerScore = 0;

const RESULT = document.querySelector("div");

function playRound(humanChoice, computerChoice = getComputerChoice())
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

        } else if (computerChoice === "paper")
        {
            humanScore += 1;
            console.log("You win Scissors defeats Paper.");

        } else 
        {
            ComputerScore += 1;
            console.log("You lose Rock defeats Scissors.");

        }

    } else
    {
        if (computerChoice === "rock")
        {
            console.log("Try again!🥶");

        } else if (computerChoice === "scissors")
        {
            humanScore += 1;
            console.log("You win Rock defeats Scissors.")

        } else
        {
            ComputerScore += 1;
            console.log("You lose Paper defeats Rock.")

        }
    }

    RESULT.textContent = `
    Your score is: ${humanScore}\n
    Computer score is: ${ComputerScore}`;

    if (humanScore === 5)
    {
        alert("Congrats you're the winner! 🥳🎉🎉🎉");
        humanScore = 0;
        ComputerScore = 0;

    } else if (ComputerScore === 5) 
    {
        alert("Computer is the winner! 🖥️🎉🎉🎉");
        humanScore = 0;
        ComputerScore = 0;
    };
}
