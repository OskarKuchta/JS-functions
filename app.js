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
  else {
    return false;
  }
 }
 else {
  return false;
 }
}
console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));