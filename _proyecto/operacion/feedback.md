# Feedback acumulado (usuario)

Registro histórico de preferencias y correcciones. **No sustituye** skills, protocolo ni Excel vigentes; sirve para retocar skills y entregables en el futuro.

Las entradas nuevas de **preferencias de producto** (demos, comercial, tono) deben redactarse **sin depender de expedientes concretos** ni rutas que se borrarán: lo durable vive en skills y reglas.

---

## 2026-09-28 · Comercial · español y bloque «Cómo encaja»

Piezas al cliente en **español de España neutro**. Evitar **«salón»** en copy visible; usar barra, local, restaurante o reserva por teléfono. Regla: `.cursor/rules/04-espanol-piezas-cliente.mdc`; skill `/5-comercial` (tono + infografía).

En `05-infografia-valor.html`, la sección **Cómo encaja con lo que ya tenéis** debe seguir el patrón de tres pasos (referencia expediente bar Joserra): píldoras de canales **reales** del negocio; búsqueda con **nombre del local**; paso web = **sitio + carta/menú + horario**; cierre = vienen o llaman/reservan (barra en bar).

## 2026-09-28 · Investigación · auditoría visual de webs

En etapa 1, cuando el usuario pida valorar si una web se ve **antigua u obsoleta**, usar **navegador** (captura + estructura), no solo fetch de texto. Documentar veredicto comparativo breve y reflejarlo en **Necesidad** / **Valor añadido** y **Motivo puntuación** (plantillas tipo IONOS/MyWebsite, «versión imprimir», layout fijo sin móvil moderno = señal fuerte de mejora).

## 2026-09-28 · Investigación · anclas de puntuación por madurez web

Regla acordada para **Necesidad** / **Valor añadido** y **Puntuación 1-10** (cola etapa 2):

- **Vitrina moderna (A):** carta online + mapa/localización y UX reciente; **no** penalizar por poco texto (ej. barra con web corta pero completa). **N/V → 2–3**; nota **≤ ~5**.
- **Escala comercial (orientativa, no estricta):** obsoleta **~8** > sin web útil **~7,5** > terceros/plataforma **~7** > propia sin carta ni mapa **~6,5**. Sirve para **ordenar la cola**, no como objetivo rígido de fórmula.
- **Obsoleta (B):** referencia La Alhondiga; **solo** con auditoría visual (IONOS/imprimir/etc.). Dominio caído = **C1**, no B.
- **Aceptable segmento (D)** ~4–6; **mejorable no prioritario (E)** ~5–6.

Skill `/1-investigacion-mercado` incorpora tabla A–F + C1/C2; recalibración masiva solo con **Rehacer** explícito.

## 2026-09-28 · Investigación · búsqueda «clones La Alhondiga»

Si el usuario pide **más candidatos con web super obsoleta** como La Alhondiga: tras barrido en Indautxu, **no esperar cinco perfiles B (IONOS)** adicionales; priorizar **nuevos C1** (dominio caído/hijack/sin web) con alta nota comercial, y citar en cartera **Rehacer** de webs clásicas ya registradas (p. ej. Ziripot) si buscan estética retro sin IONOS. Informe tipo: `operacion/investigacion/lote-010/01-investigacion.md`.

## 2026-09-28 · Skill /1-b-obsoletos · caza webs obsoletas (B)

Skill dedicada (no sustituye `/1-investigacion-mercado`): localizar **solo** hostelería con **web propia muy obsoleta** (referencia La Alhondiga), confirmada en **navegador**. Territorio: **Euskadi + Cantabria oriental**; expansión por **anillos** alejándose de Indautxu si no hay hallazgos (`config/1-b-obsoletos.json`). Campaña Excel `eusk-hosteleria-obsoletos-001`, IDs `obsh###`. Lotes en `operacion/investigacion/obsoletos-*`; máx. 5 altas B por invocación.

## 2026-09-28 · Investigación · barrido visual webs propias (28)

