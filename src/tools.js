//Let us create our oen logger function
var logger = output => {
    console.log(output)
}
export var appName = "ES6 Review";
export var dummyFunction = () => {
    return "I am a dummy function";
}
/* export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLangs] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}
    The remaining languages are ${otherLangs}`
} */

export const genericFunction = () => {
    //declare an object literal
    let personalInformation = {
    firstName : 'Grace',
    lastName : 'Olufunsho',
    gender : 'Female',
    religion : 'Christianity (Pentecostal)',
    fathersName : 'Olusola',
    mothersName : 'Tolulope'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo
    let {firstName, lastName, ...otherPersonalInfo} = personalInformation;
   
    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
   } 
   export const multiplier = (...numbers) => {

        if (numbers.length < 2) {
            throw new Error('Illegal arguments counts. Arguments must be greater than 1. You sent only ${numbers.length} number(s)')
        }
    
    let product = 1;

    for (let number in numbers){
        product = product * number;
    }

    return product;
   } 
export default logger;


//static methods
export class CustomMath{
    static sqrt(a){
        return Math.sqrt(a);
    }
    static pow(a,b){
        return Math.pow(a,b);
    }
} 