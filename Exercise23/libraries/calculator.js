const Logger = require("../libraries/logger");

// Expand your application to use a Calculator library that takes care of the
// calculations and integrate it in your code.

class Calculator {
  // Change the Calculator library to use a random number as the ID

  static id = Date.now();

  constructor() {
    Logger.logOperation(`Calculator created with ID: ${this.id}`);
  }

  static add(number1, number2) {
    Logger.logOperation(`Add called on Calculator ID ${this.id}`); // Ensure that every Calculator method still logs every call to the console.

    return number1 + number2;
  }

  static subtract(number1, number2) {
    Logger.logOperation(`Subtract called on Calculator ID ${this.id}`);
    return number1 - number2;
  }

  static multiply(number1, number2) {
    Logger.logOperation(`Multiply called on Calculator ID ${this.id}`);
    return number1 * number2;
  }

  static divide(number1, number2) {
    if (number2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    Logger.logOperation(`Divide called on Calculator ID ${this.id}`);
    return number1 / number2;
  }
}

module.exports = Calculator;
