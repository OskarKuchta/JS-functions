// Summary two numbers 
addition = (a,b) => {
 return a + b;
}
console.log(addition(3, 4)); 
console.log(addition(-3, -6));
console.log(addition(7, 3));

// Convert minutes to seconds 
convert = (a) => {
 return a *= 60;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// Add one to something number
addition = (a) => {
 return a += 1;
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

// Area of triangle 
triArea = (base, height) => {
 return (base * height) / 2;
}
console.log(triArea(3,2));
console.log(triArea(7,4));
console.log(triArea(10,10));

// Convert age to days
calcAge = (days) => {
  return days *= 365;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

// Cube
cubes = (a) => {
 return a * a * a;
}
console.log(cubes(3));
console.log(cubes(5));
console.log(cubes(10));

// First value in array 
getFirstValue = (a) => {
  return a[0];
}
console.log(getFirstValue([1,2,3]));
console.log(getFirstValue([80,5,100]));
console.log(getFirstValue([-500, 0, 50]));

// multiplication
circuitPower = (a,b) => {
 return a * b;
}
console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));

// How many second in hour   
howManySeconds = (a) => {
 return a *= 3600;
}
console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

// Maximum Edge of a Triangle
nextEdge = (side1, side2) => {
 return (side1 + side2) - 1;
}
console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));

// Remainder from two numbers  
remainder = (x, y) => {
 return x % y;
}
console.log(remainder(1, 3));
console.log(remainder(6, 4));
console.log(remainder(45, 5));
console.log(remainder(-9, 45));

