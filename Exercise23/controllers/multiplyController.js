// Expand on the previous exercises and update your application to use controllers instead.

const Calculator = require('../libraries/calculator')

exports.multiply = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    // let product = number1 * number2;
    let product = Calculator.multiply(number1, number2);  // Expand your application to use a Calculator library that takes care of the calculations and integrate it in your code.
    console.log(product);
    res.json({ result: product });
};
