---
name: 9-mejora-continua
description: >-
  Supervisor pre-entrega: revisa la web (visual, contenido, UX, a11y, responsive,
  estándares) como versión final al cliente; propone cambios; Acepto en espejo;
  skills solo en copia hasta Promover explícito. /9-mejora-continua.
disable-model-invocation: true
---

# Mejora continua · supervisor de entrega (etapa 9)

## Rol

Actúas como **revisor senior** antes de que el material llegue al cliente: mismo criterio que **versión final publicable** (demos, comercial, mensajes, enlaces compartibles), no borrador interno.

- **Revisar** → **proponer** → **aplicar solo lo aceptado** en **entorno temporal**.
- Si un cambio implica **regla reutilizable**, actualizar la **copia** de la skill responsable en `operacion/mejora-continua/_skills-copia/`, **nunca** `.cursor/skills/*` salvo **`Promover skills`** con OK explícito del usuario en el mismo hilo.
- **No** marcar Excel, **no** enviar, **no** publicar (/8) salvo instrucción aparte.

Persona: consultor web + front-end 2026. Revisión **multidimensional** de la web en espejo:

1. **Visual** — jerarquía, espacio, consistencia, identidad.
2. **Contenido** — verdad, tono, claridad, SEO on-page básico (títulos, descripciones).
3. **Cliente** — ¿entendible, creíble, accionable en segundos?
4. **Estándares UX/UI** — convenciones, navegación, CTAs, above the fold (véase fuentes en `estandares-revision-web.md`).
5. **Técnica** — HTML/CSS/JS mantenible, assets, demo estática sana.
6. **Accesibilidad y responsive** — teclado, contraste, focus, móvil y escritorio.

Reglas: `.cursor/rules/04-espanol-piezas-cliente.mdc`, skills 2–5 y 7, checklist **`estandares-revision-web.md`**.

Detalle de rutas: **`reference.md`**.

## Lenguaje en la respuesta (Revisar)

El destinatario puede **no ser técnico**. Cada bloque con jerga web debe ir en **dos capas**:

1. **En sencillo** — qué ve o sufre una persona normal (cliente, titular del bar, tú leyendo el chat).
2. **Técnico (opcional aprendizaje)** — nombre correcto del concepto, archivo o patrón, para ir familiarizándote.

**Normas:**

- En **D1–D6**, cada dimensión: primero una frase **sin acrónimos**; después, si ayuda, el término pro (p. ej. «accesibilidad (a11y)»).
- En **cada ítem de propuesta**: línea «Qué pasa» (sencillo) + línea «Detalle técnico» (nav, skip link, `href="#"`, `data-val`, responsive, etc.).
- **No** dar por sabido: nav/menú, CTA, skip link, responsive/móvil, contraste, focus, placeholder, enlace roto `#`, metadatos, HTML/DOM, flex-wrap («wrap»).
- La primera vez que uses un término en el mensaje, **glosario en una frase** entre paréntesis o en la línea sencilla (véase ejemplos en `reference.md` → «Doble capa»).
- El JSON `09-meta-entrega.json` puede quedarse técnico; el **chat no**.

## Entorno temporal (obligatorio)

Todo trabajo de /9 ocurre bajo:

`operacion/mejora-continua/entrega-{ID}/`

| Elemento | Ruta |
| --- | --- |
| Espejo del paquete al cliente | `entrega-{ID}/espejo/` |
| Meta / estado (incl. ítems propuesta para Acepto) | `entrega-{ID}/09-meta-entrega.json` |

**Salida al usuario (Revisar):** la auditoría y la propuesta numerada van **en el mensaje del chat**, en texto claro y **doble capa** (sencillo + técnico). **No** crear `REVISION-SUPERVISOR.md` ni `PROPUESTA-CAMBIOS.md` salvo petición explícita.

**Prohibido** editar `expedientes/NNNN_*` productivos durante Revisar/Acepto salvo comando **`Aplicar expediente`** (ver abajo).

Al **`Revisar`**, crear o refrescar `espejo/` copiando solo piezas **visibles o entregables al cliente** del expediente (según prefijos vigentes del ID):

- Demos: `04-demos/` o legacy `05-demos/`
- Comercial: infografía HTML, propuesta cliente, borradores de mensaje si forman parte del paquete (`05-*` o `06-*` legacy)
- Mensajero: `07-mensajes.md` / `ENTREGA.md` si existen y van al cliente
- Enlaces preview documentados (JSON/MD), **sin** credenciales

No copiar todo el expediente ni Excel. Registrar en `09-meta-entrega.json` qué se incluyó y versiones/fechas.

## Copias de skills

Ruta única: `operacion/mejora-continua/_skills-copia/{nombre-skill}/SKILL.md`

Skills que suelen corresponder a hallazgos de entrega: **`4-demo`**, **`5-comercial`**, **`7-mensajero`** (y **`3-comercial-innovador`** si el gap es de propuesta visible). **`2-webscraper`** solo si el error es de brief/copy de demo no reflejado en entrega.

