const axios = require('axios');

const fetchProducts = async (category, search) => {
  try {
    let url = 'https://fakestoreapi.com/products';

    const response = await axios.get(url);
    let products = response.data;

    // Filter by category if provided
    if (category && category !== 'all') {
      products = products.filter(product => product.category === category);
    }

    // Search in title and description if search term is provided
    if (search) {
      search = search.toLowerCase();
      products = products.filter(product =>
        product.title.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)
      );
    }

    return products;
  } catch (error) {
    throw error;
  }
};

const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      const categories = new Set(products.map(product => product.category));
      return Array.from(categories);
    } catch (error) {
      throw error;
    }
  };

module.exports = { fetchProducts, fetchCategories };
