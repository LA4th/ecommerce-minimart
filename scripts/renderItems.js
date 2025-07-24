import { marketItems } from "./itemsObject.js";

/* const foodRender = () => {

} */

export const renderItems = () => {
  const foodSection = document.querySelector("#foodSection .container");
  const drinkSection = document.querySelector("#drinkSection .container");
  const personalCareSection = document.querySelector("#personalCareSection .container");
  const medecineSection = document.querySelector("#medecineSection .container");

  const foods = marketItems.items[0].foods;
  const drinks = marketItems.items[0].drinks;
  const personalCares = marketItems.items[0].personalCares;
  const medecines = marketItems.items[0].medecines;

  foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card-container");

    card.innerHTML = `
    <img class="card-items-img" src="${food.image}" alt="${food.name}" />
    <div class="card-items-info">
      <div class="card-items-name">${food.name}</div>
      <div class="card-items-price">Price: $${food.price}</div>
      <div class="card-items-stocks">Stocks: ${food.stock}</div>
      <button id="btnAddCart" type="button">Add to Cart</button>
    </div>
    `;
    foodSection.appendChild(card);
  });

  drinks.forEach(drink => {
    const card = document.createElement("div");
    card.classList.add("card-container");

    card.innerHTML = `
    <img class="card-items-img" src="${drink.image}" alt="${drink.name}" />
    <div class="card-items-info">
      <div class="card-items-name">${drink.name}</div>
      <div class="card-items-price">Price: $${drink.price}</div>
      <div class="card-items-stocks">Stocks: ${drink.stock}</div>
      <button id="btnAddCart" type="button">Add to Cart</button>
    </div>
    `;
    drinkSection.appendChild(card);
  });

  personalCares.forEach(personalCare => {
    const card = document.createElement("div");
    card.classList.add("card-container");

    card.innerHTML = `
    <img class="card-items-img" src="${personalCare.image}" alt="${personalCare.name}" />
    <div class="card-items-info">
      <div class="card-items-name">${personalCare.name}</div>
      <div class="card-items-price">Price: $${personalCare.price}</div>
      <div class="card-items-stocks">Stocks: ${personalCare.stock}</div>
      <button id="btnAddCart" type="button">Add to Cart</button>
    </div>
    `;
    personalCareSection.appendChild(card);
  });

  medecines.forEach(medicine => {
    const card = document.createElement("div");
    card.classList.add("card-container");

    card.innerHTML = `
    <img class="card-items-img" src="${medicine.image}" alt="${medicine.name}" />
    <div class="card-items-info">
      <div class="card-items-name">${medicine.name}</div>
      <div class="card-items-price">Price: $${medicine.price}</div>
      <div class="card-items-stocks">Stocks: ${medicine.stock}</div>
      <button id="btnAddCart" type="button">Add to Cart</button>
    </div>
    `;
    medecineSection.appendChild(card);
  });
};