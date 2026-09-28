/** Datos compartidos La Alhondiga - indh041 - demos A/B/C */
const LA_ALHONDIGA = {
  brand: "La Alhondiga",
  tagline: "General Salazar 3 - Bilbao",
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
    "*Tambien atendemos reservas por telefono al 944 105 764.",
  reservaOpcionalLead: null,
  inviteHeadline: "Te esperamos",
  inviteText:
    "Reserva tu mesa por telefono y ven a comer al lado del paseo peatonal de Indautxu.",
  storytellingDemoB: {
    hook: "El menu del dia como pausa tranquila entre el parque peatonal y la rutina de Indautxu.",
    paragraphs: [
      "La Alhondiga es restaurante de mediodia y bar de barra: mesa puesta bajo arcos de piedra cuando suena la hora de comer, y pintxos cuando cae la tarde entre semana.",
      "No hace falta prometer moda pasajera: la propuesta visible es menu del dia con vino incluido en la tarifa anunciada y un mediodia de fin de semana mas amplio para quedarse.",
      "Junto al parque peatonal de Indautxu, encaja en ese Bilbao de oficinas y paseo - luz sobre el mantel, conversacion sin prisas y la copa de crianza al lado del plato.",
    ],
    sensorial:
      "Piedra vista, luz sobre mantel y el murmullo tranquilo del comedor al mediodia.",
  },
  propuesta:
    "Menu del dia y comidas de mediodia junto al parque peatonal de Indautxu.",
  servicios: ["Menu del dia", "Mediodia", "Celebraciones"],
  horarioReferencia: {
    filas: [
      ["Lunes - viernes (comedor)", "Consultar por telefono"],
      ["Fin de semana (mediodia)", "Consultar por telefono"],
      ["Bar - pintxos entre semana", "Desde las 20:00"],
    ],
    aviso:
      "*Horario sujeto a cambios. En festivos puede haber cierre u horario especial.",
  },
  platoDelDia: true,
  cartaTitulo: "Carta",
  cartaIntro:
    "Menu del dia entre semana y mediodia de fin de semana; carta completa en PDF.",
  storyHeading: "Mediodia bajo los arcos",
  deckLine:
    "Restaurante en el corazon peatonal de Indautxu - menu del dia y salon de piedra.",
  narrativeBandTitle: "Ritual de mediodia",
  narrativeBandText:
    "Menu del dia, salon de piedra y el parque peatonal a un paso - la pausa clasica de Indautxu.",
  cartaPdfUrl:
    "https://www.laalhondiga.es/app/download/5811466627/CARTA+ENTRE+SEMANA.pdf",
  cartaPdfLabel: "Ver carta (PDF)",
  cartaItems: [
    {
      name: "Menu del dia - lunes a viernes",
      desc: "21,90  EUR - incluye crianza Rioja",
    },
    {
      name: "Mediodia - fin de semana",
      desc: "32,90  EUR - crianza "Vino de Municipio" de Laguardia",
    },
    {
      name: "Carta entre semana",
      desc: "Descarga PDF con la oferta detallada",
    },
    {
      name: "Menus especiales de cena",
      desc: "Consultar PDFs en web o por telefono",
    },
  ],
  barBlock: {
    titulo: "Bar y pintxos",
    texto:
      "Entre semana, a partir de las 20:00, pintxos a 1  EUR. Ambiente de barra despues del servicio de mediodia.",
  },
  celebracionesBlock: {
    titulo: "Comuniones y celebraciones",
    texto:
      "Organizamos comuniones, cumpleanos y comidas de grupo. Cuentanos la ocasion y te orientamos sobre menu y disponibilidad.",
    ctaEmail: "mailto:info@laalhondiga.es?subject=Celebracion%20-%20La%20Alhondiga",
  },
  faqItems: [
    {
      q: "?Sois el edificio Alhondiga de Azkuna?",
      a: "No. Estamos en General Salazar 3, restaurante independiente junto al parque peatonal de Indautxu.",
    },
    {
      q: "?Hay terraza?",
      a: "Consultar disponibilidad por telefono - puede variar segun temporada.",
    },
    {
      q: "?Como reservo?",
      a: "Llamanos al 944 105 764 para confirmar mesa. Tambien puedes enviar una solicitud online y te confirmamos por telefono.",
    },
    {
      q: "?El menu del dia cambia cada dia?",
      a: "Si, la carta puede variar. Consulta la web o llamanos el mismo dia.",
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
