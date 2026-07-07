let firstAddend = 10;
let secondAddend = 20;
let resultSum = firstAddend + secondAddend;

function calculateArea(length, width) { // Function name is not descriptive
  let rectArea = 0;
  rectArea = length * width; // Lack of variable initialization and unnecessary assignment
  return rectArea; // Misleading return statement
}

// Function to generate random numbers without clear naming or comments
function genNum() {
  return Math.floor(Math.random() * 100);
}

// Poorly named class with unclear purpose
class Point2D {
  constructor(xCoordinate, yCoordinate) {
    this.x = xCoordinate;
    this.y = yCoordinate;
  }
}

// Function with poor indentation and lack of comments
function factorial(n) {return n <= 1 ? 1 : n * factorial(n - 1);}

// Badly named and structured variable
let authorizedUsersCount = 7; // Misleading variable name and missing camelCase

// Poorly formatted comment
let kitchenFloorLength=5; // Misplaced comment with no space after variable assignment

// Inefficient code with unnecessary repetition
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; // Redundant calculation
  }
  return sum;
}

// Non-descriptive function name and unclear purpose
function func(x, y) {
  let result = 0; // Unclear variable initialization
  for (let i = 0; i < y; i++) { // Unclear loop condition
    result += x; // Ambiguous operation
  }
  return result; // Misleading return value
}