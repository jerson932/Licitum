/* =====================================================================
   LICITUM — Lógica del sitio. No es necesario editar este archivo.
   Todo el contenido se cambia en js/config.js
   ===================================================================== */
(function () {
  "use strict";
  var S = window.SITIO;
  if (!S) { console.error("No se encontró js/config.js"); return; }

  /* ---------- Iconos (SVG en línea) ---------- */
  var I = {
    notaria:  '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-4"/>',
    empresa:  '<rect x="4" y="3" width="10" height="18" rx="1"/><path d="M14 9h5a1 1 0 0 1 1 1v11h-6"/><path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1M17 13h0M17 17h0"/>',
    balanza:  '<path d="M12 3v18M7 21h10M5 7h14"/><path d="m5 7-3 7a3 3 0 0 0 6 0z"/><path d="m19 7-3 7a3 3 0 0 0 6 0z"/><circle cx="12" cy="4.5" r="1.2"/>',
    familia:  '<circle cx="8" cy="7" r="3"/><circle cx="17" cy="8" r="2.4"/><path d="M2.5 20a5.5 5.5 0 0 1 11 0"/><path d="M14 20a3.5 3.5 0 0 1 7.5-1"/>',
    contrato: '<path d="M16 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M8 8h6M8 12h8M8 16h3"/><path d="m14 17 1.5 1.5L19 15"/>',
    casa:     '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    trabajo:  '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    escudo:   '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    documento:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    herencia: '<path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-5a3 3 0 0 1 6 0v5"/><path d="M12 8v3"/>',
    telefono: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    correo:   '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    ubicacion:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    reloj:    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    usuario:  '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    check:    '<path d="m5 12 5 5L20 7"/>',
    whatsapp: 'WA',
    facebook: '<path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H6v4h2v7h4v-7h2.5l.5-4h-3V7.5a1 1 0 0 1 1-1H15z"/>',
    instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    tiktok:   '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3a5 5 0 0 0 5 5"/>'
  };
  var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.08c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .4-.06.62.47.24.56.79 1.92.86 2.06.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.34z"/></svg>';

  function icon(name) {
    if (name === "whatsapp") return WA_SVG;
    var p = I[name] || I.documento;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>";
  }
  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S);
  }
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }
  function all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  var C = S.contacto;
  var tel = function (t) { return "tel:" + String(t).replace(/[^\d+]/g, ""); };
  var waLink = function (msg) { return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg || C.mensajeWhatsapp); };

  /* ---------- Colores y SEO ---------- */
  var root = document.documentElement.style;
  if (S.general.colorPrincipal) root.setProperty("--green", S.general.colorPrincipal);
  if (S.general.colorAcento) root.setProperty("--gold", S.general.colorAcento);
  document.title = S.general.tituloPestana;
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", S.general.descripcionSEO);

  /* ---------- Textos e imágenes simples ---------- */
  all("[data-text]").forEach(function (el) { el.textContent = get(el.dataset.text) || ""; });
  all("[data-html]").forEach(function (el) { el.innerHTML = get(el.dataset.html) || ""; });
  all("[data-src]").forEach(function (el) { el.src = get(el.dataset.src) || ""; });
  all("[data-icon]").forEach(function (el) { el.innerHTML = icon(el.dataset.icon); });
  $("heroBg").style.backgroundImage = "url('" + S.portada.imagenFondo + "')";

  all(".js-tel").forEach(function (a) { a.href = tel(C.telefono); });
  all(".js-tel2").forEach(function (a) { a.href = tel(C.telefonoOficina); });
  all(".js-mail").forEach(function (a) { a.href = "mailto:" + C.email; });
  all(".js-wa").forEach(function (a) { a.href = waLink(); });
  $("map").src = C.mapa;
  $("year").textContent = new Date().getFullYear();

  /* ---------- Menú ---------- */
  var navHTML = S.menu.map(function (m) {
    return '<li><a href="' + esc(m.enlace) + '">' + esc(m.texto) + "</a></li>";
  }).join("");
  $("navList").innerHTML = navHTML;
  $("footerNav").innerHTML = navHTML;

  /* ---------- Cifras ---------- */
  $("stats").innerHTML = S.cifras.map(function (c) {
    return '<div class="stat reveal"><strong>' + esc(c.numero) + "</strong><span>" + esc(c.texto) + "</span></div>";
  }).join("");

  /* ---------- Nosotros ---------- */
  $("aboutText").innerHTML = S.nosotros.parrafos.map(function (p) { return '<p class="muted">' + esc(p) + "</p>"; }).join("");
  $("aboutChecks").innerHTML = S.nosotros.puntos.map(function (p) {
    return "<li>" + icon("check") + "<span>" + esc(p) + "</span></li>";
  }).join("");

  /* ---------- Servicios ---------- */
  $("services").innerHTML = S.servicios.lista.map(function (s) {
    return '<article class="service reveal"><div class="service__icon">' + icon(s.icono) + "</div>" +
      "<h3>" + esc(s.titulo) + "</h3><p>" + esc(s.texto) + "</p>" +
      '<a href="' + waLink("Hola Lic. Barreda, quisiera información sobre: " + s.titulo) + '" target="_blank" rel="noopener" class="service__link">Consultar <span aria-hidden="true">→</span></a></article>';
  }).join("");
  $("footerServices").innerHTML = S.servicios.lista.slice(0, 6).map(function (s) {
    return '<li><a href="#servicios">' + esc(s.titulo) + "</a></li>";
  }).join("");

  /* ---------- Proceso ---------- */
  $("steps").innerHTML = S.proceso.pasos.map(function (p, i) {
    return '<li class="step reveal"><span class="step__num">' + String(i + 1).padStart(2, "0") + "</span><h3>" + esc(p.titulo) + "</h3><p>" + esc(p.texto) + "</p></li>";
  }).join("");

  /* ---------- Equipo ---------- */
  var team = S.equipo.miembros;
  $("team").classList.toggle("team__grid--single", team.length === 1);
  $("team").innerHTML = team.map(function (m) {
    return '<article class="member reveal"><div class="member__photo"><img src="' + esc(m.foto) + '" alt="' + esc(m.nombre) + '"></div>' +
      '<div class="member__body"><h3>' + esc(m.nombre) + '</h3><p class="member__role">' + esc(m.cargo) + "</p>" +
      (m.descripcion ? '<p class="muted">' + esc(m.descripcion) + "</p>" : "") + "</div></article>";
  }).join("");

  /* ---------- Testimonios ---------- */
  var tl = S.testimonios.lista || [];
  if (tl.length) {
    $("testimonios").hidden = false;
    $("testimonialList").innerHTML = tl.map(function (t) {
      return '<figure class="testimonial reveal"><span class="testimonial__mark">“</span><blockquote>' + esc(t.texto) +
        "</blockquote><figcaption><strong>" + esc(t.nombre) + "</strong><small>" + esc(t.detalle || "Cliente") + "</small></figcaption></figure>";
    }).join("");
  }

  /* ---------- Preguntas ---------- */
  $("faq").innerHTML = S.preguntas.lista.map(function (q) {
    return '<details class="faq__item reveal"><summary>' + esc(q.pregunta) + '<span class="faq__plus" aria-hidden="true"></span></summary><p>' + esc(q.respuesta) + "</p></details>";
  }).join("");

  /* ---------- Redes ---------- */
  var redes = Object.keys(S.redes || {}).filter(function (k) { return S.redes[k]; });
  $("social").innerHTML = redes.map(function (k) {
    return '<a href="' + esc(S.redes[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' + icon(k) + "</a>";
  }).join("") + '<a href="' + waLink() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + WA_SVG + "</a>";

  /* ---------- Formulario ---------- */
  $("formSubject").innerHTML = S.formulario.asuntos.map(function (a) { return "<option>" + esc(a) + "</option>"; }).join("");
  var form = $("contactForm");
  function buildMessage() {
    var d = new FormData(form);
    var nombre = (d.get("nombre") || "").trim(), telf = (d.get("telefono") || "").trim(), msg = (d.get("mensaje") || "").trim();
    if (!nombre || !telf || !msg) { $("formError").textContent = "Por favor complete nombre, teléfono y mensaje."; return null; }
    $("formError").textContent = "";
    return "Hola, mi nombre es " + nombre + ".\n" +
      "Teléfono: " + telf + "\n" +
      (d.get("correo") ? "Correo: " + d.get("correo") + "\n" : "") +
      "Asunto: " + d.get("asunto") + "\n\n" + msg;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var m = buildMessage(); if (m) window.open(waLink(m), "_blank");
  });
  $("formMail").addEventListener("click", function () {
    var m = buildMessage(); if (!m) return;
    var d = new FormData(form);
    location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Consulta: " + d.get("asunto")) + "&body=" + encodeURIComponent(m);
  });

  /* ---------- Menú móvil ---------- */
  var burger = $("burger"), nav = $("nav");
  function closeNav() { nav.classList.remove("is-open"); burger.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); document.body.classList.remove("no-scroll"); }
  burger.addEventListener("click", function () {
    var open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open); burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open)); document.body.classList.toggle("no-scroll", open);
  });
  all(".nav a").forEach(function (a) { a.addEventListener("click", closeNav); });

  /* ---------- Encabezado al hacer scroll + enlace activo ---------- */
  var header = $("header");
  var sections = S.menu.map(function (m) { return document.querySelector(m.enlace); }).filter(Boolean);
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
    var pos = window.scrollY + 120, current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
    all("#navList a").forEach(function (a) { a.classList.toggle("is-active", current && a.getAttribute("href") === "#" + current.id); });
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Animaciones de aparición ---------- */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    all(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    all(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
