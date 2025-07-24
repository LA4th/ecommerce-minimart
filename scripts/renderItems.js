import { marketItems } from "./itemsObject.js";

const foodRender = (foodSection, foods) => {
  foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card-container");
    card.setAttribute("data-name", food.name.toLowerCase());

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
};

const drinkRender = (drinkSection, drinks) => {
  drinks.forEach(drink => {
    const card = document.createElement("div");
    card.classList.add("card-container");
    card.setAttribute("data-name", drink.name.toLowerCase());

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
};

const personalCareRender = (personalCareSection, personalCares) => {
  personalCares.forEach(personalCare => {
    const card = document.createElement("div");
    card.classList.add("card-container");
    card.setAttribute("data-name", personalCare.name.toLowerCase());

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
};

const medicineRender = (medicineSection, medicines) => {
  medicines.forEach(medicine => {
    const card = document.createElement("div");
    card.classList.add("card-container");
    card.setAttribute("data-name", medicine.name.toLowerCase());

    card.innerHTML = `
    <img class="card-items-img" src="${medicine.image}" alt="${medicine.name}" />
    <div class="card-items-info">
      <div class="card-items-name">${medicine.name}</div>
      <div class="card-items-price">Price: $${medicine.price}</div>
      <div class="card-items-stocks">Stocks: ${medicine.stock}</div>
      <button id="btnAddCart" type="button">Add to Cart</button>
    </div>
    `;
    medicineSection.appendChild(card);
  });
};

export const renderItems = () => {
  return new Promise(resolve => {
    const foodSection = document.querySelector("#foodSection .container");
    const drinkSection = document.querySelector("#drinkSection .container");
    const personalCareSection = document.querySelector("#personalCareSection .container");
    const medicineSection = document.querySelector("#medicineSection .container");

    const foods = marketItems.items[0].foods;
    const drinks = marketItems.items[0].drinks;
    const personalCares = marketItems.items[0].personalCares;
    const medicines = marketItems.items[0].medicines;

    foodRender(foodSection, foods);
    drinkRender(drinkSection, drinks);
    personalCareRender(personalCareSection, personalCares);
    medicineRender(medicineSection, medicines);

    resolve(); // Tell main.js it's done
  });
};