// classes


/*
//Factory Function
function pizzaFactory(pizzaSize) {
    const crust = "original"; // technically private variable
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */

class Pizza {
    crust = "original"; // public
    #sauce = "traditional"; // private field
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize; // naming convention "_size" indicates these are private 
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
/*class SpecialityPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialty = new SpecialityPizza("medium");

mySpecialty.slice(); */