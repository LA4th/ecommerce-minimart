import { marketItems } from "./itemsObject.js";

const renderSectionItems = (section, items) => {
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card-container");
    card.setAttribute("data-name", item.name.toLowerCase());

    card.innerHTML = `
      <img class="card-items-img" src="${item.image}" alt="${item.name}" />
      <div class="card-items-info">
        <div class="card-items-name">${item.name}</div>
        <div class="card-items-price">Price: $${item.price}</div>
        <div class="card-items-stocks">Stocks: ${item.stock}</div>
        <button id="btnAddCart" data-name="${item.name}" type="button">Add to Cart</button>
      </div>
    `;

    section.appendChild(card);
  });
};

export const renderItems = () => {
  const {
    foods,
    drinks,
    personalCares,
    medicines
  } = marketItems.items[0];

  const foodSection = document.querySelector("#foodSection .container");
  const drinkSection = document.querySelector("#drinkSection .container");
  const personalCareSection = document.querySelector("#personalCareSection .container");
  const medicineSection = document.querySelector("#medicineSection .container");

  renderSectionItems(foodSection, foods);
  renderSectionItems(drinkSection, drinks);
  renderSectionItems(personalCareSection, personalCares);
  renderSectionItems(medicineSection, medicines);
};
