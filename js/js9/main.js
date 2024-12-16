// Conditionals: Ternary operator

// syntax
// condition ? ifTrue : ifFalse;


let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup" : "Sorry, no soup today";

let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes, we have ${soup} today.` : "Sorry, no soup today";
console.log(soupAccess);

let testScore = 79;

let myGrade = testScore > 89 ? "A" : "Not an A";

console.log(myGrade);

