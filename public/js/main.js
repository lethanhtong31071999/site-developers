const logo = document.querySelector("#header .logo-gif");
if (logo) {
  logo.addEventListener("mouseover", () => {
    const imgEl = logo.querySelector("img");
    if (imgEl) {
      imgEl.setAttribute("src", "./public/images/fire.gif");
    }
  });
  logo.addEventListener("mouseout", () => {
    const imgEl = logo.querySelector("img");
    if (imgEl) {
      imgEl.setAttribute("src", "./public/images/logo.svg");
    }
  });
}

// Handle card item click
const cardItems = document.querySelectorAll("#main ul .card-item");
cardItems.forEach((x) => {
  x.addEventListener("click", (e) => {
    const cardListEl = document.querySelector("#main ul.card-list");
    cardListEl.classList.add("active");
    // Remove all active class for card items if click at the same card
    if (x.classList.contains("active")) {
      cardListEl.classList.remove("active");
      cardItems.forEach((card) => {
        card.classList.remove("active");
      });
    } else {
      cardItems.forEach((card) => {
        card.classList.remove("active");
      });
      x.classList.add("active");
    }
  });
});
