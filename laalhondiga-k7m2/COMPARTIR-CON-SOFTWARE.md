# Empaquetar y enviar demos · con software (opcional)

Cuando ZIP + OneDrive no basta, estas vías **sí instalan** algo en tu PC (o usan cuenta en la nube). Elige según si quieres **enviar un archivo** o dar una **URL https**.

## 1. Enviar archivo (empaquetado)

| Método | Qué instalar / usar | Qué envías |
| --- | --- | --- |
| **ZIP + WeTransfer** | Solo navegador en [wetransfer.com](https://wetransfer.com) | `LaAlhondiga-demos-compartir.zip` (~530 KB). Tu amigo descomprime y ejecuta **`ABRIR-COMPARADOR.bat`** (Windows) o abre `index.html`. |
| **ZIP + email** | Nada | Mismo ZIP si el correo admite adjuntos &lt; 25 MB. |
| **7-Zip** (opcional) | [7-zip.org](https://www.7-zip.org) | Recomprimir con contraseña o split si tu canal lo exige. |

Archivo maestro del proyecto:

`expedientes/0041_LaAlhondiga/LaAlhondiga-demos-compartir.zip`

Contiene la carpeta **`LaAlhondiga-demos`** con comparador, A/B/C, assets y `.bat` de apertura.

---

## 2. URL pública (instalando herramientas)

### A) Git + GitHub Pages (recomendado si vas a compartir a menudo)

1. Instalar **Git for Windows**: [git-scm.com/download/win](https://git-scm.com/download/win)
2. Instalar **GitHub CLI** (opcional): [cli.github.com](https://cli.github.com/)
3. Crear repo **público** solo con la carpeta `04-demos` (o subcarpeta `docs/`).
4. En el repo: **Settings → Pages → Source: Deploy from branch → /root o /docs → main**.
5. URL tipo: `https://<usuario>.github.io/<repo>/` → compartes ese enlace.

Ventaja: HTTPS estable, sin caducar como un ZIP suelto.

### B) Node + Surge (rápido, una carpeta)

1. Instalar **Node.js LTS**: [nodejs.org](https://nodejs.org/)
2. En PowerShell, desde `04-demos`:

```powershell
npx surge . la-alhondiga-demos.surge.sh
```

(Surge pide email la primera vez; `npx` descarga surge sin instalación global.)

3. Compartes la URL que imprima (p. ej. `https://la-alhondiga-demos.surge.sh`).

### C) Python + servidor local + ngrok (túnel temporal)

1. Instalar **Python** desde [python.org](https://www.python.org/downloads/) (marcar “Add to PATH”).
2. Instalar **ngrok**: [ngrok.com/download](https://ngrok.com/download) (cuenta gratuita).

```powershell
cd expedientes\0041_LaAlhondiga\04-demos
python -m http.server 8765
```

En otra terminal:

```powershell
ngrok http 8765
```

Compartes la URL `https://….ngrok-free.app` (válida mientras tu PC y ngrok estén encendidos).

### D) Cloudflare Tunnel (`cloudflared`)

1. Descargar **cloudflared** (binario, sin Node): [developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation)
2. Servir carpeta con Python (arriba) o `npx serve`.
3. `cloudflared tunnel --url http://localhost:8765` → URL https temporal.

---

## 3. Qué suele fallar al “solo enviar HTML”

- Enviar **solo** `index.html` sin `demo-a/`, `demo-b/`, `assets/`, `shared/` → enlaces rotos.
- Abrir desde **OneDrive “Vista previa”** del navegador → a veces bloquea rutas relativas; mejor **descargar ZIP** y abrir en local.
- **Mac**: usar `index.html` con doble clic (Safari/Chrome); no hace falta `.bat`.

---

## 4. Si quieres que el agente lo automatice

Di explícitamente qué vía autorizas, por ejemplo:

- «Instala Git y sube solo `04-demos` a GitHub Pages», o  
- «Usa npx surge».

Sin esa instrucción, el proyecto mantiene la regla por defecto **no instalar** salvo que lo pidas.
