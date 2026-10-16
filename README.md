# MuraskarAmit.github.io

The website of the Make Me Smarter Android app, served by GitHub Pages at
https://makemesmarter.in (named in `CNAME`; https://muraskaramit.github.io
redirects there). The domain is registered at Hostinger, whose DNS points
`@` at GitHub's four Pages addresses and `www` at muraskaramit.github.io.

- `privacy-policy.md`: the app's privacy policy, an exact copy of
  `docs/privacy-policy.md` in the app's own (private) repository. Change it
  there first, then copy it here; the app shows the same text.
- `ads.txt`: the same line, for Google AdSense (ads on the website). The
  `google-adsense-account` meta tag on every page (`_layouts/default.html`)
  proves the site is the account's.
- `app-ads.txt`: the line from AdMob (Apps > View all apps > app-ads.txt).
  It must stay at the root of this site, and the site must be the
  "Website" on the app's Google Play store listing.
- `index.html`: the home page, for new visitors and search engines. A
  browser that has opened the game goes straight on to it (`players_skip`
  in `_layouts/default.html`, the layout of every page).
- For search engines (the app repository's `docs/web.md`, "SEO"):
  - `index.html`, `games/`, `vedic-maths/`, `how-it-helps.md` and
    `sitemap.xml` are written by the app repository's
    `tool/web/site_pages.dart` from the game's own content (the Vedic maths
    pages from its `tool/web/vedic_maths.dart`): run it there, never edit
    them here;
  - `about.md` and `robots.txt` are written by hand;
  - `og-image.png` (link previews), `favicon.png`, `favicon.ico` (16, 32
    and 48 px, made from the next) and `apple-touch-icon.png` (192 px, also
    the large icon for Google Search);
  - `_layouts/default.html` holds every page's title, description,
    canonical address, preview tags and structured data.
- `play/`: the game itself, the app's web build (https://makemesmarter.in/play/).
  It's copied here from the app repository by the steps in its `docs/web.md`;
  never edit it by hand.
