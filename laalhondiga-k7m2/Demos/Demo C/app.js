(function () {
  const d = LA_ALHONDIGA;
  const heroImg = document.getElementById("hero-img");
  heroImg.src = d.images.hero;
  heroImg.alt = "Ambiente de barra del La Alhondiga";
  document.getElementById("hero-eyebrow").textContent = d.tagline;
  document.getElementById("hero-lede").textContent = d.propuesta;
  document.getElementById("intro-text").textContent =
    `${d.brand} en General Salazar 3. ${d.propuesta}`;

  const hIntro = document.getElementById("h-intro");
  if (hIntro) hIntro.textContent = d.deckLine || d.propuesta;
  const quote = document.getElementById("vermut-quote");
  if (quote) {
    quote.textContent = d.narrativeBandText || d.storytellingDemoB?.sensorial || d.propuesta;
  }

  const gallery = document.getElementById("gallery-grid");
  if (gallery && d.images) {
    const shots = [
      { src: d.images.barra, label: "Barra", alt: "Detalle de barra y cafe" },
      { src: d.images.interior || d.images.hero, label: "Ambiente", alt: "Salon del local" },
      { src: d.images.terraza, label: "Estilo", alt: "Espacio contemporaneo" },
    ];
    shots.forEach(({ src, label, alt }) => {
      const fig = document.createElement("figure");
      fig.className = "gallery-c__cell";
      fig.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" /><figcaption>${label}</figcaption>`;
      gallery.appendChild(fig);
    });
  }

  const tags = document.getElementById("tags");
  d.servicios.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    tags.appendChild(li);
  });

  document.getElementById("h-carta").textContent = d.cartaTitulo || "Carta";
  document.getElementById("carta-intro").textContent = d.cartaIntro;
  ["carta-pdf", "carta-pdf-hero"].forEach((id) => {
    const a = document.getElementById(id);
    if (a && d.cartaPdfUrl) {
      a.href = d.cartaPdfUrl;
      if (id === "carta-pdf") a.textContent = d.cartaPdfLabel || "Ver carta";
    }
  });

  const grid = document.getElementById("carta-grid");
  d.cartaItems.forEach((item) => {
    const art = document.createElement("article");
    art.innerHTML = `<h3>${item.name}</h3>${item.desc ? `<p>${item.desc}</p>` : ""}`;
    grid.appendChild(art);
  });

  document.getElementById("horario-aviso").textContent = d.horarioReferencia.aviso;
  const tbody = document.getElementById("horario-body");
  d.horarioReferencia.filas.forEach(([dia, h]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${dia}</td><td>${h}</td>`;
    tbody.appendChild(tr);
  });

  document.getElementById("foot-brand").textContent = d.brand;
  document.getElementById("foot-addr").textContent = d.tagline;

  const cel = document.getElementById("celebraciones-text");
  if (cel && d.celebracionesBlock) cel.textContent = d.celebracionesBlock.texto;
  const barT = document.getElementById("bar-text");
  if (barT && d.barBlock) barT.textContent = d.barBlock.texto;
  const hRes = document.getElementById("h-reservar");
  if (hRes && d.reserva?.titulo) hRes.textContent = d.reserva.titulo;
  initFaqAndReservaOpcional(d);
  const pdfMain = document.getElementById("carta-pdf");
  if (pdfMain && !d.cartaPdfUrl) pdfMain.hidden = true;
  initSiteChrome(d);
  initSiteCierre(d);
  initReservaPanel("#reservar");
  initReservacionForm(document.getElementById("form-reserva"), {
    messageEl: document.getElementById("form-msg"),
  });
  initScrollReveal(".reveal");
  initStickyNavHighlight(".nav-c__menu");

  const nav = document.getElementById("nav-c");
  const onScroll = () => {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 48);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
