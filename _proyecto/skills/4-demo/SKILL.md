---
name: 4-demo
description: "Ejecutar Demo solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Demo

## Estructura en expediente

- **`demos/`** — comparador `index.html`, `demo-a/`, `demo-b/`, `demo-c/`, `shared/`, `assets/` (nombre legado `04-demos/` solo lectura si aún no migrado).
- Resto de entregables de etapa (`04-nota-demo.md`, `04-comparativa.md`, `04-alcance-aceptado.json`) permanecen en la **raíz** del expediente.

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/4-demo` sin más texto equivale a `/4-demo Go`** salvo que el protocolo exija aceptación explícita de alcance. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si ya figura Sí con evidencia vigente, omitir; 1 y 2 tienen reglas especiales de cola descritas abajo. 3–7 no cambian de negocio automáticamente.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. La etapa 1 puede acumular locales sin tope de campaña; 3–7 actúan solo sobre el negocio activo asignado en etapa 2. Registrar fuentes reales, limitaciones y próxima invocación posible; detenerse al terminar.

## Entradas y aceptación del alcance
Etapas **2 Webscraper** y **3 Innovador** completadas y vigentes; propuestas (`03-propuestas-valor.json` o legacy `04-*`). Negocio activo según etapa 2 o **Elegir ID**. Aplicar exactamente operacion/PROTOCOLO.md, apartado Selección aceptada.
Antes de construir, guardar 04-alcance-aceptado.json con selección, versión/hash de propuestas, instrucción literal y condiciones. `/4-demo Go` acepta todas solo en la primera aceptación sin solicitud pendiente. En reanudaciones conserva la selección vigente; ante una nueva versión exige aceptación explícita de esa versión. Una selección explícita acepta solo los IDs elegidos. Registrar solicitud pendiente y resolver interrupciones conforme al protocolo antes de cambiar el alcance. No incluir alternativas ni propuestas omitidas. Detectar IDs inválidos, dependencias, contradicciones o cambios de versión antes de trabajar; nunca completar la selección por intuición.
Si no hay recomendaciones, detenerse e informar del diagnóstico; solo crear una demo básica sin extras mediante instrucción explícita del usuario.

## Procedimiento y salidas

Misión: crear **tres** demos navegables del mismo negocio (**pack A + B + C**, siempre), apoyadas en el brief y en **Entradas para Demo** (etapa 2), con aspecto cercano al **producto final** (no wireframes ni plantillas pobres).

No entregues solo descripciones ni la misma plantilla con colores distintos. Cambia composición, jerarquía, tipografía, tratamiento de imágenes, relato y objetivo principal. Mantén coherentes los hechos del negocio en las **tres**. Las tres variantes **no** deben ser intercambiables.

Punto de partida (adaptar al sector):
- **Demo A:** plana y útil — claridad práctica; oferta principal, horarios/disponibilidad, contacto y cómo llegar; jerarquía directa. **Composición:** partir de plantillas **Wix** o **Figma Community** (mapa en `operacion/plantillas-demo/DEMO-A-WIX-FIGMA.md`); reimplementar en HTML/CSS estático, sin créditos Wix/Figma en UI. **Hero preferido (hostelería/bar):** patrón **`hero--cinema`** — imagen a ancho completo, overlay oscuro, copy **centrado** (kicker, `<h1>`, `propuesta`, CTAs). Referencia implementada: `expedientes/0047_Poza42/demos/demo-a/` (Ver carta + teléfono en hero; reserva vía nav `#reservar`). Clase `body` `demo-a--wix-fine-dining` (tasca/comedor cálido) o `demo-a--wix-cocktail-bar` (bar nocturno); registrar referencia en `04-nota-demo.md`. El hero **split** (imagen | panel blanco) solo si el brief pide explícitamente composición editorial partida.
- **Demo B:** narrativa y emocional — identidad, ambiente, especialidad; misma base factual con otro relato visual (brief **Storytelling Demo B**).
- **Demo C (obligatoria):** **editorial moderna** — sensación de **web actual (≈2026)**, no plantilla redondeada de mediados de 2010. Ver bloque **Demo C** más abajo.

**No** sustituir Demo C por demos «de ocasión» (día de partido, gimmick estacional, landing de campaña puntual). Esas no cuentan como tercera variante del pack.

Elige conceptos apropiados al negocio; las listas siguientes son pautas, no clausura rígida.

### Principios transversales (producto y conversión)

Las demos son **una página con anclas**, no un sitio multipágina ni tienda con pago real. Traducir buenas prácticas de web premium (tipografía, espacio, confianza, CTAs) **sin inventar hechos** ni prometer backend, envíos o legal que no existan en el brief.

