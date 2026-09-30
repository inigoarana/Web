/** Datos compartidos Mugi - indh010 - demos A/B/C */
const LA_ALHONDIGA = {
  brand: "Mugi",
  tagline: "Licenciado Poza 55 - Bilbao",
  heroEyebrow: "Pozas, desde la barra.",
  footerTagline: "Te esperamos en la barra.",
  footerSector: "Tasca - Bilbao",
  /** Si se define, misma lista en A/B/C; si no, el pie clona .site-nav-menu de cada demo (p. ej. Carta -> #barra en B). */
  footerNav: null,
  address: "Licenciado Poza, 55, 48013 Bilbao",
  phoneDisplay: "944 413 016",
  phoneTel: "tel:+34944413016",
  email: null,
  map: {
    embedUrl:
      "https://www.google.com/maps?q=Licenciado+Poza+55,+48013+Bilbao,+Espa%C3%B1a&hl=es&z=17&output=embed",
    viewUrl:
      "https://www.google.com/maps/search/?api=1&query=Licenciado+Poza+55,+48013+Bilbao,+Espa%C3%B1a",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Licenciado+Poza+55,+48013+Bilbao,+Espa%C3%B1a",
    embedZoom: 17,
  },
  ownerEmail: null,
  tripadvisorUrl: null,
  headerSocialDemo: true,
  social: [
    {
      id: "instagram",
      url: "https://www.instagram.com/el_mugi_bilbao/",
      label: "Instagram",
    },
  ],
  reservaTelefonosNota: null,
  reservaOpcionalLead:
    "Para reservar mesa o venir en grupo, envianos una solicitud y te confirmamos por telefono.",
  reservaWalkInLead: null,
  inviteHeadline: "Te esperamos",
  inviteText:
    "Cocina honesta y barra viva en el corazon de Pozas - pasate cuando te apetezca un pintxo bien hecho.",
  storytellingDemoB: {
    hook:
      "El primer pintxo en la calle que lleva al estadio - barra viva, olor a brasa y cuchillo sobre el jamon antes de sentarte.",
    paragraphs: [
      "En el numero 55 de Licenciado Poza, Mugi concentra decadas de oficio de tasca en el eje Indautxu: pinchos, brasa de carbon y jamon caido a cuchillo.",
      "Guias y prensa describen un equipo que mira al cliente desde la barra - cerveza tirada con mimo, vinos generosos y recomendacion directa, sin discursos de pasillo.",
      "La escena es mesa y barra, producto cuidado y trato cercano: preguntas en barra y el equipo responde.",
    ],
    sensorial:
      "Crujido del rebozo en anchoas, tortilla recien hecha y humo suave de la brasa iberica.",
  },
  propuesta:
    "Pintxos, brasa y jamon a cuchillo en el corazon de la calle Pozas.",
  servicios: ["Pintxos", "Brasa", "Jamon", "Vinos"],
  horarioReferencia: {
    filas: [
      ["Lunes a viernes", "11:00 - 16:00 - 19:00 - 24:00"],
      ["Sabado", "Cerrado"],
      ["Domingo", "12:00 - 16:30"],
    ],
    aviso:
      "*Horario sujeto a cambios. En festivos puede haber cierre u horario especial.",
  },
  platoDelDia: false,
  cartaTitulo: "Carta",
  cartaIntro:
    "Barra de pintxos, brasa de carbon y cocina de producto. Pregunta en barra por la recomendacion del dia. Informacion oficial en esta web; barmugi.com no nos representa.",
  storyHeading: "La barra de Pozas",
  deckLine: "Jamon a cuchillo. Brasa de carbon. Pintxos hechos con mimo.",
  narrativeBandTitle: "Mediodia en Pozas",
  narrativeBandText:
    "Entre oficina y partido, una cana bien tirada y un pintxo en la barra valen por mapa entero.",
  cartaPdfUrl: null,
  cartaPdfLabel: null,
  cartaItems: [
    {
      name: "Pintxos en barra",
      desc: "Bacalao, croqueta, tortilla al momento y otras recomendaciones del dia",
    },
    {
      name: "Brasa de carbon",
      desc: "Carnes ibericas, txistorra y guisos a la parrilla - consulta el dia",
    },
    {
      name: "Jamon a cuchillo",
      desc: "Lonchas finas en barra, cortadas al momento",
    },
    {
      name: "Vinos y copas",
      desc: "Carta amplia; maridajes y generosos de la casa",
    },
  ],
  barBlock: {
    titulo: "En la barra",
    texto:
      "Ven sin prisa: cana bien tirada, pintxo y recomendacion del equipo. Lo que rota cada dia lo mejor es preguntarlo en barra.",
  },
  gruposBlock: {
    titulo: "Grupos y mesas",
    texto:
      "Si venis varios o quereis mesa en hora punta, enviad la solicitud de reserva de abajo o escribid en el formulario de contacto; confirmamos disponibilidad por telefono.",
  },
  faqHeading: "Antes de venir",
  contactBlock: {
    eyebrow: "HABLAMOS",
    eyebrowEditorial: "05 / HABLAMOS",
    title: "¿Que plan tienes en mente?",
    visual: {
      image: "../assets/demo-interior.jpg",
      alt: "Grupos y mesas en el comedor de Mugi, Licenciado Poza",
      link: "#reservar",
    },
  },
  faqItems: [
    {
      q: "¿Teneis carta online con precios?",
      a: "Publicamos la propuesta de barra y cocina en esta web; los detalles y precios los confirma el equipo en el local.",
    },
    {
      q: "¿El dominio barmugi.com sois vosotros?",
      a: "No. Nuestra informacion oficial esta en esta web y en nuestro Instagram. Desconfia de contenidos extranos en dominios antiguos.",
    },
    {
      q: "¿Como confirmo una reserva?",
      a: "Llamanos al 944 413 016 o envia una solicitud online; te confirmamos disponibilidad por telefono.",
    },
    {
      q: "¿Puedo venir solo a tomar un pintxo?",
      a: "Si. La barra esta abierta para pintxos y copas; tambien servimos en mesa cuando reservas.",
    },
  ],
  reserva: {
    diasSemanaCerrados: [6],
    titulo: "Solicitud de reserva",
    opcional: true,
  },
  demoA: {
    skin: "wix-fine-dining",
    referencia:
      "Hero cinema (ref. expediente 0047_Poza42) - imagen a ancho completo, copy centrado, Ver carta + telefono",
  },
  demoAHighlights: [
    { title: "Pintxos", text: "Barra con recomendacion del dia" },
    { title: "Brasa", text: "Carbon y producto iberico" },
    { title: "Jamon", text: "Cortado a cuchillo en barra" },
  ],
  qrPanel: {
    titulo: "Carta en el movil",
    texto:
      "En mesa, escanea para consultar la propuesta de pintxos, brasa y vinos.",
  },
  images: {
    hero: "../assets/demo-hero.jpg",
    barra: "../assets/demo-barra.jpg",
    interior: "../assets/demo-interior.jpg",
    terraza: "../assets/demo-moderno.jpg",
  },
};
window.LA_ALHONDIGA = LA_ALHONDIGA;
window.MUGI = LA_ALHONDIGA;
