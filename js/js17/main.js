// objects
// key-value pairs in curly braces

/* const myObj = { name: "Dave"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["games", "eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "orange juice",
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(anotherObj.action()); */

/* const vehicle = {
    wheels: 4,
    engine: function () {
        return "Vrrroom!";
    },
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Whooosh"
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {return "Shh"}; */

const band = {
    name: "Deftones",
    vocals: "Chino Moreno",
    guitarist: "Stephen Carpenter"
}

for (let job in band) {
    console.log(`${job}: ${band[job]}`);
}

// destructirng objects

const { guitarist: myVariable, vocals} = band;
console.log(myVariable,vocals);

function sings({ vocals }) {
    return `${vocals} sings!`;
};

console.log(sings(band));