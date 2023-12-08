const productModel = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;
    const products = await productModel.fetchProducts(category, search);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

const getCategories = async (req, res) => {
    try {
      const categories = await productModel.fetchCategories();
      console.log(categories); 
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching categories' });
    }
  };
 
  
module.exports = { getProducts, getCategories };
