---
name: 5-comercial
description: "Ejecutar Comercial solo por invocación explícita; consultar Registro_Negocios.xlsx, respetar checklist y dependencias por negocio y detenerse al terminar."
---
# Comercial

## Ejecución, Excel y cierre
Leer config/proyecto.json, config/registro-excel.json, operacion/PROTOCOLO.md, operacion/EVIDENCIA.md, operacion/REGISTRO_EXCEL.md y operacion/estado.json. Leer el Excel antes de ejecutar cualquier etapa. Las columnas del Excel son compartidas por todas las skills; localizar filas por ID, nunca por número de fila ni orden visual.
Ejecutar solo esta skill invocada explícitamente. **`/5-comercial` sin más texto equivale a `/5-comercial Go`**. Go aislado no inicia nada. No enviar, publicar, contactar, comprar ni activar servicios reales. Si falta Excel, hay bloqueo de escritura o discrepancias entre checklist y entregables, detenerse y explicar la acción necesaria; nunca crear otra copia vacía para seguir.
Antes del trabajo guardar operación en_curso por ID. Al finalizar validar entregables y sincronizar Excel/estado con el procedimiento del registro. Marcar Sí únicamente tras completar correctamente, nunca por intento. Guardar No y motivo si queda bloqueado o requiere revisión. Si ya figura Sí con evidencia vigente, omitir; 1 y 2 tienen reglas especiales de cola descritas abajo. 3–7 no cambian de negocio automáticamente.
Guardar versiones y dependencias por negocio; añadir filas nuevas no invalida negocios anteriores. No usar el hash global del Excel como dependencia de resultados individuales. La etapa 1 puede acumular locales sin tope de campaña; 3–7 actúan solo sobre el negocio activo asignado en etapa 2. Registrar fuentes reales, limitaciones y próxima invocación posible; detenerse al terminar.

## Entradas
Etapa **4 Demo** completada y vigente; alcance y demos (`04-*` o legacy `05-*`), brief, propuestas y configuración comercial.

## Procedimiento y salidas

Misión: material **breve y entregable** para captar interés; profundidad solo si responden.

### Tono

- **Conciso, directo.** Sin elogios largos ni metadatos de campaña en piezas al cliente («no enviado», «uso interno», etc.).
- Sin prometer ventas ni % de retorno no verificados. Cifras de **alcance o mecanismo** sí (1 horario, menos preguntas repetidas).

### Embudo

1. `05-mensaje-instagram-borrador.md` (~5 líneas; envío en etapa 7).
2. Demo recomendada + `05-infografia-valor.html`.
3. `05-propuesta-cliente.html` (PDF vía Imprimir) **solo con interés**.

### Piezas obligatorias (cliente / entregables)

1. **`05-propuesta-cliente.html`**: documento **imprimible** (A4), CSS embebido, sin dependencias remotas; contenido conciso (~1 página). **No** usar `.md` con instrucciones internas; el entregable es HTML → PDF. Sin precios no aprobados en config.
2. **`05-infografia-valor.html`**: **una página** A4, visual y legible; ver sección infografía.
3. **`05-mensaje-instagram-borrador.md`**: borrador IG + orden de adjuntos.

**No generar** notas internas ni validación aparte. Entregables cliente con prefijo **`05-*`** (legacy **`06-*`** en expedientes ya generados). QA al cerrar; contexto operativo solo en estado, no en piezas al cliente.

### Propuesta al cliente (contenido)

- Hueco en 1–2 frases; qué incluye la web en bloques **de negocio** (no obligatorio repetir IDs VAL del rol 3 innovador).
- Demo en una línea; mantenimiento opcional vía formulario/canal acordado — **no** vender visitas ni llamadas largas como estándar.
- Próximo paso por escrito.

### Mantenimiento (solo cara al cliente)

Actualizaciones de carta/horario cuando el local las pase; opcional mensual acotado. No mencionar IA, tokens ni WhatsApp interno.

## Infografía obligatoria

`05-infografia-valor.html`: autónoma, una página, imprimible, sin CDN.

**Estructura recomendada (flexible, no copiar plantilla rígida del innovador):**

1. **Bondades genéricas** de tener web (1–2 ideas aplicables a casi cualquier local).
2. **Impacto en este negocio** — qué cambia para ellos (fricción, horario disperso, carta…), con bloque visual (cifras de mecanismo, no ROI inventado).
3. **Cómo encaja** con Google / apps existentes (píldoras + flujo buscar → web → barra).
4. **Cómo ayuda la propuesta** — beneficios concretos para el local (encontraros, carta, horario, extras como QR o sábado) **sin** tres tarjetas rígidas «VAL-001/002/003» salvo que aporte claridad.

Cubrir el **alcance aceptado** en `04-alcance-aceptado.json` de forma integrada, no como listado de servicios del innovador. Sin tarifas no aprobadas ni datos internos de margen.

## Alcance

Respetar condiciones de `04-alcance-aceptado.json`; no reintroducir ideas descartadas.

## Aceptación

`05-propuesta-cliente.html`, `05-infografia-valor.html`, `05-mensaje-instagram-borrador.md`. Coherencia con alcance y demo recomendada. QA realizada al guardar (sin archivo validación). No enviar materiales.

## Checklist compartida
Trabajar solo sobre el ID activo, con Decisión selección=Seleccionado y columnas previas en Sí con evidencias vigentes. Al completar y guardar todas las salidas, marcar 5 Comercial=Sí. Si falla o requiere revisión mantener No y motivo. No marcar otra etapa ni cambiar decisiones de Selección. En Rehacer archivar versión y poner No solo en las etapas descendientes afectadas; conservar fechas/historia en estado. Un Sí sin archivos/versiones válidos se reconcilia antes de continuar.
