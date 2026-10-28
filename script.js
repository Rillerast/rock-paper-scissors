function getComputerChoice() {
    const result = Math.random() * 3;
    
    if (result < 1) return "rock";
    if (result < 2) return "paper";
    return "scissors";
}

function getHumanChoice() {
    playerChoice = prompt();
    return playerChoice;
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const lowerHumanChoice = humanChoice.toLowerCase();

        if (lowerHumanChoice === computerChoice) {
            console.log("Draw!")
        } else if (lowerHumanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lost! Rock is beaten by Paper");
                computerScore++;
            } else if (computerChoice === "scissors") {
                console.log("You won! Rock beats scissors");
                humanScore++;
            }

        } else if (lowerHumanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lost! Scissors is beaten by Rock");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You won! Scissors beats Paper");
                playerScore++;
            }
        } else if (lowerHumanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lost! Paper is beaten by Scissors");
                computerScore++;
            } else if (computerChoice === "rock") {
                console.log("You won! Paper beats Rock");
                playerScore++;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        playRound(humanChoice, getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Game completed! You won!");
    } else if (humanScore < computerScore) {
        console.log("Game completed! You lost!");
    } else {
        console.log("Game completed and ended in a draw!");
    }
}

playGame()