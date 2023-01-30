/*console.log("Hello JavaScript from Grace Olufunsho")

console.log(4 * 6)

var a = 10
var b = 20

console.log(a+b)

import logger from "./tools.js";

var product = 4 * 5;

logger(product);

logger("Welcome! We are now having fun with modularity");

import logger, {appName, dummyFunction, genericFunction, multiplier} from './tools.js';
logger(`Welcome! The application name is "${appName}". 
There is a function that returns "${dummyFunction()}".`);
logger(genericFunction())

try{
    logger(multiplier(3))
}catch(error){
    logger (error.message)
}


import logger, {CustomMath} from './tools.js';
import { Person } from './person.js';

const person1 = new Person("Kunle", "Femi", "Male", 1.7)

const person2 = new Person("David", "John", "Male", 2.2)

const person3 = new Person("Cynthia", "Smith", "Female", 1.5)

logger(`The persons declared so far are:
1. ${person1.firstName} ${person1.lastName}
2. ${person2.firstName} ${person2.lastName}
3. ${person3.firstName} ${person3.lastName}
`)

logger(CustomMath.sqrt(200))
*/

import logger from './tools.js'
const addressees = ["John Uzo", "Mary Smart", "Paul Umoh"];
/*addressees.map(addressee => {
    let message = `Dear ${addressee},
It is my pease to inform you that you're admission letter is ready for collection`;
    logger(message);
});*/

addressees.map(()=>{
    
})
