// conditionals: switch statements


switch (2) {
    case 1:
        console.log("Case 1 match");
        break;
    case 2:
        console.log("Case 2 match");
        break;
    default:
        console.log("No Match");
}

let playerOne = "scissors";
let computer = "rock";

switch(playerOne) {
    case computer:
        console.log("tie game!");
        break;
    case "rock":
        if (computer==="paper") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break;
    case "paper":
        if (computer==="scissors") {
            console.log("computer wins");
        } else {
            console.log("player wins");
        }
        break;
    case "scissors":
        if (computer === "rock") {
            console.log("Computer wins");
        } else {
            console.log("player wins");
        }
        break;
}