/**
 * Calendario de reserva (demo estática).
 * Huecos simulados por fecha; en producción vendrían del backend.
 * UI: panel compacto abierto solo al pulsar el icono de calendario.
 */
const RESERVA_DOW = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

function reservaHuecosSimulados(fecha) {
  const dow = fecha.getDay();
  const cfg = window.LA_ALHONDIGA && window.LA_ALHONDIGA.reserva;
  const cerrados = (cfg && cfg.diasSemanaCerrados) || [1];
  if (cerrados.includes(dow)) return -1;
  const seed =
    fecha.getFullYear() * 10000 +
    (fecha.getMonth() + 1) * 100 +
    fecha.getDate();
  const muestras = [0, 1, 2, 3, 5, 7, 9];
  return muestras[seed % muestras.length];
}

function reservaGetPersonas(form) {
  const input = form && form.querySelector('[name="personas"]');
  const n = parseInt(String(input && input.value), 10);
  return Number.isFinite(n) && n >= 1 ? n : 1;
}

/** Disponibilidad según plazas simuladas y número de personas (sin estado naranja). */
function reservaEstadoDia(huecos, personas) {
  const p = personas || 1;
  if (huecos < 0) return "closed";
  if (huecos < p) return "full";
  return "ok";
}

function reservaClaseEstado(estado) {
  if (estado === "closed") return "is-closed";
  if (estado === "full") return "is-full";
  if (estado === "low") return "is-low";
  return "is-ok";
}

