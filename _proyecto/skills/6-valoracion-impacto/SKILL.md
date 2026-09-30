---
name: 6-valoracion-impacto
description: "Revalorar impacto web 1-10 tras demo y comercial; consultar Excel y conversación; detenerse al terminar."
---
# Valoración de impacto (etapa 6)

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/6-valoracion-impacto` sin más texto equivale a `/6-valoracion-impacto Go`**. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales.
Trabajar solo en el **negocio activo** (mismo criterio de continuidad que etapa 2). Si ya figura **6 Valoración=Sí** con evidencia vigente, omitir salvo **Rehacer**.

## Entradas
Etapa **5 Comercial** completada y vigente en el mismo ID: brief (02-* o 03-* legacy), propuestas (03-* o 04-* legacy), alcance y demos (04-* o 05-* legacy), piezas comerciales (05-* o 06-* legacy). **Conversación reciente** con el usuario (feedback, dudas, preferencias) y `operacion/feedback.md` solo como memoria histórica opcional, no como checklist obligatorio.

## Objetivo
Tras haber **visto** el caso (brief, innovador, demos, comercial), emitir una **segunda puntuación de impacto** (**1–10**) sobre si merece seguir invirtiendo tiempo (mensajero, hosting, seguimiento comercial). La **Puntuación 1-10** inicial de investigación **no se sustituye**; esta es **Impacto post 1-10** para **priorizar** qué negocios avanzan después.

## Procedimiento
1. Repasar expediente completo y señales de la conversación (incl. decepción, entusiasmo, bloqueos operativos, encaje real tras demo).
2. Contrastar expectativa inicial (factores/nota etapa 1) con lo observado tras propuesta y demos.
3. Puntuar **Impacto post 1-10** con criterio explícito: utilidad defendible, diferencia vs Eatbu/Google/redes, esfuerzo del dueño, probabilidad de conversión **sin inventar ROI**.
4. Redactar **Motivo impacto post** (3–8 líneas): qué sube o baja la nota, si conviene **seguir**, **pausar** o **descartar** el pipeline comercial.
5. Guardar **`06-valoracion-impacto.md`** (legible) y **`06-valoracion-impacto.json`** con: `impacto_post_1_10`, `puntuacion_inicial_1_10`, `delta`, `recomendacion` (`seguir_7_mensajero` | `pausar` | `descartar`), `senales_conversacion`, `fecha`, `version`.
6. Excel: escribir **Impacto post 1-10**, **Motivo impacto post**; marcar **6 Valoración=Sí**. Si recomendación es **descartar**, **Decisión selección=Descartado** con motivo y **Estado operativo** acorde; **7 Mensajero=No** salvo instrucción contraria.
7. Actualizar `operacion/estado.json` con salidas y, si aplica, liberar `negocio_activo` tras descarte.

## Aceptación
Nota entera 1–10 justificada; coherencia con entregables reales (no inflar por esfuerzo ya hecho). JSON y MD presentes. Excel sincronizado. Detenerse al terminar; **no** ejecutar mensajero en la misma invocación.

## Checklist compartida
**5 Comercial=Sí** previo. Al cerrar correctamente, **6 Valoración=Sí**. Rehacer invalida **7 Mensajero** si existía vigente.
