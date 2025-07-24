export const searchBarFilter = () => {
  const searchInput = document.querySelector("#searchBar");

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
      const cards = section.querySelectorAll(".card-container");
      let hasMatch = false;

      cards.forEach(card => {
        const itemName = card.getAttribute("data-name");
        if (itemName.includes(keyword)) {
          card.classList.remove("hidden");
          hasMatch = true;
        } else {
          card.classList.add("hidden");
        }
      });

      if (hasMatch) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  });
};
