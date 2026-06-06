// Data
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

// Init
function init() {
    renderCategories();
    renderProducts();
    updateCart();
}

// Render Categories
function renderCategories() {
    categoryContainer.innerHTML = categories.map(cat => `
        <button 
            onclick="filterCategory('${cat.id}')"
            class="category-btn flex flex-col items-center justify-center min-w-[90px] h-24 rounded-2xl bg-white shadow-sm cursor-pointer ${activeCategory === cat.id ? 'active' : 'text-gray-500'}">
            <div class="bg-gray-100 p-2 rounded-full mb-2 ${activeCategory === cat.id ? 'bg-white/20' : ''}">
                <i class="fa-solid ${cat.icon} text-xl"></i>
            </div>
            <span class="text-xs font-semibold">${cat.name}</span>
        </button>
    `).join('');
}

function filterCategory(id) {
    activeCategory = id;
    renderCategories();
    renderProducts();
}

// Render Products
function renderProducts() {
    const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
    
    productGrid.innerHTML = filtered.map(product => `
        <div class="food-card bg-white p-4 rounded-2xl shadow-sm relative group">
            <div class="h-32 w-full rounded-xl overflow-hidden mb-3">
                <img src="${product.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <h4 class="font-bold text-gray-800 text-sm truncate">${product.name}</h4>
            <p class="text-xs text-gray-400 mb-2">Delicious & Hot</p>
            <div class="flex justify-between items-center">
                <span class="text-gray-800 font-bold">$${product.price}</span>
                <button onclick="addToCart(${product.id})" class="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded-lg text-xs font-bold transition">Add</button>
            </div>
        </div>
    `).join('');
}

// Cart Logic
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if(existing) existing.qty++;
    else cart.push({...product, qty: 1});
    updateCart();
}

function updateCart() {
    cartContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 mb-4">
            <img src="${item.image}" class="w-12 h-12 rounded-full object-cover">
            <div class="flex-1">
                <h5 class="text-xs font-bold text-gray-800 truncate w-24">${item.name}</h5>
                <div class="text-xs text-gray-400">$${item.price}</div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="changeQty(${item.id}, -1)" class="w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center hover:bg-red-500 hover:text-white">-</button>
                <span class="text-xs font-bold w-3 text-center">${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)" class="w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center hover:bg-green-500 hover:text-white">+</button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.1;
    
    subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    taxEl.innerText = `$${tax.toFixed(2)}`;
    totalEl.innerText = `$${(subtotal + tax).toFixed(2)}`;
}

function changeQty(id, change) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.qty += change;
        if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
        updateCart();
    }
}

function clearCart() {
    cart = [];
    updateCart();
}

init();