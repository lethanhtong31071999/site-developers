import GenerateCardAndCollapse from "./generate.js";

// Handle card item click
export function Site() {
  const cardItems = document.querySelectorAll("#main ul .card-item");
  cardItems.forEach((x) => {
    x.addEventListener("click", (e) => {
      const cardListEl = document.querySelector("#main ul.card-list");
      // When click card which is opening
      if (x.classList.contains("active")) {
        cardListEl.classList.remove("active");
        cardItems.forEach((card) => {
          card.classList.remove("active");
        });
      } else {
        // When click another card
        cardItems.forEach((card) => {
          if (card.classList.contains("active")) {
            card.querySelector("a").click();
          }
        });
        cardListEl.classList.add("active");
        x.classList.add("active");
      }
    });
  });
  GenerateCardAndCollapse();
}
