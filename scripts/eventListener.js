export const eventListeners = () => {
  console.log("✅ eventListeners function loaded"); // Test Log

  const buttonCart = document.querySelector("#btnCart");
  const sideBar = document.querySelector(".side-bar-container");
  const buttonClose = document.querySelector("#btnClose");

  if (!buttonCart || !sideBar || !buttonClose) return;

  let isCartPinnedOpen = false;

  buttonCart.addEventListener("click", () => {
    isCartPinnedOpen = !isCartPinnedOpen;
    if(isCartPinnedOpen) {
      sideBar.classList.remove("hidden");
    } else {
      sideBar.classList.add("hidden");
    }
  });

  buttonClose.addEventListener("click", () => {
    sideBar.classList.add("hidden");
    isCartPinnedOpen = false;
  });

  buttonCart.addEventListener("mouseenter", () => {
    if(!isCartPinnedOpen) {
      sideBar.classList.remove("hidden");
    }
  });

  buttonCart.addEventListener("mouseleave", () => {
    if(!isCartPinnedOpen) {
      sideBar.classList.add("hidden");
    }
  });
};