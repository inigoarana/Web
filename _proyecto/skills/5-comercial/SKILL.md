---
name: 5-comercial
description: "Ejecutar Comercial solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Comercial

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/5-comercial` sin más texto equivale a `/5-comercial Go`**. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si ya figura Sí con evidencia vigente, omitir; 1 y 2 tienen reglas especiales de cola descritas abajo. 3–7 no cambian de negocio automáticamente.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. La etapa 1 puede acumular locales sin tope de campaña; 3–7 actúan solo sobre el negocio activo asignado en etapa 2. Registrar fuentes reales, limitaciones y recomendación de demo en estado; detenerse al terminar.

## Entradas

Etapa **4 Demo** completada y vigente; `04-alcance-aceptado.json`, demos A/B/C, brief, `04-comparativa.md` (demo recomendada) y configuración comercial. Resolver rutas legacy vía manifiesto del expediente.

## Prioridad de diseño y modo de edición

Reproducir la **composición folleto A4** aprobada (referencia La Alhóndiga / entrega indh050), no un layout creativo distinto ni el modelo antiguo de ocho bloques con terracota/degradados.

- Al **rehacer**, escribir HTML y CSS **desde cero** según esta skill. **No** acumular parches sobre CSS antiguo.
- Personalizar textos, capturas y filas de alcance; **no** copiar hechos de otro negocio.
- **No** importar hojas de estilo de las demos ni de `infografia/` legacy.

### Errores que bloquean la aceptación

- **`transform: scale(...)`** (u otro encogimiento global) en `@media print` o en la hoja A4 → PDF «comprimido», sin proporción de infografía.
- **`overflow: hidden`** + `max-height: 297mm` que recorte tabla o CTA.
- Terracota, bandas oscuras de cierre con texto blanco, degradado «Qué suma» o píldoras Google/Maps/Instagram (eliminadas por decisión).
- Miniaturas A/B/C solo con etiquetas, sin capturas reales de las demos.
- Emojis/pictogramas del recorrido ausentes o monocromos en PDF.
- PDF de **más de una página** sin revisar redacción y espaciado (objetivo: **1 A4** legible).

## Objetivo y orden de trabajo

1. Comprobar dependencias y alcance del negocio activo.
2. Redactar las **cinco zonas** (abajo) con hechos comprobados y `04-alcance-aceptado.json`.
3. Maquetar **`05-propuesta-cliente.html`**: una página A4 vertical, CSS embebido, sin CDN.
4. Preparar imágenes en **`05-propuesta-assets/`** desde etapa 4 (ver capturas).
5. Exportar **`05-propuesta-cliente.pdf`** (misma pieza), **revisar composición visual** (captura o apertura del PDF; comprobar 1 página).
6. Archivar versión en `versiones/5-comercial/` si es Rehacer; sincronizar Excel/estado; detenerse.

No instalar software salvo petición expresa del usuario en ese mensaje.

## Salidas: exactamente dos archivos

1. **`05-propuesta-cliente.html`**
2. **`05-propuesta-cliente.pdf`**

Una sola pieza (propuesta + infografía integrada). **No** generar en /5: `infografia/index.html`, `05-mensaje-instagram-borrador.md`, infografías separadas, notas de validación, variantes con otros nombres. Mensaje e envío: etapa 7 u otra invocación.

Expedientes legacy pueden conservar `infografia/` o borradores IG anteriores; **no** recrearlos al ejecutar /5 hoy.

## Tono y veracidad

- Español de España, «vosotros». Conciso; sin metadatos de campaña en piezas al cliente.
- **No** usar «salón»; preferir barra, local, restaurante, mesa o reserva por teléfono.
- Si ya hay web o canales, hablar de **web renovada** o vitrina fiable, no de «conseguir la primera web» sin evidencia.
- Sin tarifas no aprobadas, ROI inventado, IA, tokens ni WhatsApp interno.
- Reserva: distinguir solicitud simulada y confirmación por teléfono.

## Diseño aprobado: bloques en este orden

Referencia vigente: **`expedientes/0041_LaAlhondiga/05-propuesta-cliente.html`**. PDF usuario en `expedientes/0041_LaAlhondiga/versiones/5-comercial/referencia-usuario-La_Alhondiga_Propuesta.pdf` (solo composición).

### 1. Cabecera y hero con mockup

- **Izquierda:** nombre del negocio (serif mayúsculas, ~22–24 pt) + dirección breve verificada.
- **Derecha:** «PROPUESTA DE VALOR» + «Diseño web + próximos pasos».
- **Hero en dos columnas (~50/50):**
  - Titular serif verde (~20 pt): «Una nueva forma de presentar vuestro negocio.» (fijo salvo alcance distinto).
  - **Lead** (corto, ~2 frases): redactar desde **`02-brief.md` / `02-datos-negocio.json`** (etapa 2): fortalezas del local + **ventajas** de una vitrina más clara y atractiva (confianza, identidad, consulta); cerrar con **tres demos gratuitas** con datos reales del negocio. **No** abrir con queja de móvil u obsolescencia; si hace falta matiz (web antigua, solo PDF, sin web), en tono oportunidad, no culpa.
  - **No** usar las frases genéricas antiguas («Tres propuestas visuales para facilitar…» / «Tres estilos. El mismo alcance.» en el hero).
  - **Kicker** (pequeña, mayúsculas, verde): baja presión, p. ej. *Sin compromiso: comparad estilos abajo y decidid si os encaja dar el paso.* El «mismo alcance» va solo en el bloque 2 («Mismas funciones.» + intro A/B/C).
  - **Sin caja de fondo** en lead/kicker (fondo blanco de la hoja; no banda crema salvo petición explícita del usuario).
  - **Derecha:** marco **navegador** (barra con tres puntos + imagen). Leyenda «Vista de la demo A/B/C» (demo de presentación en mockup; puede diferir de la demo recomendada en comparativa). Captura **escritorio ~1280×720** del masthead: **titular + imagen** visibles; guardar p. ej. `hero-demo-{a|b|c}.png` (copiar desde captura ancha, no viewport móvil). CSS típico: altura **~158 px** (fija salvo petición explícita en esa entrega), `object-fit: cover`, `object-position: top center` — **no** alargar el recorte «+1 cm» por defecto.

### 2. «Tres estilos para elegir»

- Título + «Mismas funciones.» Frase opcional de alcance común.
- **Tres miniaturas** reales (`comparador-demo-a/b/c.jpg`), **misma altura** en las tres, etiquetas A/B/C.
- **CSS miniaturas** (`.style-item img`): `width: 100%`; **`height: calc(62px + 0.5cm)`**; `object-fit: cover`; `object-position: top center`; borde/radio como referencia 0041. Altura en **cm** para coherencia en PDF; si el folleto supera 1 A4, acortar copy en otros bloques antes de bajar miniaturas.

### 3. «Qué suma a lo que ya tenéis» + recorrido

- Frase intro que reconozca canales reales (web, Instagram, Maps, dominio comprometido, etc.).
- **Tres columnas de texto**, sin tarjetas ni bordes (título verde + 1–2 líneas).
- **Franja horizontal** fondo gris muy claro, bordes redondeados: tres pasos con **emojis a color** (🔍 → 🌐 → acción del sector, p. ej. 🍸/📞 «Llaman o vienen a la barra»). Flechas discretas entre pasos.
- Integrar aquí el valor añadido; **no** duplicar la tabla «Qué incluye» ni el antiguo bloque «Mejoras que se notan…».

### 4. «Qué incluye»

- Solo título **«Qué incluye»** (sin hint «Adaptado a móvil» ni notas alineadas a la derecha).
- Tabla 2 columnas, ~25 % / 75 %, `border-collapse`, `table-layout: fixed`.
- Columna izquierda: fondo cálido `#faf7f2` o `#F0F0E9`, negrita.
- ~5 filas según alcance aceptado; sin IDs VAL en UI.

