// Write your code here

// Step 1: Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Step 2: Access Product Information
function logFirstProduct() {
    console.log("First Product:", products[0]);
}

// Step 3: Update Product Information
function updateProductName(position, newName) {
    if (position >= 0 && position < products.length) {
        products[position] = newName;
        console.log(`Product updated at position ${position}:`, products[position]);
    } else {
        console.log("Invalid position. Please provide a valid index.");
    }
}

// Step 4: Remove a Product
function removeLastProduct() {
    const removedProduct = products.pop();
    console.log(`Removed Product: ${removedProduct}`);
    console.log("Updated Product List:", products);
}

// Example usage: Includes 
logFirstProduct(); // Logs "Laptop"
updateProductName(1, "Tablet"); // Updates "Phone" to "Tablet"
removeLastProduct(); // Removes "Monitor"


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
