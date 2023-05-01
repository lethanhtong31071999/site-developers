export function Payment() {
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
