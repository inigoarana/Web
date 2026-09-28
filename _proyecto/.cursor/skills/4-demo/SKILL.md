---
name: 4-demo
description: "Ejecutar Demo solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Demo

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
- **Demo A:** plana y útil — claridad práctica; oferta principal, horarios/disponibilidad, contacto y cómo llegar; jerarquía directa.
- **Demo B:** narrativa y emocional — identidad, ambiente, especialidad; misma base factual con otro relato visual (brief **Storytelling Demo B**).
- **Demo C (obligatoria):** **editorial moderna** — sensación de **web actual (≈2026)**, no plantilla redondeada de mediados de 2010. Ver bloque **Demo C** más abajo.

**No** sustituir Demo C por demos «de ocasión» (día de partido, gimmick estacional, landing de campaña puntual). Esas no cuentan como tercera variante del pack.

Elige conceptos apropiados al negocio; las listas siguientes son pautas, no clausura rígida.

### Patrones UI de campaña (Demo A y Demo B)

Referencia de implementación: `operacion/plantillas-demo/shared/` (copiar a `04-demos/shared/`). Patrones Demo C: `operacion/investigacion/referencia-editorial-demo-c.md`. Benchmark sector hostelería: `operacion/investigacion/benchmark-webs-top5-2026-09-28.md`.

**Encabezado doble (A y B):**

1. **Barra superior oscura** — dirección postal legible a la izquierda; a la **derecha**, iconos de redes (**Instagram, Facebook**, Google reseñas, TripAdvisor, etc.) con URL verificada. En **demo** para el cliente: si no hay URLs, mostrar iconos en la barra superior con `headerSocialDemo: true` en datos (`site-cierre.js`); enlaces `#` sin navegación hasta confirmar perfiles (`headerSocialDemo: false` al publicar).
2. **Barra sticky** — **misma familia cromática** que la barra oscura, en tono **más claro** (variables `--site-chrome-dark` / `--site-chrome-light` en `site-chrome.css`). Ajustar al fondo de página: si el fondo es muy llamativo o satura, usar paleta sobria (negro, gris, blanco, beige) vía variables o clase `site-chrome--neutral`. Marca, menú de anclas y **teléfono** (color acento `--site-chrome-tel`, enlace `tel:`). El teléfono **no** va en la barra oscura superior.
3. **Menú unificado en A y B** (mismas etiquetas y orden): **Inicio · Carta · Horario · Reservar · Localización · Contáctanos**. Usar «Localización» (no «Mapa») para el ancla del mapa. Demo B mantiene nav **compacta** (altura baja); Demo A puede ser altura estándar.
4. **`initSiteChrome(data)`** (`site-cierre.js`): rellena `[data-top-address]`, `[data-header-social]`, `[data-nav-tel]`, `[data-nav-brand]`.

**Redes en barra superior · completar fila:** si solo hay **Instagram** verificado, se pueden añadir enlace web/ficha (emoji **🌐** en cabecera, no logo Google) y **TripAdvisor** cuando haya URL — **nunca** inventar URLs en producción. Instagram en barra **oscura:** glifo con **degradado de marca** sobre fondo transparente (estilo logo Instagram), no pastilla ni marco interior.

**Horario y avisos:** bloque con título claro, **un solo** aviso en *cursiva* bajo el título (p. ej. «*Horario sujeto a cambios. En festivos puede haber cierre u horario especial.») y **tabla** en tarjeta blanca sobre fondo distinto (bordes suaves / sombra ligera). Cabecera de columnas (**Día · Horario**, o las que procedan) en **negrita** sobre fondo **ligeramente más oscuro** que las filas; celdas de datos **sin negrita**. Clases compartidas: `.horario-table` en `site-chrome.css`.

**Carta:** título **«Carta»**. Orden en página: **Carta** y después **Horario y avisos**. Botón **«Ver carta»** (PDF) **antes** del subtítulo (`cartaIntro` desde brief: p. ej. «Lo más pedido en barra», «Nuestra selección de desayuno»). **Prohibido en UI:** «precios en mostrador», «consultar precio en caja» y frases de mostrador que suenen a aviso interno. Tarjetas de carta en Demo A: borde fino, **sin** franja superior de color ni sombra marcada (evitar look «plantilla IA»). **Demo A:** no usar fila de **chips/pills** de servicios bajo el intro (no aportan y se ven genéricos).