// Perimeter of a Rectangle
findPerimeter = (length, width) => {
 return (length * 2) + (width * 2);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

// Give me something
giveMeSomething = (a) => {
 return '"something ' + a + '"';
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

// Squared numbers
squared = (a) => {
 return a *= a;
}
console.log(squared(5));
console.log(squared(9));
console.log(squared(100));

// Number less than or equal to zero
lessThanOrEqualToZero = (a) => {
 return a <= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

//Summary angle of polygon
sumPolygon = (a) => {
 return a > 2 ? (a - 2) * 180 : undefined;
}
console.log(sumPolygon(2));
console.log(sumPolygon(4));
console.log(sumPolygon(6));

// Multiply with two parameters
points = (a, b) => {
 return a * 2 + b * 3;
}
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

// Basic Variable Assignment
nameString = (name) => {
 const a = 'Edabit"';
 const result = '"' + name + a;
 return result;
}
console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javascript"));

// Compare summary two numbers to another
lessThan100 = (a, b) => {
 return (a + b) < 100 ? true : false;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

// Array with increment values
printArray = (a) => {
    let newArray = [];
    for (i = 1; i <= a; i++) {
     newArray.push(i);
    }
 return newArray;
}
console.log(printArray(3));
console.log(printArray(6));
console.log(printArray(5));

// Swap two numbers in array 
swap = (a, b) => {
  return [b, a];
 }
 console.log(swap(100, 200));
 console.log(swap(44, 33));
 console.log(swap(21, 12));

 //Multiply three numbers with different multiplier  
animals = (chciken, cows, pigs) => {
  return (chciken * 2) + (cows * 4) +
   (pigs * 4);
 }
 console.log(animals(2, 3, 5));
 console.log(animals(1, 2, 3));
 console.log(animals(5, 2, 8));

 //  && operator  
and = (a, b) => {
  return a == true && b == true ?
   true : false;
 }
 console.log(and(true, false));
 console.log(and(true, true));
 console.log(and(false, true));
 console.log(and(false, false));

 // Compare two numbers
isSameNum = (a, b) => {
  return a === b ? true : false;
 }
 console.log(isSameNum(4, 8));
 console.log(isSameNum(2, 2));
 console.log(isSameNum(2, "2"));
 
 // Football Points  
footballPoints = (wins, draw,
  losses) => {
  let allow = wins && draw && losses <
   0;
  return allow == false ? wins * 3 +
   draw * 1 + losses * 0 : null;
 }
 console.log(footballPoints(3, 4, 2));
 console.log(footballPoints(5, 0, 2));
 console.log(footballPoints(0, 0, 1));

 // Convert hours and minutes to seconds
convert = (hours, minutes) => {
  return (hours *= 3600) + (minutes *=
   60);
 }
 console.log(convert(1, 3));
 console.log(convert(2, 0));
 console.log(convert(0, 0));

 // Number equal to seven  
isSeven = (x) => {
  return x === 7 ? true : false;
 }
 console.log(isSeven(4));
 console.log(isSeven(9));
 console.log(isSeven(7));
 
// Equal parameters typeof
checkEquality = (a, b) => {
  return typeof a === typeof b ? true :
    false;
   }
  console.log(checkEquality(1, true));
  console.log(checkEquality(1, 1));
  console.log(checkEquality(0, "0"));
   
// Profitable Gamble
profitableGamble = (prob, prize,
  pay) => {
  return prob * prize > pay ? true :
    false;
  }
  console.log(profitableGamble(0.2, 50,
    9));
  console.log(profitableGamble(0.9, 1,
    2));
  console.log(profitableGamble(0.9, 3,
    2));

    // Boolean to String Conversion
   boolToString = (flag) => {
    return typeof flag === "boolean" ? 
    '"' + flag + '"' : null;
   }
   console.log(boolToString(true));
   console.log(boolToString(false));

  // Using Arrow Function 
  arrowFunc = (a) => {
    return typeof a === "string" ? '"' +
    a + '"' : a;
  }
  console.log(arrowFunc(3));
  console.log(arrowFunc("3"));
  console.log(arrowFunc(true));
  
  // Parody of a Calculator (not recommended convert string to number)
  calculator = (a) => {
    return eval(a);
  }
  console.log(calculator("23 + 4"));
  console.log(calculator("45-15"));
  console.log(calculator("49/7*2-3"));

  // Two Makes Ten  
  makesTen = (a, b) => {
    return (a + b) == 10 || a == 10 ||
     b == 10 ? true : false;
  }
  console.log(makesTen(10, 9));
  console.log(makesTen(9, 9));
  console.log(makesTen(1, 9));

  // Higher number
  maxNum = (a, b) => {
    return a > b ? a : b;
  }
  console.log(maxNum(3, 7));
  console.log(maxNum(-1, 0));
  console.log(maxNum(1000, 400));
   
  // Let's Fuel Up
calculateFuel = (fuel) => {
  let distance = fuel * 10;
  if (distance > 0) {
   if (fuel <= 10) {
    return distance = 100;
   }
   return distance;
  }
 }
 console.log(calculateFuel(3));
 console.log(calculateFuel(23.5));
 console.log(calculateFuel(15));

 // Make array with function
 makePair = (a, b) => {
  return [a, b];
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

// Compare Strings by Count of Characters
comp = (a, b) => {
  return a.length == b.length ? true :
   false;
 }
 console.log(comp("AB", "CD"));
 console.log(comp("ABC", "DE"));
 console.log(comp("hello", "Oskar"));

 // Empty String 
 isEmpty = (a) => {
  return a.length === 0 ? true : false;
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));

// Divide a Integer Number
divisibleByFive = (a) => {
  return a % 5 === 0 ? true : false;
}
console.log(divisibleByFive(5));
console.log(divisibleByFive(-45));
console.log(divisibleByFive(37));
 
 // Bitwise Operation
 bitwiseAND = (a, b) => {
  return a & b;
 }
 bitwiseOR = (a, b) => {
  return a | b;
 }
 bitwiseXOR = (a, b) => {
  return a ^ b;
 }
 console.log(bitwiseAND(7, 12));
 console.log(bitwiseOR(7, 12));
 console.log(bitwiseXOR(7, 12));

 // Add up the Numbers from a Single Number
 addUp = (a) => {
  if (a >= 1 && a <= 1000) {
   return (a * (a + 1)) / 2;
  }
 }
 console.log(addUp(4));
 console.log(addUp(13));
 console.log(addUp(600));

 // Mathstick Houses
 matchHouses = (a) => {
  if (a === 0) {
    return 0;
  }
  if (a === 1) {
   return 6;
  }
  if (a > 1) {
   return 6 + (a - 1) * 5;
  }
 }
 console.log(matchHouses(1));
 console.log(matchHouses(4));
 console.log(matchHouses(87));
 
 // Left Shift by Powers of Two
 shiftToLeft = (a, b) => {
  return a * (2 ** b);
 }
 console.log(shiftToLeft(5, 2));
 console.log(shiftToLeft(10, 3));
 console.log(shiftToLeft(-32, 2));
 
 // Is it Time for Milk and Cookies?
 timeForMilkAndCookies = (date) => {
  return date.setMonth(12) === date.setDate(24)
}
console.log(timeForMilkAndCookies(new Date(2013,12,24)));
console.log(timeForMilkAndCookies(new Date(2013,0,23)));
console.log(timeForMilkAndCookies(new Date(3000, 12, 24)));
  
 // Which Function Returns the Larger Number?
 whichIsLarger = (f, g) => {
  if (f() > g()) {
    return '"' + "f" + '"' ;
  }
  if (f() === g()) {
    return '"' + "neither" + '"';
  }
  if (f() < g()) {
    return '"' + "g" + '"';
  }
}
console.log(whichIsLarger(() => 5, () => 10));
console.log(whichIsLarger(() => 25,  () => 25));
console.log(whichIsLarger(() => 505050, () => 5050));

// Convert a Number to Base-2
binary = (a) => {
  if (a < 1024) {
      return a.toString(2);
}
}
console.log(binary(1));
console.log(binary(5));
console.log(binary(10));

// Return message 
has_bugs = (a) => {
  if (a === true) {
      return '"say days"';
  }
  else {
      return '"' + "it's a good day" + '"';
  }
}
console.log(has_bugs(true));
console.log(has_bugs(false));

//Evaluate an Equation 
eq = (a) => {
  return eval(a);
}
console.log(eq("1+2"));
console.log(eq("6/(9-7)"));
console.log(eq("3+2-4"));

// Radians to Degrees
radiansToDegrees = (a) => {
  return a *= 57.29577951308232;
}
console.log(radiansToDegrees(1));
console.log(radiansToDegrees(20));
console.log(radiansToDegrees(50));

// Return Negative
returnNegative = (a) => {
  if (a === 0){
    return a;
  }
  return a = -a;
}
console.log(returnNegative(-4));
console.log(returnNegative(15));
console.log(returnNegative(4));
console.log(returnNegative(0));

// Reverse an Array 
reverse = (a) => {
 let array = a;
 return array.reverse();
}
console.log(reverse([1,2,3,4]));
console.log(reverse([9,9,2,3,4]));
console.log(reverse([]));

// Movie Theatre Admittance
acceptIntoMovie = (a, b) => {
  if (a >= 15) {
    return true;
  }
  if (a < 15) {
    if (b == true) {
      return true;
    }
  else {
    return false;
  }
  }
}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));

// Simple Array Manipulation
incrementItems = (a) => {
 let array = a;
 return array.map(x => x + 1);
}
console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2,4,6,8]));
console.log(incrementItems([-1, -2, -3, -4]));

