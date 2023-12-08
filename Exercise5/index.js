const express = require("express"); // import the express package
const app = express(); // create a new app
const port = 3000;

const productRoutes = require("./routes/productRoutes");

app.use("/", express.static("public"));

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
