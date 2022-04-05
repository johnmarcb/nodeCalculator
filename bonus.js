const readline = require('readline-sync');
// const readline

let mathProblem = () =>
  readline.question(`Give me a math equation: `).split(/[\+\-\*\./\"]/);

console.log(mathProblem());
