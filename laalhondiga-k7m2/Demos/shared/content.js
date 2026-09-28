/** Datos compartidos La Alhondiga · indh041 · demos A/B/C */
const LA_ALHONDIGA = {
  brand: "La Alhondiga",
  tagline: "General Salazar 3 · Bilbao",
  address: "General Salazar 3, 48012 Bilbao",
  phoneDisplay: "944 105 764",
  phoneTel: "tel:+34944105764",
  email: "info@laalhondiga.es",
  map: {
    embedUrl:
      "https://www.google.com/maps?q=General+Salazar+3,+48012+Bilbao,+Espa%C3%B1a&output=embed",
    viewUrl:
      "https://www.google.com/maps/search/?api=1&query=General+Salazar+3,+48012+Bilbao,+Espa%C3%B1a",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=General+Salazar+3,+48012+Bilbao,+Espa%C3%B1a",
  },
  ownerEmail: "info@laalhondiga.es",
  tripadvisorUrl: null,
  headerSocialDemo: true,
  social: [],
  reservaTelefonosNota:
    "*También atendemos reservas por teléfono al 944 105 764.",
  reservaOpcionalLead: null,
  inviteHeadline: "Te esperamos",
  inviteText:
    "Reserva tu mesa por teléfono y ven a comer al lado del paseo peatonal de Indautxu.",
  storytellingDemoB: {
    hook: "El menú del día como pausa tranquila entre el parque peatonal y la rutina de Indautxu.",
    paragraphs: [
      "La Alhondiga es restaurante de mediodía y bar de barra: mesa puesta bajo arcos de piedra cuando suena la hora de comer, y pintxos cuando cae la tarde entre semana.",
      "No hace falta prometer moda pasajera: la propuesta visible es menú del día con vino incluido en la tarifa anunciada y un mediodía de fin de semana más amplio para quedarse.",
      "Junto al parque peatonal de Indautxu, encaja en ese Bilbao de oficinas y paseo — luz sobre el mantel, conversación sin prisas y la copa de crianza al lado del plato.",
    ],
    sensorial:
      "Piedra vista, luz sobre mantel y el murmullo tranquilo del comedor al mediodía.",
  },
  propuesta:
    "Menú del día y comidas de mediodía junto al parque peatonal de Indautxu.",
  servicios: ["Menú del día", "Mediodía", "Celebraciones"],
  horarioReferencia: {
    filas: [
      ["Lunes – viernes (comedor)", "Consultar por teléfono"],
      ["Fin de semana (mediodía)", "Consultar por teléfono"],
      ["Bar · pintxos entre semana", "Desde las 20:00"],
    ],
    aviso:
      "*Horario sujeto a cambios. En festivos puede haber cierre u horario especial.",
  },
  platoDelDia: true,
  cartaTitulo: "Carta",
  cartaIntro:
    "Menú del día entre semana y mediodía de fin de semana; carta completa en PDF.",
  storyHeading: "Mediodía bajo los arcos",
  deckLine:
    "Restaurante en el corazón peatonal de Indautxu — menú del día y salón de piedra.",
  narrativeBandTitle: "Ritual de mediodía",
  narrativeBandText:
    "Menú del día, salón de piedra y el parque peatonal a un paso — la pausa clásica de Indautxu.",
  cartaPdfUrl:
    "https://www.laalhondiga.es/app/download/5811466627/CARTA+ENTRE+SEMANA.pdf",
  cartaPdfLabel: "Ver carta (PDF)",
  cartaItems: [
    {
      name: "Menú del día · lunes a viernes",
      desc: "21,90 € · incluye crianza Rioja",
    },
    {
      name: "Mediodía · fin de semana",
      desc: "32,90 € · crianza «Vino de Municipio» de Laguardia",
    },
    {
      name: "Carta entre semana",
      desc: "Descarga PDF con la oferta detallada",
    },
    {
      name: "Menús especiales de cena",
      desc: "Consultar PDFs en web o por teléfono",
    },
  ],
  barBlock: {
    titulo: "Bar y pintxos",
    texto:
      "Entre semana, a partir de las 20:00, pintxos a 1 €. Ambiente de barra después del servicio de mediodía.",
  },
  celebracionesBlock: {
    titulo: "Comuniones y celebraciones",
    texto:
      "Organizamos comuniones, cumpleaños y comidas de grupo. Cuéntanos la ocasión y te orientamos sobre menú y disponibilidad.",
    ctaEmail: "mailto:info@laalhondiga.es?subject=Celebración%20-%20La%20Alhondiga",
  },
  faqItems: [
    {
      q: "¿Sois el edificio Alhóndiga de Azkuna?",
      a: "No. Estamos en General Salazar 3, restaurante independiente junto al parque peatonal de Indautxu.",
    },
    {
      q: "¿Hay terraza?",
      a: "Consultar disponibilidad por teléfono — puede variar según temporada.",
    },
    {
      q: "¿Cómo reservo?",
      a: "Llámanos al 944 105 764 para confirmar mesa. También puedes enviar una solicitud online y te confirmamos por teléfono.",
    },
    {
      q: "¿El menú del día cambia cada día?",
      a: "Sí, la carta puede variar. Consulta la web o llámanos el mismo día.",
    },
  ],
  reserva: {
    diasSemanaCerrados: [],
    titulo: "Solicitud de reserva",
    opcional: false,
  },
  images: {
    hero: "../assets/demo-hero.jpg",
    barra: "../assets/demo-barra.jpg",
    interior: "../assets/demo-interior.jpg",
    terraza: "../assets/demo-moderno.jpg",
  },
};
window.LA_ALHONDIGA = LA_ALHONDIGA;