### 5. Preparativos y cierre

- Agrupar en un mismo **`doc-block`** (espaciado interno compacto): **Antes de ponerla en marcha** + **Caja CTA** (no separar con `1cm` salvo petición).
- **Antes de ponerla en marcha:** confirmar datos, fotos, solicitudes, presupuesto, alojamiento, accesos, revisiones, soporte; formularios de prueba si existen.
- **Caja CTA** ancho completo: fondo verde claro (`#e8f0ec` / `#EEF1E9`). **Título en `--ink`** (negro/gris oscuro), tono **profesional** (p. ej. «Próximo paso: elegir propuesta»), no pregunta coloquial en verde. Texto de cierre formal en vosotros (elegir A/B/C + concertar llamada o visita). **No** banda teal oscura con texto blanco.

## Capturas e imágenes (etapa 4)

1. Copiar a **`05-propuesta-assets/`** desde **`demos/assets/`**: `comparador-demo-a.jpg`, `comparador-demo-b.jpg`, `comparador-demo-c.jpg` (miniaturas A/B/C).
2. **Hero del mockup:** captura headless **viewport ancho** (~1280 px) de `demos/demo-{a|b|c}/index.html` (file URI, fuentes cargadas), recorte superior con masthead completo; opcional archivo intermedio `hero-demo-*-desktop.png` → copiar a `hero-demo-*.png`. **Prohibido** usar solo captura móvil estrecha en el mockup (recorta texto sin foto).
3. Incrustar rutas relativas en el HTML; el PDF debe mostrar las mismas imágenes.
4. Si no hay capturas reales, **5 Comercial=No** y registrar bloqueo; no placeholders inventados.