- **Jerarquía conversion-focused:** oferta principal (carta/PDF, precios confirmados) → horario → reserva (si aplica) → invitación → mapa → contacto → FAQ → pie. CTA primario visible en hero (carta, reserva o `tel:` según sector).
- **Confianza verificable:** dirección, teléfono sticky, horario honesto, FAQ solo con respuestas alineadas al brief; **sin** reseñas o años de tradición inventados.
- **Contacto editorial (A/B/C comparten datos en `shared/content.js`):** bloque `contactBlock` (antetítulo **HABLAMOS**, titular/lead opcionales, tel) + **`contactBlock.visual`** (foto; **`link`** opcional p. ej. `#reservar` para grupos; cita `<blockquote>` opcional) + formulario en caja blanca. Variante **tel + imagen** sin copy: clase **`site-contact__intro--phone-visual`**, imagen de comedor/grupo, alt orientado a mesas. **`fillContactBlock`** oculta titular/lead/cita si faltan en datos. Altura izquierda ≤ formulario (`site-chrome.css`). Ancho **~1100px**.
- **Grupos y enlace a contacto:** si `gruposBlock.texto` (o walk-in) menciona **«formulario de contacto»**, **`fillInlineContactLink`** / **`fillGruposBlocks`** en `site-cierre.js` enlaza esa frase a **`#contacto`** (`data-grupos-text` en el párrafo). No usar solo `textContent` manual en `app.js`.
- **FAQ de cierre (patrón «Antes de venir»):** **obligatorio en A, B y C** cuando el negocio tenga **visita presencial o cita** y existan dudas publicables (hostelería/comedor: casi siempre). Va **después de Contáctanos** (antes de redes y pie), dentro del **mismo** `.site-contact-layout` que mapa/contacto (~1100px). **Contenido:** redactar en `/4-demo` en `shared/content.js` → `faqHeading` + `faqItems[]` (`q`, `a`); **no** las genera `/3-comercial-innovador` (allí los VAL indican *temas*; la FAQ los resume). Priorizar, si el brief/alcance lo permite: **menú/carta**, **reserva/walk-in**, **grupos/celebraciones**; añadir terraza, precios, accesos solo si hay hecho verificable. Titular hostelería habitual: «Antes de venir»; otros sectores: «Preguntas frecuentes» / «Antes de tu cita». **UI:** `#preguntas.site-faq`, `#faq-list` vacío en HTML; **`faq-init.js`** crea `<details>` cerrados (`summary` + `.faq-answer`); estilos en `site-chrome.css` (serif en titular, sans en preguntas, ▶, bordes finos, fondo crema). **Omitir** la sección solo si no hay ninguna Q&A defendible (documentar en `04-nota-demo.md`). **No** repetir en FAQ el mismo aviso que ya está en Reservar/horario (un mensaje por canal).
- **Copy sin repetición:** no duplicar bajo el hero la **propuesta** del masthead (`propuesta`, `deckLine`, etc.). Avisos puntuales (dominio, legal) van en **carta**, FAQ o datos secundarios — no en un bloque intro que repita el titular.
- **Carta · «En la barra»:** el bloque de barra/pintxos va **dentro de `#carta`** como subapartado (`h3` + párrafo), no como sección hermana entre horario y reserva.
- **Grupos y reserva (hostelería):** en **un solo** `#reservar`: primero **Grupos y mesas** (`h2` + texto coherente con solicitud online **y** formulario `#contacto`), acto seguido **Solicitud de reserva** (`h3` + formulario). **Prohibido** copy que implique «solo teléfono» si hay reserva online; la confirmación sigue siendo por teléfono, pero la intención se captura en web.
- **Demo A · hero cinema:** `.hero--cinema` + `.hero-bg` + `.hero-overlay` + `.hero-inner--center` dentro de `.wrap`; `min-height` ~68vh; gradiente sobre foto; texto blanco; botones centrados (**Ver carta** + **`tel:`** en ghost; no duplicar «Reservar» en hero si ya está en nav). Paleta del local en CTAs (p. ej. acento cálido sobre overlay). Validar portátil y monitor ancho — el copy **no** debe desplazarse a un lateral.
- **Móvil:** menú principal en **hamburguesa** (desplegable con todas las secciones) vía `initMobileNav`; además barra fija opcional **Llamar** + **Cómo llegar** (`conversion-principios.css`); respetar `prefers-reduced-motion`. Escritorio: enlaces en fila.
- **Demo A:** utilitaria con **suelo premium** (tipografía, aire, hero con CTA claro); no clonar el look editorial de C.
- **Demo B:** mismo recorrido de conversión que A; distinto relato visual.
- **Demo C:** máxima expresión editorial (eyebrows, esquinas rectas, contacto tipo revista).
- **Fuera de alcance demo por defecto:** e-commerce con carrito/pago, About/legal multipágina, SEO operativo (sitemap, schema); en demo basta meta description, `lang`, jerarquía H1–H3, contraste y assets locales.

Referencia comparativa interna (cuando el usuario pida contrastar skill): snapshot `demos-pack-skill-actual/` vs pack vigente `demos/` + `04-comparativa-skill-packs.md`.

### Patrones UI de campaña (Demo A y Demo B)

Referencia de implementación: `operacion/plantillas-demo/shared/` (copiar a `demos/shared/`), incluido **`a11y-access.css`**, **`faq-init.js`**, **`site-cierre.js`**, **`carta-grid-c.js`** (solo Demo C) — enlazarlos en **demo-a, demo-b y demo-c** según corresponda. En cada variante, el bloque de cierre (mapa → contacto → FAQ) debe incluir **`#preguntas`** + script `faq-init.js` y llamar `initFaqAndReservaOpcional(d)` tras cargar datos. Patrones Demo C: `operacion/investigacion/referencia-editorial-demo-c.md`. Benchmark sector hostelería: `operacion/investigacion/benchmark-webs-top5-2026-09-28.md`.

