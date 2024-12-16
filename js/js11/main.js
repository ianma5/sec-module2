// Your first interactive game
let playGame = confirm("Shall we play rock, paper, scissors?");

if (playGame) {
    // play
    let playerChoice = prompt("Rock, paper, scissors?");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne==="scissors") {
            let computerChoice = Math.floor((Math.random() * 3) + 1);
            switch(computerChoice) {
                case 1:
                    computerChoice = "rock";
                    if (playerOne === "rock") {
                        alert(`Tie! Both chose ${playerOne}`);
                    } else if (playerOne === "paper") {
                        alert(`You win, ${playerOne} beats ${computerChoice}`);
                    } else {
                        alert(`You lose, ${computerChoice} beats ${playerOne}`);
                    }
                    break;
                case 2:
                    computerChoice = "paper";
                    if (playerOne === "paper") {
                        alert(`Tie! Both chose ${playerOne}`);
                    } else if (playerOne === "scissors") {
                        alert(`You win, ${playerOne} beats ${computerChoice}`);
                    } else {
                        alert(`You lose, ${computerChoice} beats ${playerOne}`);
                    }
                    break;
                case 3:
                    computerChoice = "scissors";
                    if (playerOne === "scissors") {
                        alert(`Tie! Both chose ${playerOne}`);
                    } else if (playerOne === "rock") {
                        alert(`You win, ${playerOne} beats ${computerChoice}`);
                    } else {
                        alert(`You lose, ${computerChoice} beats ${playerOne}`);
                    }
                    break;
            } 
            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Ok, bye!") ;
        } else {
            alert("You didn't enter rock, paper, scissors");
        }
    } else {
        alert("I guess you changed your mind.");
    }
} else {
    alert("Ok maybe next time");
}