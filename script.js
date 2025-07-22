import { eventListeners } from "./eventListener.js";
import { marketItems } from "./itemsObject.js";


document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");
  eventListeners();
});