**Datos carta/oferta en `shared/content.js`:** cuando haya precios confirmados, usar **`cartaItems`** con `{ name, price|null, desc }` (precio **no** concatenado en `desc`). Renderizar en A/B/C con clase `.carta-price` y `font-variant-numeric: tabular-nums` donde aplique.

**Encabezado doble (A y B):**

1. **Barra superior oscura** — dirección postal legible a la izquierda; a la **derecha**, iconos de redes (**Instagram, Facebook**, Google reseñas, TripAdvisor, etc.) con URL verificada. En **demo** para el cliente: si no hay URLs, mostrar iconos en la barra superior con `headerSocialDemo: true` en datos (`site-cierre.js`); enlaces `#` sin navegación hasta confirmar perfiles (`headerSocialDemo: false` al publicar).
2. **Barra sticky** — **misma familia cromática** que la barra oscura, en tono **más claro** (variables `--site-chrome-dark` / `--site-chrome-light` en `site-chrome.css`). Ajustar al fondo de página: si el fondo es muy llamativo o satura, usar paleta sobria (negro, gris, blanco, beige) vía variables o clase `site-chrome--neutral`. Marca, menú de anclas y **teléfono** (color acento `--site-chrome-tel`, enlace `tel:`). El teléfono **no** va en la barra oscura superior.
3. **Menú unificado en A y B** (mismas etiquetas y orden): **Inicio · Carta · Horario · Reservar · Localización · Contáctanos**. Usar «Localización» (no «Mapa») para el ancla del mapa. Demo B mantiene nav **compacta** (altura baja); Demo A puede ser altura estándar.
4. **`initSiteChrome(data)`** (`site-cierre.js`): rellena `[data-top-address]`, `[data-header-social]`, `[data-nav-tel]`, `[data-nav-brand]`.

**Redes en barra superior · completar fila:** si solo hay **Instagram** verificado, se pueden añadir enlace web/ficha (emoji **🌐** en cabecera, no logo Google) y **TripAdvisor** cuando haya URL — **nunca** inventar URLs en producción. Instagram en barra **oscura:** glifo con **degradado de marca** sobre fondo transparente (estilo logo Instagram), no pastilla ni marco interior.

**Horario y avisos:** bloque con título claro, **un solo** aviso en *cursiva* bajo el título (p. ej. «*Puede estar sujeto a cambios»; en festivos puede ampliarse en datos internos, no en UI como duda) y **tabla** en tarjeta blanca sobre fondo distinto (bordes suaves / sombra ligera). Cabecera de columnas (**Día · Horario**, o las que procedan) en **negrita** sobre fondo **ligeramente más oscuro** que las filas; celdas de datos **sin negrita**. Clases compartidas: `.horario-table` y `.horario-note` (cursiva) en `site-chrome.css`. **Conflicto entre fuentes:** mostrar el horario **más probable** (tabla con tramos concretos), **sin** filas «consultar» ni avisos del tipo «hay duda — llama antes de venir»; la incertidumbre queda solo en el aviso cursiva. Si el brief fija un tramo verificado con teléfono obligatorio, enlazar **`tel:`** en esa celda concreta.

**Carta:** título **«Carta»**. Orden en página: **Carta** y después **Horario y avisos**. Botón **«Ver carta»** (PDF) **antes** del subtítulo (`cartaIntro` desde brief: p. ej. «Lo más pedido en barra», «Nuestra selección de desayuno»). **Prohibido en UI:** «precios en mostrador», «consultar precio en caja» y frases de mostrador que suenen a aviso interno. Tarjetas de carta en Demo A: borde fino, **sin** franja superior de color ni sombra marcada (evitar look «plantilla IA»). **Demo A y C:** no usar fila de **chips/pills** ni lista **`tags-c`** de `servicios` bajo el intro de carta (genérico / «cutre»); la propuesta va en `cartaIntro` y la rejilla de carta. **Demo C · `carta-grid-c`:** pintar con **`renderCartaGridC`** (`plantillas-demo/shared/carta-grid-c.js` + CSS `carta-grid-c--layout-*` en `demo-c/styles.css`); ajustar columnas al nº de ítems (**4→2×2**, **5→3+2**, etc.) para **no dejar huecos** del fondo de línea del grid.

**Contenido por negocio (anti-arrastre):** al reutilizar código de otro expediente, reescribir **`shared/content.js`** y titulares HTML desde el brief activo (dirección, número, producto estrella, tono). No dejar literales de otro local («número 4», «vermut sin prisas», etc.). Campos recomendados en datos: `tagline`, `heroEyebrow`, `storyHeading`, `deckLine`, `narrativeBandTitle`, `narrativeBandText`, `cartaIntro`, `footerTagline` — variar redacción entre negocios (ejemplos de titular B, elegir uno acorde al caso: «La barra en [Calle] [n]», «[Barrio] en la barra», «Donde desayuna [zona]», «El [n] de [calle]»). Banda narrativa Demo B: título y texto acordes al **perfil real** (café matinal, peluquería, comercio…), no copiar bloques «vermut» de hostelería nocturna.

