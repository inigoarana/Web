# Catálogo editable de servicios opcionales

Versión inicial: 1. Fecha: 2026-09-22. Hipótesis, no funciones implementadas ni precios aprobados.

Desactivar cambiando `habilitado: true` a `false`, o borrar el bloque. Una idea borrada/desactivada no se regenera. Nuevas ideas solo mediante mejoras explícitas; IDs no se reutilizan. Costes sin cotización: por estimar, nunca una tarifa garantizada. Medición analítica solo después de definir su alcance y condiciones; ninguna activa por defecto.

## Información actualizada

### EXT-001 — Carta con QR estable
- habilitado: true
- Necesidad: Consultar la carta sin cambiar impresos.
- Sectores: hostelería.
- Mecanismo: URL estable hacia carta revisable.
- Ejemplo: Sobremesa que sigue sirviendo después de cambiar platos.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Confirmar cada cambio.
- Dependencia externa: Dominio y alojamiento.
- Medición: Consultas a carta.


### EXT-002 — Cambios de carta por mensaje
- habilitado: true
- Necesidad: Actualizar sin aprender un editor.
- Sectores: hostelería.
- Mecanismo: Dueño envía cambios; humano valida, registra y publica tras revisión.
- Ejemplo: Cambiar menú de viernes recibido por mensaje.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar texto y precios; pactar número de cambios y plazo.
- Dependencia externa: Canal de mensajes ya utilizado; sin integración automática.
- Medición: Tiempo por cambio y correcciones.


### EXT-003 — Menú del día con caducidad
- habilitado: true
- Necesidad: Evitar información de otro día.
- Sectores: restaurantes.
- Mecanismo: Fecha visible y retirada o aviso al vencer.
- Ejemplo: Menú válido hasta las 16:00.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Actualizar diariamente.
- Dependencia externa: Web estática; retirada manual o lógica de fecha.
- Medición: Consultas y días con menú desactualizado.


### EXT-004 — Horarios especiales
- habilitado: true
- Necesidad: Evitar desplazamientos fallidos.
- Sectores: todos.
- Mecanismo: Bloque destacado de festivos con vigencia.
- Ejemplo: Cierre por vacaciones anunciado.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Confirmar excepciones.
- Dependencia externa: Web y perfiles existentes.
- Medición: Preguntas repetidas sobre apertura.


### EXT-005 — Agenda de eventos
- habilitado: true
- Necesidad: Comunicar actividades vigentes.
- Sectores: bares, cafeterías, gimnasios.
- Mecanismo: Listado con fecha, condiciones y canal existente.
- Ejemplo: Cata mensual con plazas a confirmar.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Mantener agenda real.
- Dependencia externa: Web y canal del negocio.
- Medición: Consultas y solicitudes por evento.


### EXT-006 — Catálogo por QR
- habilitado: true
- Necesidad: Mostrar variedad sin impresos extensos.
- Sectores: comercios, talleres.
- Mecanismo: Fichas de servicios/productos con revisión.
- Ejemplo: Acabados disponibles sin afirmar stock en tiempo real.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar disponibilidad y precios.
- Dependencia externa: Web o catálogo existente.
- Medición: Consultas cualificadas.


## Soportes físicos

### EXT-007 — Sobremesa de acceso rápido
- habilitado: true
- Necesidad: Encontrar información desde la mesa.
- Sectores: hostelería.
- Mecanismo: Soporte legible con QR y URL corta.
- Ejemplo: Carta y horario sin app.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Limpiar y sustituir soportes.
- Dependencia externa: Imprenta y alojamiento.
- Medición: Lecturas del destino, si se mide de forma aprobada.


### EXT-008 — Posavasos informativo
- habilitado: true
- Necesidad: Dar acceso discreto al contenido.
- Sectores: bares, cafeterías.
- Mecanismo: QR con llamada breve a carta/eventos.
- Ejemplo: Posavasos con agenda del local.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Reponer material.
- Dependencia externa: Imprenta.
- Medición: Uso de enlace diferenciado.


### EXT-009 — Tarjeta o recibo con enlace
- habilitado: true
- Necesidad: Facilitar volver a contactar.
- Sectores: todos.
- Mecanismo: URL/QR impreso donde pueda añadirse.
- Ejemplo: Tarjeta con horario y cómo reservar.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Entregar sin insistencia.
- Dependencia externa: Imprenta o configuración de ticket.
- Medición: Visitas al enlace específico.


### EXT-010 — Caja elegante con QR
- habilitado: true
- Necesidad: Ofrecer una acción útil al entregar la cuenta.
- Sectores: restaurantes.
- Mecanismo: QR interior discreto que permite carta, novedades o reseña voluntaria.
- Ejemplo: Al cerrar la cuenta: Si te apetece, comparte tu experiencia.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Limpiar caja y explicar al equipo; no pedir que la escaneen.
- Dependencia externa: Carpintería/proveedor físico; destino web o reseñas.
- Medición: Uso voluntario y comentarios sobre comodidad.


