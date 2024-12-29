// web storage API - not part of the DOM, use window API

/* window.alert(window.location); // window is "implied"
alert(location);
 */
const myArray = ["eat", "sleep", "code"];

const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
}

myObject.logName();

localStorage.setItem("myLocalStore", JSON.stringify(myArray)); // turn into json
const storeLength = localStorage.length;
const myLocalStore = JSON.parse(localStorage.getItem("myLocalStore")); // gets object back

console.log(storeLength);

// .clear(), .remove()