// Import the readline module for user input
const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform calculations
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero';
      }
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return 'Error: Invalid operator';
  }
}

// Function to start the calculator
function startCalculator() {
  rl.question('Enter your first number: ', (firstInput) => {
    const num1 = parseFloat(firstInput);
    if (isNaN(num1)) {
      console.log('Error: Invalid number');
      return startCalculator();
    }

    rl.question('Enter an operator (+, -, *, /, %): ', (operator) => {
      if (!['+', '-', '*', '/', '%'].includes(operator)) {
        console.log('Error: Invalid operator');
        return startCalculator();
      }

      rl.question('Enter your second number: ', (secondInput) => {
        const num2 = parseFloat(secondInput);
        if (isNaN(num2)) {
          console.log('Error: Invalid number');
          return startCalculator();
        }

        const result = calculate(num1, operator, num2);
        console.log(`Result: ${result}`);

        rl.question('Do you want to perform another calculation? (y/n): ', (answer) => {
          if (answer.toLowerCase() === 'y') {
            startCalculator();
          } else {
            console.log('Goodbye! See you again');
            rl.close();
          }
        });
      });
    });
  });
}

// Start the calculator
console.log('Welcome to my Console Calculator!');
startCalculator();