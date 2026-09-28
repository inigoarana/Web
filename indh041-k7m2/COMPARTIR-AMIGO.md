# Cómo compartir las demos La Alhondiga

Las demos son HTML estático con rutas relativas (`demo-a/index.html`, `assets/…`). **No se pueden compartir** pegando la ruta local del ordenador.

## Sin instalar nada en el PC

### A) ZIP + enlace OneDrive / mensajería

1. Archivo: `LaAlhondiga-demos-compartir.zip` (en esta carpeta o en `expedientes/0041_LaAlhondiga/`).
2. En el Explorador de archivos (OneDrive): clic derecho → **Compartir** → enlace de lectura.
3. Tu amigo descarga, descomprime y abre **`index.html`**.

Funciona offline; no requiere servidor.

### B) URL pública solo con el navegador

1. Abre [Netlify Drop](https://app.netlify.com/drop).
2. Arrastra la carpeta **`04-demos`** entera.
3. Comparte la URL que generen (termina en `.netlify.app`). Tu amigo entra y verá el comparador.

No hace falta instalar Node, Python ni Netlify CLI.

## Qué no usar para “pegar un enlace”

- Rutas tipo `C:\Users\…\index.html` o `file:///C:/…` en otro ordenador.
- Abrir solo el HTML suelto sin la carpeta `assets/` y subcarpetas `demo-a`, `demo-b`, `demo-c`.

## Regenerar el ZIP

Si cambias las demos, vuelve a comprimir el contenido de `04-demos` (PowerShell integrado):

```powershell
Compress-Archive -Path ".\*" -DestinationPath "..\LaAlhondiga-demos-compartir.zip" -Force
```

Copia el ZIP de nuevo dentro de `04-demos` si quieres un solo enlace de descarga desde el comparador.
