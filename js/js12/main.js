// Loops

let myNumber = 0;
while (myNumber <= 10) {
    console.log(myNumber);
    myNumber++; // or mynumber +=1;
}

let anotherNumber = 0;
// happens at least once
do {
    console.log(anotherNumber);
    anotherNumber++;
} while (anotherNumber<=10);

let myName = "Ian";
for (let i = 0; i<myName.length; i++) {
    console.log(myName.charAt(i));
}

myName = "IanM";
let counter = 0;
let myLetter;
while (counter<=3) {
    myLetter = myName[counter];
    console.log(myLetter);
    if (counter===1) {
        counter+=2;
        continue;
    }
    if (myLetter === "n") break;
    counter++;
}
console.log(counter);