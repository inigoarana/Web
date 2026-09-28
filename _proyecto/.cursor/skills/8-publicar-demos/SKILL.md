# Publicar demos (enlace compartible)

## Invocación

**`/8-publicar-demos`** sin más texto = **`/8-publicar-demos Go`**.

Alias: `/publicar-demos-preview Go`.

## Qué hace el agente

1. Negocio: activo en estado/Excel o el indicado en la invocación.
2. **`preparar_preview_cliente.ps1`** — staging por slug:
   - `{slug}/index.html` — portal (enlaces a **Infografia** y **Demos**).
   - `Infografia/index.html` — solo infografía. **No** subir propuesta.
   - `Demos/index.html` — comparador; `Demos/Demo A|B|C/` + `assets/` + `shared/`.
3. **`publicar_preview_expediente.ps1`** — sube vía API (sin git/gh).
4. **Sync** a **`_proyecto/`**: skills, rules, `feedback.md`, `Registro_Negocios.xlsx` (`config/publicar-demos.json`).
5. Actualiza `04-enlace-preview.json` y «Enlace compartible» en `04-nota-demo.md`.
6. Tras subir: intentar **POST** `pages/builds`; si falla el token, escribir **`.nojekyll`** y **`pages-deploy-stamp.txt`** en la **raíz del repo** (redeploy legacy). Esperar 1–3 min y verificar **raw** y **github.io**.

Eliminar remoto si existía: `{slug}/comercial/05-propuesta-cliente.html`.

## Texto en GitHub (solo ASCII)

Todo el slug cliente sin tildes: `.html`/`.md` con ASCII estricto; **`.js`/`.css` con `Convert-ToSafeScriptAscii`** (no sustituir `«»` por `"` o se rompen strings y la demo queda vacia). Portal: enlace directo a **Demo A** + Infografia + comparador opcional.

Archivos de publicación: **UTF-8 sin BOM** (`Write-PublishTextFile`). Portal incluye comentario `<!-- publish ISO -->` para detectar despliegue.

## Verificación obligatoria al cerrar

1. **Fuente de verdad:** `https://raw.githubusercontent.com/{usuario}/{repo}/{rama}/{slug}/index.html` debe mostrar `Infografia`, `que ver`, `-` (sin `Ã` ni `Â`).
2. **Pages:** `https://{usuario}.github.io/{repo}/{slug}/index.html` puede tardar minutos; si raw OK y Pages viejo → rebuild Pages o esperar.
3. Responder al usuario con URL **portal** en `github.io`.

## URLs cliente

| Pieza | Ruta |
| --- | --- |
| Portal | `…/{slug}/index.html` |
| Infografia | `…/{slug}/Infografia/index.html` |
| Comparador | `…/{slug}/Demos/index.html` |
| Demo A | `…/{slug}/Demos/Demo%20A/index.html` |

## GitHub (árbol)

| Qué | Ruta |
| --- | --- |
| Negocio | `/{slug}/` |
| Sync operación | `/_proyecto/` |

## Token

`operacion/github-publish.local.json` — Contents read/write (Pages build recomendado).

## Slug

Reutilizar `04-enlace-preview.json`; si no, `{nombre-normalizado}-{4chars}`. No ID Excel en URL.

## No es etapa Excel

No marca checklist 1–7.
