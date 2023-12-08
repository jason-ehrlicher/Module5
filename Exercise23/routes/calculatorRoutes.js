const express = require("express");
const router = express.Router();




// router.get("/add", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   let sum = number1 + number2;
//   console.log(sum);
//   res.status(200);
//   res.json({ result: sum });
// });

// Add server routes for the remaining core mathematical operations (subtract, multiply, divide) based on the add example given in the slides.

// router.get("/subtract", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   let difference = number1 - number2;
//   console.log(difference);
//   res.status(200);
//   res.json({ result: difference });
// });

// router.get("/multiply", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   let product = number1 * number2;
//   console.log(product);
//   res.status(200);
//   res.json({ result: product });
// });

// router.get("/divide", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   if (number2 === 0) {
//     res.status(400).json({ error: "Cannot divide by zero" });
//   } else {
//     let quotient = number1 / number2;
//     console.log(quotient);
//     res.status(200).json({ result: quotient });
//   }
// });

// Expand on the previous exercises and update your application to use controllers instead.

const addController = require("../controllers/addController");
const subtractController = require("../controllers/subtractController");
const multiplyController = require("../controllers/multiplyController");
const divideController = require("../controllers/divideController");

router.get("/add", addController.add);
router.get("/subtract", subtractController.subtract);
router.get("/multiply", multiplyController.multiply);
router.get("/divide", divideController.divide);

module.exports = router;
