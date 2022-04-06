const readline = require('readline-sync');
const addition = () => `The result is ${num1 + num2}`;
const subtraction = () => `The result is ${num1 - num2}`;
const multiplication = () => `The result is ${num1 * num2}`;
const division = () => {
  if (num2 === 0) {
    return 'Cannot divide by Zero';
  }
  {
    let divide = num1 / num2;
    let remain = num1 % num2;
    return `The result is ${divide.toFixed()}r${remain.toFixed()}`;
  }
};
function mathProblem() {
  problem = readline.question(`Give me a math equation: `);
  mathExp = problem.split(/\s*([-+/*])\s*/);
  num1 = Number(mathExp[0]);
  num2 = Number(mathExp[2]);
  operator = mathExp[1];
}
function calculate() {
  if (operator === '+') {
    return addition();
  } else if (operator === '-') {
    return subtraction();
  } else if (operator === '*') {
    return multiplication();
  } else if (operator === '/') {
    return division();
  }
}
mathProblem();
console.log(calculate());
