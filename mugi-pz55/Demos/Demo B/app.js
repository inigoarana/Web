(function () {
  const d = window.SITE_DATA || window.MUGI;
  document.getElementById("deck").textContent = d.deckLine || d.propuesta;
  const sh = document.getElementById("story-heading");
  if (sh) sh.textContent = d.storyHeading || `${d.brand} - ${d.tagline}`;
  document.getElementById("mast-img").src = d.images.hero;
  document.getElementById("mast-img").alt = "Mugi - ambiente de barra";
  const st = d.storytellingDemoB;
  document.getElementById("story-hook").textContent = st.hook;
  document.getElementById("story-p1").textContent = st.paragraphs[0];
  document.getElementById("story-p2").textContent = st.paragraphs[1];
  document.getElementById("story-p3").textContent = st.paragraphs[2];
  document.getElementById("img-barra").src = d.images.barra;
  document.getElementById("img-barra").alt = "Mugi - detalle de barra";
  const nTitle = document.getElementById("h-narrative-band");
  const nLead = document.getElementById("narrative-band-lead");
  if (nTitle) nTitle.textContent = d.narrativeBandTitle || st.hook;
  if (nLead) nLead.textContent = d.narrativeBandText || st.sensorial || d.propuesta;
  const hBarra = document.getElementById("h-barra");
  if (hBarra) hBarra.textContent = d.cartaTitulo || "Carta";
  document.getElementById("barra-intro").textContent = d.cartaIntro;
  const pdfBtn = document.getElementById("carta-pdf-b");
  if (pdfBtn && d.cartaPdfUrl) {
    pdfBtn.href = d.cartaPdfUrl;
    pdfBtn.textContent = d.cartaPdfLabel || "Ver carta";
  } else if (pdfBtn) pdfBtn.hidden = true;
  const ul = document.getElementById("ul-carta");
  d.cartaItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong>${item.desc ? `<span>${item.desc}</span>` : ""}`;
    ul.appendChild(li);
  });
  document.getElementById("when-extra").textContent = d.horarioReferencia.aviso;
  const tbody = document.getElementById("horario-body");
  d.horarioReferencia.filas.forEach(([dia, h]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${dia}</td><td>${h}</td>`;
    tbody.appendChild(tr);
  });
  linkTel("mast-tel", d.phoneTel, d.phoneDisplay);
  linkTel("cierre-tel", d.phoneTel, d.phoneDisplay);
  const barT = document.getElementById("bar-text");
  if (barT && d.barBlock) barT.textContent = d.barBlock.texto;
  const hRes = document.getElementById("h-res");
  if (hRes && d.reserva?.titulo) hRes.textContent = d.reserva.titulo;
  initFaqAndReservaOpcional(d);
  initSiteChrome(d);
  initSiteCierre(d);
  initStickyNavHighlight(".site-nav");

  initReservaPanel("#reservar");
  initReservacionForm(document.getElementById("form-b"), {
    messageEl: document.getElementById("form-msg-b"),
  });

  function linkTel(id, href, text) {
    const a = document.getElementById(id);
    a.href = href;
    a.textContent = text;
  }
})();
