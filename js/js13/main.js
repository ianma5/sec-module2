// Functions

// Methods = built-in functions

/* function sum(num1,num2) {
    if (num2===undefined) {
        return num1+num1;
    }
    return num1+num2;
}

console.log(sum(2,6)); */

/* function getUserNameFromEmail(email) {
    return email.slice(0,email.indexof("@"));
}


// anonymous function

const getUserNameFromEmailAnon = function (email) {
    return email.slice(0,email.indexof("@"));
}*/

// arrow functions


 /* const getUserNameFromEmail = (email) => {
    return email.slice(0,email.indexof("@"));
}; */

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("ian"));