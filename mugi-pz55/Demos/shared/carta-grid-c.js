/** Rejilla carta Demo C: sin huecos del fondo de linea entre celdas vacias. */
(function (global) {
  function cartaGridCLayoutMod(count) {
    const n = Number(count) || 0;
    if (n <= 0) return null;
    if (n === 1) return "layout-1";
    if (n === 2 || n === 4) return "layout-2";
    if (n === 5) return "layout-5";
    const r = n % 3;
    if (r === 0) return "layout-3";
    if (r === 1) return "layout-3-tail-1";
    return "layout-3-tail-2";
  }

  function applyCartaGridCLayout(gridEl, count) {
    if (!gridEl) return;
    const mod = cartaGridCLayoutMod(count);
    gridEl.dataset.cartaCount = String(count);
    gridEl.classList.remove(
      "carta-grid-c--layout-1",
      "carta-grid-c--layout-2",
      "carta-grid-c--layout-3",
      "carta-grid-c--layout-3-tail-1",
      "carta-grid-c--layout-3-tail-2",
      "carta-grid-c--layout-5"
    );
    if (mod) gridEl.classList.add(`carta-grid-c--${mod}`);
  }

  function renderCartaGridC(gridEl, items) {
    if (!gridEl || !items) return;
    gridEl.replaceChildren();
    items.forEach((item) => {
      const art = document.createElement("article");
      art.innerHTML = `<h3>${item.name}</h3>${item.desc ? `<p>${item.desc}</p>` : ""}`;
      gridEl.appendChild(art);
    });
    applyCartaGridCLayout(gridEl, items.length);
  }

  global.cartaGridCLayoutMod = cartaGridCLayoutMod;
  global.applyCartaGridCLayout = applyCartaGridCLayout;
  global.renderCartaGridC = renderCartaGridC;
})(typeof window !== "undefined" ? window : globalThis);
