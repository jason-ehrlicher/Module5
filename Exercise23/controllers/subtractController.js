// Expand on the previous exercises and update your application to use controllers instead.

const Calculator = require('../libraries/calculator')

exports.subtract = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    // let difference = number1 - number2;
    let difference = Calculator.subtract(number1, number2);  // Expand your application to use a Calculator library that takes care of the calculations and integrate it in your code.
    console.log(difference);
    res.json({ result: difference });
};