// Drinks Allowed? 
shouldServeDrinks = (age, onBreak) => {
 if (onBreak == false) {
  if (age >= 18) {
  return true;
  }
 }
 else {
  return false;
 }
}
console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));

// Century Crisis
futurePeople = (people, month) => {
 return people + month * 360;
}
console.log(futurePeople(256,2));
console.log(futurePeople(3248,6));
console.log(futurePeople(5240,3));

// Return the Last Element in an Array

getLastItem = (a) => {
  let array = a;
  let get = array.pop();
  return get;
}
console.log(getLastItem([1,2,3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

// String and Number Conversions
intToString = (a) => {
  let convert = a;
  return '"' + a + '"';
}
stringToInt = (a) => {
  return a;
}
console.log(intToString(4));
console.log(stringToInt("4"));

// On/Off Switches
posCom = (a) => {
  //return 2 ** a;
  return Math.pow(2,a);
}
console.log(posCom(1));
console.log(posCom(3));
console.log(posCom(10));

// Among Us Imposter Formula
imposterFormula = (a, b) => {
  if (b <= 10  && a <= 3) {
    //return ((a / b) * 100).toFixed(2) + "%";
    return Math.round((a / b) * 100) + "%";
  }
}
console.log(imposterFormula(1, 10));
console.log(imposterFormula(1, 3));
console.log(imposterFormula(1,8));

// Find Out the Leap Year 
leapYear = (a) => {
  if(a % 4 == 0) {
    if(a % 100 == 0) {
      if (a % 400 == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}
console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(1700));

// Moving House
yearsInOneHouse = (age, moves) => {
 return Math.round(age / (moves + 1));
}
console.log(yearsInOneHouse(30, 1));
console.log(yearsInOneHouse(15, 2));
console.log(yearsInOneHouse(80, 0));

// Word without First Character
newWord = (a) => {
  let word = a;
  // return word.slice(1);
  return word.substring(1);
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("Oskar"));

// Flip the Boolean
flipBool = (a) => {
return a == true ? 0 : 1;
return a == 1 ? 0 : 1;
}
console.log(flipBool(true));
console.log(flipBool(false));
console.log(flipBool(1));
console.log(flipBool(0));

// Name Greeting!
helloName = (name) => {
  return '"Hello ' + name + '!"';
}
console.log(helloName("Gerald"));
console.log(helloName("Tiffany"));
console.log(helloName("Ed"));

// Check Whether a Given Number Is Odd 
isOdd = (a) => {
  return a % 2 == 0 ? false : true;
}
console.log(isOdd(-5));
console.log(isOdd(25));
console.log(isOdd(0));

// RegEx Exercise 1: Find the Time
findReg = () => {
  let bar = "09:00" + "123:456"
  let filter = /09:00/i;
  let result = bar.match(filter);
  return result;
}
console.log(findReg());

// RegEx XIV: Group Ranges x|y
regStepTwo = () => {
  const regexp = /(red|blue) flag/g;
  let result = "yellow flag red flag blue flag green flag".match(regexp);
 return result;
}
console.log(regStepTwo());

// Stack the Boxes
stackBoxes = (a) => {
  if (a >= 0) {
  if (a == 0) {
    return a = 0;
  }
  return Math.pow(2, a);
}
}
console.log(stackBoxes(1));
console.log(stackBoxes(2));
console.log(stackBoxes(0));

// Circle or Square 
circle_or_square = (rad, area) => {
 let circle = 2 * rad * 3.14;
 let square = Math.sqrt(area) * 4;
 if (circle > square) {
  return true;
 }
 else {
  return false;
 }
}
console.log(circle_or_square(16, 625));
console.log(circle_or_square(5, 100));
console.log(circle_or_square(8, 144));

// Triangle and Parallelogram Area Finder
areaShape = (base, height, shape) => {
  if(shape == "triangle" || "parallelogram") {
    if(shape == "triangle"){
      return 0.5 * base * height;
    }
    if(shape == "parallelogram") {
      return base * height;
    }
  }
}
console.log(areaShape(2,3, "triangle"));
console.log(areaShape(8,6, "parallelogram"));
console.log(areaShape(2.9, 1.3, "parallelogram"));

// Many Operators! 
operate = (a, b, sign) => {
 if(sign == "+") {
  return a + b;
 }
 if(sign == "-") {
  return a - b;
 }
 if(sign == "%") {
  return a % b;
 } 
}
console.log(operate(1,2,"+"));
console.log(operate(7,10,"-"));
console.log(operate(20,10,"%"));

// Concatenating Two Integer Arrays
concat = (a, b) => {
 return a.concat(b);
}
console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// Find the Index 
findIndex = (array, select) => {
 let arr = array;
 let check = arr.indexOf(select);
 return check;
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// Array Indexing
valueAt = (a, b) => {
 return a[Math.floor(b)];
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

// Number of Squares in an N * N Grid
numberSquares = (a) => {
 if(a == 0){
  return 0;
 }
 if(a == 1){
  return 1;
 }
 if(a > 1 ) {
  return a * (a +1 ) * (2 * a + 1) / 6;
 }
}
console.log(numberSquares(0));
console.log(numberSquares(4));
console.log(numberSquares(5));

// Sum of Resistance in Series Circuits
seriesResistance = (a) => {
  check = (total, num) => {
    return total + num;
  }
  let numbers = a;
  let change = numbers.reduce(check);
  return change;
}
console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));

// Largest Swap
largestSwap = (number) => {
  if (number > 9 && number < 100) {
    let check = number;
    let reverse = number.toString().split('').reverse().join('');
  if (check >= reverse) {
    return true;
  }
  if (check <= reverse) {
    return false;
  }
}
}
console.log(largestSwap(14));
console.log(largestSwap(53));
console.log(largestSwap(99));

// What's Hiding Amongst the Crowd? 
detectWord = (a) => {
  let word = a;
  let regex = /[^A-Z]/g;
  let check = word.match(regex);
  let connect = check.join('');
  return connect;
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

// Hex to Binary
toBinary = (a) => {
  let convert = a.toString(2);
  return convert;
}
console.log(toBinary(0xFF));
console.log(toBinary(0xAA));
console.log(toBinary(0xFA));

// Older Than Me
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
    if (this.age > other.age) { 
      return `${other.name} is younger than me.`;
  }
	 if	(this.age < other.age) { 
    return `${other.name} is older than me.`;
   }
   else {
		return `${other.name} is the same age as me.`;
	}
}
}
let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

// Drink Sorting
let drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
];
let first = drinks [0];
let second = drinks[1];
sortByDrinkPrice = (drinks) => {
 if(first.price > second.price) {
  return [second.price, first.price];
 }
 if(first.price < second.price) {
  return [first.price, second.price];
 }
// return drinks.sort((a,b)=> a.price - b.price)
}
console.log(sortByDrinkPrice(drinks));

// arrayValuesTypes 
arrayValuesTypes = (array) => {
 const arr = array;
 const map = array.map(x => typeof x);
 return map
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));

// Find the Index 
search = (a, index) => {
  return a.indexOf(index);
}
console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));

