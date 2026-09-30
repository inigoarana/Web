# Referencia · /9-mejora-continua

## Mapa de directorios

```
operacion/mejora-continua/
├── README.md
├── _skills-copia/          # clones editables; originales en .cursor/skills/
│   ├── 4-demo/SKILL.md
│   ├── 5-comercial/SKILL.md
│   └── 7-mensajero/SKILL.md
└── entrega-{ID}/
    ├── espejo/             # paquete “como lo verá el cliente”
    └── 09-meta-entrega.json   # estado + propuesta_items (Acepto)
```

La **auditoría y la propuesta numerada** se entregan **en el chat** (texto). Archivos `REVISION-SUPERVISOR.md` / `PROPUESTA-CAMBIOS.md` **solo** si el usuario lo pide explícitamente.

## Estándares web

Checklist completo: **`estandares-revision-web.md`** (dimensiones D1–D6, fuentes ESDESIGN, Contentsquare, Squarespace).

## Salida Revisar · chat (obligatoria)

Incluir en el mensaje, en este orden:

1. Veredicto: listo | listo con reservas | no listo (**frase para cualquier lector**, no solo devs)  
2. D1–D6: semáforo/nota + **en sencillo** + término técnico entre paréntesis si aporta  
3. Método: qué se hizo en práctica («abrí la web en móvil y PC» vs «no pude abrirla; miré el código»)  
4. Ítems numerados: **Qué pasa** · **Detalle técnico** · severidad · dónde (espejo) · cambio propuesto  

### Doble capa · glosario rápido (usar al explicar)

| Término | En sencillo |
| --- | --- |
| **Nav / menú** | La barra de enlaces arriba (Inicio, Carta, Horario…). |
| **CTA** | Botón o enlace que pide hacer algo (llamar, reservar, ver carta). |
| **Skip link** | Atajo «saltar al contenido» para quien navega con teclado o lector de pantalla. |
| **Responsive / móvil** | Que la página se adapte bien al teléfono, no solo al ordenador. |
| **Wrap (flex-wrap)** | Cuando los enlaces no caben en una fila y se apilan en varias líneas. |
| **`href="#"`** | Enlace que no lleva a ninguna página (suele quedar «muerto» al pulsar). |
| **a11y / accesibilidad** | Que se pueda usar con teclado, buen contraste, textos alternativos en imágenes, etc. |
| **Focus / foco visible** | Ver qué enlace o botón está seleccionado al tabular con el teclado. |
| **Placeholder** | Texto gris de ejemplo dentro de un campo del formulario. |
| **Meta description** | Frase corta que resume la página para Google y la pestaña del navegador. |
| **`data-val` / DOM** | Etiquetas internas en el código de la página; el visitante no las ve, pero ensucian la entrega pro. |
| **Alt (texto alternativo)** | Descripción de una imagen para quien no la ve y para buscadores. |

Ejemplo de ítem:

> **3. Texto de imagen inadecuado (alta)**  
> **Qué pasa:** En una foto de ambiente dice «salón»; suena raro para un bar y no encaja con vuestras reglas de copy.  
> **Detalle técnico:** En `demo-c/app.js`, el `alt` de la galería dice «Salón del local»; conviene cambiarlo por «Ambiente del local…».  
> **Cambio:** Sustituir el alt en el espejo; regla transferible en skill 4-demo.

## Plantilla · 09-meta-entrega.json

```json
{
  "ID": "indh010",
  "expediente_carpeta": "0010_Mugi",
  "fase": "propuesta_pendiente",
  "veredicto": "listo con reservas",
  "revision_fecha": "2026-09-30",
  "espejo_incluye": ["demos/", "05-propuesta-cliente.html"],
  "propuesta_items": [
    {
      "n": 1,
      "titulo": "…",
      "dimension": "D2",
      "severidad": "alta",
      "espejo": "demos/shared/content.js",
      "skill_copia": "4-demo",
      "transferible": true
    }
  ],
  "aceptados": [],
  "skills_copia_tocadas": []
}
```

`fase`: `propuesta_pendiente` | `parcialmente_aceptado` | `listo_espejo` | `aplicado_expediente`

## Qué copiar al espejo (guía)

| Pieza cliente | Patrones habituales |
| --- | --- |
| Comparador + demos | `04-demos/**` |
| Infografía | `05-infografia-valor.html` |
| Propuesta HTML/PDF | `05-propuesta-cliente.html` |
| Mensajes | `07-mensajes.md`, `ENTREGA.md` |
| Preview | `04-enlace-preview.json`, `04-publicacion-preview.md` (sin secretos) |

Legacy `05-demos`, `06-*` comercial: adaptar al mapa del expediente; listar en meta.

## Flujo típico

1. `/9-mejora-continua Revisar indh041`
2. Usuario lee PROPUESTA en chat o archivo.
3. `/9-mejora-continua Acepto indh041 1,2,4`
4. `/9-mejora-continua Revisar indh041 otra vez` → veredicto listo
5. `/9-mejora-continua Aplicar expediente indh041 Acepto` (opcional)
6. `/9-mejora-continua Promover skills Acepto` (opcional, sube reglas a skills reales)

## Promover vs originales

| Acción | `.cursor/skills/` | `_skills-copia/` | `expedientes/` |
| --- | --- | --- | --- |
| Revisar / Acepto | lectura | escritura | solo espejo |
| Promover skills Acepto | escritura | fuente | — |
| Aplicar expediente Acepto | — | — | escritura |
