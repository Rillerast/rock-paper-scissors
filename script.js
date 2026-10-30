function getComputerChoice() {
    const result = Math.random() * 3;
    
    if (result < 1) return "rock";
    if (result < 2) return "paper";
    return "scissors";
}

function getHumanChoice() {
    playerChoice = "paper";
    return playerChoice;
}

function removeListeners(...elements) {

    const buttons = document.querySelector(".buttons");

    function createButton(thing) {
        const inertButton = document.createElement("button");
        inertButton.textContent = thing;
        buttons.appendChild(inertButton);

    }

    // Removing and inserting them again, so i can remove anonymous function event listener
    elements.map((element) => {
        element.remove();
    })

    createButton("Rock");
    createButton("Paper");
    createButton("Scissors");
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    const roundResult = document.querySelector(".roundResult");
    const winner = document.querySelector(".winner");
    const displayHumanScore = document.querySelector(".displayHumanScore");
    const displayComputerScore = document.querySelector(".displayComputerScore");

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    function playRound(humanChoice, computerChoice) {


        if (humanChoice === computerChoice) {
            roundResult.textContent = "Draw!"
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                roundResult.textContent = "You lost! Rock is beaten by Paper";
                computerScore++;
            } else if (computerChoice === "scissors") {
                roundResult.textContent ="You won! Rock beats scissors";
                humanScore++;
            }

        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                roundResult.textContent ="You lost! Scissors is beaten by Rock";
                computerScore++;
            } else if (computerChoice === "paper") {
                roundResult.textContent ="You won! Scissors beats Paper";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                roundResult.textContent ="You lost! Paper is beaten by Scissors";
                computerScore++;
            } else if (computerChoice === "rock") {
                roundResult.textContent ="You won! Paper beats Rock";
                humanScore++;
            }
        }

        displayHumanScore.textContent = humanScore;
        displayComputerScore.textContent = computerScore;

        if (humanScore > 4) {
            removeListeners(rock, paper, scissors);
            winner.textContent = "You also won the game!"
        } else if (computerScore > 4) {
            removeListeners(rock, paper, scissors);
            winner.textContent = "You also lost the game!"
        }
    }

    rock.addEventListener("click", (e) => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", (e) => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", (e) => {
        playRound("scissors", getComputerChoice());
    });

}

playGame()