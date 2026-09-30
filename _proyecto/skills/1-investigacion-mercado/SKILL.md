---
name: 1-investigacion-mercado
description: "Ejecutar Investigación de mercado y diagnóstico digital solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Investigación de mercado y diagnóstico digital

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/1-investigacion-mercado` sin más texto equivale a `/1-investigacion-mercado Go`** (acción por defecto); no tratar el nombre solo como consulta. Go aislado (mensaje únicamente «Go» sin skill) no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si ya figura Sí con evidencia vigente, omitir; 1 y 2 tienen reglas especiales de cola descritas abajo. 3–7 no cambian de negocio automáticamente.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. Registrar fuentes reales, limitaciones y próxima invocación posible; detenerse al terminar.

## Entradas y lote de cinco
Consultar TODO el registro, incluidas otras campañas, antes de buscar. No hay tope de establecimientos por campaña: el objetivo es **acumular** diagnósticos en el Excel para que la etapa 2 y las siguientes se centren en las mejores oportunidades por **nota y análisis**. En config/proyecto.json, `limites.establecimientos` null significa sin límite; no detener investigación por un contador máximo.
Cada invocación con acción por defecto (Go o solo nombre de skill) procesa un lote de hasta cinco negocios **nuevos**, dentro de zona/sector configurados. Cinco es solo el tamaño de lote por invocación, no una meta de campaña ni motivo para inventar filas. Si un lote interrumpido tiene menos de cinco IDs pendientes, completar solo esos.
Si existe un lote interrumpido, reanudar sus IDs incompletos y completar como máximo sus cinco cupos de lote. No abrir otro lote ni volver a investigar filas con Investigación=Sí. Una fila existente incompleta solo se retoma como recuperación documentada, no se añade otra vez. Un Rehacer explícito permite revisar IDs existentes sin consumir cupos de lote nuevos.
Deduplicar por identidad real: nombre normalizado + dirección normalizada + municipio, contrastando dominio, teléfono público, cambios de nombre y sucursal. No usar dominio solo (puede compartirlo una cadena), ni nombre solo. Un homónimo distinto puede ser otro negocio; duda de identidad se aclara antes de alta. Registrar duplicados omitidos en informe. Mantener IDs globalmente únicos y estables; conservar IDs importados.
Reservar en registro un ID y lote antes de trabajo largo, con checklist No. Una fila con ID nunca se considera libre aunque esté incompleta. Filas vacías sin ID no cuentan. No reutilizar IDs excluidos.

## Diagnóstico obligatorio por negocio
Responder qué web tiene, qué herramientas usa, qué servicios vende/ofrece digitalmente, qué está bien resuelto y qué valor adicional merece estudiar. No entregar un simple directorio.
1. Contrastar nombre, dirección, actividad y zona. No asumir apertura por una ficha antigua ni barrio por código postal. Separar homónimos y registrar fuentes fechadas.
2. Localizar **presencia web** con búsqueda nombre+dirección/localidad y enlaces oficiales. Guardar URL exacta, correspondencia y páginas consultadas. No localizada no significa inexistente; error de la herramienta no prueba caída de la web.
2b. **Tipificar presencia en Excel (`Presencia web`) y texto:** distinguir **web propia** (dominio del negocio) de **web en plataforma** (Eatbu, Dish, Wix de terceros, página de cadena, etc.), **solo redes**, **solo fichas de terceros**, dominio inactivo o no localizada. Si el local tiene **solo** miniweb de plataforma (p. ej. `*.eatbu.com`), registrar **`Plataforma`**, poner esa URL en **`URL web`** y en **`Herramientas y enlaces`**, y decirlo explícito en diagnóstico («tiene web de plataforma, no dominio propio»). **No** dejar «sin web» cuando existe presencia digital útil aunque sea peor o limitada frente a una web propia.
3. Revisar canales públicos relevantes: Google/fichas, redes, web, plataformas y apps. Ver carta, reservas, pedidos, productos, fidelización, grupos/eventos y app externa. Guardar herramienta y URL junto a cada hallazgo en JSON y sintetizar en Excel.
3b. Terraza (hostelería de comida: Restaurante, Bar, Cafetería): contrastar si el local dispone de terraza exterior o similar usable por clientes. En Excel columna Terraza usar Sí (evidencia en web, ficha o fuente fechada), No (evidencia explícita de ausencia), Sin información (buscado sin hallazgo fiable) o No aplica (Categoría Otro o negocio sin consumo in situ). En JSON registrar terraza con el mismo criterio, fuente y limitaciones. No inferir terraza por fotos genéricas ni por «zona peatonal» sin indicio del propio negocio.
4. Para cada servicio usar en Excel Sí (observado), No confirmado (anunciado o inaccesible), No localizado (buscado sin hallarlo) o No aplica. Terraza usa su propia escala (Sí / No / Sin información / No aplica), no la de servicios digitales. No usar No como prueba de ausencia salvo evidencia explícita en terraza. En JSON conservar estado preciso: observado, anunciado_no_comprobado, no_verificable, no_localizado o no_aplica (servicios); para terraza: si, no, sin_informacion, no_aplica.
5. Distinguir WhatsApp de pedidos, solicitud de reserva de confirmación, carta de compra, catálogo de tienda y funciones de proveedor de funciones realmente usadas por este negocio. No completar transacciones ni enviar datos para probar.
6. Explicar lo ya cubierto y fricciones concretas, con evidencia. No confundir **calidad del negocio** con **margen comercial web**: la puntuación prioriza oportunidad de vitrina (propia, plataforma o ausencia), no gastronomía ni facturación. Si ya hay web o plataforma, indicar **qué cubre hoy**; aplicar **Anclas de madurez web** (apartado siguiente) para **Necesidad** y **Valor añadido**, no solo ajustes genéricos.
7. Proponer cero a tres oportunidades preliminares basadas en señales del negocio: evidencia → idea → valor incremental → mecanismo económico/operativo → papel web/app/físico → dependencia → pregunta pendiente. No hacer catálogo genérico ni prometer ventas. Cero oportunidades es válido.
8. Asignar encaje innovador Claro, Posible, No evidente o No evaluable. Dejar pregunta concreta que el rol 4 estudiará después de selección y brief; no ejecutar 4 ni crear propuestas aprobadas.
9. Completar cinco factores 1–10 y justificar según operacion/REGISTRO_EXCEL.md. La fórmula de Excel produce la nota final. No inventar datos para puntuar: aplicar anclas conservadoras y declarar baja confianza; si no hay base mínima, dejar factores/nota vacíos y bloquear selección hasta aclarar.

## Anclas de madurez web (criterio producto)

La **Puntuación 1-10** ordena la cola de etapa 2 por **margen de mejora web**, no por atractivo del local.

**Puntuaciones orientativas:** los valores «~8», «~7,5», «~7», «~6,5» y «≤ ~5» son **guía de ordenación relativa**, no metas estrictas de la fórmula Excel. Ajustar los **cinco factores** con criterio y **Motivo puntuación**; la fórmula redondea con pesos fijos.

**Auditoría visual**

- Decidir **B · obsoleta** vs **A · moderna** solo con **navegador** (snapshot/captura) o revisión visual documentada; el fetch HTML ayuda a priorizar, no sustituye B.
- Casuística **B** exige señales fuertes (p. ej. IONOS/MyWebsite, «versión imprimir», layout fijo sin móvil moderno) — referencia **La Alhondiga**.
- Tras acumular muchos negocios con web propia, ejecutar barrido documentado: `operacion/investigacion/barrido-visual-propias-{fecha}.md` + JSON fetch opcional (`operacion/scripts/barrido-visual-fetch.ps1`).
- Por negocio/lote: campo opcional `auditoria_visual` en JSON (fecha, veredicto, señales).

**Vitrina «completa» (A):** poco texto vale. Basta web propia **moderna** con **carta** online y **mapa/localización** (u homólogo claro del sector: tienda con precios + pedido/reserva). **No** es C por «web corta». **No** confundir dominio **caído** (C1) con obsoleta (B).

**Escala relativa de oportunidad** (típico arriba → abajo en cola; números orientativos):

| Orden | Casuística | Perfil | Orientación nota | Ancla N / V |
| --- | --- | --- | --- | --- |
| 1 | **B · Obsoleta** | Propia muy antigua, **verificada visual** | suele quedar **entre los más altos** | N 8–9; V 6–8 |
| 2 | **C1 · Sin web útil** | Sin dominio, inactivo, vacío, solo redes, carta caída | alto, por debajo de B salvo excepción | N 7–8; V 7–8 |
| 3 | **C2 · Terceros / plataforma** | Fichas, Eatbu, ficha cadena | alto, algo por debajo de C1 | N 7; V 7 |
| 4 | **F · Propia incompleta** | Propia viva sin carta **ni** mapa/núcleo sector | medio | N 6–7; V 5–6 |
| — | **A · Vitrina moderna** | Carta + localización + UX reciente (o tienda/reserva resueltos) | bajo | N/V 2–3 |
| — | **D · Aceptable segmento** | Encaja (ocio WP + redes) | medio-bajo | N 4–5; V 3–5 |
| — | **E · Mejorable no prioritario** | Plantilla genérica reciente (BeeDigital, etc.) | medio | N 5–6; V 4–5 |

| Casuística | Oportunidades / encaje |
| --- | --- |
| **A** | 0 válido; **Encaje innovador** → No evidente salvo excepción. |
| **B** | 1–3 (rediseño, menú HTML, reserva). |
| **C1 / C2** | Según señal; no inventar. |
| **D / E / F** | Incremental; encaje Posible. |

**Coherencia:** A → no dejar N/V altos por inercia. B solo con evidencia visual. Dominio que no resuelve → **C1**, no B. **Rehacer** recalibra sin cupo de lote nuevo.

## Fuentes y cobertura
No afirmar Google/Maps, revisión visual, móvil, velocidad o funcionamiento si no se comprobaron. Fragmentos de buscador son pistas; guardar páginas realmente consultadas y límites de acceso. Fuente oficial, plataforma, directorio y prensa no son equivalentes. Separar confianza de identidad, actividad y servicios. No inferir permisos para usar fotos o para marketing.
Revisión preliminar suficiente para priorizar; el rol 2 profundiza en seleccionados. No extraer cartas completas ni auditar exhaustivamente todos los locales aquí. Conservar contactos profesionales publicados sin contactar.

## Salidas y Excel
Al dar de alta un negocio, crear carpeta de expediente en **`expedientes/{NNNN}_{slug}`** según `config/rutas-expedientes.json` y `operacion/expedientes-carpetas.json` (mapa ID→carpeta). El **ID de Excel** (p. ej. `indh008`) se mantiene; columna **Expediente** = ruta relativa `expedientes/0008_Joserra`. Incluir `01-diagnostico.json` en esa carpeta.
Informe de lote (opcional, histórico): `operacion/investigacion/<lote_id>/01-investigacion.md` y `01-establecimientos.json`. Actualizar `operacion/investigacion/INDICE.md` y referencias en `establecimientos-acumulado.json`. **Fuente operativa:** `Registro_Negocios.xlsx` + carpeta `expedientes/`; no crear carpetas `campana/` ni `campanas/`.
En Excel actualizar datos fijos, desplegables, fuentes, fecha, diagnóstico, factores, justificación y expediente. Decisión selección=Pendiente, Estado operativo=Disponible al completar; checklist 1=Sí y 2–7=No para nuevos registros. Cerrados/fuera/identidad dudosa quedan señalados y no elegibles; registrar diagnóstico, no un cliente potencial ficticio.
Informe: resumen útil, tabla ID/negocio/web enlazada/herramientas/oportunidad/nota, fichas breves con fuentes y dudas, cobertura y duplicados omitidos. En cobertura, indicar total investigados en campaña y en registro; **no** «plazas restantes de N» salvo que exista un tope explícito en configuración. Tablas Markdown válidas, una fila por línea. Recuentos calculados de datos finales, no de memoria.

## Aceptación
Como máximo cinco IDs nuevos en el lote y ninguno duplicado. Diagnóstico por negocio con web, servicios, utilidad y oportunidad o ausencia razonada. Excel y JSON coinciden por ID; nota fórmula comprobada; Sí solo para registros terminados. Un lote parcial conserva progreso; no ocultar bloqueos detrás de un resumen global completado. Al finalizar mostrar nuevos IDs, notas, omitidos y pendientes, y detenerse.
