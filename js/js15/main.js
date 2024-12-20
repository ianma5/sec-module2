/* const myArray = [];

myArray[0] = "Ian";
myArray[1] = 1001;
myArray[2] = false; */

/* console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1])

console.log(myArray[1]); */

/* myArray.push("school"); // add to end of array
console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem);

const newL = myArray.unshift(42); // add to beginning and returns length of new array
console.log(newL);

const firstItem = myArray.shift() // removes first item
console.log(firstItem);

// delete myArray[2];
myArray.splice(1,0, 42); // index, how many items to delete, item being added
console.log(myArray); */

/* const myArray = ["A", "B", "C", "D", "E", "F"];

const newArray = myArray.slice(2,5);

newArray.reverse();
console.log(newArray);

const newString = myArray.join(); // creates string of all elements

const newArrayString = newString.split(",");
console.log(newArrayString); */

const MyArrayA = ["A","B","C"];
const MyArrayB = ["D","E","F"];

const newArray = MyArrayA.concat(MyArrayB); // joins the two arrays
console.log(newArray);