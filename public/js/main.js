import { Site } from "./sites/index.js";
import { Payment } from "./payment/index.js";

window.addEventListener("load", () => {
  // HEADER
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

  // Site page
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    Site();
  } else if (window.location.pathname === "/payment.html") {
    Payment();
  }
});