Con **45** investigados, se barrieron las **28** filas con **Presencia web = Propia** (fetch HTML + navegador en dudosos). **Resultado:** un único **B · muy obsoleta** confirmado (**La Alhondiga**); el resto WP/Elementor modernos, plantillas recientes, tienda online (Ipindo), dominio caído (Bar Alameda → C1) o vitrina completa (A). Informe: `operacion/investigacion/barrido-visual-propias-2026-09-28.md`. Script reutilizable: `operacion/scripts/barrido-visual-fetch.ps1`.

---

## 2026-09-28 · Entorno · prohibición de instalaciones

El usuario exige **jamás instalar** software ni dependencias en su equipo (salvo petición explícita puntual). Regla: `.cursor/rules/03-sin-instalaciones.mdc`. Compartir demos: no `file://`; preferencia **GitHub Pages** (repo de previews, un slug por negocio, enlace no obvio + `noindex`) sin instalar CLIs; alternativa ZIP + OneDrive o Netlify Drop en navegador. Skill: **`/8-publicar-demos Go`** (el agente sube vía API; credencial GitHub **solo** en `operacion/github-publish.local.json`, en `.gitignore` — **nunca** en `feedback.md`, chat ni commits). Alias: `/publicar-demos-preview`.

## 2026-09-28 · Demo B · gancho legible

En storytelling Demo B, el párrafo gancho (`story-hook`, texto tipo «El menú del día como pausa tranquila…») debe ir **1–2 pasos tipográficos por encima** del cuerpo (p. ej. ~2rem), para lectura cómoda en móvil.

## 2026-09-28 · Preview compartible post-demo

Tras `/4-demo` o `/5-comercial`, el comparador debe poder publicarse en **HTTPS**. Cada negocio: **URL distinta** en repo GitHub dedicado; slug **`{nombre-normalizado}-{sufijo}`** (nombre en minúsculas sin tildes + unos caracteres aleatorios; ej. `nombrelocal-k7m2`), **no** el ID interno del Excel. Subir solo `04-demos` y, si aplica, infografía HTML comercial — no todo el proyecto Cursor. El **index del comparador** no debe mostrar IDs internos ni alcance VAL al cliente.

## 2026-09-28 · Demo B · gancho narrativo (story-hook)

En storytelling Demo B, el párrafo gancho (p. ej. bajo el masthead) debe ser **1–2 tamaños mayor** que el cuerpo para legibilidad (`clamp` ~2rem en desktop).

## 2026-09-28 · Comparador de demos (index.html)

Las tres tarjetas del comparador deben titularse siempre **Demo A · Informativa**, **Demo B · Story telling**, **Demo C · Moderno** (el subtítulo/descripción puede mencionar el negocio). **Sin** subtítulo técnico bajo el H1 (IDs de registro, alcance VAL, etc.) en la versión publicada. Miniaturas: fotos locales en `assets/comparador-demo-{a,b,c}.jpg` desde bancos gratuitos acordes al sector (p. ej. Unsplash), no placeholders SVG; trazabilidad en manifest o nota demo.

## 2026-09-28 · Demos · flexibilidad y anti-arrastre entre locales

Al clonar plantillas entre expedientes, el agente debe **reescribir copy y datos** (dirección, número, producto, titulares Demo B) desde el brief activo; no arrastrar frases de otro bar (p. ej. vermut, «la barra del número 4»). **Demo A:** eliminar fila de chips/pills bajo intro; carta sin «precios en mostrador»; tarjetas de carta sin franja/sombra superior marcada. **Demo B:** titular de historia y banda narrativa **acordes al perfil** (café matinal, bar acogedor, etc.); FAQ alineada al mismo ancho que carta/horario. Skills 2-webscraper (Entradas Demo) y 4-demo actualizadas con campos `storyHeading`, `narrativeBandTitle/Text` y variantes de titular, sin sobreentrenar a un solo local.

## 2026-09-28 · Demos web hostelería (A y B) · patrones UI

Feedback acumulado de revisión de demos (utilitaria + narrativa). **Aplica a Demo A y Demo B.** No obliga plantillas predefinidas externas (Gusto/Lumiere fueron solo contraste experimental).

