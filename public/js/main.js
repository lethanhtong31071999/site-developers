const database = [
  {
    cards: {
      name: "Roy Le",
      description:
        "Build and deploy a full-stack, production-ready web app with Supabase, React, and Postgres.",
      image: "https://fireship.io/courses/supabase/img/featured.webp",
    },
    collapses: {
      id: "roy-le-section",
      links: [
        {
          title: "Site",
          image: "https://mapleleafvn.com/media/logo/logo.png",
          url: "http://sites.lethanhtong.shop",
        },
        {
          title: "Mber+",
          image: "./public/images/mberplus.png",
          url: "https://sites.tpfonline.com.au",
        },
        {
          title: "Bull Dog",
          image: "./public/images/bull-dog.png",
          url: "https://dev-club-roy.tpfonline.com.au",
        },
      ],
    },
  },
  {
    cards: {
      name: "James Truong",
      description:
        "Build and deploy a full-stack, production-ready web app with Supabase, React, and Postgres.",
      image: "https://fireship.io/courses/js/img/featured.webp",
    },
    collapses: {
      id: "james-truong-section",
      links: [
        {
          title: "Mber+",
          image: "./public/images/mberplus.png",
          url: "https://sites.tpfonline.com.au",
        },
        {
          title: "Bull Dog",
          image: "./public/images/bull-dog.png",
          url: "https://dev-club-james.tpfonline.com.au",
        },
      ],
    },
  },
  {
    cards: {
      name: "Sugar Tran",
      description:
        "Build and deploy a full-stack, production-ready web app with Supabase, React, and Postgres.",
      image: "https://fireship.io/courses/flutter-firebase/img/featured.webp",
    },
    collapses: {
      id: "sugar-tran-section",
      links: [
        {
          title: "Mber+",
          image: "./public/images/mberplus.png",
          url: "https://sites.tpfonline.com.au",
        },
        {
          title: "Bull Dog",
          image: "./public/images/bull-dog.png",
          url: "https://dev-club-sugar.tpfonline.com.au",
        },
      ],
    },
  },
  {
    cards: {
      name: "Rosie Ngo",
      description:
        "Build and deploy a full-stack, production-ready web app with Supabase, React, and Postgres.",
      image:
        "	https://fireship.io/courses/react-next-firebase/img/featured.webp ",
    },
    collapses: {
      id: "rosie-ngo-section",
      links: [
        {
          title: "Mber+",
          image: "./public/images/mberplus.png",
          url: "https://sites.tpfonline.com.au",
        },
      ],
    },
  },
];

function generate() {
  const cardsElement = document.getElementById("card-list");
  const modalsElement = document.getElementById("modals");
  if (cardsElement) {
    database.forEach((data) => {
      cardsElement.innerHTML =
        cardsElement.innerHTML +
        `
          <li
            class="list-none p-4 sm:p-6 lg:p-8 w-full md:w-[50%] lg:w-[33%] xl:w-[25%] card-item">
            <article
              class="w-full overflow-hidden shadow-xl bg-gray-600 y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500"
            >
              <a
                class="no-underline"
                data-te-collapse-init
                data-te-ripple-init
                data-te-ripple-color="primary"
                aria-expanded="false"
                role="label"
                href="#"
              >
                <label class="block" for="${data.collapses.id}">
                  <img
                    src="${data.cards.image}"
                    alt="card"
                    class="w-full"
                  />
                  <div class="p-5">
                    <h5
                      class="text-white font-extrabold uppercase text-center text-2xl"
                    >
                      ${data.cards.name}
                    </h5>
                    <p
                      class="text-gray-300 min-h-[100px] font-semibold text-center"
                    >
                      ${data.cards.description}
                    </p>
                  </div>
                </label>
              </a>
            </article>
          </li>
    `;
      // Modals
      let items = "";
      data.collapses.links.forEach((x, index) => {
        items =
          items +
          `
            <li class="list-none p-2 md:p-4 w-full sm:w-[50%]">
                <a
                  href="${x.url}"
                  title="${x.url}"
                  target="_blank"
                  class="block no-underline hover:opacity-90 overflow-hidden h-full"
                >
                  <div
                    class="relative h-full px-2 py-4 md:px-4 md:py-6 flex justify-start items-center gap-4 rounded-lg drop-shadow-md md:max-w-xl md:flex-row bg-gradient-to-t from-darkBlue-500 to-darkBlue-100"
                  >
                    <span
                      class="absolute top-0 right-0 inline-block px-4 py-2 whitespace-nowrap rounded-tr-lg rounded-bl-lg bg-purple-600 text-white text-center align-baseline text-[0.75em] font-bold leading-none"
                      >${index + 1}</span
                    >
                    <img
                      class="rounded-t-lg md:rounded-none ct-logo-clubs"
                      src="${x.image}"
                      alt="site tpf"
                    />
                    <div class="flex flex-col justify-start">
                      <h5 class="mb-2 text-xl font-semibold text-white">
                        ${x.title}
                      </h5>
                      <p class="text-sm text-gray-400">
                        ${x.url.split("://")[1]}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
        `;
      });
      modalsElement.innerHTML =
        modalsElement.innerHTML +
        `<input type="checkbox" id="${data.collapses.id}" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative max-w-5xl px-6 py-8 sm:p-6 block bg-gradient-to-r from-gray-500 to-gray-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <label
              for="${data.collapses.id}"
              class="btn btn-sm btn-circle absolute right-2 top-2"
              >✕</label
            >
            <ul class="flex flex-wrap w-full">
                ${items}
            </ul>
          </div>
        </div>`;
    });
  }
}

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
    function Site() {
      const cardListEl = document.querySelector("#main ul.card-list");
      const cardItems = document.querySelectorAll("#main ul .card-item");
      cardItems.forEach((x) => {
        x.addEventListener("click", (e) => {
          const aElement = x.querySelector("a[href]");
          if (aElement) {
          }
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
      generate();
    }
    Site();
  } else if (window.location.pathname === "/payment.html") {
    function Payment() {
      const checkHistoryBtn = document.querySelector(".btn-history");
      const historyZoneEl = document.getElementById("history");
      const paymentBtn = document.querySelector(".btn-payment");

      if (checkHistoryBtn && historyZoneEl) {
        checkHistoryBtn.addEventListener("click", (e) => {
          e.preventDefault();
          historyZoneEl.classList.toggle("flex");
          historyZoneEl.classList.toggle("hidden");
        });
      }

      if (paymentBtn) {
        paymentBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (historyZoneEl.classList.contains("flex")) {
            historyZoneEl.classList.replace("flex", "hidden");
          }
        });
      }
    }
    Payment();
  }
});
