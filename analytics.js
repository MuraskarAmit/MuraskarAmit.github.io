/*
 * Google Analytics 4 for makemesmarter.in (since 22 November 2026).
 *
 * Every page loads this one file, before anything else from Google: the
 * Jekyll pages from _layouts/default.html, the game (/play/) from the app
 * repository's web/index.html. What it collects is in the privacy policy,
 * "Analytics on the website"; how it works, and the Analytics settings it
 * relies on, in the app repository's docs/web.md, "Analytics". Change them
 * together.
 */
(function () {
  'use strict';

  var ID = 'G-B16HXNP4M8';

  // Only on the live site: never on a local copy, a preview or a proxy.
  if (location.hostname !== 'makemesmarter.in') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // Consent Mode. In the EEA, the UK and Switzerland, nothing is stored on
  // the visitor's device until they agree in Google's consent message (set
  // up in AdSense's Privacy & messaging, which updates these); until then
  // Analytics counts the visit without cookies. Elsewhere Analytics may
  // store its cookies.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    region: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE',
      'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO',
      'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH'],
    wait_for_update: 500
  });
  gtag('consent', 'default', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  });
  gtag('set', 'ads_data_redaction', true);

  // The game's page. Its address changes with every screen
  // (/play/#/quiz/add.2d2d.c1), so it reports each screen as a page itself,
  // with the part after "#/" as a path (/play/quiz/add.2d2d.c1): Analytics'
  // page reports then list the games and levels. Google's own listener (the
  // data stream's "Page changes based on browser history events") ignores
  // changes after "#", so it doesn't count them again (checked 2026-11-22).
  // If the game ever gets addresses without "#", turn that setting off.
  var game = /^\/play\/(index\.html)?$/.test(location.pathname);

  // The Google tag sets itself up from its own settings before it reads
  // the config below, so only a "set" before "js" keeps it from sending the
  // game page's first view as well (checked 2026-11-22: send_page_view in
  // the config alone still sent it).
  if (game) gtag('set', 'send_page_view', false);
  gtag('js', new Date());
  gtag('config', ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: !game
  });

  if (game) {
    var sent = null;
    var timer = 0;
    var address = function () {
      // Without the route's own query (a challenge code, say).
      var route = location.hash.replace(/^#\/?/, '').split('?')[0];
      return location.origin + '/play/' + route;
    };
    var send = function () {
      timer = 0;
      var page = address();
      if (page === sent) return;
      // The first view keeps the address's query, for campaign links
      // (utm_source…); the later ones name the screen before as referrer.
      var params = sent === null
        ? { page_location: page + location.search }
        : { page_location: page, page_referrer: sent };
      gtag('event', 'page_view', params);
      sent = page;
    };
    // A screen replaced at once (a redirect) isn't counted.
    var changed = function () {
      clearTimeout(timer);
      timer = setTimeout(send, 500);
    };
    ['pushState', 'replaceState'].forEach(function (name) {
      var original = history[name];
      history[name] = function () {
        var result = original.apply(this, arguments);
        changed();
        return result;
      };
    });
    window.addEventListener('popstate', changed);
    window.addEventListener('hashchange', changed);
    send();
  }

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(script);
})();