**Contenido por negocio (anti-arrastre):** al reutilizar código de otro expediente, reescribir **`shared/content.js`** y titulares HTML desde el brief activo (dirección, número, producto estrella, tono). No dejar literales de otro local («número 4», «vermut sin prisas», etc.). Campos recomendados en datos: `storyHeading`, `deckLine`, `narrativeBandTitle`, `narrativeBandText`, `cartaIntro` — variar redacción entre negocios (ejemplos de titular B, elegir uno acorde al caso: «La barra en [Calle] [n]», «[Barrio] en la barra», «Donde desayuna [zona]», «El [n] de [calle]»). Banda narrativa Demo B: título y texto acordes al **perfil real** (café matinal, peluquería, comercio…), no copiar bloques «vermut» de hostelería nocturna.

**FAQ y secciones:** bloques FAQ (`#preguntas`) con el **mismo ancho y márgenes** que carta/horario/reserva en Demo B (contenedor centrado + padding horizontal alineado). Preguntas en **español de España**: abrir con **`¿`** (no `?` suelto al inicio). En **`/8-publicar-demos`**, la pasada sin tildes **no** debe quitar `¿`/`¡` del slug publicado.

**Reserva:** no repetir teléfonos bajo «Enviar solicitud». Formulario oculto al cargar; botón **«Reserva online»** abre/cierra el panel (toggle). Orden: **Personas** antes que **Fecha**. Calendario compacto bajo 📅 (ver bloque hostelería).

**Cierre de página (orden fijo al final del `<main>` o del documento):**

1. **Invitación (obligatoria)** — titular **«Te esperamos»** + subtítulo presencial del brief. Refuerza visita presencial; no es CTA de venta agresiva. En **A y B:** bloque habitual de campaña. En **C:** **banda ancha y baja** (mismo ancho útil que localización), no bloque alto centrado tipo banner 2015.
2. **Mapa** — iframe embebido (Google Maps u OpenStreetMap) centrado en la dirección verificada; encima o junto al mapa, la dirección postal legible.
3. **Acciones de mapa** — dos enlaces/botones visibles: **Abrir en Google Maps** (vista del lugar) y **Cómo llegar** (modo direcciones / `maps/dir` con destino = dirección del local). Comportamiento real en demo; no botones muertos.
4. **Contáctanos** — inmediatamente **debajo** del bloque mapa; formulario con **cuatro campos obligatorios**: Nombre, Correo electrónico, Asunto, Mensaje. En producción el envío irá al **email que facilite el propietario** (`ownerEmail` en datos compartidos o `02-datos-negocio.json`). En demo estática: `mailto:` con asunto/cuerpo codificados **solo si** hay email confirmado; si no, mensaje claro de simulación (detalle en `04-nota-demo.md`, sin banner de campaña en UI).
5. **Redes sociales (pie)** — iconos **solo** con URL verificada; enlace `target="_blank"` + `rel="noopener noreferrer"`. Si no hay perfil oficial, **omitir** la fila del pie (no inventar). La barra superior oscura sigue la regla de encabezado doble.
6. **Pie** — marca, dirección o tagline; puede repetir teléfono. **Prohibido** en UI: créditos de plantilla, «skin inspirada en…», licencias de tema o metadatos de campaña.

**Barra de navegación fija (sticky):** enlaces a anclas con `scroll-margin-top` (ver `site-chrome.css`). Comprobar clic en móvil y escritorio.

- **Demo A:** nav sticky estándar (altura normal); prioridad utilitaria.
- **Demo B:** nav sticky **compacta** (poca altura), mismo menú que A; máximo espacio al storytelling en pantalla.

**Demo B · storytelling (rol 2 alimenta rol 4):** usar en `02-brief.md` el bloque **Storytelling Demo B** (ver skill 2-webscraper). Vender **experiencia**, no listado de producto. Composición: párrafos largos + detalle sensorial anclado en hechos + cierre emocional antes del mapa. Mismos hechos que Demo A; distinto tono y jerarquía visual.

### Demo C · editorial moderna (obligatoria)

