/** Rellena FAQ (details/summary) y texto de reserva opcional desde datos del negocio */
function initFaqAndReservaOpcional(d) {
  const faqHeading = document.getElementById("h-faq");
  if (faqHeading && d.faqHeading) {
    faqHeading.textContent = d.faqHeading;
  }

  const faqList = document.getElementById("faq-list");
  if (faqList && d.faqItems) {
    if (faqList.dataset.faqInitialized === "true") return;
    faqList.dataset.faqInitialized = "true";
    faqList.replaceChildren();
    d.faqItems.forEach(({ q, a }) => {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = q;
      const answer = document.createElement("p");
      answer.className = "faq-answer";
      answer.textContent = a;
      details.appendChild(summary);
      details.appendChild(answer);
      faqList.appendChild(details);
    });
  }

  const lead = document.getElementById("reserva-opcional-lead");
  if (lead && d.reservaOpcionalLead) lead.textContent = d.reservaOpcionalLead;
}