**Esloganes en UI (hostelería y comedor):** integrar **una o dos frases cortas** de campaña, naturales y publicables — no pegar un bloque de eslóganes genérico. Repartir entre hero, banda Demo B, invitación «Te esperamos» o pie. **Demo A:** kicker del hero ← `heroEyebrow` (eslogan); subtítulo ← `propuesta` (oferta factual). **Demo B:** deck bajo masthead ← `deckLine` (puede ser eslogan de dos tiempos). **Demo C:** eyebrow ← `heroEyebrow`; `<h1>` del hero **del negocio activo** (no copiar titular de otro expediente). **Pie (A/B/C):** pie enriquecido (ver paso 7 del cierre); `footerTagline`/`footerSector` en datos — **sin repetir** calle/número ya visibles en contacto. **B:** más calidez narrativa; **C:** variante tipográfica (dos tiempos en mayúsculas solo si encaja con el diseño editorial).

*Banco de referencia* (adaptar, combinar o parafrasear; **no** copiar todos a la vez ni repetir la misma frase en A, B y C):

- Sabor de aquí. Momentos de siempre.
- Lo nuestro, servido con gusto.
- Donde lo de siempre sabe mejor.
- De aquí. Como siempre.
- Una mesa para volver.
- Nuestra tierra, en cada plato.
- Muy de aquí. Muy nuestro.
- Cocina honesta. Sabor de verdad.
- Buena mesa. Mejores momentos.
- [Barrio o localidad], con mucho gusto. *(sustituir por nombre verificado del brief, p. ej. zona o municipio — no inventar topónimo.)*

**Coherencia con la historia del local (obligatorio):** antes de usar eslóganes de **tradición, costumbre o retorno** («de siempre», «como siempre», «para volver», «momentos de siempre», «donde lo de siempre»), comprobar en brief / `02-datos-negocio.json` → `entradas_demo.antiguedad_relato` (etapa 2) y fuentes si el negocio tiene **trayectoria creíble** (años abiertos, referencias explícitas a recuerdo o clientela habitual). Si el valor es **`nuevo`**, **`cambio_marca`** o **`desconocido`**, **no** apoyar el copy en memoria colectiva ni en «volver»: suena falso. En esos casos priorizar presente y producto: proximidad («de aquí», «muy nuestro»), cocina y materia prima («honesta», «nuestra tierra»), servicio («con gusto»), barrio/localidad, **primera visita** o **nuevo rincón del barrio** — sin prometer años que no existen. Si hay duda, redacción neutra y anotar elección en `04-nota-demo.md`. Priorizar eslóganes del brief o innovador si los hay; el banco solo orienta tono peninsular de mesa/bar.

**Implementación (datos + JS):** en `demos/shared/content.js` separar **`tagline`**, **`heroEyebrow`**, **`deckLine`**, **`footerTagline`**, **`footerSector`**, **`footerNav`** (opcional) e **`inviteText`**. Kicker/eyebrow: `heroEyebrow || tagline` en A/C; deck B ← `deckLine`. Pie ← `fillRichFooter`, no lógica duplicada en `app.js`. Documentar eslogan y antigüedad en `04-nota-demo.md`. **QA opcional:** `scripts/prueba-esloganes-demo.ps1`.

**FAQ · redacción:** preguntas en **español de España**, abrir con **`¿`**. En **`/8-publicar-demos`**, la pasada sin tildes **no** debe quitar `¿`/`¡` del slug publicado. Detalle de markup y obligatoriedad: bullet **FAQ de cierre** arriba y paso 5 del **Cierre de página**.

**Reserva:** ver también **Grupos y reserva** en principios transversales. No repetir teléfonos bajo «Enviar solicitud». Formulario oculto al cargar; botón **«Reserva online»** abre/cierra el panel (toggle). Orden: **Personas** antes que **Fecha**. Calendario compacto bajo 📅 (ver bloque hostelería). **Un solo mensaje** en la sección Reservar: **no** apilar `reservaTelefonosNota` (cursiva bajo el título) y `reservaWalkInLead` si dicen lo mismo — usar **uno u otro** (`reservaTelefonosNota: null` oculta `[data-reserva-tel-nota]`). Si el copy menciona el **formulario de contacto**, debe llevar enlace a **`#contacto`** (`fillReservaWalkInLead` en `site-cierre.js` / `initSiteChrome`, frase configurable `reservaContactoLinkPhrase`). Campo datos recomendado: `gruposBlock` (titulo + texto alineado con formularios web).

**Cierre de página (orden fijo al final del `<main>` o del documento):**

