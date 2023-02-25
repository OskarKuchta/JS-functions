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

// Number Split
numberSplit = (a) => {
  let first = Math.floor(0.5 * a);
  let second = Math.ceil(0.5 * a);
  let array = [];
  array.push(first);
  array.push(second);
  return array;
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));

// Sum of Multiplication 
multiSum = (a) => {
  let number = 0;
  for(let i=1; i <= 10; i++){
      number += a * i;
  }
  return number;
}
console.log(multiSum(1));
console.log(multiSum(6));
console.log(multiSum(10));
console.log(multiSum(8));

// filter Array
filterArray = (a) => {
  checkArray = (item) => {
    return Number.isInteger(item);
  }
  let show = a.filter(checkArray);
  return show;
  }
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

//Seven Boom!
sevenBoom = (a) => {
  let arr = a;
  let arr2 = arr.toString();
  let regex = /7/i;
  let show = arr2.match(regex);
  checkArray = (item) => {
      if (item == 7) {
          return "Boom!";
      }
      return "there is no 7 in the array";
  }
  show = checkArray(show);
  return show;
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
console.log(sevenBoom([29, 14, 60, 9, 58]));

// Incorrect Import Statement 
fixImport = (a) => {
  let array = a.split(' ');
  let firstItem = array.splice(0,1);
  let secondItem = array.splice(0,1);
  let firstConvert = firstItem.toString();
  let secondConvert = secondItem.toString();
  array.push(firstConvert);
  array.push(secondConvert);
  let result = array.join(' ');
 return result;
}
console.log(fixImport("import object from module_name"));
console.log(fixImport("import randint from random"));
console.log(fixImport("import pi from math"));

//Error Messages
error = (a) => {
  let obj = {
  1:"Check the fan: e1",
  2:"Emergency stop: e2",
  3: "Pump Error: e3",
  4:"c: e4",
  5:"Temperature Sensor Error: e5"
  }
  return obj[a];
}
console.log(error(1));
console.log(error(2));
console.log(error(4));

// Spotlight Sum 
spotlight_sum = (a) => {
const array = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];
let arr1 = (a * 8) + a;
return arr1;
}
console.log(spotlight_sum(19));
console.log(spotlight_sum(48));
console.log(spotlight_sum(88));

//Repeating Letters
doubleChar = (a) => {
  let check = a.split('');
  let doubleString = check.map((item) => {return item + item});
  let result = doubleString.join('');
  return result;
}
console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));

// RegEx XV
RegexFive = (a) => {
  let check = a;
  const reg = /[^a-z, 0-9, ]/g;
  let result = check.match(reg);
  return result;
}
console.log(RegexFive("alice15@gmail.com"));

// Sort by String Length
sortByLength = (a) => {
let result = a.sort((a,b) => { return a.length-b.length;});
return a;
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));

// Sum of Cubes
sumOfCubes = (a) => {
  let array = a;
  let arr = array.map((x) => { return x ** 3});
  let result = arr.reduce((sum, number) => { return sum + number})
return result;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));

// Highest Digit
highestDigit = (a) => {
  let text = a;
  let check = String(a).split('');
  let result = Math.max(...check);
  return result;
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));

// Pi to N Decimal Places
myPi = (a) => {
  return Math.PI.toFixed(a);
}
console.log(myPi(2));
console.log(myPi(5));
console.log(myPi(15));

// Recursion to Repeat a String n Number of Times
repetition = (a, b) => {
  return a.repeat(b);
}
console.log(repetition("ab", 3));
console.log(repetition("kiwi", 1));
console.log(repetition("cherry", 2));

// Burglary Series (10): Calculate Difference
calculateDifference = (a, b) => {
  let array = Object.values(a);
  let add = array.reduce((item, total) => item + total);
  let result = add - b;
  return result;
}
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Simple time clock 
simpleClock = () => {
  let data = new Date();
  document.getElementById("clock").innerHTML = "<b>" + data.toLocaleTimeString() + "</b>";
}
setInterval(simpleClock, 1000);