// Convert All Array Items to String
parseArray = (a) => {
 let arr = a;
 return arr.map(x => x.toString());
}
console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));


// Recursioh
length = (a) => {
 return typeof a == "string" ? a
  .length : undefined;
}
console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));

// Divides Evenly
dividesEvenly = (a, b) => {
  if (a >= 0) {
   return a % b == 0 ? true : false;
  }
 }
 console.log(dividesEvenly(98, 7));
 console.log(dividesEvenly(85, 4));
 
// Find the Smallest and Biggest Numbers
minMax = (a) => {
  return [Math.min(...a), Math.max(...
   a)];
 }
 console.log(minMax([1, 2, 3, 4, 5]));

// Check if One Array can be Nested to Another
canNest = (a, b) => {
  let arrA1 = Math.min(...a);
  let arrB1 = Math.min(...b);
  if (arrA1 > arrB1) {
   return true;
  } else {
   return false;
  }
 }
 console.log(canNest([1, 2, 3, 4], [0,6]));
 console.log(canNest([3, 1], [4, 0]));
 console.log(canNest([9, 9, 8], [8,9]));
 console.log(canNest([1, 2, 3, 4], [2,3]));

 //String to Integer  
stringInt = (a) => {
  if (a > 0) {
   return parseInt(a);
  }
 }
 console.log(stringInt("12.5"));
 console.log(stringInt("1000"));
 console.log(stringInt("6.7"));
 
 // Area of a Rectangle  
