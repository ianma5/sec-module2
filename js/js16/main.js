/* let playGame = confirm("Would you like to play rps?");

while (playGame) {
    console.log(playGame)
    let playerChoice = prompt("Rock, paper, scissors").trim().toLowerCase();
    if (playerChoice==="rock" || playerChoice === "paper" || playerChoice === "scissors") {
        const options = ["rock","paper","scissors"];
        let computerChoice = Math.round((Math.random() * 3));

        computerChoice = options[computerChoice];
        switch(computerChoice) {
            case "rock":
                if (playerChoice === "rock") {
                    alert(`Tie! Both chose ${playerChoice}`);
                } else if (playerChoice === "paper") {
                    alert(`You win, ${playerChoice} beats ${computerChoice}`);
                } else {
                    alert(`You lose, ${computerChoice} beats ${playerChoice}`);
                }
                playGame = confirm("Play again?");
                break;
            case "paper":
                if (playerChoice === "paper") {
                    alert(`Tie! Both chose ${playerChoice}`);
                } else if (playerChoice === "scissors") {
                    alert(`You win, ${playerChoice} beats ${computerChoice}`);
                } else {
                    alert(`You lose, ${computerChoice} beats ${playerChoice}`);
                }
                playGame = confirm("Play again?");
                break;
            case "scissors":
                if (playerChoice === "scissors") {
                    alert(`Tie! Both chose ${playerChoice}`);
                } else if (playerChoice === "rock") {
                    alert(`You win, ${playerChoice} beats ${computerChoice}`);
                } else {
                    alert(`You lose, ${computerChoice} beats ${playerChoice}`);
                }
                playGame = confirm("Play again?");
                break;
        }                        
    }
    
} */

const initGame = () => {
    const startGame = confirm("Shall we play rps?");
    startGame ? playGame() : alert("Next time, then");
};

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice==="") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Rock, paper, scissors");
};

const formatPlayerChoice =  (playerChoice) => {
    if (playerChoice || playerChoice ==="" ) {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you changed your mind, maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice ==="rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("Invalid choice.");
};

const getComputerChoice = () => {
    rpsValues = ["rock","paper","scissors"];
    return rpsValues[Math.round((Math.random() *3))];
};

const determineWinner = (playerOne, computerChoice) => {
    switch(computerChoice) {
        case "rock":
            if (playerOne === "rock") {
                return(`Tie! Both chose ${playerOne}`);
            } else if (playerOne === "paper") {
                return(`You win, ${playerOne} beats ${computerChoice}`);
            } else {
                return(`You lose, ${computerChoice} beats ${playerOne}`);
            }
        case "paper":
            if (playerOne === "paper") {
                alert(`Tie! Both chose ${playerOne}`);
            } else if (playerOne === "scissors") {
                return `You win, ${playerOne} beats ${computerChoice}`;
            } else {
                return(`You lose, ${computerChoice} beats ${playerOne}`);
            }
        case "scissors":
            if (playerOne === "scissors") {
                return(`Tie! Both chose ${playerOne}`);
            } else if (playerOne === "rock") {
                return(`You win, ${playerOne} beats ${computerChoice}`);
            } else {
                return(`You lose, ${computerChoice} beats ${playerOne}`);
            }
    } 
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play again?");
};

const thanksForPlaying = () => {
    return alert("Thanks for playing!")
}

initGame();
