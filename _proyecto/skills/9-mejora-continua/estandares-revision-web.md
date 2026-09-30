# Estándares de revisión web · supervisor /9

Marco para auditar **demos y piezas HTML** del espejo como web **final al cliente**. Sintetiza criterios habituales de UX/UI (sin sustituir WCAG legal ni auditorías formales).

**Referencias consultadas (ideas, no checklist cerrado):**

- [ESDESIGN · Estándares del diseño web](https://www.esdesignbarcelona.com/actualidad/diseno-web/estandares-diseno-web)
- [Contentsquare · 13 consejos de diseño web](https://contentsquare.com/es-es/guias/diseno-web/consejos/)
- [Squarespace · 10 principios esenciales](https://es.squarespace.com/blog/principios-esenciales-de-diseno-web)

---

## Dimensiones de la revisión

Cada **`Revisar`** debe cubrir las **seis dimensiones** y reflejarlas **en la respuesta del chat** (nota 1–5 o semáforo + **explicación en lenguaje llano** + término técnico si ayuda a aprender); opcionalmente en `09-meta-entrega.json` → `veredicto` / resumen. **No** generar `.md` de revisión salvo petición explícita del usuario.

| Dim | Nombre | Qué mirar |
| --- | --- | --- |
| **D1** | Principios de diseño | Jerarquía visual, consistencia, claridad, navegación, legibilidad, simplicidad (sin ruido) |
| **D2** | Patrones y convenciones | Logo/marca, menú donde se espera, CTAs reconocibles, teléfono visible y clicable, patrones del sector (hostelería: carta, horario, reserva, mapa) |
| **D3** | Técnica y mantenimiento | HTML semántico razonable, CSS compartido, assets locales, sin hotlinks frágiles, estructura mantenible, metadatos básicos (`lang`, `title`, `description`, `color-scheme` si UI clara) |
| **D4** | Accesibilidad y usabilidad | Contraste, focus visible, skip link, no solo color para información, formularios etiquetados, `alt` en imágenes, `prefers-reduced-motion`, teclado en nav/CTAs |
| **D5** | Responsive | Móvil + escritorio (navegador o CDP): menú usable, CTAs tocables, texto legible, sin overflow horizontal grave, contenido clave above the fold |
| **D6** | Contenido y cliente | Copy ES peninsular, objetivo del negocio claro en segundos, precios/contacto honestos, sin metadatos de campaña, confianza/credibilidad, encaje con brief verificado |

---

## Checklist operativo (demos A · B · C + comparador)

### D1 · Principios

- [ ] Titular → subtítulo → cuerpo con jerarquía clara (≤ ~4 roles tipográficos por página).
- [ ] Espacio en blanco entre bloques; carta/horario no amontonados.
- [ ] Orden de escaneo (patrón F/Z): lo esencial arriba (nombre, propuesta, precio o CTA principal).
- [ ] Las tres variantes **diferenciadas** pero **mismos hechos** (no tres plantillas intercambiables).

### D2 · Convenciones (hostelería / local físico)

- [ ] Menú de anclas predecible (Inicio, Carta/Oferta, Horario, Reserva/Cita, Localización, Contacto — adaptado al sector).
- [ ] Teléfono en chrome o hero; `tel:` funcional.
- [ ] CTAs primarios vs secundarios distinguibles; hover/focus perceptible.
- [ ] Mapa + «Abrir en Maps» / «Cómo llegar» si hay dirección.
- [ ] Reserva: flujo creíble; no prometer confirmación instantánea si el brief dice teléfono.

### D3 · Técnica (alcance demo estática)

- [ ] `lang="es"`; títulos y meta description por página.
- [ ] Imágenes en `assets/`; manifest trazable.
- [ ] JS sin romper si falla un asset; sin trackers por defecto.
- [ ] Comparador: títulos fijos A/B/C; sin IDs internos en versión cliente.

### D4 · Accesibilidad / usabilidad

- [ ] Skip link operativo; `:focus-visible` en enlaces y botones (`a11y-access.css` si aplica).
- [ ] Contraste texto/fondo en hero, nav y tablas horario.
- [ ] Preguntas FAQ con `¿`; formulario contacto con labels asociados.
- [ ] Disclaimer imágenes de ejemplo solo donde la skill 4 lo exige (no duplicar ruido).

### D5 · Responsive

- [ ] Vista ~375px y ~1280px: nav usable, carta legible, calendario reserva no invade pantalla.
- [ ] Botones área táctil razonable; sin texto microscópico en móvil.
- [ ] Imágenes `max-width: 100%`; sin scroll horizontal persistente.

### D6 · Contenido · ojo del cliente

- [ ] ¿Entiende **qué es el local** y **qué hacer** (llamar, ver carta, reservar) en &lt;10 s?
- [ ] ¿Transmite **profesionalidad** y **confianza** (no «plantilla IA» ni copy interno)?
- [ ] ¿Hay **fricción** (precios ocultos, horario confuso, terraza/datos no confirmados en UI)?
- [ ] Coherencia con infografía/propuesta comercial si están en el espejo.

---

## Priorización en la propuesta (chat)

Etiquetar cada ítem numerado con dimensión **D1–D6** y severidad:

- **Bloqueante** — no entregar al cliente.
- **Alta** — debería corregirse antes de envío.
- **Mejora** — opcional; valor UX.

---

## Método de revisión (agente)

1. Abrir **comparador** y **Demo A, B, C** del espejo (navegador; HTTPS o Live Server).
2. Captura o snapshot **móvil + escritorio** cuando la herramienta lo permita.
3. Volcar seis dimensiones y propuesta numerada **en el chat**; persistir `propuesta_items` en `09-meta-entrega.json`.

Si no hay navegador: declararlo en el mensaje y limitar a revisión estática de HTML/CSS/JS + copy (no afirmar responsive validado).