area = (a, b) => {
  return a > 0 && b > 0 ? a * b : -1;
 }
 console.log(area(3, 4));
 console.log(area(10, 11));
 console.log(area(-1, 5));
 console.log(area(0, 2));

 // Concatenate First and Last Name into One String
concatName = (a, b) => {
  return '"' + b + " " + a + '"';
 }
 console.log(concatName("First",
  "Last"));
 console.log(concatName("John", "Doe"));
 console.log(concatName("Marry","Jane"));

 // Arrow Functions
add2 = (x) => {
  return x + 2;
 }
 add3 = (x) => {
     return x + 3;
 }
 add5 = (x) => {
     return x + 5;
 }
 add7 = (x) => {
     return x + 7;
 }
 add11 = (x) => {
     return x + 11;
 }
 console.log(add2(2));
 console.log(add3(2));
 console.log(add5(2));
 console.log(add7(2));
 console.log(add11(2));

 // Using Ternary Operators

let smile = true;
let checkHumor = smile ? true : false;
console.log(checkHumor);
console.log(!checkHumor);

// Minimal IV: if-else if-else Inferno
equilbrium = (x) => {
  if (x > 0) {
      return "positive";
  }
  if (x < 0) {
      return "negative";
  }
}
console.log(equilbrium(7));
console.log(equilbrium(-2));