// Is the Average of All Elements a Whole Number?
isAvgWhole = (a) => {
  let result = Number.isInteger((a.reduce((item, total) => item + total) / a.length));
return result;
}
console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));

// Absolute Sum
getAbsSum = (a) => {
  let array = a;
  let result = array.reduce((item, total) => Math.abs(item)+ Math.abs(total));
  return result;
}
console.log(getAbsSum([2, -1, 4, 8, 10]));
console.log(getAbsSum([-3, -4, -10, -2, -3]));
console.log(getAbsSum([2, 4, 6, 8, 10]));

// Drop the First Elements of an Array
drop = (a, b) => {
  const array = a;
  return array.splice(b, 100);
  }
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
   
//  Upvotes vs Downvotes  
getVoteCount = (a) => {
  if (a.upvote > 0) {
    return a.upvote - a.downvote;
  }
   }
console.log(getVoteCount({upvote: 13,downvote: 2}));
console.log(getVoteCount({upvote: 126,downvote: 126}));
console.log(getVoteCount({upvote: 10,downvote: 33}));

// Reverse the number
   
reverseNumber = (number) => {
  return number.toString().split('')
    .reverse()
    .join('');
}
console.log(reverseNumber(12345));
console.log(reverseNumber(173939));

// Recursion: Factorials
  factorial = (a) => {
    for(let i = a - 1; i >= 1; i--){
      a = a * i;
    }
    return a;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));

// Sort Numbers in Ascending Order
sortNumsAscending = (a) => {
let check = a;
if(a === null || a === []) {
  return [];
}
let sortingArray = check.sort((item,second) => {return item - second});
return sortingArray;
}
console.log(sortNumsAscending([1, 2, 10, 50, 5]));
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));
console.log(sortNumsAscending(null));
console.log(sortNumsAscending([]));

// Find the Bomb
bomb = (a) => {
  let check = a.match(/bomb/gi);
  if(check) {
    return "Duck!!!";
  }
  return "There is no bomb, relax.";
}
console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you think there is a bomb?"));
console.log(bomb("This goes boom!!!"));

// Remove Every Vowel from a String
removeVowels = (a) => {
  let filtering = a.match(/[^aeiou]/g);
  return filtering.join('');
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
console.log(removeVowels("We're gonna build a wall!"));
console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));

// Return the Index of the First Vowel
firstVowel = (a) => {
  let search = a.match(/[aeiou]/i);
  return search.index;
}
console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("STRAWBERRY"));
console.log(firstVowel("pInEaPPLe"));

// Is it True?
isTrue = (a) => {
  return eval(a.replace("=", "==="));
}
console.log(isTrue("2=2"));
console.log(isTrue("8<7"));
console.log(isTrue("5=13"));

// Calculate the Mean 
mean = (a) => {
 let sum =  a.reduce((item,total) => (item + total));
 return (sum / a.length).toFixed(2);
}
console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));
console.log(mean([2, 3, 2, 3]));
console.log(mean([3, 3, 3, 3, 3]));

