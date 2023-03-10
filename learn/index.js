import myAge from "./index2.js"
import { person, car } from "./index2.js";
let promise = new Promise((resolve,reject) => {
    const name = "Oskar";
    if(2 >5) {
    resolve(`Hello ${name}`);
    }
    else {
    reject("Nothing happens");
    }
});
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message + " because 2 is smaller than 5");
});
// let car; Car was declared in second file, name variable was reserved 
console.log(myAge);
console.log(person);
console.log(car);

const setNumbers = new Set([1,3,5,7]); // unique values
setNumbers.add(9);
setNumbers.add(11);
setNumbers.add(myAge);
setNumbers.delete(1);
console.log(setNumbers);
console.log(setNumbers.has(5));

const mapNumbers = new Map([
   ["first", 1],
   ["second", 3],
   ["third", 5]
]);
mapNumbers.set("fourth",9);
console.log(mapNumbers);
console.log(mapNumbers.get("fourth")); // function work only on keys, not on values
console.log(mapNumbers.has("first")); 

let x = (new Date().getDay());
let text;
switch (x) {
    case 1: 
    text = "Today is Monday";
    break;
    case 2: 
    text = "Today is Tuesday";
    break;
    case 3: 
    text = "Today is Wednesday";
    break;
    case 4: 
    text = "Number is Thursday";
    break;
    case 5: 
    text = "Today is Friday";
    break;
    case 6: 
    text = "Today is Saturday";
    break;
    case 7: 
    text = "Today is Sunday"
    default: 
    text = "No more days in week, example written for learn default";
}
console.log(text);