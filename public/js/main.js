const logo = document.querySelector("#header .logo-gif");
if (logo) {
  logo.addEventListener("mouseover", () => {
    const imgEl = logo.querySelector("img");
    if (imgEl) {
      imgEl.setAttribute("src", "../public/images/fire.gif");
    }
  });
  logo.addEventListener("mouseout", () => {
    const imgEl = logo.querySelector("img");
    if (imgEl) {
      imgEl.setAttribute("src", "../public/images/logo.svg");
    }
  });
}

// Handle card item click
const cardItems = document.querySelectorAll("#main ul .card-item");
cardItems.forEach((x) => {
  x.addEventListener("click", (e) => {
    x.classList.toggle("active");
  });
});