// How Much is True?
countTrue = (a) => {
  let arr = a;
  let str = arr.join(' ');
  let searchingTrue = str.match(/true/g);
  if(searchingTrue) {
    return searchingTrue.length;
  }
  return 0;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

// A Redundant Function
Closures = () => {
f1 = () => {
  return "apple";
}
f2 = () => {
  return "pear"
}
f3 = () => {
  return " ";
}
}
Closures();
console.log(f1());
console.log(f2());
console.log(f3());

// RegEx Exercise: An empty string
matchReg = () => {
  let str = "";
  return str.length === 0 ? true : false;
}
console.log(matchReg());

// Tile Teamwork Tactics
possibleBonus = (a,b) => {
  return (b - a) <= 6 && (b - a) > 0;
}
console.log(possibleBonus(3,7));
console.log(possibleBonus(1,9));
console.log(possibleBonus(5,3));

// Derivative of a Function
derivative = (a, b) => {
  return a * b ** (a - 1);
 }
 console.log(derivative(1, 4));
 console.log(derivative(3, -2));
 console.log(derivative(4, -3));
 
// Which Generation Are You?
generation = (a, b) => {
  let number = a;
  if (b === "m") {
   let objM = {
    1: "son",
    2: "grandson",
    3: "great grandson",
    0: "me!",
    "-1": "father",
    "-2": "grandfather",
    "-3": "great grandfather"
   }
   return objM[number];
  }
  if (b === "f") {
   let objF = {
    1: "daughter",
    2: "granddaughter",
    3: "great granddaughter",
    0: "me!",
    "-1": "mother",
    "-2": "grandmother",
    "-3": "great grandmother"
   }
   return objF[number];
  }
 }
 console.log(generation(2, "f"));
 console.log(generation(-3, "m"));
 console.log(generation(1, "f"));

 // Find the nth Tetrahedral Number
tetra = (a) => {
  return (a * (a + 1) * (a + 2)) / 6;
 }
 console.log(tetra(2));
 console.log(tetra(5));
 console.log(tetra(6));

 // Learn Lodash (2): Compact
compact = (a) => {
  return a.filter(Boolean);
 }
 console.log(compact([0, 1,
  false, 2, "", 3
 ]));
 
 // Function Factory
plusFive = (a) => {
  return a + 5;
 }
 plusTen = (b) => {
  return b + 10;
 }
 console.log(plusFive(2));
 console.log(plusFive(-8));
 console.log(plusTen(0));
 console.log(plusFive(plusTen(0)));

// Converting Objects to Arrays
toArray = (a) => {
  return Object.entries(a);
 }
 console.log(toArray({a: 1,b: 2}));
 console.log(toArray({shrimp: 15,tots: 12}))
 console.log(toArray({}));

 // Concatenate Variable Number of Input Arrays
concat = (a) => {
  let result = a;
  return result.flatMap(word => word);
 }
 console.log(concat([[1, 2, 3],[4, 5],[6, 7]]));
 console.log(concat([[1],[2],[3],[4],[5],[6],[7]]));
 console.log(concat([4, 4, 4, 4, 4]));

 // All About Anonymous Functions: Adding Suffixes
addText = (a) => {
  add_ly = (b) => {
   return b + "ly";
  }
  add_less = (c) => {
   return c + "less";
  }
 }
 addText();
 console.log(add_ly("hopeless"));
 console.log(add_ly("total"));
 console.log(add_less("fear"));
 console.log(add_less("ruth"));

 // Triangular Number Sequence
triangle = (a) => {
  return a * (a + 1) / 2
 }
 console.log(triangle(1));
 console.log(triangle(6));
 console.log(triangle(215));

 // Make a Circle with OOP
class Circle {
  constructor(radius) {
   this.radius = radius;
  }
  getArea = (a) => {
   return Math.PI * (this.radius ** 2);
  }
  getPerimeter = (b) => {
   return Math.PI * 2 * this.radius;
  }
 }
 let circy = new Circle(11);
 console.log(circy.getArea().toFixed(2));
 circy = new Circle(4.44);
 console.log(circy.getPerimeter().toFixed(2));

 // Convenience Store
changeEnough = (a, b) => {
  return (a[0] * 0.25 + a[1] * 0.1 + a[2] * 0.05 + a[3] * 0.01) >= b;
 }
 console.log(changeEnough([2, 100, 0, 0], 14.11));
 console.log(changeEnough([0, 0, 20, 5], 0.75));
 console.log(changeEnough([30, 40, 20, 5], 12.55));

 // Array of Multiples
arrayOfMultiples = (a, b) => {
  let arr = [];
  for (let i = 1; i <= b; i++) {
   arr.push(i * a);
  }
  return arr;
 }
 console.log(arrayOfMultiples(7, 5));
 console.log(arrayOfMultiples(12,10));
 console.log(arrayOfMultiples(17, 6));

 // Return the Objects Keys and Values
keysAndValues = (a) => {
  let arr = [];
  arr.push(Object.keys(a));
  arr.push(Object.values(a));
  return arr;
 }
 console.log(keysAndValues({a: 1, b: 2, c: 3}));
 console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));
 console.log(keysAndValues({key1: true,key2: false,key3: undefined}));

 // Front 3 - Slice Check Repeat Concatenate
