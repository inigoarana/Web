# Publicar preview compartible (demos + comercial)

## Cuándo invocar

Al **final del pipeline** (típicamente tras `/4-demo` o `/5-comercial`), cuando el usuario quiera **un enlace HTTPS** para que otra persona abra el comparador y las tres demos **sin** rutas locales ni `file://`.

Invocación explícita: **`/publicar-demos-preview`** (con o sin `Go`).

## Restricción absoluta

**Jamás instalar** git, gh, Node, Python ni otras herramientas en el equipo del usuario para esta skill. Usar solo lo **ya presente en PATH** o flujo **100 % navegador** en github.com.

Si `git`/`gh` no están disponibles → documentar y ejecutar el **flujo navegador**; no proponer instalación como única vía.

## Qué se publica (mínimo)

Por negocio activo (ID), **solo** artefactos compartibles:

| Incluir | Ruta típica |
| --- | --- |
| Comparador + demos A/B/C | `expedientes/…/04-demos/` (completa: `index.html`, `demo-a|b|c/`, `shared/`, `assets/`) |
| Infografía comercial (si existe) | `expedientes/…/06-infografia-valor.html` (y CSS/assets que referencie con rutas relativas) |
| Propuesta HTML (opcional, si el usuario lo pide) | `06-propuesta-cliente.html` |

**No** subir: Excel, briefs internos, `operacion/`, credenciales, registro completo del monorepo.

## Modelo de URL (un enlace distinto por proyecto)

Repositorio **único de previews** (recomendado), rama **`gh-pages`** o carpeta **`docs/`** en `main`:

```text
https://{usuario}.github.io/{repo-previews}/{slug}/
```

**`slug`** por negocio (no adivinable, estable):

```text
{ID}-{token_corto}
```

Ejemplo: `indh041-k7m2` → comparador en `…/indh041-k7m2/index.html`.

Generar `token_corto` aleatorio (4–6 caracteres alfanuméricos) la **primera** publicación de ese ID; **reutilizar** el mismo slug en actualizaciones del mismo negocio.

Registrar en `expedientes/…/04-enlace-preview.json`:

```json
{
  "ID": "indh041",
  "slug": "indh041-k7m2",
  "url_comparador": "https://…/indh041-k7m2/index.html",
  "publicado_en": "ISO-8601",
  "incluye": ["04-demos", "06-infografia-valor.html"],
  "metodo": "github_pages_navegador | git_push"
}
```

## Privacidad «solo con el enlace»

GitHub **no** ofrece «unlisted» como YouTube. Práctica acordada:

- Repositorio **público** con slug **no obvio** (no indexar en README del monorepo principal).
- Añadir en `04-demos/index.html` y demos: `<meta name="robots" content="noindex, nofollow">`.
- No enlazar previews desde la web comercial del cliente.

Repos **privados** + Pages requieren plan de pago en GitHub; si el usuario exige privacidad fuerte, usar **OneDrive enlace solo lectura** (sin instalar) y documentar en `04-enlace-preview.json`.

## Procedimiento A · Navegador (sin git/gh)

1. Confirmar con el usuario: **usuario GitHub**, nombre del **repo previews** (crear vacío si no existe).
2. Crear ZIP local con PowerShell **`Compress-Archive`** solo de la carpeta destino renombrada al `slug` (estructura: `slug/index.html`, `slug/demo-a/`, …).
3. Instrucciones al usuario (o ejecutar si hay sesión web): en github.com → repo → **Upload files** → subir contenido del slug a la ruta `/slug/` en rama `gh-pages` (crear rama si hace falta).
4. **Settings → Pages →** Source: rama `gh-pages`, carpeta `/ (root)` o `/docs` según layout acordado.
5. Esperar 1–3 min; verificar URL; guardar `04-enlace-preview.json` y copiar URL en `04-nota-demo.md` (sección «Enlace compartible»).
6. **No** marcar etapas Excel; esto es entrega auxiliar.

## Procedimiento B · git/gh ya instalados

1. Clonar solo el repo previews (o usar worktree) **sin** tocar el monorepo Cursor_Web completo si el usuario prefiere separación.
2. Copiar `04-demos` → `{slug}/` y opcionalmente infografía al mismo slug o subcarpeta `comercial/`.
3. Commit descriptivo; push a `gh-pages`.
4. Registrar URL en `04-enlace-preview.json`.

## Comprobaciones

- Abrir comparador en HTTPS: enlaces a demo-a/b/c funcionan (rutas relativas).
- Disclaimer imágenes presente.
- PDF externos (laalhondiga.es) siguen siendo enlaces absolutos — OK.
- Si falla Pages, no afirmar éxito; dejar ZIP + pasos OneDrive como respaldo.

## Preguntas al usuario (primera vez por campaña)

1. ¿Usuario/org de GitHub y nombre del repo previews (nuevo o existente)?
2. ¿Solo demos o también infografía/propuesta HTML?
3. ¿Acepta repo **público + slug secreto + noindex** o exige enlace OneDrive privado?

## Integración protocolo

No es etapa 1–7 del Excel. Opcional tras demo/comercial. Mencionar en `operacion/feedback.md` si cambian criterios de URL o privacidad.
