const logo = document.querySelector("#header .logo-gif");
if (logo) {
  logo.addEventListener("mouseover", () => {
    const imgEl = logo.querySelector("img");
    if (imgEl) {
      imgEl.setAttribute("src", "../images/fire.gif");
    }
  });
  logo.addEventListener("mouseout", () => {
    const imgEl = logo.querySelector("img");
    if (imgEl) {
      imgEl.setAttribute("src", "../images/logo.svg");
    }
  });
}