## Especificación técnica A4

- `@page { size: 210mm 297mm; margin: 0; }`
- `.sheet { width: 210mm; padding: 12mm 14mm; display: flex; flex-direction: column; gap: 1cm; }` — variable `--block-gap: 1cm` entre **bloques principales** (cabecera, hero, estilos, qué suma, qué incluye, cierre). **Sin** `transform: scale` en impresión.
- **Estructura HTML:** hijos directos de `.sheet` = `header.head`, `section.hero`, y **`section.doc-block`** por zona 2–5; quitar `margin-bottom` redundantes que dupliquen el `gap`.
- Cuerpo ~9–9,5 pt; lead hero ~10 pt; no bajar de 9 pt para encajar: acortar texto antes.
- **Miniaturas A/B/C:** `.style-item img` con **`height: calc(62px + 0.5cm)`** (ver bloque 2); no alturas distintas por estilo ni valores solo en px sin el +0,5 cm salvo petición explícita del usuario.
- **Tipografía (QA):** pila coherente en todo el PDF — referencia 0041: **Georgia** solo en marca, titular hero y lead; **Segoe UI** en el resto. No mezclar otras familias; si el usuario pide homogeneidad sans, una sola pila en toda la hoja.
- `print-color-adjust: exact`; `break-inside: avoid` en `.doc-block`, tabla, flow, CTA.
- Exportación: p. ej. Edge `--headless --print-to-pdf` sobre el HTML local, **escala 1**, sin cabecera/pie del navegador.
- **QA obligatorio:** renderizar PDF o captura A4 (~794×1123 px) y comprobar una sola página, mockup legible, iconos visibles, CTA no recortado.

## Embudo (etapas posteriores, no generar aquí)

1. Demo recomendada + propuesta PDF/HTML cuando haya interés.
2. Mensaje Instagram: etapa 7.
3. Infografías separadas en expedientes legacy: no sustituto del contrato actual de /5.

## Alcance

Respetar `04-alcance-aceptado.json`; no reintroducir ideas descartadas ni filas de tabla no aceptadas.

## Aceptación: comprobar antes de marcar Sí

- [ ] Solo `05-propuesta-cliente.html` y `05-propuesta-cliente.pdf` nuevos/actualizados en raíz del expediente.
- [ ] Cinco zonas en orden (estilos **antes** de «Qué suma»); **`gap: 1cm`** entre bloques; composición referencia **`expedientes/0041_LaAlhondiga/05-propuesta-cliente.html`** (v006+).
- [ ] Hero: lead/kicker desde brief /2; mockup ~158 px, captura escritorio (titular + imagen).
- [ ] Miniaturas A/B/C: `calc(62px + 0.5cm)`, capturas reales, mismas alturas.
- [ ] «Qué incluye» sin «Adaptado a móvil»; CTA título `--ink` y tono profesional; tipografía coherente (QA).
- [ ] Sin `transform: scale` ni PDF comprimido; **1 página** revisada visualmente.
- [ ] Capturas desde demos del negocio; demo recomendada registrada en estado.
- [ ] Coherencia con alcance y tono; sin precios no aprobados.
- [ ] Excel 5 Comercial=Sí solo tras lo anterior.

Si no se puede exportar o revisar el PDF, mantener **No** y no afirmar QA.

## Checklist compartida
Trabajar solo sobre el ID activo, con Decisión selección=Seleccionado y columnas previas en Sí con evidencias vigentes. Al completar y guardar todas las salidas, marcar 5 Comercial=Sí. Si falla o requiere revisión mantener No y motivo. No marcar otra etapa ni cambiar decisiones de Selección. En Rehacer archivar versión y poner No solo en las etapas descendientes afectadas; conservar fechas/historia en estado. Un Sí sin archivos/versiones válidos se reconcilia antes de continuar.
