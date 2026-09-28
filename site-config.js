/* ============================================================
   SITE CONFIG — single source of truth for the public domain.

   tekrise.app is the permanent domain. To change it (or the contact
   inbox), edit the TWO values below ONLY.
   Every page reads from here, so nothing else needs touching.
   ============================================================ */
(function () {
  var SITE_DOMAIN   = 'tekrise.app';     // no protocol, no trailing slash
  var CONTACT_EMAIL = 'hello@tekrise.app';
  // Direct APK download (sideload path for regions without Google Play, e.g.
  // mainland China). Hosted on a public Cloudflare R2 bucket, NOT GitHub — the
  // repo name must never end up in a public-facing URL. The only place this
  // should ever be written; get.html and index.html both read it from here.
  var APK_URL = 'https://dl.tekrise.app/tekrise-tennis.apk';

  // Supabase public config. Both values are PUBLIC by design (the anon key is
  // the same one that ships in the mobile app; data is protected by RLS, not by
  // hiding this key). Used only by reset-password.html. If you rotate the anon
  // key or move projects, update these to match the app's .env SUPABASE_URL /
  // SUPABASE_ANON_KEY.
  var SUPABASE_URL      = 'https://pfmxuujzffdlcujcxoim.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_1upD8FOxb7b6VEnDyF4mtQ_71f38mlN';

  window.TEKRISE_SITE = {
    domain: SITE_DOMAIN,
    email: CONTACT_EMAIL,
    apkUrl: APK_URL,
    supabaseUrl: SUPABASE_URL,
    supabaseAnonKey: SUPABASE_ANON_KEY,
  };

  function fill() {
    // <span data-site-domain></span>  →  tekrise.app
    document.querySelectorAll('[data-site-domain]').forEach(function (el) {
      el.textContent = SITE_DOMAIN;
    });
    // <a data-site-email></a>  →  hello@tekrise.app (+ mailto: on links)
    document.querySelectorAll('[data-site-email]').forEach(function (el) {
      el.textContent = CONTACT_EMAIL;
      if (el.tagName === 'A') el.setAttribute('href', 'mailto:' + CONTACT_EMAIL);
    });
    // <a data-apk-url></a>  →  href becomes the direct APK download URL
    document.querySelectorAll('[data-apk-url]').forEach(function (el) {
      el.setAttribute('href', APK_URL);
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