### EXT-011 — Escaparate digital
- habilitado: true
- Necesidad: Explicar servicios fuera de horario.
- Sectores: comercios, estética, talleres.
- Mecanismo: Cartel con QR y resumen accesible.
- Ejemplo: Servicios y solicitud de presupuesto.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar temporadas.
- Dependencia externa: Imprenta y web.
- Medición: Consultas originadas en el escaparate.


### EXT-012 — Pantalla informativa del local
- habilitado: true
- Necesidad: Mostrar oferta y avisos.
- Sectores: hostelería, gimnasios, comercios.
- Mecanismo: Presentación local con datos confirmados.
- Ejemplo: Menú sin precios desactualizados.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Encender y actualizar contenidos.
- Dependencia externa: Pantalla, reproductor y electricidad.
- Medición: Errores detectados y consultas.


## Opiniones y escucha

### EXT-013 — QR de reseña voluntaria
- habilitado: true
- Necesidad: Reducir pasos para opinar.
- Sectores: todos.
- Mecanismo: Enlace directo a plataforma disponible para cualquier cliente.
- Ejemplo: Cartel neutral Comparte tu experiencia.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: No condicionar atención a reseña.
- Dependencia externa: Plataforma de reseñas e imprenta.
- Medición: Accesos y volumen de reseñas sin prometer valoración.


### EXT-014 — NFC para reseñas voluntarias
- habilitado: true
- Necesidad: Acceso opcional por proximidad.
- Sectores: todos.
- Mecanismo: Etiqueta programada con destino verificable y QR alternativo.
- Ejemplo: Tarjeta NFC en mostrador.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Comprobar etiqueta y compatibilidad.
- Dependencia externa: Etiqueta NFC y plataforma.
- Medición: Accesos y problemas de uso.


### EXT-015 — Encuesta breve de satisfacción
- habilitado: true
- Necesidad: Entender problemas operativos.
- Sectores: todos.
- Mecanismo: Tres preguntas opcionales; enlace a reseñas visible a todos.
- Ejemplo: Tiempo de espera y claridad de información.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar respuestas y actuar.
- Dependencia externa: Formulario existente a evaluar antes de activar.
- Medición: Tasa de respuesta y problemas corregidos.


### EXT-016 — Preguntas frecuentes útiles
- habilitado: true
- Necesidad: Resolver dudas repetidas.
- Sectores: todos.
- Mecanismo: Bloque basado en dudas verificadas.
- Ejemplo: Accesibilidad, reservas y opciones de servicio.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Confirmar respuestas.
- Dependencia externa: Web estática.
- Medición: Frecuencia de preguntas antes/después.


## Repetición de visita

### EXT-017 — Tarjeta de fidelización
- habilitado: true
- Necesidad: Reconocer visitas repetidas.
- Sectores: cafeterías, barberías.
- Mecanismo: Sellos físicos con reglas claras.
- Ejemplo: Bono de visitas independiente de reseñas.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Sellar y aplicar condiciones.
- Dependencia externa: Imprenta; sistema digital solo si se acuerda.
- Medición: Tarjetas activas y canjes.


### EXT-018 — Bonos de servicios
- habilitado: true
- Necesidad: Simplificar compra recurrente.
- Sectores: estética, gimnasios, barberías.
- Mecanismo: Ficha informativa y registro manual con condiciones.
- Ejemplo: Bono de sesiones consultado por canal existente.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Controlar saldo, vigencia y atención.
- Dependencia externa: Sistema actual de cobro/registro.
- Medición: Canjes y carga administrativa.


### EXT-019 — Tarjetas regalo
- habilitado: true
- Necesidad: Facilitar regalar una experiencia.
- Sectores: restaurantes, comercios, estética.
- Mecanismo: Diseño y condiciones; emisión mediante operativa existente.
- Ejemplo: Vale regalo con número de control.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Validar emisión y canje.
- Dependencia externa: Imprenta y cobro actual.
- Medición: Consultas, emisiones y canjes.


### EXT-020 — Referidos con reglas claras
- habilitado: true
- Necesidad: Reconocer recomendaciones personales.
- Sectores: servicios, gimnasios.
- Mecanismo: Código simple y beneficio revisado, sin vincular reseñas.
- Ejemplo: Invitación a conocer un servicio.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Registrar y evitar duplicados.
- Dependencia externa: Registro manual o herramienta existente.
- Medición: Referidos válidos y coste real.


