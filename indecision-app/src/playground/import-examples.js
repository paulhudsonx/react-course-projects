//import './utils.js';
import subtract, { square, add } from './utils.js'; // Named exports

import isSenior, { isAdult, canDrink} from './person.js'; // Named exports

console.log('app.js is running!!');
console.log(square(4));
console.log(add(4));

console.log(isAdult(19));
console.log(isAdult(17));
console.log(subtract(10, 2.5));
console.log(isSenior(65));
