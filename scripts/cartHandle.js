import { marketItems } from "./itemsObject.js";

const cart = [];

export const updateSidebarCart = () => {
  const container = document.querySelector(".items-container");
  container.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    totalPrice += item.quantity * item.price;

    const div = document.createElement("div");
    div.classList.add("items-container-add", "cart-item"); // Added .cart-item

    div.innerHTML = `
      <img id="items-picture" src="${item.image}" alt="${item.name}" />
      <div class="items-info">  
        <div class="item-info-name">${item.name}</div>
        <div class="item-info-price">Price: $${item.price}</div>
        <div class="item-info-stocks">Stocks: ${item.stock}</div>
        <div class="incriment-container">
          <button class="btnDecrement" data-name="${item.name}"><i class="fa-solid fa-minus"></i></button>
          <input class="countIncrement" type="number" readonly value="${item.quantity}" />
          <button class="btnIncrement" data-name="${item.name}"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="btnRemove" data-name="${item.name}">
          <i class="fa-solid fa-trash"></i>
          <span>Remove</span>
        </button>
      </div>
    `;

    container.appendChild(div);
  });

  document.getElementById("numberItems").textContent = `Number of Items: ${totalItems}`;
  document.getElementById("totalPrice").textContent = `Total: $${totalPrice}`;
  document.getElementById("btnCart").innerHTML = `
    <i class="fa-solid fa-cart-shopping"></i>${totalItems}
  `;

  const btnPay = document.getElementById("btnPay");
  if (btnPay) {
    btnPay.disabled = cart.length === 0;
    btnPay.style.opacity = cart.length > 0 ? "1" : "0.5";
    btnPay.style.cursor = cart.length > 0 ? "pointer" : "not-allowed";
  }
};

const findItemByName = (name) => {
  const allItems = [
    ...marketItems.items[0].foods,
    ...marketItems.items[0].drinks,
    ...marketItems.items[0].personalCares,
    ...marketItems.items[0].medicines,
  ];
  return allItems.find(item => item.name === name);
};

const setupCartEvents = () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.closest("#btnAddCart")) {
      const name = e.target.dataset.name;
      const product = findItemByName(name);
      if (!product || product.stock <= 0) return;

      const existing = cart.find(item => item.name === name);
      if (existing) {
        if (existing.stock > 0) {
          existing.quantity++;
          existing.stock--;
          product.stock--;
        }
      } else {
        cart.push({
          name: product.name,
          image: product.image,
          price: product.price,
          stock: product.stock - 1,
          quantity: 1
        });
        product.stock--;
      }

      updateCardStocks(name, product.stock);
      updateSidebarCart();

      document.querySelector(".side-bar-container")?.classList.remove("hidden");
    }

    if (e.target.closest(".btnIncrement")) {
      const name = e.target.closest(".btnIncrement").dataset.name;
      const item = cart.find(i => i.name === name);
      const product = findItemByName(name);
      if (item && item.stock > 0) {
        item.quantity++;
        item.stock--;
        product.stock--;
        updateCardStocks(name, product.stock);
        updateSidebarCart();
      }
    }

    if (e.target.closest(".btnDecrement")) {
      const name = e.target.closest(".btnDecrement").dataset.name;
      const item = cart.find(i => i.name === name);
      const product = findItemByName(name);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.stock++;
        product.stock++;
        updateCardStocks(name, product.stock);
        updateSidebarCart();
      } else if (item && item.quantity === 1) {
        item.stock++;
        product.stock++;
        cart.splice(cart.indexOf(item), 1);
        updateCardStocks(name, product.stock);
        updateSidebarCart();
      }
    }

    if (e.target.closest(".btnRemove")) {
      const name = e.target.closest(".btnRemove").dataset.name;
      const index = cart.findIndex(i => i.name === name);
      const product = findItemByName(name);
      if (index !== -1) {
        product.stock += cart[index].quantity;
        updateCardStocks(name, product.stock);
        cart.splice(index, 1);
        updateSidebarCart();
      }
    }
  });
};

const updateCardStocks = (name, newStock) => {
  const card = document.querySelector(`.card-container[data-name="${name.toLowerCase()}"]`);
  if (card) {
    const stockDiv = card.querySelector(".card-items-stocks");
    if (newStock <= 0) {
      card.remove();
    } else {
      stockDiv.textContent = `Stocks: ${newStock}`;
    }
  }
};

export const cartHandler = () => {
  setupCartEvents();
};

export const clearCart = () => {
  cart.length = 0;
  updateSidebarCart();
};
