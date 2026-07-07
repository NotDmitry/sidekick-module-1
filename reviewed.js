let firstAddend = 10;
let secondAddend = 20;
let resultSum = firstAddend + secondAddend;

function getRectArea(length, width) {
  return length * width;
}

// Generates a random integer number from 0 (inclusive) to 99 (inclusive)
function genRandomIntNumber() {
  return Math.floor(Math.random() * 100);
}

class Point2D {
  constructor(xCoordinate, yCoordinate) {
    this.x = xCoordinate;
    this.y = yCoordinate;
  }
}

function getFactorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

let authorizedUsersCount = 7;

let kitchenFloorLength = 5;

function getArrayElementsSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
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