1. **Invitación (obligatoria)** — titular **«Te esperamos»** + subtítulo presencial del brief. Refuerza visita presencial; no es CTA de venta agresiva. En **A y B:** bloque habitual de campaña. En **C:** **banda ancha y baja** (mismo ancho útil que localización), no bloque alto centrado tipo banner 2015.
2. **Mapa** — iframe embebido (Google Maps u OpenStreetMap) **centrado en la dirección** con zoom de calle (p. ej. `z=17`), no vista mundial. En `content.js`: `map.embedUrl` con `z`, `hl=es`, `output=embed` (coordenadas verificadas o query de dirección); opcional `embedZoom`. **`initSiteCierre`** aplica `mapEmbedSrc()` (`site-cierre.js`) para inyectar `z`/`hl` si faltan. Encima del mapa: **`[data-map-address]`** en **negrita**, alineada al borde izquierdo del iframe. Contenedor `.site-map-wrap`: bordes redondeados (~10px), sombra suave, altura ~400px en escritorio.
3. **Acciones de mapa** — dos enlaces/botones visibles: **Abrir en Google Maps** (vista del lugar) y **Cómo llegar** (modo direcciones / `maps/dir` con destino = dirección del local). Comportamiento real en demo; no botones muertos.
4. **Contáctanos** — inmediatamente **debajo** del bloque mapa; layout **dos columnas** en escritorio (copy + tel/mailto desde `contactBlock` | formulario en caja). Cuatro campos obligatorios: Nombre, Correo, Asunto, Mensaje. En producción el envío irá al **email que facilite el propietario** (`ownerEmail` en datos compartidos o `02-datos-negocio.json`). En demo estática: `mailto:` con asunto/cuerpo codificados **solo si** hay email confirmado; si no, mensaje claro de simulación (detalle en `04-nota-demo.md`, sin banner de campaña en UI). **No** mostrar «Mensaje enviado» si solo se abre el cliente de correo.
5. **FAQ (p. ej. «Antes de venir»)** — inmediatamente **debajo** de Contáctanos; `#preguntas` + `#faq-list` rellenado por **`faq-init.js`** (acordeón `details/summary`, ver principios transversales). Misma fila de layout que mapa/contacto. Matriz `04-comparativa.md`: ancla `#preguntas` para dudas transversales alineadas a VAL aceptados.
6. **Redes en pie** — solo URL verificada (`target="_blank"`); si no hay perfil, ocultar fila (no inventar).
7. **Pie (obligatorio A/B/C)** — **`site-footer--rich`**: markup `plantillas-demo/shared/footer-rich.html` + CSS en `site-chrome.css`; **`initSiteChrome`** → `fillRichFooter` (`footerSector`, `footerTagline`/`footerBlurb`). **Navegación del pie:** array **`footerNav`** en `content.js` (`[{ label, href }]`) cuando el menú no sea el estándar hostelería o las anclas difieran; **si falta `footerNav`**, clonar enlaces de **`.site-nav-menu` de esa demo** (A/B/C pueden no coincidir). Sin créditos de plantilla en UI.

**Barra de navegación fija (sticky):** enlaces a anclas con `scroll-margin-top` (ver `site-chrome.css`). Comprobar clic en móvil y escritorio.

- **Demo A:** nav sticky estándar (altura normal); prioridad utilitaria.
- **Demo B:** nav sticky **compacta** (poca altura), mismo menú que A; máximo espacio al storytelling en pantalla.

**Demo B · storytelling (rol 2 alimenta rol 4):** usar en `02-brief.md` el bloque **Storytelling Demo B** (ver skill 2-webscraper). Vender **experiencia**, no listado de producto. Composición: párrafos largos + detalle sensorial anclado en hechos + cierre emocional antes del mapa. Mismos hechos que Demo A; distinto tono y jerarquía visual.

### Demo C · editorial moderna (obligatoria)

Carpeta **`demos/demo-c/`** en **cada** entrega `/4-demo`. Mismo alcance VAL y mismos datos compartidos que A/B (`shared/content.js`, `site-cierre.js`, `reservacion.js` cuando aplique al sector).

**Objetivo visual:** estudio / marca contemporánea — **profesional, menos «plantilla IA»**, menos aspecto **Bootstrap redondeado (~2015)**. Paleta **libre** (no color corporativo fijo).

**Forma y componentes:**
- **Botones y controles con esquinas rectas** (`border-radius: 0` en CTAs, inputs, mapa, tarjetas principales).
- **Tipografía:** pareja **display serif o humanista + sans geométrica** (p. ej. Cormorant Garamond + Montserrat u otra OFL equivalente); jerarquía clara, tracking en labels/eyebrows.
- **Scroll reveal** moderado: `.reveal` + `initScrollReveal` (`shared/scroll-reveal.js`); animación suave, respetar `prefers-reduced-motion`.
- **Ritmo:** secciones con **poco padding vertical** entre bloques; rejillas con separación fina (1px / líneas), no tarjetas hinchadas con sombras grises.
- **Hero** oscuro o de alto contraste con **eyebrow** (línea decorativa) y imagen de ambiente.
- **Galería** breve de imágenes del negocio (hero, interior, producto/servicio…) cuando haya activos; si no, placeholders documentados.
- **Nav sticky** editorial (marca, anclas, teléfono); puede reutilizar encabezado doble de campaña o variante C coherente con el mismo menú funcional (adaptar etiquetas al sector: Carta/Servicios, Horario, Reservar/Cita, Localización, Contáctanos).

**Evitar en C (look dated):** botones pill, `border-radius` grandes en todo, sombras pesadas tipo card 2014, gradientes decorativos excesivos, iconografía genérica redonda, tipografía system-ui sin intención, bloques centrados con mucho aire vacío entre secciones.

