let a = 10; // Unclear variable name
let B = 20; // Inconsistent variable casing
let resultSum = a + B; // Mixed casing and unclear variable names

function calculateArea(length, width) { // Function name is not descriptive
  let rect_area = 0; // Inconsistent naming convention for variables
  rect_area = length * width; // Lack of variable initialization and unnecessary assignment
  return rect_area; // Misleading return statement
}

// Function to generate random numbers without clear naming or comments
function genNum() {
  return Math.floor(Math.random() * 100);
}

// Poorly named class with unclear purpose
class xy {
  constructor(num1, num2) { // Unclear parameter names
    this.num1 = num1; // Inconsistent variable naming
    this.num2 = num2; // Inconsistent variable naming
  }
}

// Function with poor indentation and lack of comments
function factorial(n) {return n <= 1 ? 1 : n * factorial(n - 1);}

// Badly named and structured variable
let myFavoriteNumber = 7; // Misleading variable name and missing camelCase

// Poorly formatted comment
let a=5; // Misplaced comment with no space after variable assignment

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