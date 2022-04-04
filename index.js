const readline = require('readline-sync');

let operation = false;

function getOperators() {
  operator = readline.question(`What operation would you like to perform? `);
}

function getNumbers() {
  num1 = readline.questionInt(`Please enter the first number: `);
  num2 = readline.questionInt(`Please enter the second number: `);
}

function calculate(getNumbers) {
  if (operator === '+') {
    result = num1 + num2;
    console.log(`The result is: ${result}`);
  } else if (operator === '-') {
    result = num1 - num2;
    console.log(`The result is: ${result}`);
  } else if (operator === '*') {
    result = num1 * num2;
    console.log(`The result is: ${result}`);
  } else if (operator === '/') {
    result = num1 / num2;
    remain = num1 % num2;
    console.log(`The result is: ${result} r${remain.toFixed(2)}`);
  }
}

getOperators();

while (!operation) {
  if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
    getNumbers();
    calculate();
    operation = true;
    break;
  } else {
    console.log(`That is not a valid operation`);
    getOperators();
  }
}