### Estructura y navegación

1. **Encabezado doble:** barra **superior oscura** — dirección a la izquierda, **redes** a la derecha. Barra **sticky** — misma familia cromática en tono **más claro** que la superior; teléfono destacado aquí (no en la barra oscura).
2. **Colores de barras:** acordes al fondo de la página; si el fondo es muy llamativo o recargado, usar barras sobrias (negro, gris, blanco, beige).
3. **Menú unificado A y B:** Inicio · Carta · Horario · Reservar · **Localización** · Contáctanos («Localización», no «Mapa»). Demo B: nav compacta, mismo menú.
4. **Redes en barra superior (demo):** mostrar iconos aunque aún no haya URL (quitar al publicar si no aplican). Instagram: icono **blanco** sobre degradado de marca, **sin** marco oscuro interior. Enlace web/ficha en cabecera: emoji **🌐** (no logo Google). Facebook/TripAdvisor como iconos cuando proceda; URLs reales en producción.
5. **Sin créditos de plantilla** en la UI («skin inspirada en…», licencias de tema).

### Horario, carta, reserva

6. **Horario y avisos:** tabla en tarjeta (bordes suaves, fondo distinto); cabecera **Día / Horario** en negrita y fondo algo más oscuro; filas sin negrita. **Un solo** aviso en *cursiva*, p. ej. «*Horario sujeto a cambios. En festivos puede haber cierre u horario especial.»
7. **Carta:** título de sección **«Carta»**. Subtítulo del brief («Lo que más pedimos en barra», «Los favoritos de la gente», «Nuestra selección», etc.). Botón **«Ver carta»** → PDF del restaurante (nueva pestaña). No usar «La disponibilidad puede variar según el día» salvo local con **plato del día** u oferta diaria.
8. **Reserva · teléfonos:** bajo «Solicitud de reserva», una línea en *cursiva*: «*También atendemos reservas por teléfono fijo | móvil». **No** repetir tarjetas o teléfonos debajo de «Enviar solicitud».
9. **Reserva · formulario:** oculto al cargar; botón **«Reserva online rápida»** despliega el formulario. Calendario: no rejilla enorme fija; abrir mes con **📅** en panel compacto y colores de disponibilidad.

### Cierre y contacto

10. **«Te esperamos»** + copy presencial (barra, café, vermut, dirección) — obligatorio antes del mapa.
11. **Mapa:** iframe + **Abrir en Google Maps** + **Cómo llegar**.
12. **Contáctanos:** cuatro campos (Nombre, Correo, Asunto, Mensaje).

### Proceso del proyecto

13. **feedback.md:** toda indicación acordada que cambie skills, reglas o criterios de producto debe quedar registrada aquí (ver regla `.cursor/rules/02-feedback-registro.mdc`). Preferencias de producto en texto genérico; lo técnico puede detallarse en la skill correspondiente.

### Refinamiento Demo A (misma sesión)

14. **Instagram (barra oscura):** icono con **degradado de marca** sobre fondo transparente, como el logo oficial; no icono blanco en pastilla.
15. **Copy propuesta:** evitar frases que desanimen visita (p. ej. terraza solo con buen tiempo). **Carta:** «Ver carta» **antes** del subtipo («Lo que más pedimos en barra», etc.).
16. **Reserva online rápida:** el botón **abre y cierra** el formulario (toggle). Espacio extra bajo el mensaje tras «Enviar solicitud» en Demo A.
17. **Orden secciones:** **Carta** → **Horario y avisos** (como referencia Demo B). Estilo horario: aviso en *cursiva* **sin caja** de fondo distinto — mismo fondo que la página (referencia Demo A).
18. **Demo B carta:** sin aviso «Consulta la carta completa desde tu móvil» si ya hay **Ver carta**.
19. **Reserva online:** botón **«Reserva online»** (sin «rápida»). Orden del formulario: **Personas** antes que **Fecha**; colores del calendario según personas (verde = hay sitio, rojo = completo, gris = cerrado; **sin naranja**).
20. **Fecha:** etiqueta **Fecha** a la **izquierda** del botón **«Seleccionar día»** (no debajo). Cambiar mes en el calendario **no** debe cerrar el panel. Texto del botón: **Seleccionar día** (no «Elegir»).

