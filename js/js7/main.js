// Conditionals: If Statements

let customerIsBanned = false;

let soup = "chicken noodle soup";
let crackers = true;

let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers`;
} else {
    reply = `Sorry, no soup`;
}
console.log(reply);

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore>=90) {
    grade = "A";
} else if (testScore>=80) {
    grade = "B";
} else if (testScore>=70) {
    grade = "C";
} else if (testScore>=60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U"
    } else {
        grade = "F";
    }
}
console.log(grade);

// decision tree
if (playerOne === computer) {
    //tie
} else if (playerOne === "rock") {
   if (computer==="paper") {
    // computer wins
   } else {
    // player one wins
   }
} else if (playerOne === "scissors") {
    if (computer==="rock") {
     // computer wins
    } else {
     // player one wins
}
} else if (playerOne === "paper") {
    if (computer==="scissors") {
     // computer wins
    } else {
     // player one wins
    }
}