Carpeta **`04-demos/demo-c/`** en **cada** entrega `/4-demo`. Mismo alcance VAL y mismos datos compartidos que A/B (`shared/content.js`, `site-cierre.js`, `reservacion.js` cuando aplique al sector).

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

**Imágenes en páginas demo:** en `shared/content.js` → `images.hero`, `barra`, `interior`, `terraza` apuntando a **JPG en `assets/`** (mismos criterios que comparador: Unsplash/Pexels acorde al sector hasta tener fotos del local). Evitar SVG placeholder en hero/galería salvo ausencia total de red.

**Imágenes:** prioriza fotos **reales del establecimiento** (interior, barra, terraza, platos cuando la fuente sea claramente de ese local). Fuentes habituales: `02-activos.json`, perfil Eatbu/redes del brief, **Google Maps / Google Business** (fotos públicas del negocio). Descarga copias en `04-demos/assets/` (nombres descriptivos) y referencia rutas relativas en el HTML; no hotlinking frágil en la entrega final de demo. Registra URL, fecha y criterio de identificación en `04-nota-demo.md`. No uses fotos de stock ni imágenes de otro local con nombre parecido. Si no hay foto fiable de un plato concreto, usa foto de ambiente/barra o tipografía sobre color; no inventar un plato.

**Aviso de imágenes en UI (obligatorio):** en **cada** página demo (`demo-a`, `demo-b`, **`demo-c`**) y en el comparador `04-demos/index.html`, fija arriba a la izquierda el texto exacto **«*Imágenes de ejemplo sacadas de internet»** (incluye el asterisco inicial). Estilo discreto (tipografía pequeña, fondo semitransparente legible sobre hero/fotos), sin ocupar banda completa. Reutiliza `04-demos/shared/image-disclaimer.css` o equivalente compartido.

**Resto de avisos fuera de la UI:** no añadas otros banners, cintas ni badges de campaña («propuesta no oficial», «borrador», «demostración», etc.). Compliance ampliado, limitaciones, datos no confirmados, simulaciones, licencias detalladas y «no es web publicada» van en **`04-nota-demo.md`** (instrucciones localhost también ahí o en `04-comparativa.md`). En la UI, los datos dudosos se expresan con **copy natural de negocio** (p. ej. «Horario sujeto a cambio — llámanos») sin etiquetas técnicas de campaña.

**Copy de producto final (obligatorio):** la demo debe leerse como **web que el cliente podría publicar**. **Prohibido** en pantalla: citar fuentes de investigación (Pidemesa, carta.menu, reseñas, agregadores), notas internas («mencionado en…», «referencia…», «según…»), incertidumbre de campaña o metadatos de verificación junto a cada dato. Las fuentes y limitaciones van solo en `04-nota-demo.md` / brief; en UI, redacción comercial neutra y definitiva.

**Solicitud de reserva (patrón hostelería):** incluir el bloque **«Solicitud de reserva»** en **A, B y C** cuando el local encaje con reserva (hostelería por defecto), aunque VAL-004 sea opcional en alcance. Debajo del título, línea en **cursiva** con teléfonos de reserva (`reservaTelefonosNota` en datos, p. ej. «*También atendemos reservas por teléfono … | …»), rellenada por `initSiteChrome`. Sin párrafos introductorios largos sobre terraza/grupos o pago online: la **disponibilidad concreta** se comunica **al confirmar la solicitud** (mensaje post-envío o paso siguiente). **No** mostrar un calendario mensual a pantalla completa por defecto: fila **Fecha** + botón **«Seleccionar día»** (📅) en la **misma línea**; panel compacto (~20rem) que **permanece abierto** al cambiar de mes; cierre solo al elegir día o clic fuera. Colores por día (según **personas** elegidas): **gris** = cerrado; **verde** = hay sitio para ese grupo; **rojo** = completo (sin estado naranja). Markup: `[data-reserva-cal-trigger]`, `[data-reserva-cal-panel]`, `[data-reserva-cal]` + `initReservacionForm`. Huecos simulables; «sin backend» solo en nota interna.

Usa una base técnica sencilla y estática. Si el proyecto ya tiene un stack, respétalo cuando sea razonable. Si empieza vacío, prioriza HTML/CSS/JS o una estructura estática mínima. Sin backend, cuentas de usuario ni base de datos. Separa contenido y presentación para actualizar datos sin rehacer el diseño.

