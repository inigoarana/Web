# Publicar demos (enlace compartible)

## Invocación

**`/8-publicar-demos`** sin más texto = **`/8-publicar-demos Go`**.

Alias aceptado: `/publicar-demos-preview Go` (misma skill).

## Qué hace el agente (no el usuario manual)

1. Lee `config/publicar-demos.json` y el negocio (activo en estado/Excel o el indicado en la invocación).
2. **`scripts/preparar_preview_cliente.ps1`** — empaqueta por slug (estructura **cliente**, fácil de clicar):
   - **`{slug}/index.html`** — portal: enlaces a **Infografía** y **Demos**.
   - **`Infografia/index.html`** — solo infografía (`05-infografia-valor.html`). **No** subir `05-propuesta-cliente.html`.
   - **`Demos/index.html`** — comparador (tres demos juntas).
   - **`Demos/Demo A`**, **`Demo B`**, **`Demo C`** — copia de `04-demos/demo-a|b|c` + `assets/` + `shared/`.
3. **`scripts/publicar_preview_expediente.ps1`** — sube staging vía API HTTPS (**sin** git/gh).
4. **Sync proyecto** (misma ejecución): en el repo **`_proyecto/`** (fuera de cada slug), actualiza lo configurado en `sync_proyecto`: `.cursor/skills`, `.cursor/rules`, `operacion/feedback.md`, `Registro_Negocios.xlsx`.
5. Escribe/actualiza **`04-enlace-preview.json`** y «Enlace compartible» en `04-nota-demo.md`.
6. Responde con **URL portal** `{pages_url_base}/{slug}/index.html` (WhatsApp/email).

Eliminar del remoto si existían: `{slug}/comercial/05-propuesta-cliente.html` (y la infografía duplicada en `comercial/`). **No** republicar propuesta.

### Codificación (tildes y eñes)

Todo HTML **generado** en preparación debe guardarse en **UTF-8 con BOM** (`Write-Utf8Html` en el script). **No** usar `Set-Content -Encoding UTF8` en Windows PowerShell 5.1 para portal/comparador/infografía copiada: puede corromper tildes en GitHub Pages (`InfografÃ­a`, `quÃ©`, `Â·`).

## Cómo lo ve el cliente (Pages)

| Pieza | URL |
| --- | --- |
| **Portal** (enviar este enlace) | `https://{usuario}.github.io/{repo}/{slug}/index.html` |
| Infografía | `…/{slug}/Infografia/index.html` |
| Comparador A/B/C | `…/{slug}/Demos/index.html` |
| Demo A | `…/{slug}/Demos/Demo%20A/index.html` |

## Cómo verlo en GitHub (árbol de archivos)

Repo configurado en `config/publicar-demos.json` (ej. `inigoarana/Web`):

| Qué | Ruta en GitHub |
| --- | --- |
| Portal + carpetas del negocio | `/{slug}/` → `index.html`, `Infografia/`, `Demos/` |
| Infografía (archivos) | `/{slug}/Infografia/` |
| Demos + A/B/C | `/{slug}/Demos/` |
| Skills, rules, feedback, Excel (sync) | `/_proyecto/` |

En GitHub se **navegan archivos**; en **github.io** se **abren** las páginas. Pueden quedar carpetas obsoletas de publicaciones antiguas (`demo-a/`, `comercial/` en la raíz del slug): borrarlas a mano en el repo si molestan.

## Requisito único (una vez por equipo)

**`operacion/github-publish.local.json`** (no commitea): token con **Contents: Read and write** en el repo `Web`.

Si no hay token: crear PAT en github.com, guardar JSON, reinvocar `/8-publicar-demos Go`.

## Slug

Reutilizar slug en `04-enlace-preview.json`; si no, `{nombre-normalizado}-{4chars}` (ej. `laalhondiga-k7m2`). No usar ID Excel en la URL pública.

## No es etapa Excel

No marca checklist 1–7.
