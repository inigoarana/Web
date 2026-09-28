---
name: 3-comercial-innovador
description: "Ejecutar Comercial innovador solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Comercial innovador

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/3-comercial-innovador` sin más texto equivale a `/3-comercial-innovador Go`**. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si ya figura Sí con evidencia vigente, omitir; 1 y 2 tienen reglas especiales de cola descritas abajo. 3–7 no cambian de negocio automáticamente.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. La etapa 1 puede acumular locales sin tope de campaña; 3–7 actúan solo sobre el negocio activo asignado en etapa 2. Registrar fuentes reales, limitaciones y próxima invocación posible; detenerse al terminar.

## Entradas
Etapa 2 Webscraper completada y vigente; brief (`02-*` o legacy `03-*`), configuración y catalogo/servicios-opcionales.md.

## Objetivo
Justificar qué valor adicional puede aportar la web y qué servicios digitales, físicos o mixtos encajan con ESTE negocio. Explorar ingresos, margen, repetición, conversión y ahorro operativo. La mera presencia online no basta; comparar con Google, redes, apps y herramientas ya usadas. Una solución fuera de la web puede ser mejor; describir el papel real de la web (descubrimiento, explicación, derivación o transacción) sin forzar una integración.

Proponer **todas las mejoras útiles** que el caso admita (catálogo EXT + ideas nuevas justificadas), no un paquete fijo de funciones.

## Cantidad y umbral de valor
- **Entre 0 y 10** propuestas **recomendadas** (tope duro por manejabilidad). **Cada negocio es distinto:** puede haber 1, 4, 7 o 0; **no** apuntar a 3, **no** rellenar huecos para «completar trío» ni para igualar otros expedientes.
- **Una o dos propuestas fuertes** pueden bastar si concentran el valor.
- **Cero recomendadas** es válido cuando, tras explorar, **no hay mejoras defendibles** más allá de un folleto digital que Google/Eatbu/redes ya cubren: cerrar con `sin_propuestas_motivo` claro y recomendar **no** seguir con demo comercial salvo instrucción explícita; en la práctica implica **reconsiderar si merece la pena ofrecer web** a ese local (coherente con priorización en etapa 2).
- Lo que no entra en recomendadas va a **alternativas**, **descartes** o **pendientes de estudio** (no cuentan para aceptación en `/4-demo`).
- En la ficha, marcar propuestas **opcionales por decisión del dueño** (`alcance incluido u opcional provisional`) cuando aporten valor pero el local aún no las practique o quiera poder **quitarlas** al aceptar (p. ej. reserva web).

## Procedimiento
1. Depurar el brief: separar hechos comprobados, hipótesis, contradicciones y desconocidos. Registrar correcciones menores con fuentes en 03-depuracion.md sin reescribir silenciosamente las fuentes del rol 2. Si cambia identidad, selección u otra entrada esencial, bloquear y solicitar revisión de la etapa afectada, sin ejecutarla.
2. Explorar necesidades concretas y consultar el catálogo habilitado como inspiración. Respetar ideas deshabilitadas o eliminadas; no regenerarlas ni forzar sus equivalentes. Se pueden proponer ideas nuevas justificadas para este negocio, sin agregarlas al catálogo por defecto.
3. Enumerar candidatas amplias (utilidad real para este local), luego **filtrar y numerar solo las recomendadas** según encaje y evidencia — **sin cuota**. Si ninguna aporta valor defendible, entregar cero con motivo (ver umbral de valor).
4. Priorizar por utilidad plausible, evidencia, margen potencial, esfuerzo de implantación, carga para el dueño, soporte para Iñigo y facilidad de pausar. No convertir puntuaciones en probabilidades de venta ni inventar retorno.
5. Entregar una lista claramente numerada de propuestas recomendadas para aceptar; separar alternativas, descartes y pendientes de estudio, que NO entran en la aceptación por Go.

## Ficha de cada propuesta
Usar ID estable por negocio VAL-001, VAL-002…; no reciclar IDs ni renumerarlos al reordenar. Presentar número corto y ID juntos: «1 · VAL-001». Mantener el mapa numero→ID dentro de cada versión.
Incluir: título; necesidad; fuente_ids; hechos e hipótesis; mecanismo de valor; público/ocasión; qué resuelven ya los canales existentes; papel de web/app/soporte físico; recorrido del cliente; requisitos y dependencias con otros IDs; responsable de cobro, entrega y atención cuando aplique; esfuerzo inicial; trabajo recurrente del propietario e Iñigo; costes conocidos o por estimar; hipótesis de margen/comisión; incertidumbres; indicador y prueba pequeña; prioridad y motivo; **representación en demo (ver abajo)**; alcance incluido u opcional provisional.

**Representación en demo (obligatorio en cada recomendada):** cómo se ve el ID en **Demo A, B y C** (mismo alcance; A utilitaria, B narrativa, C editorial moderna). Indicar siempre: **nombre de sección o ancla** acorde al negocio; **tipo** (informativo, enlace verificado, simulación UX sin backend, descarga PDF); **elemento UI** concreto (tabla, botón, formulario, enlace externo). Ejemplos ilustrativos, no plantilla fija: hostelería → carta/horario/reserva; peluquería → servicios/tarifas/cita; comercio → catálogo/contacto. Respetar **patrones transversales** de `/4-demo` (pack **A+B+C**, copy publicable, mapa+contacto cuando hay ubicación física, simulaciones creíbles sin backend) y **patrones de sector** documentados en campaña (p. ej. hostelería en `operacion/feedback.md` / plantillas) solo cuando aplique. **No** testimonios inventados, reseñas embebidas ni UI que cite fuentes de investigación. Propuestas **opcionales** para el dueño: indicar que la demo puede marcarlas como desactivables en alcance.
Para precios, herramientas, comisiones y afirmaciones legales, consultar fuentes oficiales vigentes cuando se hagan afirmaciones concretas. Sin acceso, marcar pendiente; no inventar tarifas, compatibilidad ni condiciones.

## Ejemplos de mecanismos, no recomendaciones automáticas
- Peluquería: kits recomendados por profesionales, venta propia o derivación a proveedor. Un 5 % es una hipótesis de comisión sobre una base por definir, no beneficio neto. Aclarar stock, devoluciones, atención y quién vende. Mantener la app de reservas si resuelve bien esa necesidad.
- Hostelería: carta por QR, pedidos desde móvil, packs, grupos, encargos o repetición. Diferenciar consultar carta de enviar pedido, confirmar disponibilidad, cobrar y coordinar cocina/mesa. Estimar carga operativa antes de recomendar un sistema de pedidos.
- **Reservas:** valor frecuente de una web propia (mesa, terraza, grupos, fin de semana). **No descartar** solo porque hoy no haya reserva online verificada o el modelo sea walk-in: valorar **reserva web** (formulario, solicitud con confirmación manual, enlace a herramienta existente EXT-022, o integración futura), carga operativa y si el dueño puede **desactivarla** en alcance. Distinguir «no existe ahora» de «no aporta»; si aporta pero es incierta, recomendar como **opcional** con incertidumbres explícitas, no moverla a descarte por defecto.
- Apps: describir qué servicio pertenece a la app y qué aporta la web. No asumir API, permiso, integración o necesidad de una app propia.
- Soportes físicos, reseñas voluntarias, fidelización y juegos solo con encaje. Sin incentivos ligados a reseñas positivas, filtrado de reseñas ni promesas de mayor consumo.

## Alineación brief → demo
Al depurar el brief, comprobar **Entradas para Demo** (skill 2): copy UI, storytelling B, activos/imágenes, contacto y oferta estructurada cuando exista. Gaps sector-agnósticos → `03-depuracion.md` como **pendiente de brief** o hecho verificado (sin inventar URLs ni testimonios). Cada VAL recomendada debe poder reflejarse en la matriz de alcance de demo (ID → recorrido en A y B → informativo / enlace / simulación), con independencia del número de propuestas (0–10).

## Salidas
03-depuracion.md; 03-propuestas-valor.md; 03-propuestas-valor.json. JSON con metadatos y datos: mapa_numeros, propuestas_recomendadas (fichas con id), alternativas_no_recomendadas y sin_propuestas_motivo. Referenciar catálogo por IDs EXT cuando corresponda, manteniendo VAL como identificador de selección por negocio.
Cerrar mostrando las recomendaciones (o diagnóstico de cero). En primera versión sin solicitud pendiente, indicar `/4-demo Go` para aceptar **todas las recomendadas** (sean las que sean, no se asume 3) o `/4-demo Quiero las propuestas 1 y 4` (ejemplo de selección parcial). Tras cambiar versión, indicar aceptación explícita de esa versión, por ejemplo `/4-demo Acepto todas las propuestas de la versión 2`, o selección referida a ella; no ofrecer Go genérico como nueva aceptación. Con cero propuestas, explicar que no procede demo salvo instrucción explícita de demo básica. No crear demos ni dar por aceptadas las propuestas en esta etapa.

## Aceptación
Cada recomendación explica valor incremental, operativa, incertidumbre y representación en demo. Cantidad proporcional al caso (0–10); cero justificado válido. Fuentes y mapa de IDs íntegros; nada aceptado automáticamente. **Prohibido** imponer top 3, rellenar hasta tres funciones o desarrollar siempre caja QR o minijuegos.

## Checklist compartida
Trabajar solo sobre el ID activo, con Decisión selección=Seleccionado y columnas previas en Sí con evidencias vigentes. Al completar y guardar todas las salidas, marcar 3 Innovador=Sí. Si falla o requiere revisión mantener No y motivo. No marcar otra etapa ni cambiar decisiones de Selección. En Rehacer archivar versión y poner No solo en las etapas descendientes afectadas; conservar fechas/historia en estado. Un Sí sin archivos/versiones válidos se reconcilia antes de continuar.
