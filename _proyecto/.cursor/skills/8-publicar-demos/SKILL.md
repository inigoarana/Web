# Publicar demos (enlace compartible)

## Invocación

**`/8-publicar-demos`** sin más texto = **`/8-publicar-demos Go`**.

Alias aceptado: `/publicar-demos-preview Go` (misma skill).

## Qué hace el agente (no el usuario manual)

1. Lee `config/publicar-demos.json` y el negocio (activo en estado/Excel o el indicado en la invocación).
2. **`scripts/preparar_preview_cliente.ps1`** — empaqueta por slug:
   - **`{slug}/index.html`** — portal con enlaces clicables a Infografía y Demos.
   - **`Infografia/index.html`** — solo infografía (`05-infografia-valor.html`). **No** subir `05-propuesta-cliente.html`.
   - **`Demos/index.html`** — comparador (tres demos juntas).
   - **`Demos/Demo A`**, **`Demo B`**, **`Demo C`** — copia de `04-demos/demo-a|b|c` + `assets/` + `shared/`.
3. **`scripts/publicar_preview_expediente.ps1`** (o `publicar_demos_github.ps1` con staging ya preparado) — sube vía API HTTPS (**sin** git/gh).
4. **Sync proyecto** (misma ejecución): actualiza en el repo **`_proyecto/`** (fuera del slug): `.cursor/skills`, `.cursor/rules`, `operacion/feedback.md`, `Registro_Negocios.xlsx` (config `sync_proyecto`).
5. Escribe/actualiza **`04-enlace-preview.json`** y sección «Enlace compartible» en `04-nota-demo.md`.
6. Responde con **URL portal** `{pages_url_base}/{slug}/index.html` (WhatsApp/email).

Eliminar del remoto, si existían: `comercial/05-propuesta-cliente.html` (no republicar propuesta).

## Requisito único (una vez por equipo)

Archivo local **`operacion/github-publish.local.json`** (no se commitea): token con **Contents: Read and write** en el repo `Web`.

Si no hay token: crear fine-grained PAT en github.com, guardar JSON local, reinvocar `/8-publicar-demos Go`.

## URLs típicas (cliente)

| Pieza | Ruta en Pages |
| --- | --- |
| Portal | `…/{slug}/index.html` |
| Infografía | `…/{slug}/Infografia/index.html` |
| Comparador | `…/{slug}/Demos/index.html` |
| Demo A | `…/{slug}/Demos/Demo%20A/index.html` |

## Slug

Reutilizar slug en `04-enlace-preview.json`; si no, `{nombre-normalizado}-{4chars}` (ej. `laalhondiga-k7m2`). No usar ID Excel en URL.

## No es etapa Excel

No marca checklist 1–7.
