console.log("js loaded..");

const categories = [
    { id: "all", name: "All", icon: "fa-utensils" },
    { id: "burger", name: "Burger", icon: "fa-burger" },
    { id: "pizza", name: "Pizza", icon: "fa-pizza-slice" },
    { id: "salads", name: "Salads", icon: "fa-leaf" },
    { id: "pasta", name: "Pastas", icon: "fa-bowl-food" },
    { id: "drinks", name: "Drinks", icon: "fa-glass-water" }
];

const products = [
    { id: 1, name: "Chicken Biryani", category: "rice", price: 20.21, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Cheese Burger", category: "burger", price: 18.23, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Mozzarella Pizza", category: "pizza", price: 35.63, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Milky Banana", category: "drinks", price: 20.17, image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Veggie Pakora", category: "salads", price: 19.22, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Tandoori Paneer", category: "salads", price: 25.13, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80" }
];

let cart = [
    // Pre-filling cart to match your screenshot example
    { id: 101, name: "Italian Pasta", price: 20.36, qty: 1, image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=100&q=80" }
];
let activeCategory = "all";

// Elements
const categoryContainer = document.getElementById('category-container');
const productGrid = document.getElementById('product-grid');
const cartContainer = document.getElementById('cart-items-container');
const subtotalEl = document.getElementById('subtotal-price');
const taxEl = document.getElementById('tax-price');
const totalEl = document.getElementById('total-price');
