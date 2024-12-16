// User input

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
if (name) {
    console.log(name.trim());
} else {
    console.log("still no name entered.")
}
