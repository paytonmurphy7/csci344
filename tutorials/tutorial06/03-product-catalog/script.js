const products = [
    {
        name:"Laptop",
        price:999.99,
        description: "High-performance laptop for work and play",
        category:"Electronics",
        inStock: true
    },
    {
        name: "Coffee Maker",
        price: 49.99,
        description: "Brew perfect coffee every morning",
        category: "Appliances",
        inStock: false
    },
    {
        name:"Wireless Headphones",
        price: 79.99,
        description: "Comfortable on the ears",
        category: "Electronics",
        inStock: true
    }

];
const productGrid = document.querySelector('#productGrid');
const productForm = document.querySelector('#productForm');

function formatPrice(price){
    return `$${price.toFixed(2)}`;
}