frontThree = (a) => {
  let s = a.slice(0, 3);
  return s + s + s;
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));

// Summary Array
sumArray = (a) => {
  let sum = a.reduce(summary = (a, b) => {
     return a + b
    });
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));

// Search number in array
findInArray = (number) => {
let found = false;
const arr = [
  [1, 2, 7],
  [27, 37, 45],
  [62, 71, 92]
 ];
arr.forEach(innerArray => {
  if (innerArray.indexOf(number) !==-1) {
    found = true;
    return found;
  }
})
return found;
}
console.log(findInArray(92));
console.log(findInArray(0));
console.log(findInArray(27));

// Even All the Way 
getOnlyEvens = (a) => {
  let arr = a;
  let result = arr.filter((item, index) => item % 2 === 0 && index % 2 === 0);
   return result;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));

// How Many Vowels?
countVowels = (a) => {
  return a.match(/[aeiou]/gi).length;
   /* let text = a;
    let regexp = /[aeiou]/gi;
    let result = text.match(regexp);
    return result.length;
    */
}
console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));

// Check If It's a Title String
checkTitle = (a) => {
  let arr = a.split(" ");
  let result = arr.every((item) => item[0] === item[0].toUpperCase())
    return result;
}
console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("A Simple Java Script Program!"));
console.log(checkTitle("Water is transparent"));

// Right Shift by Division
shiftToRight = (a, b) => {
  if (b => 0) {
    return Math.floor(a / (2 ** b));
  }
}
console.log(shiftToRight(80,3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));
console.log(shiftToRight(4666, 6));
console.log(shiftToRight(3777, 6));
console.log(shiftToRight(-512,10));

// Perimeters with a Catch
perimeter = (l,num) => {
  let s = 4;
  let c = 6.28;
  return l === "s" ? 4 * num : 6.28 * num;
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));

// Find Number of Digits in Number 
num_of_digits = (a) => {
  let check = a.toString().split('');
    return check.length;
}
console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));

// Burglary Series (04): Add its Name
addName = (a, b, c) => {
  let obj = a;
  let name = b;
  let obj2 = {[name]: c};
  let result = Object.assign(obj, obj2);
    return result;
}
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

// Convert Key, Values in an Object to Array
objectToArray = (a) => {
  return Object.entries(a);
 }
 console.log(objectToArray({D: 1,B: 2,C: 3}));
 console.log(objectToArray({likes: 2,dislikes: 3,followers: 10}));
 
 // Integer in Range?
 intWithinBounds = (a, l, h) => {
  if (a * a <= h && a * a >= l) {
   return true;
  }
  return false;
 }
 console.log(intWithinBounds(3, 1, 9));
 console.log(intWithinBounds(6, 1, 6));
 console.log(intWithinBounds(4.5, 3,8));

  // Reverse Words in a String
  reverseWords = (a) => {
 
    return a.trim().split(" ").reverse().join(" ");
   }
   console.log(reverseWords(" the sky is blue"));
   console.log(reverseWords("hello   world!  "));
   console.log(reverseWords("a good example"));
   
   //  Integer Digits Count
 count = (a) => {
  let conversion = String(a).match(
   /[0-9]/gi);
  return conversion.length;
 }
 console.log(count(318));
 console.log(count(-49427));
 console.log(count(5482));

 // Is the Number a Repdigit
 isRepdigit = (a) => {
  if (a >= 0) {
   let result = String(a).split("");
   if (result[0] === result[1] ||
    result[0] == 0) {
    return true;
   }
  }
  return false;
 }
 console.log(isRepdigit(66));
 console.log(isRepdigit(65));
 console.log(isRepdigit(0));
 console.log(isRepdigit(-11));
 

 // Even Number?
 evenNumber = (a) => {
  return a % 2 === 0;
 }
 console.log(evenNumber("431"));
 console.log(evenNumber("132"));
 console.log(evenNumber("29"));

