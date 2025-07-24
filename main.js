import { eventListeners } from "./scripts/eventListener.js";
import { renderItems } from "./scripts/renderItems.js";


document.addEventListener("DOMContentLoaded", () => {
  /* console.log("✅ DOM fully loaded"); // Test Log */
  eventListeners();
  renderItems();
});