### EXT-021 — Novedades con consentimiento
- habilitado: true
- Necesidad: Comunicar cambios a interesados.
- Sectores: todos.
- Mecanismo: Alta voluntaria y baja sencilla con finalidad definida.
- Ejemplo: Boletín de eventos confirmado por el cliente.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: alto.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Preparar novedades y atender bajas.
- Dependencia externa: Proveedor de correo y revisión previa a activar.
- Medición: Altas consentidas, bajas y consultas.


## Reservas y solicitudes

### EXT-022 — Acceso a reservas existentes
- habilitado: true
- Necesidad: Reducir pasos para reservar.
- Sectores: restaurantes, servicios.
- Mecanismo: Botón al proveedor actual sin duplicar agenda.
- Ejemplo: Elegir mesa en sistema ya usado.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Comprobar disponibilidad del enlace.
- Dependencia externa: Proveedor de reservas actual.
- Medición: Clics; reservas solo si hay datos conciliables.


### EXT-023 — Grupos y celebraciones
- habilitado: true
- Necesidad: Recibir consultas mejor definidas.
- Sectores: restaurantes.
- Mecanismo: Información de capacidad confirmada y guion de solicitud.
- Ejemplo: Pedir fecha, personas y necesidades por canal actual.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Contestar presupuestos y confirmar límites.
- Dependencia externa: Canal profesional existente.
- Medición: Consultas con información suficiente.


### EXT-024 — Solicitud de presupuesto
- habilitado: true
- Necesidad: Evitar intercambio incompleto.
- Sectores: talleres, comercios, servicios.
- Mecanismo: Lista de datos necesarios y canal publicado.
- Ejemplo: Tipo de reparación y disponibilidad; sin formulario real inicial.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar cada solicitud.
- Dependencia externa: Canal actual; formulario futuro.
- Medición: Intercambios necesarios por presupuesto.


### EXT-025 — Solicitud de cita
- habilitado: true
- Necesidad: Ordenar consultas.
- Sectores: barberías, estética.
- Mecanismo: Enlace a agenda existente o solicitud sin confirmación automática.
- Ejemplo: Pedir hueco; confirmar por el negocio.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar agenda y confirmar.
- Dependencia externa: Agenda existente.
- Medición: Citas solicitadas y errores de expectativa.


### EXT-026 — Recordatorio de cita
- habilitado: true
- Necesidad: Ayudar a recordar citas confirmadas.
- Sectores: estética, barberías, talleres.
- Mecanismo: Evaluar función del sistema actual y consentimiento/canal.
- Ejemplo: Recordatorio desde agenda ya contratada.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Gestionar cancelaciones.
- Dependencia externa: Proveedor y coste por mensaje por verificar.
- Medición: Ausencias y cancelaciones anticipadas.


### EXT-027 — Pedido anticipado para recoger
- habilitado: true
- Necesidad: Preparar encargos con horario acordado.
- Sectores: cafeterías, comercios.
- Mecanismo: Acotar productos, cortes horarios y confirmación humana.
- Ejemplo: Encargo para recoger a una hora confirmada.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: alto.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Comprobar stock, atender y preparar.
- Dependencia externa: Canal/pedidos existente; pagos fuera del alcance inicial.
- Medición: Pedidos confirmados, errores y carga de preparación.


## Experiencia y acceso

### EXT-028 — Minijuego sin cuenta
- habilitado: true
- Necesidad: Ofrecer entretenimiento de espera.
- Sectores: cafeterías informales.
- Mecanismo: Juego estático breve sin datos personales ni compra obligatoria.
- Ejemplo: Trivia local de un minuto.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar preguntas y funcionamiento.
- Dependencia externa: Web estática, sin backend en mínimo.
- Medición: Uso voluntario y satisfacción; no ventas atribuidas.


### EXT-029 — Ranking con alias
- habilitado: true
- Necesidad: Añadir competición opcional.
- Sectores: cafeterías informales, gimnasios.
- Mecanismo: Mínimo: puntuación en el propio dispositivo; ranking compartido requiere alcance aparte.
- Ejemplo: Mejor marca local sin nombre real.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: alto.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Moderar alias y prevenir abuso si se hace público.
- Dependencia externa: Backend/moderación solo en ampliación cotizada.
- Medición: Participación y carga de moderación.


### EXT-030 — Juegos de mesa ligeros
- habilitado: true
- Necesidad: Entretener sin pantallas.
- Sectores: cafeterías, bares informales.
- Mecanismo: Selección y guía breve de uso.
- Ejemplo: Cartas y reglas accesibles por QR.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: bajo.
- Coste físico inicial/recurrente: por cotizar (fabricación, unidades y reposición).
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Reponer piezas y limpiar.
- Dependencia externa: Compra física y permisos sobre reglas.
- Medición: Uso y pérdidas de material.