### Demo C · editorial moderna (pack obligatorio A+B+C)

21. **Entrega `/4-demo`:** siempre **tres** demos navegables (**A** utilitaria, **B** narrativa, **C** editorial moderna) + comparador con tres tarjetas; no sustituir C por landings de ocasión.
22. **Look C (~2026):** botones y controles **cuadrados** (`border-radius: 0`); tipografía display + sans con intención; **scroll reveal** moderado; rejillas limpias, poco aire vertical entre bloques; galería de ambiente; hero con eyebrow; **paleta libre**; evitar estética **pill/redondeada/sombras pesadas** tipo plantilla 2014–2016.
23. **Contenido C:** mismo alcance VAL y cierre funcional que A/B (mapa, contacto, reserva/cita según sector); copy publicable; **no** testimonios inventados.
23b. **Inspiración editorial (ejemplo):** [centrosaludactiva.es](https://www.centrosaludactiva.es/) — scroll reveal, Cormorant+Montserrat, `--radius: 0`, eyebrow, hero editorial; **adaptar** al negocio (paleta libre, menú/cierre campaña); ver `operacion/investigacion/referencia-editorial-demo-c.md`. No clon exacto.
24. **Comercial:** elegir **una** demo recomendada entre A/B/C con motivo; el pack completo sigue entregándose.

### Handoff etapas 2–3 → 4-demo (genérico, todos los sectores)

25. **Etapa 2 (brief):** sección **Entradas para Demo** — copy UI publicable, jerarquía A, relato B, tono visual C, contacto, oferta, fotos, redes; referencia visual externa **solo** si el usuario la indica.
26. **Etapa 3 (innovador):** cada VAL con **representación en demo A, B y C**; validar **Entradas para Demo** antes de cerrar.

---

## Handoff · nuevo agente (2026-09-28)

**Autoridad en ejecución:** `operacion/PROTOCOLO.md` (v4), `operacion/REGISTRO_EXCEL.md`, skills en `.cursor/skills/`, regla `.cursor/rules/00-flujo-manual.mdc`, **`Registro_Negocios.xlsx`** (ruta en `config/proyecto.json` → `registro_excel.ruta`).

**Estructura:** negocios en `expedientes/NNNN_Slug`; operación en `operacion/` (ALCANCE, estado, activo, investigación). **No** usar ni recrear `campana/` ni `campanas/`. Un solo Excel maestro en la raíz; respaldos en `versiones_excel/`; ignorar/borrar `.cursor-*.xlsx` temporales si aparecen.

**Skills (orden vigente):** `/1-investigacion-mercado` → `/2-webscraper` → `/3-comercial-innovador` → `/4-demo` → `/5-comercial` → `/6-valoracion-impacto` → `/7-mensajero`. **No existe `/2-seleccion`.** Invocar `/N-skill` sin texto = Go (`skill_sin_go_ejecuta: true`); Go aislado no ejecuta.

**Campaña:** `indautxu-hosteleria-001`. **Pipeline comercial (indh008):** Bar Joserra — **2 Webscraper=Sí** (brief cerrado para esta etapa); pendiente **`/7-mensajero`** si aplica (**Impacto post=7**). **Siguiente `/2-webscraper`:** mayor **Puntuación 1-10** con **2 Webscraper=No** (independiente del pipeline de 0008). Sin envío real (`permisos.enviar: false`). Legacy `03-*`…`06-*` válidos hasta Rehacer; skills nuevas `02-*`…`06-valoracion-*`.

**Investigación:** lotes 001–004 completados (indh001–indh020 en Excel). Informes opcionales en `operacion/investigacion/lote-NNN/`.

**Nota sobre `operacion/estado.json`:** `etapas_campana` puede usar **claves antiguas** (`2-seleccion`, `3-webscraper`, `5-demo`…) de antes de la renumeración; **`etapa_actual`**, **`registro_por_id`** y el Excel usan el esquema **v5** (2 Webscraper … 7 Mensajero). Priorizar Excel + PROTOCOLO + skills al ejecutar.

**Este archivo:** preferencias del usuario y contexto histórico; **no** es checklist obligatorio en cada skill (ver sección Meta al final).

---

## 2026-09-28 · Etapa 2 Webscraper · cola por nota (no bloqueo pipeline)

- **`/2-webscraper` siempre** toma el negocio con **mayor Puntuación 1-10** entre filas con **1 Investigación=Sí** y **2 Webscraper=No** (empate: fecha, ID).
- Un ID con **2 Webscraper=Sí** (p. ej. **indh008 / 0008_Joserra** con pipeline 3–7 en curso) **no bloquea** la cola: para webscraper ese brief está **cerrado** hasta **Rehacer**.
- **No** reutilizar la regla «continuar pipeline 2–7 en negocio_activo» para omitir webscraper ni saltarse la cola. Etapas **3–7** son otro hilo sobre el activo ya briefeado; **7-mensajero** en 008 y **webscraper** en el siguiente ID van **en paralelo** a nivel de invocaciones.
- **`Elegir ID`** / **`Rehacer`** siguen prevaleciendo sobre la cola automática.

---

## 2026-09-27 · Etapa 5 Demo (skill y entregables)

- Las demos deben **parecerse al producto final**: más cuidado visual, más imágenes reales del local (Google / Eatbu / activos), no wireframes.
- **No** banners ni avisos de campaña dentro de la UI (propuesta no oficial, borrador, demo, etc.); compliance y limitaciones en **`05-nota-demo.md`** (u equivalente aparte).
- Excepción acordada después: rótulo fijo **arriba a la izquierda** con el texto exacto: **«*Imágenes de ejemplo sacadas de internet»** (incluye asterisco inicial), discreto, en demo A/B/C y comparador.
- **Tres demos** por negocio (**A** plana/útil, **B** narrativa, **C** editorial moderna); **sin** confundir C con landings «de ocasión» (partido, campaña puntual).
- Las tres deben ser **diferenciadas** (no solo color); calidad de publicación / producto final.

---

## 2026-09-27 · Etapa 6 Comercial · tono y embudo

- **Conciso y directo**: el dueño no quiere párrafos largos ni elogios («conocemos Bar Joserra como referente…»). Ir al grano: qué suma, sin hacer perder tiempo.
- **Embudo de contacto preferido:**
  1. Mensaje Instagram **~5 líneas**
  2. Adjuntar **demo** (una, la recomendada)
  3. Adjuntar **infografía**
  4. **`06-propuesta-cliente`** solo si hay interés (tercer pieza, no en el primer envío)
- **Mantenimiento** puede mencionarse; **no** vender atención personalizada presencial ni «llamada de 30 min» como parte estándar del servicio.
- **Operativa interna** (formularios, IA que depura, mantenimiento vía WhatsApp): objetivo del proyecto, **nunca** comunicar al cliente en propuesta, infografía ni mensaje.

---

## 2026-09-27 · Etapa 6 Comercial · infografía

- Preferencia por enfoque **cercano a la infografía inicial** (v1): explicar **impacto de la web**, un par de **bondades genéricas** (aplicables a casi cualquier negocio), bloque **cómo encaja** con Google / Eatbu / Instagram (bien), flujo buscar → web → barra.
- **No** estructura rígida de «tres piezas» al estilo VAL-001/002/003 del rol 4; mostrar **cómo ayuda al negocio** de forma visual e integrada.
- Una **sola página** A4 imprimible; puede ser colorida pero legible; números útiles si son de **alcance/mecanismo**, no ROI inventado.

---

## 2026-09-27 · Etapa 6 Comercial · entregables

- **No** `06-notas-internas.md`.
- **No** `06-validacion.md`; la QA se hace al generar, sin archivo de validación para el usuario.
- **Propuesta al cliente** = entregable **imprimible** (`06-propuesta-cliente.html` → PDF); **sin** metadatos de campaña en el documento («Uso: enviar solo si…», «No enviado», fechas internas, etc.).

---

## 2026-09-27 · Etapa 1 Investigación · presencia web

- Si el local **ya tiene web** aunque no sea 100 % propia (p. ej. **Eatbu/plataforma**), hay que **decirlo** en diagnóstico, Excel (`Presencia web` = Plataforma, URL en `URL web`) y no tratarlo como «sin web».
- Eso **reduce ligeramente** el impacto / **Valor añadido** de proponer web propia (ya tienen algo, aunque peor o limitado); la **necesidad** sigue según fricciones reales.

---

## 2026-09-27 · Etapa 4 Comercial innovador · cantidad y reservas

- **Reserva online** suele ser una de las **grandes utilidades** de la web para hostelería; debe **evaluarse y proponerse** cuando tenga sentido, aunque hoy el local no la tenga — el **dueño decide** si la quiere y puede **quitarla** al aceptar alcance.
- **No** seleccionar **3 funciones sí o sí**. Cada caso es distinto: **0–10** propuestas recomendadas (tope manejable); **no** esperar ni 3 ni 10.
- Si **no hay mejoras útiles** defendibles (solo folleto que ya cubren Google/redes), **no forzar web**: diagnosticar cero y **reconsiderar** si merece la pena seguir con ese negocio.
- El innovador debe **proponer todo tipo de mejoras útiles** (catálogo + ideas nuevas), no un paquete rígido.

---

## 2026-09-27 · Infografía (iteraciones)

- La **última versión** de la infografía de valor (`06-infografia-valor.html`, enfoque v3) es la **mejor hasta ahora**; mantener esa línea en futuros comerciales.

---

## 2026-09-27 · Flujo general · investigación acumulativa (conversación lote-002 y ajustes)

- **No hay límite de 20 plazas** (ni otro tope fijo) por campaña: el límite es **indefinido** — seguir recopilando análisis de locales en el Excel.
- Objetivo de la etapa 1: **acumular** diagnósticos; las etapas **2–7** deben **centrarse en las mejores oportunidades** según **nota (1–10) y análisis**, no en «cerrar» un número de investigados.
- Mantener lotes de **hasta cinco nuevos por invocación** de `/1-investigacion-mercado`; eso es tamaño de lote, no techo de campaña.
- Configuración acordada: `config/proyecto.json` → `limites.establecimientos`: **`null`** = sin tope (un número solo si el usuario lo fija explícitamente después).
- Reflejar esto en skills 1–7, protocolo, regla `00-flujo-manual.mdc`, README y ALCANCE; informes de investigación deben indicar **total investigados**, no «plazas restantes de N».

---

## 2026-09-27 · Flujo general · invocación de skills (misma conversación)

- Invocar **solo el nombre de la skill**, sin **`Go`** y **sin más texto** (p. ej. `/1-investigacion-mercado`, `/2-webscraper`), debe **ejecutar la acción por defecto** — **equivalente a** `/N-skill Go`.
- No interpretar el nombre solo como consulta de estado ni pedir confirmación extra por falta de «Go».
- Sigue sin ejecutar nada un mensaje que sea **únicamente** `Go` sin skill adjunta (`go_aislado_ejecuta`: false).
- Configuración acordada: `config/proyecto.json` → `flujo.skill_sin_go_ejecuta`: **`true`**.
- Excepciones cuando el usuario escribe órdenes explícitas del protocolo (`Rehacer`, `Elegir`, aceptación de demos, etc.) prevalecen sobre la equivalencia con Go.
- En **`/4-demo`**, la invocación sin Go equivale a Go **salvo** bloqueos de aceptación de alcance del protocolo.

---

## 2026-09-27 · Conversación: arranque campaña, Excel y columna Terraza

### Contexto y expectativas al abrir el proyecto *(histórico; rutas actuales: `operacion/investigacion/`)*

- Antes de ejecutar etapas, el usuario quiere **saber qué contiene la carpeta del proyecto** y **confirmar** que la skill **`/1-investigacion-mercado`** es la que **rellena `Registro_Negocios.xlsx`** (no basta con generar solo informes/JSON fuera del Excel).
- Respuesta acordada: la etapa 1 **lee y escribe** el Excel compartido al completar cada negocio; solo se invoca **explícitamente** (p. ej. con **`Go`** en el mensaje de investigación); un **`Go` aislado** no ejecuta nada.

### Primera ejecución · `/1-investigacion-mercado Go`

- El usuario pidió **arrancar** la campaña `indautxu-hosteleria-001` con el **primer lote** (hasta cinco negocios nuevos en Indautxu).
- Resultado esperado: filas con ID en Excel, checklist **1 Investigación = Sí**, informes de lote opcionales en `operacion/investigacion/lote-NNN/`, expedientes por ID.

### Corrección crítica · «No se ha rellenado Registro_Negocios.xlsx»

- El usuario tenía abierto el libro en  
  `...\Escritorio\Personal\Cursor_Web\Registro_Negocios.xlsx`  
  y **no veía datos**, aunque el agente había informado de éxito.
- **Causa:** `config/proyecto.json` apuntaba a otra ruta (`Downloads\Cursor_Web\...`); el helper escribió **allí**, no en el archivo que el usuario usa en el proyecto.
- **Indicación del usuario (implícita, por la corrección):**
  - El **registro oficial** debe ser el Excel **dentro de la carpeta del proyecto** que el usuario abre en Cursor (`Personal\Cursor_Web`), no copias paralelas en Descargas salvo que el usuario lo decida.
  - **`config/proyecto.json`** y **`config/registro-excel.json`** (`ruta` / `ruta_windows`) deben **coincidir** con ese archivo; revisar también discrepancias con `README.md` u otras rutas documentadas.
  - Tras escritura por script/COM, avisar al usuario de **cerrar y reabrir** el Excel si lo tenía abierto (OneDrive/Excel no refresca solos).
  - **No afirmar** «Excel actualizado» si la ruta efectiva no es la del libro que el usuario utiliza.

### Ampliación del registro · columna **Terraza**

- El usuario pidió **añadir columna** en el Excel: **Terraza**, con desplegable  
  **`Sí` / `No` / `Sin información` / `No aplica`**,  
  aplicable a negocios de **comida** (hostelería: Restaurante, Bar, Cafetería; **No aplica** en Otro cuando corresponda).
- Debe reflejarse en:
  - **`config/registro-excel.json`** (esquema v4, lista de valores, fórmulas/contadores actualizados),
  - **`Registro_Negocios.xlsx`** (migración + validación en columna),
  - **Skill `1-investigacion-mercado`**: contrastar terraza en diagnóstico (web, ficha, fuentes fechadas); **no inferir** por fotos genéricas ni por calle peatonal sin indicio del local; JSON con criterio alineado al Excel.
- Migración reproducible: `powershell -NoProfile -File scripts/registro_excel.ps1 -Accion Migrar` (con Excel **cerrado**).

### Trazabilidad de esta conversación

- Petición final del usuario: volcar **todo el feedback e indicaciones de esta conversación** en **`operacion/feedback.md`** (este bloque).

---

## 2026-09-28 · Estructura · sin campana/campanas; Excel único

- Eliminar carpetas **`campana/`** y **`campanas/`**; todo negocio en **`expedientes/`**; operación en **`operacion/`** (ALCANCE, INDICE investigación, estado).
- **Un solo Excel maestro:** `Registro_Negocios.xlsx` en la raíz del proyecto (`config/proyecto.json`); borrar Excels temporales **`.cursor-*.xlsx`**; respaldos solo en **`versiones_excel/`**.

---

## 2026-09-28 · Flujo · renumeración skills y valoración post

- **Eliminar `/2-seleccion`:** el activo del brief se elige en **`/2-webscraper`** (mayor **Puntuación 1-10** con **2 Webscraper=No**; sin bloqueo por pipeline 3–7 de otros IDs con brief hecho; **Elegir ID** / **Rehacer** prevalecen).
- **Nuevo orden:** 1 investigación → 2 webscraper → 3 innovador → 4 demo → 5 comercial → **6 valoracion-impacto** → 7 mensajero.
- **Etapa 6:** tras demo+comercial, re-puntuar **Impacto post 1-10** (conversación + expediente); priorizar mensajero/seguimiento por esa nota, no solo por nota inicial.
- Excel v5: columnas **Impacto post 1-10**, **Motivo impacto post**; checklist sin «2 Selección» (ahora **2 Webscraper** … **6 Valoración**).
- Prefijos de archivos nuevos: `02-brief`, `03-propuestas`, `04-demos`, `05-comercial`, `06-valoracion-impacto` (legacy `03`–`06` en expedientes ya hechos).

---

## 2026-09-27 · Estructura de carpetas · expedientes

- **Expedientes** en raíz del proyecto: `Cursor_Web/expedientes/0008_Joserra` (número 4 dígitos + palabra distintiva).
- **ID Excel** (`indh008`) se mantiene; columna **Expediente** = ruta relativa a esa carpeta.
- **Obsoleto (supersedido):** antes existían `campanas/` y `campana/`; hoy alcance e investigación viven en **`operacion/`** y negocios en **`expedientes/`**.
- **Lotes:** no obligatorios como carpeta paralela; trazabilidad del batch con columna **Lote** en Excel + `01-diagnostico.json`. Informes de lote opcionales en **`operacion/investigacion/lote-NNN/`** (archivo histórico).

---

## 2026-09-27 · Meta

- Mantener **`operacion/feedback.md`** actualizado con cada feedback nuevo del usuario y con **cambios acordados en skills/reglas** (obligatorio vía regla `02-feedback-registro.mdc`).
- El agente **no** debe tratar este archivo como checklist **obligatoria** en cada ejecución de skill (skills, protocolo y Excel mandan en runtime); este registro es trazabilidad y evolución de preferencias.

## 2026-09-28 · Publicar demos · estructura cliente y sync repo

En **`/8-publicar-demos`**, cada negocio en el repo `Web` debe usar **dos carpetas clicables** bajo el slug (más portal índice): **`Infografia/`** (solo infografía; **no** subir propuesta HTML al remoto) y **`Demos/`** (comparador + **Demo A**, **Demo B**, **Demo C**). Portal `{slug}/index.html` enlaza a ambas.

En **cada publicación**, sincronizar también **`_proyecto/`** en el mismo repo (fuera del slug): skills, rules, `operacion/feedback.md` y `Registro_Negocios.xlsx` — ver `config/publicar-demos.json` → `sync_proyecto`.

Preview en GitHub: textos del slug **sin tildes** (ASCII) en portal, infografia y demos publicadas; expediente local puede llevar tildes.

## 2026-09-28 · Publicar demos · datos JS y cache del navegador

En **`shared/content.js`** (demos), evitar **comillas tipograficas** (`«»`) dentro de strings: usar **comillas simples ASCII** en el texto o redaccion sin comillas internas. La pasada ASCII para HTML puede convertir guillemets a `"` y **romper** el JS si el navegador aun sirve una version antigua cacheada.

En cada **`/8-publicar-demos`**, anadir **`?v=`** (timestamp de build) a los `<script src="../shared/*.js">` de Demo A/B/C para forzar recarga de `content.js` tras correcciones. Portal cliente: **`{pages_base}/{slug}/index.html`** con **dos tarjetas**: Infografia + **Demos** (texto «Tres propuestas de web (A, B, C) y acceso a cada una» → comparador `Demos/`).

Al publicar sin tildes en vocales, **mantener `¿` y `¡`** (FAQ y exclamaciones); no convertir a `?`/`!` al inicio de pregunta.
