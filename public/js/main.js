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

// Generate
generate();

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

function generate() {
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

  const cardsElement = document.getElementById("card-list");
  const collapsesElement = document.getElementById("collapses");
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
                role="button"
                aria-expanded="false"
                href="#${data.collapses.id}"
              >
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
              </a>
            </article>
          </li>
    `;
      // Collapses
      let items = "";
      data.collapses.links.forEach((x, index) => {
        items =
          items +
          `
            <li class="list-none p-2 md:p-4 w-full sm:w-[50%] lg:w-[33%]">
                <a
                  href="${x.url}"
                  title="${x.url}"
                  target="_blank"
                  class="block no-underline hover:opacity-90"
                >
                  <div
                    class="relative px-2 py-4 md:px-4 md:py-6 flex justify-start items-center gap-4 rounded-lg drop-shadow-md md:max-w-xl md:flex-row bg-gradient-to-t from-darkBlue-500 to-darkBlue-100"
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
                      <p class="text-sm text-secondary">
                        ${x.url.split("://")[1]}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
        `;
      });
      collapsesElement.innerHTML =
        collapsesElement.innerHTML +
        `
        <div
          class="!visible px-1 hidden transition-all"
          id="${data.collapses.id}"
          data-te-collapse-item
        >
          <div
            class="p-1 block bg-gradient-to-r from-gray-500 to-gray-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          >
            <ul class="flex flex-wrap">
                ${items}
            </ul>
          </div>
        </div>
`;
    });
  }
}
