// Modules
// type="module" in HTML (automatically applies the defer keyword {dom loads, then javascript},
// also applies strict mode

/*import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking} from "./guitars.js"; 
console.log(playGuitar());
console.log(shred());
console.log(fingerpicking());*/



import * as Guitars from "./guitars.js";
import User from "./user.js";

const me = new User("email@email.com","Dave");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar()); // have to call by name default function if importing all
console.log(Guitars.shredding());
console.log(Guitars.plucking());