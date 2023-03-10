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

const mapNumbers = new Map([
   ["first", 1],
   ["second", 3],
   ["third", 5]
]);
mapNumbers.set("fourth",9);
console.log(mapNumbers);
console.log(mapNumbers.get("fourth")); // function work only on keys, not on values
console.log(mapNumbers.has("first")); 