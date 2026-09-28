/**
 * Cierre estándar /4-demo: mapa Google, formulario Contáctanos (mailto), redes.
 * Requiere LA_ALHONDIGA o objeto con: map { embedUrl, viewUrl, directionsUrl }, address,
 * ownerEmail (null = demo sin envío), social [{ id, url, label }], inviteHeadline, inviteText.
 */
(function () {
  function encodeMailBody(fields) {
    return Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
  }

  function socialIconMarkup(id, compactHeader) {
    if (id === "facebook") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>';
    }
    if (id === "instagram") {
      if (compactHeader) {
        return (
          '<svg viewBox="0 0 24 24" class="social-ig-gradient" aria-hidden="true">' +
          '<defs><linearGradient id="igGradHeader" x1="0%" y1="100%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#FFDC80"/><stop offset="30%" stop-color="#F77737"/>' +
          '<stop offset="55%" stop-color="#E1306C"/><stop offset="85%" stop-color="#C13584"/>' +
          '<stop offset="100%" stop-color="#833AB4"/></linearGradient></defs>' +
          '<path fill="url(#igGradHeader)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
        );
      }
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#d62976" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
    }
    if (id === "google" && compactHeader) {
      return '<span class="social-emoji" aria-hidden="true">🌐</span>';
    }
    if (id === "google") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>';
    }
    if (id === "tripadvisor") {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="13.5" r="2.5" fill="#00AF87"/><circle cx="17.5" cy="13.5" r="2.5" fill="#00AF87"/><path fill="#000" d="M12 4l1.2 3.6H17l-3 2.2 1.2 3.6L12 11.2 8.6 13.4l1.2-3.6-3-2.2h3.8L12 4z"/></svg>';
    }
    return "";
  }

  function socialLiClass(id) {
    if (id === "instagram") return "social-ig";
    if (id === "facebook") return "social-fb";
    if (id === "google") return "social-google";
    if (id === "tripadvisor") return "social-ta";
    return "";
  }

  const DEMO_HEADER_SOCIAL = [
    { id: "instagram", url: "#", label: "Instagram", demo: true },
    { id: "facebook", url: "#", label: "Facebook", demo: true },
    { id: "google", url: "#", label: "Google reseñas", demo: true },
    { id: "tripadvisor", url: "#", label: "TripAdvisor", demo: true },
  ];

  function headerSocialEntries(data) {
    const list = (data.social || []).filter((s) => s && s.url);
    const ids = new Set(list.map((s) => s.id));
    if (list.length === 1 && ids.has("instagram")) {
      const reviews = (data.map && (data.map.reviewsUrl || data.map.viewUrl)) || null;
      if (reviews && !ids.has("google")) {
        list.push({ id: "google", url: reviews, label: "Google reseñas" });
        ids.add("google");
      }
      if (data.tripadvisorUrl && !ids.has("tripadvisor")) {
        list.push({ id: "tripadvisor", url: data.tripadvisorUrl, label: "TripAdvisor" });
      }
    }
    if (!list.length && data.headerSocialDemo !== false) {
      return DEMO_HEADER_SOCIAL.slice();
    }
    return list;
  }

  function fillSocialList(ul, entries, compact) {
    if (!ul) return;
    ul.innerHTML = "";
    entries.forEach((s) => {
      const li = document.createElement("li");
      li.className = socialLiClass(s.id);
      const a = document.createElement("a");
      if (s.demo) {
        a.href = "#";
        a.classList.add("social-link--demo");
        a.addEventListener("click", (ev) => ev.preventDefault());
        a.setAttribute("aria-label", `${s.label || s.id} (demo)`);
      } else {
        a.href = s.url;
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.setAttribute("aria-label", s.label || s.id);
      }
      const icon = socialIconMarkup(s.id, compact);
      a.innerHTML = icon || (s.label || s.id);
      if (compact) a.classList.add("social-link--compact");
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  window.initSiteChrome = function initSiteChrome(data) {
    if (!data) return;
    const addrTop = document.querySelector("[data-top-address]");
    if (addrTop && data.address) addrTop.textContent = data.address;

    const headerSocial = document.querySelector("[data-header-social]");
    const headerEntries = headerSocialEntries(data);
    fillSocialList(headerSocial, headerEntries, true);
    if (headerSocial && !headerSocial.children.length) {
      headerSocial.setAttribute("hidden", "");
    }

    const navTel = document.querySelector("[data-nav-tel]");
    if (navTel && data.phoneTel) {
      navTel.href = data.phoneTel;
      navTel.textContent = data.phoneDisplay || navTel.textContent;
    }

    const navBrand = document.querySelector("[data-nav-brand]");
    if (navBrand && data.brand) {
      navBrand.textContent = data.brand;
    }

    document.querySelectorAll("[data-reserva-tel-nota]").forEach((el) => {
      if (data.reservaTelefonosNota) {
        el.textContent = data.reservaTelefonosNota;
      } else {
        el.hidden = true;
      }
    });
  };

  window.initSiteCierre = function initSiteCierre(data, rootId) {
    const root = document.getElementById(rootId || "site-cierre-root");
    if (!root || !data) return;

    const mapFrame = root.querySelector(".site-map-iframe");
    const viewLink = root.querySelector("[data-map-view]");
    const dirLink = root.querySelector("[data-map-directions]");
    if (data.map && mapFrame) mapFrame.src = data.map.embedUrl;
    if (data.map && viewLink) viewLink.href = data.map.viewUrl;
    if (data.map && dirLink) dirLink.href = data.map.directionsUrl;

    const addrEl = root.querySelector("[data-map-address]");
    if (addrEl && data.address) addrEl.textContent = data.address;

    const inviteH =
      root.querySelector("[data-invite-headline]") ||
      document.querySelector("[data-invite-headline]");
    const inviteP =
      root.querySelector("[data-invite-text]") ||
      document.querySelector("[data-invite-text]");
    if (inviteH) inviteH.textContent = data.inviteHeadline || "Te esperamos";
    if (inviteP) inviteP.textContent = data.inviteText || "";

    const socialUl = root.querySelector("[data-social-list]");
    if (socialUl) {
      fillSocialList(
        socialUl,
        (data.social || []).filter((s) => s && s.url),
        false
      );
      if (!socialUl.children.length) {
        socialUl.closest(".site-social-wrap")?.setAttribute("hidden", "");
      }
    }

    const form = root.querySelector("#site-contact-form");
    const status = root.querySelector("[data-form-status]");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const nombre = String(fd.get("nombre") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const asunto = String(fd.get("asunto") || "").trim();
      const mensaje = String(fd.get("mensaje") || "").trim();
      if (!nombre || !email || !asunto || !mensaje) {
        if (status) {
          status.textContent = "Completa todos los campos obligatorios.";
          status.hidden = false;
        }
        return;
      }
      if (!data.ownerEmail) {
        if (status) {
          status.textContent =
            "Demo: el formulario enviará un correo al email que indique el propietario al publicar la web.";
          status.hidden = false;
        }
        return;
      }
      const subject = encodeURIComponent(`[Web] ${asunto}`);
      const body = encodeURIComponent(
        encodeMailBody({ Nombre: nombre, Email: email, Mensaje: mensaje })
      );
      window.location.href = `mailto:${data.ownerEmail}?subject=${subject}&body=${body}`;
    });
  };

  window.initStickyNavHighlight = function initStickyNavHighlight(navSelector) {
    const nav = document.querySelector(navSelector);
    if (!nav) return;
    const links = nav.querySelectorAll('a[href^="#"]');
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) map.set(el, a);
    });
    if (!map.size) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("is-active"));
            const link = map.get(entry.target);
            if (link) link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
    );
    map.forEach((_, el) => obs.observe(el));
  };
})();