// Is the String Odd or Even?

oddOrEven = (a) => {
  let word = a.length;
  if (word % 2 == 0) {
      return true;
  }
  else {
      return false;
  }
}
console.log(oddOrEven("apple"));
console.log(oddOrEven("cherry"));

// ES6: Destructuring Arrays I

const arr = [1, 2, 3, 4, 5, 6];
const a = arr[4];
const b = arr[5];
const c = a + b;

console.log(c);

// Minimal I: If Boolean Then Boolean
minimal = (a) => {
  return a % 2 === 0 ? true : false;
}
console.log(minimal(8));
console.log(minimal(11));
console.log(minimal(0));

// Count Instances of a Character in a String
charCount = (a, b) => {
 let str = b.split('');
  let check = str.filter((A) => (a === A)).length;
 return check;
}
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));

// 50-30-20 Strategy
fiftyThirtyTwenty = (a) => {
let obj = {
  Needs: 0.5 * a,
  Wants: 0.3 * a,
  Savings: 0.2 * a
}
return obj;
}
console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));

// Inches to Feet
inchesToFeet = (a) => {
  return a = a / 12;
}
console.log(inchesToFeet(324));
console.log(inchesToFeet(12));
console.log(inchesToFeet(36));

// I'd Like a New Shade of Blue, Please
howManyWalls = (square, width, height) => {
  let calc = square / (width * height);
  return parseInt(calc);
}
console.log(howManyWalls(100, 4, 5));
console.log(howManyWalls(10, 15, 12));
console.log(howManyWalls(41, 3, 6));

// To the Power of
calculateExponent = (a, b) => {
  return a **= b;
  // Math.pow(a,b);
 }
 console.log(calculateExponent(5,5));
 console.log(calculateExponent(10,10));
 console.log(calculateExponent(3,3));
 
 // Tuck in Array
tuckIn = (add, arr) => {
  let array = arr;
  let start = array.unshift(add[0]);
  let end = array.push(add[1]);
  return array;
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

// Find the Amount of Potatoes
potatoes = (a) => {
  let text = a;
  let regex = /potato/g;
  let check = text.match(regex);
  let result = check.length;
  return result;
}
console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));

// Slightly Superior
isFirstSuperior = (a, b) => {
  if(a > b) {
     return true;
  }
  else {
     return false;
  }
 }
 console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));
 console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
 console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
 console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));

 // Come Check Out This Crazy Function
crazyfunction = (a, b) => {
  let first = a;
  first ^= b;
  return first;
}
console.log(crazyfunction(10, 20));
console.log(crazyfunction(17, 35));
console.log(crazyfunction(61, 233));

// No Conditionals?
flip = (a) => {
  return  Math.abs(a - 1);
}
console.log(flip(0));
console.log(flip(1));