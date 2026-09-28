---
name: 2-webscraper
description: "Ejecutar Webscraper (brief + activo automático por nota) solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y detenerse al terminar."
---
# Webscraper (etapa 2)

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/2-webscraper` sin más texto equivale a `/2-webscraper Go`**. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si el ID objetivo ya tiene **2 Webscraper=Sí** con evidencia vigente (`02-*` o legacy `03-*`), **omitir** ese ID y no rehacer salvo **Rehacer** explícito. La etapa 1 tiene reglas de lote; **3–7** trabajan sobre el **negocio activo** fijado en esta etapa (brief) salvo **Elegir ID** explícito.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. Registrar fuentes reales, limitaciones y próxima invocación posible; detenerse al terminar.

## Activo automático (sustituye la antigua etapa 2 Selección)
No existe skill de selección aparte. **Cada invocación de `/2-webscraper`** elige el negocio del brief **solo por Excel y nota**, sin arrastrar pipelines comerciales de otros IDs.

### Regla principal (cola por nota)
1. **Candidatos:** filas con **1 Investigación=Sí**, **2 Webscraper=No**, identidad resuelta, **Estado operativo** no Excluido ni Completado por cierre de negocio, **Decisión selección** distinta de Descartado (salvo **Rehacer** o **Elegir ID** sobre un descartado).
2. **Orden:** mayor **Puntuación 1-10** (fórmula investigación); empate → **Fecha revisión** más antigua → **ID** ascendente.
3. **Tomar el primero** de esa cola y producir el brief. Un negocio con **2 Webscraper=Sí** (p. ej. pipeline avanzado en etapas 3–7) **no bloquea** ni **no sustituye** esta cola: para esta skill está **cerrado** hasta Rehacer.
4. **No usar** `negocio_activo` ni etapas 3–7 pendientes de otro ID para saltarse la cola ni para «continuar pipeline» en lugar del brief. Esas etapas corresponden a **3-comercial-innovador**…**7-mensajero** sobre el activo ya briefeado; son independientes de la siguiente invocación de webscraper.
5. Al fijar el ID del brief: **Decisión selección=Seleccionado**, **Estado operativo=En curso**, actualizar `operacion/estado.json` (`negocio_activo` = ese ID para el pipeline 3–7) y `operacion/activo.json` (ID, nota, motivo_breve, fecha).
6. **`Elegir ID`:** sustituye la cola automática por el ID indicado (mismas comprobaciones salvo nota). Conservar historial del ID anterior en expediente/estado.
7. **Descartes en brief:** actividad cerrada, fuera de alcance, identidad incompatible o necesidad ya cubierta sin mejora defendible → **Decisión selección=Descartado**, motivo en Excel, **2 Webscraper=No**, **no** marcar Sí. No convertir «falta de web» en intención de compra.
8. **Invalidación en brief:** **Estado operativo=Excluido**, motivo, checklist **2–7=No** según impacto; liberar activo si era el activo global. No elegir otro ID en la misma ejecución salvo instrucción.
9. Si **ningún** candidato con **2 Webscraper=No**, informar y sugerir **`/1-investigacion-mercado`** si quedan locales por investigar en zona/sector.

Usar la **Puntuación 1-10** de etapa 1; no inventar otra escala. Si un hecho nuevo obliga a corregir factores en Excel, documentar y recalcular antes de confiar en la cola.

## Entradas
Fila Excel del activo, `01-diagnostico.json`, fuentes de investigación, configuración y campaña.

## Procedimiento y salidas

Misión: producir el brief que usarán innovador, demo y comercial. «Webscraper» incluye búsqueda, lectura, extracción y OCR cuando haya herramientas; no exige crear un scraper propio.

Investiga DOS capas:
1. Negocio: oferta, carta/servicios, horarios, ubicación, especialidades, estilo, marca, espacios, público observable, reservas/pedidos/contacto, eventos, idiomas y presencia digital.
2. Sector y entorno: necesidades típicas pertinentes y hasta tres referencias comparables de la zona o del sector. No traslades datos de competidores al negocio objetivo.

Busca cartas en páginas, PDFs, imágenes de perfiles oficiales y fotos accesibles. Si puedes leerlas por OCR/visión:
- Guarda fuente, fecha y calidad/legibilidad.
- Transcribe solo lo legible; marca dudas y posible antigüedad.
- No adivines importes, ingredientes o alérgenos.
- Un precio leído en una foto vieja es un dato histórico pendiente, no un precio actual confirmado.
- Guarda el enlace o el activo solo cuando su acceso y uso lo permitan.

De las reseñas extrae temas cualitativos: especialidades mencionadas, ambiente, ocasiones de consumo y preguntas/confusiones recurrentes. Identifica el tamaño de la muestra leída y su sesgo. Una reseña aislada es un indicio, no prueba del servicio ni verdad publicable. Parafrasea lo necesario; no copies listados de reseñas ni identidades de autores.

**Entregables** (prefijo **02-**; expedientes antiguos pueden tener **03-** equivalente — leer legacy si falta 02-):
- `02-brief.md`: síntesis útil, oportunidad, personalidad y huecos de información.
- `02-datos-negocio.json`: hechos, inferencias y desconocidos separados.
- `02-fuentes.json`: trazabilidad.
- `02-activos.json`: origen, uso permitido conocido y alternativa segura.
- Carta/servicios estructurados si se pudieron extraer.

Añade «Entradas para Comercial innovador»: necesidades cubiertas, problemas observados y herramientas existentes. Datos a confirmar con el dueño antes de publicación.

**Entradas para Demo (rol 4)** — sección **`Entradas para Demo`** en `02-brief.md` (complementa innovador; **no** duplicar el checklist UI de `/4-demo`). **Pautas genéricas por sector** (hostelería, peluquería, comercio, servicios…): que etapa 4 pueda montar datos y copy **publicables** sin rebuscar fuentes ni citar agregadores, directorios ni investigación en pantalla.

- **Demo A (utilitaria):** identificador claro (nombre + ubicación o ámbito), propuesta en una línea, `cartaIntro` publicable (sin «precios en mostrador»); **no** chips de servicios en UI; **jerarquía sugerida** según el negocio (p. ej. cómo llegar/contactar, horario, oferta principal, reserva/cita si aplica).
- **Demo B (narrativa):** remitir al bloque **Storytelling Demo B**; gancho distinto de A (confianza, experiencia, continuidad), no duplicar la ficha técnica. Incluir **`storyHeading`** (titular de sección, variante por local) y **`narrativeBandTitle` / `narrativeBandText`** (banda emocional acorde al sector — café/bar matinal, cuidado, retail… — no arrastrar vermut/pintxos de otro bar).
- **Demo C (editorial moderna):** 2–3 adjetivos de tono visual (**contemporánea**, sobria, artesanal…) útiles para la variante C de etapa 4; no fijar URL de referencia salvo que el usuario de campaña la indique.
- **Copy listo para UI:** textos definitivos para titulares/subtítulos de sección, invitación o cierre de visita/contacto, y **avisos** que el sector exija en demo (horario, citas, stock, «consultar disponibilidad», etc.) — **una** redacción por aviso, sin referencias a fuentes internas.
- **Contacto y conversión:** teléfonos/canales verificados y cuál priorizar; email del titular o «no localizado»; cómo se reserva, pide cita o compra **hoy** (teléfono, app, mostrador, solo presencial).
- **Oferta principal estructurada:** carta, tarifas, servicios o catálogo — URL/PDF oficial del negocio si existe; si solo hay datos en agregadores, marcar **no publicable tal cual** y separar hechos de inferencias (sin precios no confirmados).
- **Imágenes (`02-activos.json`):** cada foto con origen, fecha, prueba de que corresponde a **ese** negocio y rol sugerido (hero, interior, producto, equipo, fachada…); si no hay material fiable, declararlo.
- **Redes:** URLs verificadas o «no localizado» (no inventar).
- **Personalidad visual** (opcional): 2–3 adjetivos transferibles (sobrio, cercano, premium, artesanal…); **sin** fijar color obligatorio.
- **Referencia visual externa** (solo si el **usuario** de campaña la indica): URL y **patrones** reutilizables (tipografía, scroll, layout); no copiar textos ni identidad ajena.

Opcional en `02-datos-negocio.json`: objeto `entradas_demo` con campos análogos, adaptados al tipo de negocio.

**Storytelling Demo B (obligatorio en `02-brief.md`):** sección para etapa 4, tono distinto de Demo A. Adaptar ejemplos al sector; incluir:
- **Gancho emocional** (1–2 frases): ocasión de uso o visita (confianza, barrio, calma, ritual, cuidado…), no catálogo ni listado de precios.
- **Relato** (2–4 párrafos cortos): ambiente, trato, historia o continuidad **solo con evidencia**; parafrasear reseñas, no copiar testimonios ni autores.
- **Experiencia sensorial o metáfora** solo si está anclada en hechos observables (reseñas, web, visita documentada).
- **Vocabulario a evitar** en Demo B: listados de producto/servicio en el relato principal, claims numéricos de valoración no auditados, citas de agregadores.
- **Cierre invitación** sugerido coherente con el negocio (visita presencial, cita, primera consulta…).
- **Redes y email** verificados (URL + fecha fuente) para contacto en demo; si no existen, «no localizado».

Opcional en `02-datos-negocio.json`: objeto `storytelling_demo_b` con los campos anteriores estructurados.

## Herramientas existentes y oportunidades
Identificar Google/fichas, redes, reservas, carta, pedidos, venta de productos, fidelización y apps cuando existan pruebas. Separar funciones observadas de capacidades anunciadas no verificadas. No asumir que hace falta sustituir una app que funciona ni prometer integraciones sin comprobar documentación oficial.
Para cada necesidad registrar qué canal la resuelve actualmente, limitaciones observadas y qué falta confirmar. No inventar problemas para justificar una web.

## Aceptación
Cuatro archivos obligatorios (02-* o legacy 03-*), identidad suficientemente comprobada y brief utilizable sin inventar. Incluir secciones **Entradas para Comercial innovador**, **Entradas para Demo** y **Storytelling Demo B** (contenido proporcional al sector; oferta/carta estructurada opcional si inaccesible). Si invalida el negocio, no marcar **2 Webscraper=Sí**.

## Checklist compartida
Trabajar sobre el ID elegido por cola, **Elegir** o **Rehacer**, con **1 Investigación=Sí**. Al completar, marcar **2 Webscraper=Sí**. Si falla o requiere revisión, **No** y motivo. En **Rehacer**, archivar versión y poner **No** en etapas descendientes (3–7) afectadas de ese ID.
