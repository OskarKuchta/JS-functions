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
 