// Find the Largest Numbers in a Group of Arrays
 findLargestNums = (a) => {
 return a.map(item => {return Math.max(...item)});
 }
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423,4.314], [9, 3, 6, 3]]));

// Sort the Unsortable
sortIt = (a) => {
  return a.sort((item, item2) =>
    item - item2);
}
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));

// Remove Trailing and Leading Zeros
removeLeadingTrailing = (a) => {
  return parseFloat(a);
}
console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30"));

//  Value vs. Reference Types
checkEquals = (a, b) => {
  let first = String(a);
  let second = String(b);
  return first === second;
}
console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));

// Flattening an Array
flatten = (a) => {
  let result = a.flatMap(item => item);
  return result;
}
console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([["a", "b"], ["c", "d"]]));
console.log(flatten([[true, false], [false, false]]));

// Travelling Salesman Problem
paths = (a) => {
  let roads = 1;
  let num = a;
  for (let i = 1; i <= num; i++) {
    roads *= i;
  }
  return roads;
}
console.log(paths(4)); // 24 // 3 = 6
console.log(paths(1)); // 1
console.log(paths(9)); //362880

// Returning an "Add" Function
add = (x) => (y) => x + y;
console.log(add(10)(20));
console.log(add(0)(20));
console.log(add(-30)(80));

// Scrabble Hand
Scrable = (a) => {
  let number = 0;
  return a.reduce((first, second) => {
    return first + second.score
  }, number)
}
console.log(Scrable([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }]));
console.log(Scrable([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
]));

// Sort Numbers in Descending Order
sortDescending = (a) => {
  return String(a).split("").sort((item, itemTwo) => itemTwo - item).join("");
}
console.log(sortDescending(123));
console.log(sortDescending(1254859723));
console.log(sortDescending(73065));

// Find the Second Largest Number
secondLargest = (a) => {
  let sorting = a.sort((item, itemTwo) => item - itemTwo);
  return sorting[sorting.length - 2];
}
console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));

// Basic Calculator
calculator = (a, b, c) => {
 return c !== 0 ? eval(a + b + c) : "Can't divide by 0!";
}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));

// Volume of a Cone
coneVolume = (a, b) => {
  if(b !== 0) {
    return ((Math.PI * (b ** 2) * a) / 3).toFixed(2);
  }
  return 0;
}
console.log(coneVolume(3, 2));
console.log(coneVolume(15, 6));
console.log(coneVolume(18, 0));

// Is it an Object?
isObject = (a) => {
  return a instanceof Object;
}
console.log(isObject(function add(x,y) {return x + y}));
console.log(isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')));
console.log(isObject(null));
console.log(isObject(""));

// Get the Area of a Country
areaOfCountry = (a, b) => {
  let total = 148940000;
  let percent = (b / total * 100).toFixed(2) + "%";

  return a + " is " + percent + " of the total world's landmass";
}
console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));

// Square Every Digit
squareDigits = (a) => {
  return a.toString().split("").map(item => item ** 2).join("");
}
console.log(squareDigits(9119));
console.log(squareDigits(2483));
console.log(squareDigits(3212));

// Find the Discount
dis = (a, b) => {
  return a - (b * a) / 100;
} 
console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(100, 75));

// Capitalize by ASCII
asciiCapitalize = (a) => {
  let convert = a.split("")
  let check = convert.map(item => item.charCodeAt(0) % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join("");
  return check;
}
console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));

// Is the Number Symmetrical?
isSymmetrical = (a) => {
  let text = a.toString().split("");
  let reversing = text.reverse().join("");
  return reversing == a ? true : false;
}
console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(44444444));
console.log(isSymmetrical(1112111));

// Phone Number Formatting
formatPhoneNumber = (a) => {
  let change = a.join("");
  let first = change.slice(0, 3);
  let second = change.slice(2, 5);
  let third = change.slice(5, 9)
  return "(" + first + ") " + second + "-" + third;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
