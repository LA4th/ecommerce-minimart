import { eventListeners } from "./scripts/eventListener.js";
import { marketItems } from "./scripts/itemsObject.js";


document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded"); // Test Log
  eventListeners();
});