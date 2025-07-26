import { eventListeners } from "./scripts/eventListener.js";
import { renderItems } from "./scripts/renderItems.js";
import { searchBarFilter } from "./scripts/searchBarFilter.js";
import { cartHandler } from "./scripts/cartHandle.js";


document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
  renderItems();
  searchBarFilter();
  cartHandler();
});
