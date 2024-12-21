// JSON

const myObj = {
    name: "Dave",
    hobbies: ["eat","sleep","code"],
    hello : function () {
        console.log("hello!");
    }
}

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); // able to be sent, function is lost
console.log(sendJSON);

console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON); // parse received json
console.log(receiveJSON);
console.log(typeof receiveJSON);