Crea `04-demos/demo-a/`, `demo-b/`, **`demo-c/`**, `04-demos/assets/` y un **comparador** `04-demos/index.html` con **tres** entradas (A, B, C). Evita grandes frameworks o dependencias solo para parecer profesional.

**Comparador (`04-demos/index.html`):** títulos de tarjeta **fijos por tipo** (no sustituir por nombre de calle del local): **Demo A · Informativa**, **Demo B · Story telling**, **Demo C · Moderno**. Cada tarjeta: imagen de preview (aspecto 16:10), párrafo breve del enfoque del negocio y enlace «Abrir demo X». **Imágenes del comparador:** descargar a `assets/comparador-demo-a.jpg`, `comparador-demo-b.jpg`, `comparador-demo-c.jpg` desde bancos gratuitos (Unsplash, Pexels…) con temática acorde al sector (hostelería: barra/desayuno, ambiente acogedor, local contemporáneo); **no** SVG genéricos ni hotlink frágil. Registrar origen y URL en `assets/manifest.json` o `04-nota-demo.md`. Mantener disclaimer `*Imágenes de ejemplo sacadas de internet` en el comparador.

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

Entrega **`04-nota-demo.md`**, **`04-comparativa.md`**, **`04-alcance-aceptado.json`**: concepto de **las tres** variantes, objetivo, diferencias A/B/C, evidencias, hipótesis, **demo recomendada para comercial** (una de las tres, con motivo) y matriz de IDs. Guarda capturas si hay herramienta disponible. Etapas posteriores usan la recomendada pero conocen el pack completo.

## Reflejar el valor aceptado
Las **tres** demos comparten exactamente los mismos IDs aceptados y restricciones; cambia composición y tratamiento visual, no el alcance comercial. Mantener los servicios añadidos en secciones secundarias coherentes con la actividad principal; agruparlos si hay muchas propuestas para evitar una página saturada. Cada ID debe tener representación localizable en **A, B y C**, aunque no esté en portada.
Usar una matriz en 04-comparativa.md: ID → sección/recorrido en **A, B y C** → estado (informativo, enlace verificado o simulación). Los servicios físicos o externos se explican o se enlazan cuando existe un destino verificado; no inventar funciones web.
Un carrito, pedido, pago, reserva o programa de fidelización nuevo se representa como prototipo con UX creíble; limitaciones y «sin backend» en `04-nota-demo.md`. No crear backend ni contratar integraciones. No sustituir herramientas existentes sin decisión expresa. Si una condición cambia esencialmente la propuesta, pedir revisión del rol 4; no diseñar un servicio distinto silenciosamente.

## Aceptación
**Pack de tres demos** diferenciadas (A práctica, B narrativa, **C editorial moderna**), **calidad visual de producto**, assets documentados, comparador local con tres tarjetas, `04-nota-demo.md`, `04-comparativa.md` y `04-alcance-aceptado.json`. Aviso de imágenes en A/B/C/comparador. Verificar igualdad de IDs entre alcance y **las tres** demos. Demo C cumple pautas modernas (botones rectos, reveal, galería, banda «Te esperamos», sin estética redondeada años 2010). QA móvil/escritorio en las tres; declarar revisión visual pendiente si no hay herramienta. Fallos funcionales esenciales bloquean.

**Patrones UI:** A/B — encabezado doble, menú unificado (adaptar al sector), horario tabla, carta/ oferta, reserva 📅 si aplica, cierre mapa+Contáctanos, Demo B compacta y storytelling; **C** — bloque editorial moderno anterior + mismos VAL funcionales; sin créditos de plantilla; copy sin citar fuentes internas.

## Checklist compartida
Trabajar solo sobre el ID activo, con Decisión selección=Seleccionado y columnas previas en Sí con evidencias vigentes. Al completar y guardar todas las salidas, marcar 4 Demo=Sí. Si falla o requiere revisión mantener No y motivo. No marcar otra etapa ni cambiar decisiones de Selección. En Rehacer archivar versión y poner No solo en las etapas descendientes afectadas; conservar fechas/historia en estado. Un Sí sin archivos/versiones válidos se reconcilia antes de continuar.
