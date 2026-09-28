/** Rellena FAQ y texto de reserva opcional desde LA_ALHONDIGA */
function initFaqAndReservaOpcional(d) {
  const faqList = document.getElementById("faq-list");
  if (faqList && d.faqItems) {
    d.faqItems.forEach(({ q, a }) => {
      const dt = document.createElement("dt");
      dt.textContent = q;
      const dd = document.createElement("dd");
      dd.textContent = a;
      faqList.appendChild(dt);
      faqList.appendChild(dd);
    });
  }
  const lead = document.getElementById("reserva-opcional-lead");
  if (lead && d.reservaOpcionalLead) lead.textContent = d.reservaOpcionalLead;
}