### EXT-031 — Trivia y retos entre mesas
- habilitado: true
- Necesidad: Crear ocasión lúdica.
- Sectores: cafeterías, bares informales.
- Mecanismo: Preguntas con ronda manual; sin ranking personal.
- Ejemplo: Reto semanal opcional que no interrumpe servicio.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Dinamizar y resolver incidencias.
- Dependencia externa: Material impreso o web.
- Medición: Participación voluntaria y tiempo del equipo.


### EXT-032 — Información multilingüe
- habilitado: true
- Necesidad: Ayudar a visitantes a entender la oferta.
- Sectores: hostelería, comercios.
- Mecanismo: Traducción revisada y selector sencillo.
- Ejemplo: Carta ES/EN; euskera revisado por hablante competente.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Validar cambios en todas las versiones.
- Dependencia externa: Revisor/traductor cuando haga falta.
- Medición: Consultas de idioma y errores detectados.


### EXT-033 — Guía de accesibilidad
- habilitado: true
- Necesidad: Facilitar planificar la visita.
- Sectores: todos.
- Mecanismo: Información comprobada sobre acceso, espacios y atención.
- Ejemplo: Ancho/escalones solo si medidos o confirmados.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Confirmar datos y cambios.
- Dependencia externa: Verificación con propietario.
- Medición: Preguntas resueltas y correcciones.


## Packs sectoriales

### EXT-034 — Pack barbería
- habilitado: true
- Necesidad: Explicar servicios y facilitar citas.
- Sectores: barberías.
- Mecanismo: Carta de cortes, duración confirmada y enlace a agenda.
- Ejemplo: Comparar corte/barba sin prometer disponibilidad.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Actualizar servicios y agenda.
- Dependencia externa: Agenda actual y activos autorizados.
- Medición: Clics a cita y preguntas de servicios.


### EXT-035 — Pack estética
- habilitado: true
- Necesidad: Aclarar servicios sin promesas no sustentadas.
- Sectores: estética.
- Mecanismo: Fichas y preparación validada por profesional.
- Ejemplo: Explicar duración y cómo consultar idoneidad.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Revisar afirmaciones y contraindicaciones con profesional.
- Dependencia externa: Revisión profesional y agenda.
- Medición: Consultas informadas y errores corregidos.


### EXT-036 — Pack gimnasio
- habilitado: true
- Necesidad: Orientar primeras visitas.
- Sectores: gimnasios.
- Mecanismo: Horarios, niveles y solicitud de prueba con condiciones.
- Ejemplo: Elegir clase inicial sin promesas físicas.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Actualizar horarios y plazas.
- Dependencia externa: Agenda existente y fotos autorizadas.
- Medición: Solicitudes y visitas confirmadas.


### EXT-037 — Pack taller
- habilitado: true
- Necesidad: Explicar proceso y datos para presupuestar.
- Sectores: talleres.
- Mecanismo: Servicios, recepción y solicitud por canal publicado.
- Ejemplo: Qué información enviar antes de traer equipo.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Responder solicitudes y actualizar plazos.
- Dependencia externa: Canal actual.
- Medición: Solicitudes completas y tiempo de gestión.


### EXT-038 — Pack comercio de barrio
- habilitado: true
- Necesidad: Mostrar oferta y consulta de disponibilidad.
- Sectores: comercios.
- Mecanismo: Escaparate de categorías y encargo confirmado por humano.
- Ejemplo: Preguntar por talla sin stock ficticio.
- Valor potencial: facilitar esta necesidad; validar interés y utilidad con el dueño antes de ofertar.
- Esfuerzo: medio.
- Coste físico inicial/recurrente: no previsto en versión mínima.
- Software inicial/recurrente: por estimar según herramienta existente; no contratar automáticamente.
- Servicio humano inicial/recurrente: por estimar según preparación, revisión y frecuencia pactada.
- Carga del dueño: Confirmar disponibilidad y encargos.
- Dependencia externa: Catálogo y canal actual.
- Medición: Consultas útiles y encargos confirmados.


## Condiciones de las ideas sensibles
Caja elegante: elegir destino único y mensaje discreto; cotizar prototipo, material, unidades y limpieza. Probar si molesta al entregar cuenta. Nunca condicionar atención, descuento o regalo a dejar reseña.
Minijuegos: justificar encaje y duración; acceso sin app/cuenta. Versión mínima estática con puntuación solo local. Ranking entre clientes es ampliación con mantenimiento, moderación, caducidad de puntuaciones y privacidad; alias no equivale por sí solo a anonimato. No prometer mayor consumo.
Cambios de carta por mensaje: proceso humano recibir → comprobar dudas/precios → actualizar borrador → revisar → publicar solo en fase autorizada. Pactar cupo, horario, plazo y urgencias; WhatsApp automatizado no existe en esta configuración.
Fidelización e incentivos deben ser independientes de reseñas y revisarse antes de lanzar. Encuestas no filtran quién puede acceder a reseña pública. No recoger datos reales ni activar correos, recordatorios, formularios o cobros durante la demo.
