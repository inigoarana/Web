---
name: 7-mensajero
description: "Ejecutar Mensajero solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Mensajero

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/7-mensajero` sin más texto equivale a `/7-mensajero Go`**. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si ya figura Sí con evidencia vigente, omitir; 1 y 2 tienen reglas especiales de cola descritas abajo. 3–7 no cambian de negocio automáticamente.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. La etapa 1 puede acumular locales sin tope de campaña; 3–7 actúan solo sobre el negocio activo asignado en etapa 2. Registrar fuentes reales, limitaciones y próxima invocación posible; detenerse al terminar.

## Entradas
Etapas **5 Comercial** y **6 Valoración** completadas y vigentes (`06-valoracion-impacto.json` con **Impacto post** justificado). Piezas comerciales (`05-*` o legacy `06-*`), alcance (`04-*` o `05-*` legacy), comparativa demo. Priorizar negocios con mayor **Impacto post 1-10** cuando el usuario elija a quién avanzar. Canal profesional publicado o falta documentada.

## Procedimiento y salidas

Misión: redactar el primer contacto al propietario a partir de pruebas y una propuesta concreta. SOLO redactar; no enviar, abrir conversaciones, buscar teléfonos privados ni conectar cuentas.

Alinear con el embudo de etapa 5 cuando exista `05-mensaje-instagram-borrador.md` (legacy `06-*`): **primer contacto ≈ 5 líneas** + adjuntos previstos (demo recomendada + infografía); la propuesta (`05-propuesta-cliente.html` / PDF) solo tras interés.

Entrega `07-mensajes.md` con:
- Un mensaje principal por Instagram (~5 líneas / 40–70 palabras), coherente con el borrador comercial.
- Una versión muy corta de 25–45 palabras.
- Una alternativa de email con asunto y 100–150 palabras.
- Un guion de llamada de 20–30 segundos.
- Una respuesta breve si muestra interés y otra si dice que ya tiene web.
- Un único seguimiento opcional, para usar solo si el canal y el contexto lo permiten. Sin cadencia automática.

Tono humano, directo, local y respetuoso. Una observación comprobada del negocio, una utilidad relevante y una pregunta fácil de responder. Nada de «revolucionar tu presencia digital», «multiplicar ventas» o falsa familiaridad.

No afirmar «no tienes web» por no haberla localizado; formula la observación con precisión. No afirmar que visité el local, consumí allí o conozco al dueño. Firmar con mi nombre solo como borrador. No inventar nombre de agencia, experiencia previa ni cartera de clientes.

No adjuntar automáticamente todas las demos (solo la recomendada salvo que el usuario pida comparar), no usar un enlace localhost como enlace compartible, no inventar una URL pública. Si falta un enlace, usa un marcador claro «[enlace de demo pendiente de preparar]» en la variante correspondiente; el mensaje principal puede pedir permiso para mostrar la propuesta.

Incluye una nota INTERNA separada: canal encontrado, si el mensaje está listo o falta algo, qué evidencias sustentan la personalización y qué debe verificarse antes de enviar. No conviertas la publicación de un contacto en permiso de marketing.

Al finalizar, genera `ENTREGA.md` del negocio con acceso a brief, demos A/B, comparativa, propuesta, extras y mensajes. Es un índice local, no una web pública ni un envío. Marcar expediente completado solo si las etapas aplicables están vigentes. Recomendar siguiente acción, sin activar otro negocio ni ejecutar ninguna etapa.


## Coherencia comercial
Priorizar en el mensaje una utilidad aceptada y respaldada; no enumerar todos los extras ni inventar resultados. Se puede ofrecer mostrar la demo y la infografía. No inventar enlaces ni afirmar que se adjuntaron o enviaron. Usar solamente precios aprobados.
ENTREGA.md debe enlazar brief, depuración, propuestas, alcance aceptado, demos A/B, comparativa, propuesta comercial, notas internas, infografía real y mensajes. Separar archivos para cliente de documentos internos; no entregar notas internas por defecto. Marcar preparación comercial completada, nunca cliente captado o venta cerrada.

## Aceptación
Variantes y longitudes comprobadas; nota interna y ENTREGA.md con archivos existentes. Correspondencia con IDs aceptados y condiciones; ninguna idea omitida recuperada. No enviar ni publicar.

## Checklist compartida
Trabajar solo sobre el ID activo, con Decisión selección=Seleccionado y columnas previas en Sí con evidencias vigentes. Al completar y guardar todas las salidas, marcar 7 Mensajero=Sí. Si falla o requiere revisión mantener No y motivo. No marcar otra etapa ni cambiar decisiones de Selección. En Rehacer archivar versión y poner No solo en las etapas descendientes afectadas; conservar fechas/historia en estado. Un Sí sin archivos/versiones válidos se reconcilia antes de continuar.
Al completar 7, Estado operativo=Completado, liberar negocio_activo del pipeline comercial y conservar decisión y checklist. La próxima **`/2-webscraper`** elige el mayor **Puntuación 1-10** con **2 Webscraper=No** (sin bloqueo por otros pipelines). No cambiar de negocio en esta ejecución.
