const myNumber = 42;

const myFloat = 42.01;

const myString = "42.021abc";
const notnumber = NaN;

console.log(Number.parseFloat(myString).toFixed(2).toString());

console.log(isNaN("Dave")); // Checks if it isnt a number

console.log(Number.isNaN("Dave")); // Checks whether it is NaN datatype

console.log(Number.isNaN(notnumber))