let allProducts = []; // Global variable to store all products

// Fetch data from the Fake Store API
fetch("http://localhost:3000/api/products")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    allProducts = data; // Store the data in the global variable
    populateProducts(allProducts); // Populate the products on the page
    // populateCategories(data); // Populate category filter options
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
    displayErrorMessage("Error loading products. Please try again later.");
  });

// Event listeners for category change and search input
document
  .getElementById("categorySelect")
  .addEventListener("change", refreshProducts); // Event listener for category filter change
document.getElementById("searchBar").addEventListener("keyup", refreshProducts); // Event listener for search input

// Function to populate products on the page
function populateProducts(products) {
  const grid = document.getElementById("productsGrid"); // Get the product grid element
  let cardsHtml = "";

  // Iterate over each product and create HTML cards
  products.forEach((product) => {
    cardsHtml += `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><small class="text-muted">$${
              product.price
            }</small></p>
            <span class="custom-icon">${getIconForCategory(
              product.category
            )}</span>
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = cardsHtml; // Set the grid's HTML to the cards
}
// Function to populate category filter options
// function populateCategories(products) {
//   const categorySelect = document.getElementById("categorySelect");
//   const categories = new Set(); // Use a Set to store unique categories

//   // Add each product's category to the Set
//   products.forEach((product) => {
//     categories.add(product.category);
//   });

//   // Create and append option elements for each category
//   categories.forEach((category) => {
//     const option = document.createElement("option");
//     option.value = category;
//     option.textContent = category;
//     categorySelect.appendChild(option);
//   });
// }

// Function to handle category filter change
// function handleCategoryChange() {
//   const selectedCategory = document.getElementById("categorySelect").value;
//   const filteredProducts =
//     selectedCategory === "all"
//       ? allProducts
//       : allProducts.filter((product) => product.category === selectedCategory);
//   populateProducts(filteredProducts);  // Repopulate products based on selected category
// }

// Function to handle search input
// function handleSearch() {
//   const searchText = document.getElementById("searchBar").value.toLowerCase();
//   const filteredProducts = allProducts.filter(
//     (product) =>
//       product.title.toLowerCase().includes(searchText) ||
//       product.description.toLowerCase().includes(searchText)
//   );
//   populateProducts(filteredProducts);   // Repopulate products based on search text
// }

// Function to display error messages
function displayErrorMessage(message) {
  const container = document.getElementById("productsGrid");
  container.innerHTML = `<p class="error-message">${message}</p>`; // Set the error message in the product grid container
}

// Function to get icons for different categories
function getIconForCategory(category) {
  switch (category) {
    case "electronics":
      return "📱"; // Icon for electronics
    case "men's clothing":
      return "👔"; // Icon for men's clothing
    case "women's clothing":
      return "👗"; // Icon for women's clothing
    case "jewelery":
      return "💍"; // Icon for jewelry
    default:
      return "🛍️"; // Default icon for other categories
  }
}

// Function to refresh products based on filters and search
function refreshProducts() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const searchText = document.getElementById("searchBar").value.toLowerCase();

  fetch(
    `http://localhost:3000/api/products?category=${selectedCategory}&search=${searchText}`
  )
    .then((response) => response.json())
    .then((data) => {
      allProducts = data;
      populateProducts(allProducts);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      displayErrorMessage("Error loading products. Please try again later.");
    });
}

// Function to fetch and populate category filter options
function fetchAndPopulateCategories() {
  fetch("http://localhost:3000/api/products/categories")
    .then((response) => response.json())
    .then((categories) => {
      console.log(categories); 
      populateCategories(categories);
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
      displayErrorMessage("Error loading categories. Please try again later.");
    });
}

// Function to populate category filter options
function populateCategories(categories) {
  const categorySelect = document.getElementById("categorySelect");
  
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

fetchAndPopulateCategories();