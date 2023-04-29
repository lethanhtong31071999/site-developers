import { database } from "./data.js";

function generate() {
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

export default generate;
