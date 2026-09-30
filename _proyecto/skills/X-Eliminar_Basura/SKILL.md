---
name: X-Eliminar_Basura
description: "Eliminar solo artefactos temporales de operacion/ y .cursor-*.xlsx; nunca expedientes, demos, infografías, Excel maestro, skills ni rules."
---
# Eliminar basura (mantenimiento)

## Invocación

**`/X-Eliminar_Basura`** sin más texto = **`/X-Eliminar_Basura Go`**.

Alias aceptados: `/x-eliminar-basura`, `/X-Eliminar_Basura Go`.

## Prohibido eliminar (bloqueante)

Esta skill **nunca** borra trabajo de producto ni configuración del agente. **Perderías días de trabajo** si se tocara cualquiera de estos ámbitos:

| Ámbito | Incluye (ejemplos) |
| --- | --- |
| **`expedientes/`** | **Cualquier** carpeta `NNNN_Nombre` y **todo** su contenido: raíz del expediente, **`demos/`**, **`infografia/`**, propuestas/mensajes en raíz, `versiones/` |
| **`Registro_Negocios.xlsx`** | Único Excel operativo en la raíz del proyecto |
| **`skills/`** | Todas las skills, `SKILL.md`, catálogos anexos, plantillas propias de etapa |
| **`rules/`** | Todas las reglas `.mdc` |
| **`config/`**, **`scripts/`** (raíz) | Configuración y helpers del proyecto |
| **Documentación y memoria** | Raíz: **`README.md`**, **`ACTUALIZAR_EN_CURSOR.md`**. **`operacion/feedback.md`**, **`PROTOCOLO.md`**, **`REGISTRO_EXCEL.md`**, **`EVIDENCIA.md`**, **`ALCANCE.md`**, **`RESUMEN.md`**, **`estado.json`**, **`activo.json`**, **`expedientes-carpetas.json`**, token GitHub (`.example` incluido), **`investigacion/INDICE.md`**, **`establecimientos-acumulado.json`**, carpetas **`investigacion/lote-*`** / **`obsoletos-*`**, informes **`benchmark-*`**, **`plantillas-demo/`**, **`operacion/scripts/`** |

Tampoco **`operacion/cambios-excel.json`** (payload activo reutilizable).

El script `scripts/eliminar_basura.ps1` **aborta** si el path cae en zona protegida o en cualquiera de esos archivos de documentación/estado.

## Qué hace el agente

1. Ejecutar desde la raíz del proyecto:
   `powershell -NoProfile -File scripts/eliminar_basura.ps1 -MaxAgeHours 24`
2. Resumir al usuario: cuántos paths eliminados y cuántos conservados por edad (menos de 24 h).
3. Si el script devuelve error de zona protegida, **detenerse** y reportar; no intentar borrar a mano fuera de la lista permitida.

### Modo excepcional

Solo si el usuario pide **limpieza total inmediata** de basura (como «borra toda la basura ya»):
`powershell -NoProfile -File scripts/eliminar_basura.ps1 -Todo`

**`-Todo` no relaja las prohibiciones anteriores**; solo ignora la ventana de 24 h sobre artefactos ya permitidos.

## Artefactos objetivo (más de 24 h)

| Patrón | Motivo |
| --- | --- |
| `operacion/_leer*.json`, `operacion/_excel*.json` | Volcados de lectura Excel / pruebas |
| `operacion/cambios-excel-*.json` | Payloads ya aplicados al registro (conservar **`cambios-excel.json`**) |
| `operacion/cambios-terraza.json` | Ajuste puntual |
| `operacion/_publish-temp/` | Staging de `/8-publicar-demos` (copia; fuente viva en **expediente**) |
| `operacion/_tmp/` | Temporal vacío |
| `operacion/investigacion/barrido*`, `*fetch*.json`, `rehacer-c-escala*` sueltos | Barridos puntuales (no carpetas `lote-NNN/`) |
| Raíz: `.cursor-*.xlsx` | Basura COM (no confundir con **`Registro_Negocios.xlsx`**) |

## Entradas

Ninguna etapa Excel previa. No requiere negocio activo.

## Aceptación

Script ejecutado sin error; listado breve de eliminados; **cero** paths bajo `expedientes/`, `skills/` o `rules/`; registro maestro intacto. Detenerse al terminar; no encadenar otras skills.

## Checklist compartida

No modifica columnas 1–7 del Excel. Opcional: invocar tras sesiones largas de registro o publicación.
