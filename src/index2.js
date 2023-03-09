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
let multiply = (arr) => {
    return(multi) => {
        return arr.map((item) => item * multi);
    }
}
console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));

// Reverse the Case
const reverseCase = (a) => {
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
const arrayOperation = (a, b, c) => {
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
const societyName = (a) => {
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
const hashPlusCount = (a) => {
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
const means = (a) => {
    let sum = a.reduce((item, itemTwo) =>
        item + itemTwo);
    let result = sum / a.length;
    return result.toFixed(2);
}
console.log(means([1, 0, 4, 5, 2, 4, 1,2, 3, 3, 3]));
console.log(means([2, 3, 2, 3]));
console.log(means([3, 3, 3, 3, 3]));

// Transform into an Array with No Duplicates
const set = (a) => {
    let sorting = a.sort((item, itemTwo) => item - itemTwo);
    let result = sorting.filter((item, index) => sorting.indexOf(item) == index);
    return result;
}
console.log(set([1, 3, 3, 5, 5]));
console.log(set([4, 4, 4, 4]));
console.log(set([3, 3, 3, 2, 1]));

// Maximum Possible Total
const maxTotal = (a) => {
    return a.sort((item, itemTwo) =>
     itemTwo - item).slice(0, 5).reduce(
     (item, sum) => item + sum);
}
console.log(maxTotal([1, 1, 0, 1, 3,10, 10, 10, 10,1]));
console.log(maxTotal([0, 0, 0, 0, 0, 0,0, 0, 0, 100]));
console.log(maxTotal([1, 2, 3, 4, 5, 6,7, 8, 9,10]));

// Is One Array a Subset of Another?
const isSubset = (a, b) => {
    let arr = a;
    let arrTwo = b;
    return arr.every((item) => arrTwo.includes(item));
}
console.log(isSubset([3, 2, 5], [5,3,7, 9, 2]));
console.log(isSubset([8, 9], [7, 1,9,8, 4, 5, 6]));
console.log(isSubset([1, 2], [3, 5,9,1]));

// Valid Zip Code
const isValid = (a) => {
    return (a.length === 5) ? a.match(
     /[0-9]/g).length === 5 : false;
}
console.log(isValid("59001"));
console.log(isValid("853a7"));
console.log(isValid("732 32"));
console.log(isValid("393939"));
console.log(isValid("00000"));

// Convert to Decimal Notation
const convertToDecimal = (a) => {
    return a.map((word) => word.replace(
    /%/g, "") * 0.01);
}
console.log(convertToDecimal(["1%","2%", "3%"]));
console.log(convertToDecimal(["45%","32%", "97%", "33%"]));
console.log(convertToDecimal(["33%","98.1%", "56.44%","100%"]));

// Hitting the Jackpot
const testJackpot = (a) => {
    return a.every((item) => item === a[
     0]);
}
console.log(testJackpot(["@", "@","@","@"]));
console.log(testJackpot(["abc","abc","abc", "abc"]));console.log(testJackpot(["&&", "&", "&&&","&&&&"]));
console.log(testJackpot([1, 1, 1, 1,1]));

// A Long Long Time
longestTime = (a,b,c) => {
   if(a > b / 60 && a > c / 3600) {
    return a;
   }
   else if(b > a * 60 && b > c / 60){
    return b;
   }
   else {
    return c;
   }
}
console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));