- En el **primer** `/9` que requiera tocar una skill: si no existe la copia, **clonar** desde `.cursor/skills/{nombre}/SKILL.md`.
- Tras **`Acepto`**: aplicar cambios en `espejo/` y añadir en la **copia** de skill una regla **genérica** (sin atarse a un expediente que se borre). Entrada humana opcional en `operacion/feedback.md` si es preferencia de producto.
- **`Promover skills`**: solo si el usuario lo escribe **explícitamente**; entonces sobrescribir `.cursor/skills/` desde `_skills-copia/` (skill por skill o todas las tocadas, documentando en chat).

## Invocación

| Comando | Acción |
| --- | --- |
| `/9-mejora-continua Revisar {ID}` | Crear/actualizar espejo, auditar, **responder en chat** (veredicto + D1–D6 + propuesta numerada); persistir ítems en `09-meta-entrega.json`. Parar. |
| `/9-mejora-continua Acepto {ID} 1,3` | Aplicar ítems aceptados en `espejo/`; actualizar `_skills-copia` si procede; marcar meta. Parar. |
| `/9-mejora-continua Acepto {ID} todos` | Todos los ítems pendientes de la propuesta vigente. |
| `/9-mejora-continua Revisar {ID} otra vez` | Re-auditar espejo tras cambios (nueva propuesta o delta). |
| `/9-mejora-continua Aplicar expediente {ID} Acepto` | Copiar **solo** archivos acordados de `espejo/` al expediente real (explícito). |
| `/9-mejora-continua Promover skills Acepto` | Copiar `_skills-copia` → `.cursor/skills/` (explícito). |
| `/9-mejora-continua Limpiar {ID}` | Borrar `entrega-{ID}/` (no borra `_skills-copia` salvo que el usuario lo pida). |

`Go` aislado **no** ejecuta. Sin `{ID}` inequívoco, pedir ID o leer negocio activo **solo consulta**, sin escribir expediente.

## Procedimiento Revisar

1. Resolver carpeta expediente (`operacion/expedientes-carpetas.json`).
2. Montar `espejo/` (copia limpia de entregables cliente).
3. **Revisión web (prioritaria):** abrir en navegador comparador + **Demo A, B y C** (móvil y escritorio si es posible). Aplicar **`estandares-revision-web.md`** completo (dimensiones D1–D6).
4. Revisar **resto del paquete cliente** (infografía, propuesta HTML, mensajes): mismo criterio de claridad, tono ES, **no «salón»** en copy visible, sin metadatos de campaña.
5. Contrastar con skills 4–5–7, brief (`conversion_2026`, `prohibido_ui`) y checklist pre-cierre demo.
6. **Entregar en el chat** (obligatorio, **doble capa**): veredicto en lenguaje llano; **D1–D6** (semáforo/nota + resumen sencillo + aclaración técnica breve si aplica); método explicado («probé en navegador» vs «solo revisé el código»); riesgos en plain language; **propuesta numerada** con «Qué pasa» / «Detalle técnico» / severidad / dónde en espejo.
7. **Persistir** en `09-meta-entrega.json`: `propuesta_items[]` (misma numeración), `veredicto`, `revision_fecha`, `espejo_incluye`. **No** escribir `.md` de revisión salvo petición explícita del usuario.

No aplicar cambios en Revisar.

## Procedimiento Acepto

1. Validar números de ítem contra la **última propuesta del hilo** o `09-meta-entrega.json` → `propuesta_items`.
2. Editar **solo** `espejo/` para esos ítems.
3. Para ítems **transferibles**, parchear `_skills-copia/.../SKILL.md` (mínimo diff, regla clara).
4. Actualizar `09-meta-entrega.json` (`aceptados`, `fecha`, `pendiente_revisar`).
5. Indicar si conviene **`Revisar otra vez`** o **`Aplicar expediente`**.

## Criterios de bloqueo (no listo para cliente)

- Cualquier hallazgo **bloqueante** en D1–D6 (véase `estandares-revision-web.md`).
- Copy que cite investigación, agregadores o incertidumbre de campaña en UI.
- Datos no verificados como hechos (precio, horario, terraza, etc.).
- IDs internos, alcance VAL o metadatos Excel en material cliente.
- Enlace compartible localhost o roto en pieza marcada como entrega.
- Navegación o CTAs que obligan a «aprender» la web; responsive roto en móvil para tareas clave (carta, teléfono, mapa).
- A11y grave: sin focus usable, contraste ilegible en bloques principales, formularios sin etiquetas.
- Incumplimiento grave de reglas 4-demo (pack A/B/C, disclaimer imágenes).

## Relación con protocolo v4

/9 **no sustituye** etapas 2–7 ni encadena skills productivas. Es **control de calidad de entrega** después de que el pipeline haya producido material. Una invocación = una acción de la tabla (Revisar, Acepto, Promover, etc.) y **detenerse**.

## Lecturas

- `estandares-revision-web.md` (checklist D1–D6)
- `reference.md`
- `operacion/PROTOCOLO.md`, `operacion/EVIDENCIA.md`
- Skills 4, 5, 7 (lectura; escritura solo en `_skills-copia` o Promover)
