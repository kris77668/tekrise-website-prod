/* ============================================================
   SITE CONFIG — single source of truth for the public domain.

   When you move off the temporary tekrise.pages.dev domain (or
   change the contact inbox), edit the TWO values below ONLY.
   Every page reads from here, so nothing else needs touching.
   ============================================================ */
(function () {
  // ─── EDIT HERE ──────────────────────────────────────────────
  var SITE_DOMAIN   = 'tekrise.pages.dev';     // no protocol, no trailing slash
  var CONTACT_EMAIL = 'tekris678@gmail.com';    // a real inbox you monitor
  // ────────────────────────────────────────────────────────────

  window.TEKRISE_SITE = { domain: SITE_DOMAIN, email: CONTACT_EMAIL };

  function fill() {
    // <span data-site-domain></span>  →  tekrise.pages.dev
    document.querySelectorAll('[data-site-domain]').forEach(function (el) {
      el.textContent = SITE_DOMAIN;
    });
    // <a data-site-email></a>  →  hello@tekrise.app (+ mailto: on links)
    document.querySelectorAll('[data-site-email]').forEach(function (el) {
      el.textContent = CONTACT_EMAIL;
      if (el.tagName === 'A') el.setAttribute('href', 'mailto:' + CONTACT_EMAIL);
    });
    // <span data-site-year></span>  →  current year (footer copyright)
    document.querySelectorAll('[data-site-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fill);
  } else {
    fill();
  }
})();
