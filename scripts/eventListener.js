import { clearCart, updateSidebarCart } from "./cartHandle.js";

let isCartPinnedOpen = false;

const buttonCart = document.querySelector("#btnCart");
const sideBar = document.querySelector(".side-bar-container");
const buttonClose = document.querySelector("#btnClose");
const btnPay = document.getElementById("btnPay");
const loadingScreen = document.getElementById("loadingScreen");
const itemsContainer = document.querySelector(".items-container");

export const openSidebar = () => {
  sideBar.classList.remove("hidden");
  isCartPinnedOpen = true;
};

export const closeSidebar = () => {
  sideBar.classList.add("hidden");
  isCartPinnedOpen = false;
};

export const toggleSidebar = () => {
  isCartPinnedOpen ? closeSidebar() : openSidebar();
};

export const eventListeners = () => {
  if (!buttonCart || !sideBar || !buttonClose) return;

  buttonCart.addEventListener("click", () => {
    toggleSidebar();
  });

  buttonClose.addEventListener("click", () => {
    closeSidebar();
  });

  // Observer to monitor changes in cart items
  if (itemsContainer) {
    const observer = new MutationObserver(() => {
      const btnPay = document.getElementById("btnPay");
      const hasItems = itemsContainer.querySelectorAll(".cart-item").length > 0;
      btnPay.disabled = !hasItems;
      btnPay.style.opacity = hasItems ? "1" : "0.5";
      btnPay.style.cursor = hasItems ? "pointer" : "not-allowed";
    });
    observer.observe(itemsContainer, { childList: true });
  }

  if (btnPay && loadingScreen) {
    btnPay.addEventListener("click", () => {
      if (btnPay.disabled) return;

      loadingScreen.classList.remove("hidden");

      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        alert("Payment successful!");
        clearCart();
        closeSidebar();
      }, 3000);
    });
  }
};
