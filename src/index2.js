// Finding Nemo
const findNemo = (a) => {
    if(a.match(/nemo/gi)) {
        return `I found Nemo at ${a.split(' ').indexOf("Nemo") + 1}!`;
    }
    else {
        return "I can't find Nemo :(";
    }
}
console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
console.log(findNemo("Don't have nem o"));

// 25-Mile Marathon
const marathonDistance = (a) => {
    let absolute = a.map((element) => Math.abs(element));
    let count = absolute.reduce((item, sum) => item + sum);
    return count >= 25 ? true : false;
}
console.log(marathonDistance([1, 2, 3, 4]));
console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([-6, 15, 4]));

// Move Capital Letters to the Front
const capToFront = (a) => {
    return (a.match(/[A-Z]/g) + a.match(/[a-z]/g)).replaceAll(",", "");
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));

// Mirror Array
const mirror = (a) => {
    let arr = a.slice(0,5);
    arr = arr.reverse();
    arr.shift();
    return a.concat(arr);
}
console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5]));
console.log(mirror([3, 5, 6, 7, 8]));

// Algebra Sequence — Boxes
const boxSeq = (a) => {
    let start = 0;
    if(a == 0) {
        return 0;
    }
    for(i = 1; i <= a; i++) {
        if(i % 2 !== 0) {
            start += 3;
        }
        if(i % 2 === 0){
            start -= 1;
        }
    }
    return start;
}
console.log(boxSeq(0));
console.log(boxSeq(1));
console.log(boxSeq(2));
console.log(boxSeq(5));


// Total Volume of All Boxes
const totalVolume = (...a) => {
    return a.map((item) => item.reduce((item, sum) => item * sum)).reduce((item, sum) => item + sum);
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));

// Index Multiplier
const indexMultiplier = (a) => {
    return a.map((item,index) => item * index).reduce((item, sum) => item + sum);
}
console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3, 0, 8, -6]));

// Currying Functions
let multiplyFunc = (arr, multi) => {
   return arr.map((item) => item * multi);
}
let multiply = _.curry(multiplyFunc);
console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));


// Reverse the Case
reverseCase = (a) => {
    let result = a.split("").map(
        word => {
            if (word == word.toLowerCase()) {
                return word.toUpperCase()
            } else {
                return word.toLowerCase()
            }
        }).join("");
    return result;
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));
console.log(reverseCase("sPoNtAnEoUs"));

// Array Operation
arrayOperation = (a, b, c) => {
    let arr = [];
    for (var i = a; i < b; i++) {
        if (i % c === 0) arr.push(i)
    }
    return arr;
}
console.log(arrayOperation(1, 10,3));
console.log(arrayOperation(7, 9, 2));
console.log(arrayOperation(15, 20,7));

// Secret Society
societyName = (a) => {
    let arr = a;
    let result = "";
    select = (item) => {
        result += item.charAt(0);
    }
    arr.forEach(select);
    return result;
}
console.log(societyName(["Adam","Sarah", "Malcolm"]));
console.log(societyName(["Harry","Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe","Chandler", "Rachel", "Ross","Monica", "Joey"]));

// Hashes and Pluses
hashPlusCount = (a) => {
    let reg1 = /[#]/g;
    let reg2 = /[+]/g;
    return [a.match(reg1).length, a
        .match(reg2).length
    ];
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("##+++#"));
console.log(hashPlusCount("#+++#+#++#"));

// Calculate the Mean
mean = (a) => {
    let sum = a.reduce((item, itemTwo) =>
        item + itemTwo);
    let result = sum / a.length;
    return result.toFixed(2);
}
console.log(mean([1, 0, 4, 5, 2, 4, 1,2, 3, 3, 3]));
console.log(mean([2, 3, 2, 3]));
console.log(mean([3, 3, 3, 3, 3]));