function initReservacionForm(form, options) {
  if (!form) return;
  const calHost = form.querySelector("[data-reserva-cal]");
  const hidden = form.querySelector('input[name="fecha"]');
  const msg = options.messageEl || form.querySelector(".form-msg, [data-form-msg]");
  if (!calHost || !hidden) return;

  const trigger = form.querySelector("[data-reserva-cal-trigger]");
  const panel =
    form.querySelector("[data-reserva-cal-panel]") ||
    calHost.closest(".reserva-cal-panel");
  const triggerLabel = form.querySelector("[data-reserva-cal-label]");

  let view = new Date();
  view.setDate(1);
  let selected = null;
  const personasInput = form.querySelector('[name="personas"]');

  function setPanelOpen(open) {
    if (!panel) return;
    panel.hidden = !open;
    if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (trigger) {
    setPanelOpen(false);
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      setPanelOpen(panel.hidden);
    });
  }

  if (panel && !panel.dataset.calBound) {
    panel.dataset.calBound = "1";
    panel.addEventListener("click", (e) => e.stopPropagation());
    panel.addEventListener("mousedown", (e) => e.stopPropagation());
  }

  document.addEventListener(
    "click",
    (e) => {
      if (!panel || panel.hidden) return;
      if (e.target.closest("[data-reserva-cal-panel]")) return;
      if (e.target.closest("[data-reserva-cal-trigger]")) return;
      setPanelOpen(false);
    },
    true
  );

  function updateTriggerLabel() {
    if (!triggerLabel) return;
    if (!selected) {
      triggerLabel.textContent = "Seleccionar día";
      return;
    }
    triggerLabel.textContent = selected.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }

  function render() {
    calHost.innerHTML = "";
    const head = document.createElement("div");
    head.className = "reserva-cal-head";
    const prev = document.createElement("button");
    prev.type = "button";
    prev.setAttribute("aria-label", "Mes anterior");
    prev.textContent = "‹";
    const next = document.createElement("button");
    next.type = "button";
    next.setAttribute("aria-label", "Mes siguiente");
    next.textContent = "›";
    const title = document.createElement("p");
    title.className = "reserva-cal-title";
    title.textContent = view.toLocaleDateString("es-ES", {
      month: "long",
      year: "numeric",
    });
    head.append(prev, title, next);
    calHost.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "reserva-cal-grid";
    grid.setAttribute("role", "grid");
    RESERVA_DOW.forEach((d) => {
      const lab = document.createElement("div");
      lab.className = "reserva-cal-dow";
      lab.textContent = d;
      grid.appendChild(lab);
    });

    const year = view.getFullYear();
    const month = view.getMonth();
    const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < firstDow; i++) {
      const empty = document.createElement("span");
      empty.className = "reserva-cal-day is-empty";
      empty.setAttribute("aria-hidden", "true");
      grid.appendChild(empty);
    }

    const personas = reservaGetPersonas(form);

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const huecos = reservaHuecosSimulados(date);
      const estado = reservaEstadoDia(huecos, personas);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `reserva-cal-day ${reservaClaseEstado(estado)}`;
      btn.textContent = String(day);
      btn.dataset.date = date.toISOString().slice(0, 10);
      btn.dataset.huecos = String(huecos);

      if (date < today) {
        btn.disabled = true;
      }
      if (estado === "closed" || estado === "full") {
        btn.disabled = true;
      }

      if (
        selected &&
        selected.toISOString().slice(0, 10) === btn.dataset.date
      ) {
        btn.classList.add("is-selected");
      }

      btn.addEventListener("click", () => {
        selected = date;
        hidden.value = btn.dataset.date;
        hidden.dispatchEvent(new Event("change", { bubbles: true }));
        updateTriggerLabel();
        setPanelOpen(false);
        render();
      });
      grid.appendChild(btn);
    }
    calHost.appendChild(grid);

    const legend = document.createElement("div");
    legend.className = "reserva-cal-legend";
    legend.innerHTML =
      '<span class="lg-closed"><i></i> Cerrado</span><span class="lg-ok"><i></i> Hay sitio</span><span class="lg-full"><i></i> Completo</span>';
    calHost.appendChild(legend);

    prev.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      view.setMonth(view.getMonth() - 1);
      render();
    };
    next.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      view.setMonth(view.getMonth() + 1);
      render();
    };
  }

  render();
  updateTriggerLabel();

  if (personasInput) {
    personasInput.addEventListener("change", () => {
      if (
        selected &&
        reservaEstadoDia(
          reservaHuecosSimulados(selected),
          reservaGetPersonas(form)
        ) === "full"
      ) {
        selected = null;
        hidden.value = "";
        updateTriggerLabel();
      }
      render();
    });
    personasInput.addEventListener("input", () => {
      render();
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!hidden.value) {
      if (msg) {
        msg.hidden = false;
        msg.textContent = "Elige un día en el calendario.";
      }
      setPanelOpen(true);
      return;
    }
    const nombre =
      (form.querySelector('[name="nombre"]') || {}).value || "";
    const personas = reservaGetPersonas(form);
    const date = new Date(hidden.value + "T12:00:00");
    const huecos = reservaHuecosSimulados(date);
    const fechaTxt = date.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    if (msg) msg.hidden = false;
    if (huecos < 0) {
      if (msg) msg.textContent = "Ese día permanecemos cerrados. Elige otra fecha.";
      return;
    }
    if (huecos < personas) {
      if (msg)
        msg.textContent = `Gracias${nombre ? ", " + nombre : ""}. El ${fechaTxt} no hay sitio para ${personas} personas. Prueba otro día o llámanos.`;
      return;
    }
    if (msg) {
      msg.textContent = `Gracias${nombre ? ", " + nombre : ""}. Hemos recibido tu solicitud para el ${fechaTxt} (${personas} personas). Te confirmaremos en breve.`;
    }
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.disabled = true;
  });
}

/** Formulario de reserva oculto hasta pulsar «Reserva online». */
function initReservaPanel(root) {
  const section =
    typeof root === "string" ? document.querySelector(root) : root;
  if (!section) return;
  const btn = section.querySelector("[data-reserva-reveal]");
  const panel = section.querySelector("[data-reserva-panel]");
  if (!btn || !panel) return;
  panel.hidden = true;
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    btn.setAttribute("aria-expanded", opening ? "true" : "false");
    if (opening) {
      const first = panel.querySelector("input, button, textarea");
      if (first) first.focus();
    }
  });
}
