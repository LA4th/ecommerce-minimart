const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/200x150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "https://via.placeholder.com/200x150",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/200x150",
  }
];

let cart = [];

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");
const cartCount = document.getElementById("cart-count");
const cartBtn = document.getElementById("cart-btn");
const cartPanel = document.getElementById("cart");

// Render products
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productContainer.appendChild(div);
});

// Add to cart
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

// Update cart UI
function updateCart() {
  cartItems.innerHTML = "";
  let totalAmount = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    totalAmount += item.price;
  });

  total.textContent = totalAmount.toFixed(2);
  cartCount.textContent = cart.length;
}

// Toggle cart visibility
cartBtn.addEventListener("click", () => {
  cartPanel.style.display = cartPanel.style.display === "block" ? "none" : "block";
});
