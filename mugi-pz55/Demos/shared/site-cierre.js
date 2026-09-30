/**
 * Cierre estandar /4-demo: mapa Google, formulario Contactanos (mailto), redes.
 * Requiere SITE_DATA / MUGI o objeto con: map { embedUrl, viewUrl, directionsUrl }, address,
 * ownerEmail (null = demo sin envio), social [{ id, url, label }], inviteHeadline, inviteText.
 */
(function () {
  /** Evita vista mundial en iframe: exige zoom (z) e idioma en embeds Google. */
  function mapEmbedSrc(map) {
    if (!map || !map.embedUrl) return "";
    const zoom = map.embedZoom != null ? String(map.embedZoom) : "17";
    try {
      const u = new URL(map.embedUrl, "https://www.google.com");
      const host = u.hostname.replace(/^www\./, "");
      if (host.includes("google") && u.pathname.includes("maps")) {
        if (!u.searchParams.has("z")) u.searchParams.set("z", zoom);
        if (!u.searchParams.has("hl")) u.searchParams.set("hl", "es");
        if (!u.searchParams.has("output")) u.searchParams.set("output", "embed");
        return u.toString();
      }
    } catch (_) {
      /* seguir con cadena */
    }
    let url = map.embedUrl;
    if (!/[?&]z=\d+/i.test(url)) {
      url += (url.includes("?") ? "&" : "?") + `z=${zoom}`;
    }
    if (!/[?&]hl=/i.test(url)) url += "&hl=es";
    if (!/[?&]output=embed/i.test(url)) url += "&output=embed";
    return url;
  }

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
      return '<span class="social-emoji" aria-hidden="true"></span>';
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
    { id: "google", url: "#", label: "Google resenas", demo: true },
    { id: "tripadvisor", url: "#", label: "TripAdvisor", demo: true },
  ];

  function headerSocialEntries(data) {
    const list = (data.social || []).filter((s) => s && s.url);
    const ids = new Set(list.map((s) => s.id));
    if (list.length === 1 && ids.has("instagram")) {
      const reviews = (data.map && (data.map.reviewsUrl || data.map.viewUrl)) || null;
      if (reviews && !ids.has("google")) {
        list.push({ id: "google", url: reviews, label: "Google resenas" });
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

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Enlaza una frase (p. ej. 'formulario de contacto') a #contacto dentro de un parrafo. */
  function fillInlineContactLink(el, text, data) {
    if (!el || text == null) return;
    const anchor = (data && data.reservaContactoAnchor) || "#contacto";
    const linkPhrase =
      (data && data.reservaContactoLinkPhrase) || "formulario de contacto";
    const lower = String(text).toLowerCase();
    const idx = lower.indexOf(linkPhrase.toLowerCase());
    if (idx === -1) {
      el.textContent = text;
      return;
    }
    const matched = String(text).slice(idx, idx + linkPhrase.length);
    const before = escapeHtml(String(text).slice(0, idx));
    const after = escapeHtml(String(text).slice(idx + linkPhrase.length));
    el.innerHTML = `${before}<a href="${escapeHtml(anchor)}">${escapeHtml(matched)}</a>${after}`;
  }

  window.fillInlineContactLink = fillInlineContactLink;

  function fillReservaWalkInLead(el, data) {
    if (!el || !data) return;
    const html = data.reservaWalkInLeadHtml;
    const text = data.reservaWalkInLead;
    if (html) {
      el.hidden = false;
      el.innerHTML = html;
      return;
    }
    if (!text) {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    el.hidden = false;
    fillInlineContactLink(el, text, data);
  }

  window.fillReservaWalkInLead = fillReservaWalkInLead;

  function fillGruposBlocks(data) {
    const g = data.gruposBlock;
    if (!g) return;
    document.querySelectorAll("[data-grupos-title]").forEach((el) => {
      if (g.titulo) el.textContent = g.titulo;
    });
    document.querySelectorAll("[data-grupos-text]").forEach((el) => {
      if (g.texto) fillInlineContactLink(el, g.texto, data);
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

    document.querySelectorAll("#reserva-walkin, [data-reserva-walkin]").forEach((el) => {
      fillReservaWalkInLead(el, data);
    });

    fillGruposBlocks(data);
    fillRichFooter(data);
  };

  function fillContactBlock(root, data) {
    const block = data.contactBlock || {};
    const eyebrowEl = root.querySelector("[data-contact-eyebrow]");
    if (eyebrowEl) {
      const key = eyebrowEl.getAttribute("data-contact-eyebrow-key") || "eyebrow";
      const text = block[key] || block.eyebrow;
      if (text) eyebrowEl.textContent = text;
    }
    const titleEl = root.querySelector("[data-contact-title]");
    if (titleEl) {
      if (block.title) {
        titleEl.textContent = block.title;
        titleEl.hidden = false;
      } else {
        titleEl.hidden = true;
      }
    }
    const leadEl = root.querySelector("[data-contact-lead]");
    if (leadEl) {
      if (block.lead) {
        leadEl.textContent = block.lead;
        leadEl.hidden = false;
      } else {
        leadEl.hidden = true;
      }
    }
    const phoneEl = root.querySelector("[data-contact-phone]");
    if (phoneEl) {
      if (data.phoneTel) {
        phoneEl.hidden = false;
        phoneEl.href = data.phoneTel;
        phoneEl.textContent = data.phoneDisplay || phoneEl.textContent;
      } else {
        phoneEl.hidden = true;
      }
    }
    const emailEl = root.querySelector("[data-contact-email]");
    if (emailEl) {
      if (data.email) {
        emailEl.hidden = false;
        emailEl.href = `mailto:${data.email}`;
        emailEl.textContent = data.email;
      } else {
        emailEl.hidden = true;
      }
    }

    const visual = block.visual || {};
    const visualWrap = root.querySelector("[data-contact-visual]");
    const visualImg = root.querySelector("[data-contact-visual-img]");
    const visualQuote = root.querySelector("[data-contact-visual-quote]");
    const visualLink = root.querySelector("[data-contact-visual-link]");
    const imgSrc = visual.image || (data.images && data.images.interior) || (data.images && data.images.barra);
    const quote = visual.quote || visual.tagline;
    if (visualWrap && visualImg && imgSrc) {
      visualImg.src = imgSrc;
      visualImg.alt = visual.alt || `${data.brand || "Local"} - ambiente`;
      visualWrap.hidden = false;
      if (visualLink && (visual.link || visual.href)) {
        visualLink.href = visual.link || visual.href;
      }
    } else if (visualWrap) {
      visualWrap.hidden = true;
    }
    if (visualQuote && quote) {
      visualQuote.textContent = quote;
      visualQuote.hidden = false;
    } else if (visualQuote) {
      visualQuote.hidden = true;
    }
  }

  function fillFooterHours(listEl, data) {
    if (!listEl) return;
    const filas = data.horarioReferencia?.filas;
    if (!filas?.length) {
      listEl.closest(".site-footer__col")?.setAttribute("hidden", "");
      return;
    }
    listEl.replaceChildren();
    filas.forEach(([dia, horario]) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="site-footer__hours-day">${dia}</span> ${horario}`;
      listEl.appendChild(li);
    });
  }

  function fillFooterNav(listEl) {
    if (!listEl) return;
    const menu = document.querySelector(".site-nav-menu");
    listEl.replaceChildren();
    if (!menu) return;
    menu.querySelectorAll("a[href^='#']").forEach((a) => {
      const li = document.createElement("li");
      const link = a.cloneNode(true);
      li.appendChild(link);
      listEl.appendChild(li);
    });
  }

  function fillRichFooter(data) {
    const footer = document.querySelector(".site-footer--rich");
    if (!footer || !data) return;

    const brandLink = footer.querySelector("[data-footer-brand]");
    if (brandLink) brandLink.textContent = data.brand || "";

    const sectorEl = footer.querySelector("[data-footer-sector]");
    if (sectorEl) {
      const sector = data.footerSector || data.tagline || "";
      sectorEl.textContent = sector.toUpperCase();
      sectorEl.hidden = !sector;
    }

    const blurbEl = footer.querySelector("[data-footer-blurb]");
    if (blurbEl) {
      const blurb = data.footerBlurb || data.footerTagline || data.propuesta || "";
      blurbEl.textContent = blurb;
      blurbEl.hidden = !blurb;
    }

    const contactEl = footer.querySelector("[data-footer-contact]");
    if (contactEl) {
      contactEl.replaceChildren();
      if (data.address) {
        const p = document.createElement("p");
        p.textContent = data.address;
        contactEl.appendChild(p);
      }
      if (data.phoneTel) {
        const a = document.createElement("a");
        a.href = data.phoneTel;
        a.textContent = data.phoneDisplay || data.phoneTel.replace(/^tel:/, "");
        contactEl.appendChild(a);
      }
      if (data.email || data.ownerEmail) {
        const mail = document.createElement("a");
        mail.href = `mailto:${data.email || data.ownerEmail}`;
        mail.textContent = data.email || data.ownerEmail;
        contactEl.appendChild(mail);
      }
    }

    fillFooterHours(footer.querySelector("[data-footer-hours]"), data);
    fillFooterNav(footer.querySelector("[data-footer-nav]"));

    const socialUl = footer.querySelector("[data-social-list]");
    if (socialUl) {
      fillSocialList(
        socialUl,
        (data.social || []).filter((s) => s && s.url),
        false
      );
      const wrap = socialUl.closest(".site-footer__social-wrap");
      if (wrap) wrap.hidden = !socialUl.children.length;
    }

    const legalEl = footer.querySelector("[data-footer-legal]");
    if (legalEl) {
      const year = new Date().getFullYear();
      legalEl.textContent = ` ${year} ${data.brand || "Local"}. Informacion de referencia - demo.`;
    }
  }

  function initMobileContactBar(data) {
    const bar = document.querySelector("[data-mobile-contact]");
    if (!bar) return;
    const tel = bar.querySelector("[data-mobile-tel]");
    const dir = bar.querySelector("[data-mobile-directions]");
    if (tel && data.phoneTel) tel.href = data.phoneTel;
    if (dir && data.map?.directionsUrl) {
      dir.href = data.map.directionsUrl;
      dir.target = "_blank";
      dir.rel = "noopener noreferrer";
    }
  }

  window.initSiteCierre = function initSiteCierre(data, rootId) {
    const root = document.getElementById(rootId || "site-cierre-root");
    if (!root || !data) return;

    fillContactBlock(root, data);
    initMobileContactBar(data);

    const mapFrame = root.querySelector(".site-map-iframe");
    const viewLink = root.querySelector("[data-map-view]");
    const dirLink = root.querySelector("[data-map-directions]");
    if (data.map && mapFrame) mapFrame.src = mapEmbedSrc(data.map);
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
            "Demo: el formulario enviara un correo al email que indique el propietario al publicar la web.";
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

  /** Movil: menu hamburguesa; escritorio: barra horizontal (responsive). */
  function initMobileNav(nav) {
    if (!nav || nav.dataset.mobileNavInit === "1") return;
    const inner = nav.querySelector(".site-nav-inner, .nav-c__inner");
    const menu = nav.querySelector(".site-nav-menu");
    if (!inner || !menu) return;
    nav.dataset.mobileNavInit = "1";

    if (!menu.id) menu.id = "primary-nav-menu";

    let toggle = nav.querySelector(".site-nav-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "site-nav-toggle";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", menu.id);
      toggle.innerHTML =
        '<span class="site-nav-toggle__bars" aria-hidden="true"></span>' +
        '<span class="site-nav-toggle__label">Menu</span>';
      const tel = inner.querySelector(".site-nav-tel, .nav-c__tel");
      if (tel) inner.insertBefore(toggle, tel);
      else inner.appendChild(toggle);
    }

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(!nav.classList.contains("is-open"));
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      if (!nav.contains(e.target)) setOpen(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    const mq = window.matchMedia("(min-width: 769px)");
    const onWide = () => setOpen(false);
    if (mq.addEventListener) mq.addEventListener("change", onWide);
    else mq.addListener(onWide);
  }

  window.initMobileNav = initMobileNav;

  function bootMobileNav() {
    document.querySelectorAll(".main-nav, header.nav-c, #nav-c").forEach(initMobileNav);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootMobileNav);
  } else {
    bootMobileNav();
  }
})();
