// --- Array of Objects ---

const products = [
    { name: "Laptop", price: 700 },
    { name: "Phone", price: 300 },
    { name: "Tablet", price: 400 }
];

// Find first product with price > 350
const result = products.find(item => item.price > 350);
console.log("First expensive product:", result);

// Print all product names
products.forEach(product => {
    console.log(product.name);
});
