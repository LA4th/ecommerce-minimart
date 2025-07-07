let productItems = {"items": [
    {
      "foods": [
        {
          "name": "Rice (1kg)",
          "price": 55,
          "stock": 100,
          "image": "./assets/image-bagrice.jpg"
        },
        {
          "name": "Cooking Oil (1L)",
          "price": 90,
          "stock": 50,
          "image": "./assets/image-oil.jpg"
        },
        {
          "name": "Instant Noodles",
          "price": 12,
          "stock": 200,
          "image":"./assets/image-noodles.jpg"
        },
        {
          "name": "Canned Sardines",
          "price": 25,
          "stock": 80,
          "image": "./assets/image-sardenes.jpg"
        },
        {
          "name": "Loaf Bread",
          "price": 50,
          "stock": 30,
          "image": "./assets/image-loafbread.jpg"
        }
      ]
    }
  ]
}

/* const productList = document.getElementById("product-list");
const foods = productItems.items[0].foods;

foods.forEach(item => {
  const card = document.createElement("div");
  card.className = "card-container";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <div class="card">
      <div id="items-name">${item.name}</div>
      <div class="stocks-container">Stocks: <span id="stocks-count">${item.stock}</span></div>
        <div class="prices-container">Price: <span id="prices-count">$${item.price}</span></div>
    </div>
      <input class="addCart-btn" type="button" value="Add to Cart" onclick="addCartFunction('${item.name}')">
  `;
  productList.appendChild(card);
}); */