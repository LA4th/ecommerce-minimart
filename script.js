let price = document.getElementById("prices");
let stocks = document.getElementById("stocks");
let cartCount = document.getElementById("count-cart");

let count = 0;

function addCartFunction() {
  count++;
  cartCount.innerText = count;
}