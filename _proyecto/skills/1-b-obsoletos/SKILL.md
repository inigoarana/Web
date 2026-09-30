---
name: 1-b-obsoletos
description: "Buscar hostelería con web propia muy obsoleta (casuística B, referencia La Alhondiga) en Euskadi y Cantabria oriental; expandir por anillos desde Indautxu; registrar en Excel solo B confirmados por navegador. Invocación explícita /1-b-obsoletos."
---
# Caza de webs obsoletas (casuística B)

Skill **especializada** en localizar bares, cafeterías y restaurantes cuya **web propia** esté **tan obsoleta como La Alhondiga** (plantilla antigua, UX fija, señales IONOS/MyWebsite o equivalente), **verificado en navegador**. No sustituye `/1-investigacion-mercado` para diagnóstico general ni inscribe locales sin B confirmado.

## Ejecución, Excel y cierre

Leer `config/proyecto.json`, `config/1-b-obsoletos.json`, `config/registro-excel.json`, `operacion/PROTOCOLO.md`, `operacion/EVIDENCIA.md`, `operacion/REGISTRO_EXCEL.md` y `operacion/estado.json`. Leer **Registro_Negocios.xlsx** antes de actuar. Localizar filas por **ID**, nunca por número de fila.

Ejecutar **solo** si el usuario invoca **`/1-b-obsoletos`** (o nombre equivalente acordado). **`/1-b-obsoletos` sin más texto = `/1-b-obsoletos Go`**. Go aislado no inicia nada. No contactar, reservar, comprar ni publicar.

Misma disciplina de registro que `/1-investigacion-mercado`: hash, respaldo, Excel cerrado, marcar **1 Investigación = Sí** solo tras alta completa y B verificado. **No** encadenar etapas 2–7. Detenerse al terminar el lote o bloqueo.

Persistir progreso geográfico en `operacion/estado.json` → clave `b_obsoletos`: `anillo_activo` (orden 1–7 según config), `ultima_invocacion`, `campana`, referencia al último lote (`operacion/investigacion/obsoletos-<lote_id>/`).

## Objetivo y filtro B (obligatorio)

**Inscribir únicamente** negocios que cumplan **casuística B · web propia muy obsoleta** (skill `1-investigacion-mercado`, anclas de madurez):

- Referencia: **La Alhondiga** (`indh041`, IONOS, «versión imprimir», mapa del sitio, login, layout fijo, móvil pobre).
- **Confirmación:** snapshot o captura en **navegador**; fetch HTML solo como **prefiltro** (p. ej. `ionos`, `mywebsite`, `versión para imprimir` sin viewport moderno).
- **Excluir:** dominio caído o sin web (**C1**), solo terceros/plataforma (**C2**), WordPress/Elementor actuales (**A/D/E/F**), plantilla BeeDigital reciente (**E**).
- Si tras auditoría visual **no** es B, **no** dar de alta en Excel en esta skill; anotar en informe del lote como «descartado (no B)» con veredicto breve.

Puntuación: aplicar factores acordados (N 8–9, V 6–8 típico); las cifras **~8** son **orientativas**, no objetivo rígido de fórmula.

## Geografía y anillos

Límite: **País Vasco** + **Cantabria oriental** (municipios y criterio en `config/1-b-obsoletos.json`). **No** buscar fuera.

Orden de búsqueda (alejarse de Indautxu):

1. Núcleo Indautxu (solo huecos no cubiertos en campaña previa).
2. Resto Bilbao → Bizkaia metropolitana → resto Bizkaia → Gipuzkoa → Araba → Cantabria este.

Mientras el anillo activo no produzca **candidatos B pendientes de auditoría**, ampliar búsqueda dentro del mismo anillo; si el anillo queda agotado sin B en la invocación, **avanzar** al siguiente anillo y documentarlo en `estado.json`.

Columna **Zona** en Excel: `Dentro` / `Límite` / `Fuera` respecto al **barrio foco Indautxu** solo informativo; lo que manda es municipio dentro del límite territorial de la skill.

## Campaña, IDs y deduplicación

- **Campaña Excel:** `eusk-hosteleria-obsoletos-001` (config).
- **IDs nuevos:** prefijo `obsh` + número (`obsh001`, …), únicos en todo el registro.
- Antes de investigar: deduplicar contra **todo** el Excel (todas las campañas) por nombre+dirección+municipio y dominio/teléfono.
- No reutilizar IDs; no duplicar un local ya con Investigación=Sí salvo **Rehacer** explícito sobre ese ID.

## Flujo por invocación (Go)

1. Leer Excel + `estado.json` + anillo activo.
2. Reanudar lote obsoletos interrumpido si existe (máx. 5 altas previstas).
3. Buscar candidatos con **web propia** en sector hostelería del anillo (mapas, guías, búsqueda nombre+ municipio, enlaces desde fichas). Priorizar dominios con prefiltrado obsoleto.
4. Por candidato (tope **15 auditorías** por invocación si hace falta para llenar lote): abrir URL en navegador → clasificar → **solo B** sigue a diagnóstico completo.
5. Diagnóstico del admitido: alinear con `/1-investigacion-mercado` (identidad, servicios, terraza, herramientas, oportunidades 1–3, encaje, factores, **Motivo puntuación** citando auditoría visual).
6. Alta Excel + expediente `expedientes/{NNNN}_{slug}/01-diagnostico.json` + entrada en lote.
7. Parar al completar hasta **5 altas B** o agotar anillo/candidatos según config.

## Salidas

Por lote (obligatorio historizar):

- `operacion/investigacion/obsoletos-<lote_id>/01-obsoletos.md` — resumen, anillo, tabla ID/negocio/URL/señales B/nota, descartados no B, cobertura.
- `operacion/investigacion/obsoletos-<lote_id>/01-establecimientos.json` — schema alineado a investigación; cada alta incluye `auditoria_visual`: `{ "fecha", "veredicto": "muy_obsoleta", "senales": [] }`.
- Actualizar `operacion/investigacion/INDICE.md` (entrada obsoletos).
- Opcional: reutilizar `operacion/scripts/barrido-visual-fetch.ps1` como prefiltrado; **no** sustituye navegador para B.

**Expediente** en columna Excel igual que `/1`. Checklist: **1 Investigación = Sí**, 2–7 = No; Decisión selección = Pendiente; Estado operativo = Disponible.

## Informe al usuario

Indicar: anillo activo, candidatos revisados, **altas B** (IDs, notas), descartados (motivo: no B / duplicado / fuera de zona), siguiente anillo si aplica, y **detenerse**.

## Relación con otras skills

- `/1-investigacion-mercado`: diagnóstico amplio y otros perfiles A–F; **no** usar para llenar Excel con no-B.
- `/2-webscraper` y siguientes: solo tras selección normal por nota/cola del registro; esta campaña prioriza **B**, no sustituye la cola global sin criterio del protocolo.

## Aceptación

Como máximo **cinco altas nuevas** por invocación, todas **B verificado visualmente**, sin duplicados, dentro del límite territorial. Excel y JSON coherentes; ningún alta sin `auditoria_visual`. Lote parcial conservado; bloqueos explícitos. Detenerse al finalizar.
