// Lightweight enhancement: topic shortcuts reuse the original archive search.
// The source search listener in scripts/site.js remains the only filter engine.
(() => {
  const input = document.getElementById("document-search");
  const buttons = [...document.querySelectorAll("[data-document-filter]")];
  const clear = document.querySelector("[data-document-clear]");
  if (!input || !buttons.length) return;
  const updateButtons = () => {
    const query = input.value.trim().toLocaleLowerCase();
    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(query === button.dataset.documentFilter));
    }
  };
  for (const button of buttons) {
    button.addEventListener("click", () => {
      input.value = button.dataset.documentFilter;
      input.dispatchEvent(new Event("input", {bubbles: true}));
      updateButtons();
      input.focus({preventScroll: true});
      document.getElementById("document-library")?.scrollIntoView({block: "start"});
    });
  }
  clear?.addEventListener("click", () => {
    input.value = "";
    input.dispatchEvent(new Event("input", {bubbles: true}));
    updateButtons();
    input.focus({preventScroll: true});
  });
  input.addEventListener("input", updateButtons);
  updateButtons();
})();