**Referencia de patrones (no copiar textos):** adaptar **layout y comportamiento** (scroll, tipografía, botones rectos) al negocio activo. **Ejemplo documentado** de este estilo editorial: [centrosaludactiva.es](https://www.centrosaludactiva.es/) — análisis patrón↔Demo C en `operacion/investigacion/referencia-editorial-demo-c.md` (no clon visual ni de contenido; paleta y secciones del local). Otras URLs solo si el usuario las indica en campaña.

**Funcionalidad:** mapa, Contáctanos (4 campos), simulaciones de reserva/cita según alcance, copy publicable sin fuentes internas — igual criterio que A/B.

### Calidad visual y fidelidad al producto

Las **tres** demos deben **verse como una web real del negocio** que el cliente podría publicar: espaciado, tipografía, color, fotografía, jerarquía y componentes cuidados (hero, secciones, carta legible, CTAs claros). Evita placeholders gráficos genéricos, bloques vacíos y estética de «prototipo barato».

**Imágenes en páginas demo:** en `shared/content.js` → `images.hero`, `barra`, `interior`, `terraza` apuntando a **JPG en `assets/`** (`demo-hero.jpg`, `demo-barra.jpg`, `demo-interior.jpg`, `demo-moderno.jpg` → clave `terraza`). Evitar SVG placeholder en hero/galería salvo ausencia total de red.

**Imágenes — orden de prioridad**

1. Fotos **reales del establecimiento** (interior, barra, fachada, platos solo si la fuente es claramente **ese** local): `02-activos.json`, web propia (HTML: rutas bajo `/s/img/`, `/s/cc_images/cache_*.jpg`, etc.), perfil Eatbu/redes del brief, **Google Maps / Google Business**.
2. Si no hay material **atractivo o suficiente**: stock de **Unsplash**, **Pexels** o **Pixabay** (licencia libre habitual para demo comercial; no sustituye foto titular en producción).

**Imágenes — encaje con el negocio (obligatorio)**

Leer el brief (estilo, oferta, adjetivos Demo B/C) y asignar cada slot a lo que la demo **quiere transmitir**, no a un ID genérico:

| Slot | Uso en demos | Criterio hostelería (ejemplos) |
| --- | --- | --- |
| `hero` | Demo A split / B mast / C hero | Comedor real del local, o stock de **mediodía**, comedor acogedor, arcos/piedra si el brief lo dice |
| `barra` | Demo B lateral, galería C | Barra, pintxos, copas; evitar fachada aquí si el copy habla de barra |
| `interior` | Storytelling, galería | Servicio de sala, ambiente del ritual (mediodía, tardeo) |
| `terraza` → `demo-moderno.jpg` | Galería C, tono editorial | Local **contemporáneo** o tardeo social; distinto del hero |

**Restaurante mediodía / clásico:** priorizar salón real (p. ej. arcos de piedra); stock de servicio de comedor o barra con arcos. **Bar de ron/cócteles:** estantería de destilados, copa en barra con luz cálida, tardeo con copas — no cafetería ni imágenes irrelevantes.

**Imágenes — descarga y trazabilidad**

- Copias locales en `demos/assets/`; **no** hotlink frágil en entrega final.
- **`assets/manifest.json`:** por archivo → URL origen, fuente (web oficial / Unsplash / Pexels / Pixabay), fecha, nota de criterio.
- **`04-nota-demo.md`:** resumen de fuentes y limitaciones (sustituir por fotos del titular antes de producción).
- **Verificación visual obligatoria** tras cada descarga: abrir el JPG y confirmar contenido. **No confiar solo en el número de foto** (en Pexels el mismo ID puede no corresponder al tema esperado).
- **Pixabay:** a menudo **403** en descarga automática por CDN; bajar la imagen **desde el navegador** y copiar a `assets/`, registrando URL en manifest.
- No uses stock de otro local con nombre parecido. Sin plato fiable → ambiente/barra o tipografía; no inventar plato concreto.

**Aviso de imágenes en UI (obligatorio):** en **cada** página demo (`demo-a`, `demo-b`, **`demo-c`**) y en el comparador `demos/index.html`, fija arriba a la izquierda el texto exacto **«*Imágenes de ejemplo sacadas de internet»** (incluye el asterisco inicial). Estilo discreto (tipografía pequeña, fondo semitransparente legible sobre hero/fotos), sin ocupar banda completa. Reutiliza `demos/shared/image-disclaimer.css` o equivalente compartido.

**Resto de avisos fuera de la UI:** no añadas otros banners, cintas ni badges de campaña («propuesta no oficial», «borrador», «demostración», etc.). Compliance ampliado, limitaciones, datos no confirmados, simulaciones, licencias detalladas y «no es web publicada» van en **`04-nota-demo.md`** (instrucciones localhost también ahí o en `04-comparativa.md`). En la UI, los datos dudosos se expresan con **copy natural de negocio** (p. ej. «Horario sujeto a cambio — llámanos») sin etiquetas técnicas de campaña.

**Copy de producto final (obligatorio):** la demo debe leerse como **web que el cliente podría publicar**. **Prohibido** en pantalla: citar fuentes de investigación (Pidemesa, carta.menu, reseñas, agregadores), notas internas («mencionado en…», «referencia…», «según…»), incertidumbre de campaña o metadatos de verificación junto a cada dato. Las fuentes y limitaciones van solo en `04-nota-demo.md` / brief; en UI, redacción comercial neutra y definitiva.

**Solicitud de reserva (patrón hostelería):** incluir el bloque **«Solicitud de reserva»** en **A, B y C** cuando el local encaje con reserva (hostelería por defecto), aunque VAL-004 sea opcional en alcance. **Copy sin duplicar:** o bien `reservaTelefonosNota` (cursiva, teléfonos de reserva) **o bien** `reservaWalkInLead` (p. ej. barra sin reserva + grupos), no los dos con el mismo aviso. Rellenar walk-in con `#reserva-walkin` / `[data-reserva-walkin]` vía **`initSiteChrome`** → `fillReservaWalkInLead` (enlace automático a `#contacto` si el texto incluye «formulario de contacto»). Opcional `reservaWalkInLeadHtml` solo si hace falta markup manual. Sin párrafos introductorios largos sobre terraza/grupos o pago online: la **disponibilidad concreta** se comunica **al confirmar la solicitud** (mensaje post-envío o paso siguiente). **No** mostrar un calendario mensual a pantalla completa por defecto: fila **Fecha** + botón **«Seleccionar día»** (📅) en la **misma línea**; panel compacto (~20rem) que **permanece abierto** al cambiar de mes; cierre solo al elegir día o clic fuera. Colores por día (según **personas** elegidas): **gris** = cerrado; **verde** = hay sitio para ese grupo; **rojo** = completo (sin estado naranja). Markup: `[data-reserva-cal-trigger]`, `[data-reserva-cal-panel]`, `[data-reserva-cal]` + `initReservacionForm`. Huecos simulables; «sin backend» solo en nota interna.

Usa una base técnica sencilla y estática. Si el proyecto ya tiene un stack, respétalo cuando sea razonable. Si empieza vacío, prioriza HTML/CSS/JS o una estructura estática mínima. Sin backend, cuentas de usuario ni base de datos. Separa contenido y presentación para actualizar datos sin rehacer el diseño.

Crea `demos/demo-a/`, `demo-b/`, **`demo-c/`**, `demos/assets/` y un **comparador** `demos/index.html` con **tres** entradas (A, B, C). Evita grandes frameworks o dependencias solo para parecer profesional.

**Comparador (`demos/index.html`):** títulos de tarjeta **fijos por tipo** (no sustituir por nombre de calle del local): **Demo A · Informativa**, **Demo B · Story telling**, **Demo C · Moderno**. Cada tarjeta: imagen de preview (aspecto 16:10), párrafo breve del enfoque del negocio y enlace «Abrir demo X». **Imágenes del comparador:** `comparador-demo-a.jpg`, `comparador-demo-b.jpg`, `comparador-demo-c.jpg` — normalmente **derivados** de `demo-hero`, `demo-interior` (o `demo-barra` si encaja mejor con B) y `demo-moderno`, con temática alineada a cada tipo (informativa / storytelling / moderno); **no** SVG genéricos ni hotlink. **`alt`** descriptivo del sector del local (no «cafetería» genérico si es restaurante o bar de copas). Registrar en `manifest.json`. Mantener disclaimer `*Imágenes de ejemplo sacadas de internet` en el comparador. **Autonomía para compartir:** el comparador **no** enlaza rutas fuera de `demos/` (p. ej. `../04-comparativa.md`); la documentación de campaña vive en la raíz del expediente, no en el ZIP al cliente.

**Skip link (A/B/C):** en las **tres** variantes, justo tras el disclaimer de imágenes, enlace **«Saltar al contenido»** (`class="skip-link"`) hacia el primer bloque principal (`#contenido`, `#historia` o `#carta` en C). Estilos focus visibles (ver `demo-a/styles.css` o `a11y-access.css`).

**Terraza en UI:** si `02-datos-negocio.json` → `hechos.terraza` está documentada con fuente (etapa 2), permitir mención en **placeholder** de notas de reserva («Terraza, cumpleaños…»), **FAQ** y galería **`images.terraza`** en Demo C. No inventar aforo ni prometer disponibilidad; respetar `prohibido_ui` para lo demás (precios, agregadores).

Requisitos:
- Diseño móvil y escritorio, navegación por teclado, contraste y jerarquía legible.
- Contenido específico comprobado; lo no confirmado solo con redacción comercial neutra, no avisos de sistema.
- No mostrar carta histórica/incierta como vigente; en UI usar lenguaje de barra («Sugerencias de barra», «Consultar disponibilidad») si hace falta; el detalle de verificación en `04-nota-demo.md`.
- Enlaces correctos y botones con comportamiento explícito. Reservas/pedidos simulados: flujo creíble en UI; la aclaración de que no hay transacción real solo en `04-nota-demo.md`.
- No inventar testimonios, reseñas o afiliación oficial en las demos.
- Tipografías con procedencia/licencia documentada en `04-nota-demo.md`.
- Ningún tracker, envío externo o recogida de datos reales por defecto.
- Instrucciones exactas para abrir o servir las demos localmente en `04-nota-demo.md` o `04-comparativa.md`; explicar que localhost es vista previa, no publicación.

QA proporcional: abrir y revisar **A, B y C** en móvil/escritorio si las herramientas lo permiten, comprobar navegación, enlaces, scroll reveal en C, carga de activos locales, calidad visual y coherencia con el brief. Corregir fallos evidentes. Si no puedes verlas, declara «revisión visual pendiente» en `04-nota-demo.md`; no afirmes que está validada. No construyas una suite extensa de tests para esta demo.

**Checklist pre-cierre (bloqueante si falla):** contrastar demo con `02-datos-negocio.json` → `entradas_demo.conversion_2026` y **`prohibido_ui`** (ningún texto prohibido en pantalla); **`skip-link`** en A, B y C; comparador sin enlaces fuera de `demos/`; `a11y-access.css` presente en las tres variantes; **`faq-init.js`** + `#preguntas` en A/B/C (o omisión justificada en nota); FAQ acordeón operativo; precios confirmados con esquema `price`/`desc` cuando existan; **`<meta name="color-scheme" content="light">`** en diseños de fondo claro; eslóganes de tradición/retorno **solo** si el brief respalda antigüedad o relato — si no, revisar copy de apertura/nuevo local; **un CTA primario** en hero; contacto + FAQ en orden de cierre acordado; **sin avisos duplicados** (Reservar vs FAQ vs horario); enlaces a `#contacto` donde el copy cite formulario de contacto; barra móvil contacto si el pack usa `conversion-principios.css`.

Entrega **`04-nota-demo.md`**, **`04-comparativa.md`**, **`04-alcance-aceptado.json`**: concepto de **las tres** variantes, objetivo, diferencias A/B/C, evidencias, hipótesis, **demo recomendada para comercial** (una de las tres, con motivo) y matriz de IDs. Guarda capturas si hay herramienta disponible. Etapas posteriores usan la recomendada pero conocen el pack completo.

## Reflejar el valor aceptado
Las **tres** demos comparten exactamente los mismos IDs aceptados y restricciones; cambia composición y tratamiento visual, no el alcance comercial. Mantener los servicios añadidos en secciones secundarias coherentes con la actividad principal; agruparlos si hay muchas propuestas para evitar una página saturada. Cada ID debe tener representación localizable en **A, B y C**, aunque no esté en portada.
Usar una matriz en 04-comparativa.md: ID → sección/recorrido en **A, B y C** → estado (informativo, enlace verificado o simulación). Los servicios físicos o externos se explican o se enlazan cuando existe un destino verificado; no inventar funciones web.
Un carrito, pedido, pago, reserva o programa de fidelización nuevo se representa como prototipo con UX creíble; limitaciones y «sin backend» en `04-nota-demo.md`. No crear backend ni contratar integraciones. No sustituir herramientas existentes sin decisión expresa. Si una condición cambia esencialmente la propuesta, pedir revisión del rol 4; no diseñar un servicio distinto silenciosamente.

## Aceptación
**Pack de tres demos** diferenciadas (A práctica, B narrativa, **C editorial moderna**), **calidad visual de producto**, assets documentados, comparador local con tres tarjetas, `04-nota-demo.md`, `04-comparativa.md` y `04-alcance-aceptado.json`. Aviso de imágenes en A/B/C/comparador. **Pie enriquecido** en A/B/C. Verificar igualdad de IDs entre alcance y **las tres** demos. Demo C cumple pautas modernas (botones rectos, reveal, galería, banda «Te esperamos», sin estética redondeada años 2010). Cumplir **checklist pre-cierre** anterior. QA móvil/escritorio en las tres; declarar revisión visual pendiente si no hay herramienta. Fallos funcionales esenciales bloquean.

**Patrones UI:** A/B — encabezado doble, menú unificado (adaptar al sector), horario tabla, carta/ oferta, reserva 📅 si aplica, cierre mapa+Contáctanos+**FAQ acordeón**, Demo B compacta y storytelling; **C** — bloque editorial moderno anterior + mismos VAL funcionales; sin créditos de plantilla; copy sin citar fuentes internas. **Esloganes:** al menos una frase de campaña coherente con `antiguedad_relato` repartida en A/B/C (no la misma cadena repetida tres veces).

## Checklist compartida
Trabajar solo sobre el ID activo, con Decisión selección=Seleccionado y columnas previas en Sí con evidencias vigentes. Al completar y guardar todas las salidas, marcar 4 Demo=Sí. Si falla o requiere revisión mantener No y motivo. No marcar otra etapa ni cambiar decisiones de Selección. En Rehacer archivar versión y poner No solo en las etapas descendientes afectadas; conservar fechas/historia en estado. Un Sí sin archivos/versiones válidos se reconcilia antes de continuar.

## Entrega HTML · reglas reutilizables (supervisor /9)

- **HTML cliente:** no atributos `data-val` ni metadatos VAL en demos publicables; trazabilidad en `04-comparativa.md`.
- **`content.js`:** objeto global **`SITE_DATA`** (+ alias `window.MUGI`); no nombres de otros expedientes en la constante.
- **Comparador autónomo** (sin `../04-*.md`).
- **`alt` en JS:** sin términos prohibidos en copy visible (p. ej. «salón»).
- **Móvil (≤768px):** menú **hamburguesa** (tres barras) que despliega todas las anclas; en escritorio, barra horizontal. Implementación compartida: `site-cierre.js` → `initMobileNav` + estilos en `site-chrome.css`.
- **Redes cabecera:** `headerSocialDemo` puede mostrar iconos de ejemplo en preview; en producción, solo canales verificados.
