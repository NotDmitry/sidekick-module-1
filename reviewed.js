const FIRST_ADDEND = 10;
const SECOND_ADDEND = 20;
const resultSum = FIRST_ADDEND + SECOND_ADDEND;

/**
* @param {number} length - length of a rectangle
* @param {number} width - width of a rectangle
* @returns {number} area - area of a rectangle
*/
function getRectangularArea(length, width) {
  return length * width;
}

// Generates a random integer number from 0 (inclusive) to 99 (inclusive)
function generateRandomInteger() {
  return Math.floor(Math.random() * 100);
}

class Point2D {
  constructor(xCoordinate, yCoordinate) {
    this.x = xCoordinate;
    this.y = yCoordinate;
  }
}

// n! (n factorial) = 1 * 2 * 3 * ... * n
function getFactorial(n) {
  // A base case to exit from recursion (to prevent infinite loop)
  // 1! = 1
  if (n <= 1) {
    return 1;
  }

  return n * getFactorial(n - 1);
}

// Auth currently in testing phase, used stub instead
const authorizedUsersCount = 7;

// The kitchen is still being built, temporary hard-coded value
const kitchenFloorLength = 5;

function getArrayElementsSum(arr) {
  return arr.reduce((sum, currentValue) => sum + currentValue, 0);
}

/* The result depends on argument type:
 * [number] -> multiplication by repeatCount (if positive) or 0
 * [string] -> repeated string with leading "0" (if repeatCount positive) or 0
 * Consider adding "typeof" check in order to prevent ambiguity
*/
function multiplyValue(value, repeatCount) {
  let result = 0;

  for (let i = 0; i < repeatCount; i++) {
    result += value;
  }

  return result;
}
