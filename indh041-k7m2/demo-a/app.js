(function () {
  const d = LA_ALHONDIGA;
  const imgHero = document.getElementById("img-hero");
  imgHero.src = d.images.hero;
  imgHero.alt = "La Alhondiga · salón de restaurante en Indautxu";
  document.getElementById("kicker").textContent = d.tagline;
  document.getElementById("lede").textContent = d.propuesta;
  document.getElementById("intro-text").textContent =
    `${d.brand} en General Salazar 3. ${d.propuesta}`;
  document.getElementById("horario-aviso").textContent = d.horarioReferencia.aviso;
  const tbody = document.getElementById("horario-body");
  d.horarioReferencia.filas.forEach(([dia, h]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${dia}</td><td>${h}</td>`;
    tbody.appendChild(tr);
  });
  const hCarta = document.getElementById("h-carta");
  if (hCarta) hCarta.textContent = d.cartaTitulo || "Carta";
  document.getElementById("carta-intro").textContent = d.cartaIntro;
  const pdfBtn = document.getElementById("carta-pdf");
  if (pdfBtn && d.cartaPdfUrl) {
    pdfBtn.href = d.cartaPdfUrl;
    pdfBtn.textContent = d.cartaPdfLabel || "Ver carta";
  } else if (pdfBtn) pdfBtn.hidden = true;
  const grid = document.getElementById("carta-grid");
  d.cartaItems.forEach((item) => {
    const art = document.createElement("article");
    art.className = "carta-item";
    art.innerHTML = `<h4>${item.name}</h4>${item.desc ? `<p>${item.desc}</p>` : ""}`;
    grid.appendChild(art);
  });
  linkTel("hero-tel", d.phoneTel, d.phoneDisplay);
  document.getElementById("foot-brand").textContent = d.brand;
  document.getElementById("foot-addr").textContent = d.tagline;

  initReservaPanel("#reservar");
  initReservacionForm(document.getElementById("form-reserva"), {
    messageEl: document.getElementById("form-msg"),
  });

  function linkTel(id, href, text) {
    const a = document.getElementById(id);
    a.href = href;
    const strong = a.querySelector("strong");
    if (strong) strong.textContent = text;
    else a.textContent = text;
  }

  const cel = document.getElementById("celebraciones-text");
  if (cel && d.celebracionesBlock) cel.textContent = d.celebracionesBlock.texto;
  const celMail = document.getElementById("celebraciones-email");
  if (celMail && d.celebracionesBlock?.ctaEmail) celMail.href = d.celebracionesBlock.ctaEmail;
  const barT = document.getElementById("bar-text");
  if (barT && d.barBlock) barT.textContent = d.barBlock.texto;
  const hRes = document.getElementById("h-reservar");
  if (hRes && d.reserva?.titulo) hRes.textContent = d.reserva.titulo;
  initFaqAndReservaOpcional(d);
  initSiteChrome(d);
  initSiteCierre(d);
  initStickyNavHighlight(".site-nav");
})();
