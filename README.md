# MuraskarAmit.github.io

The website of the Make Me Smarter Android app, served by GitHub Pages at
https://makemesmarter.in (named in `CNAME`; https://muraskaramit.github.io
redirects there). The domain is registered at Hostinger, whose DNS points
`@` at GitHub's four Pages addresses and `www` at muraskaramit.github.io.

- `privacy-policy.md`: the app's privacy policy, an exact copy of
  `docs/privacy-policy.md` in the app's own (private) repository. Change it
  there first, then copy it here; the app shows the same text, and each web
  deploy brings the game's own copy (`play/assets/assets/legal/privacy-policy.md`).
  Before pushing, check that all of them are the same, byte for byte.
- `delete-data.md`: how to delete your data, written by hand; keep it in
  line with the policy's "Deleting your data".
- `ads.txt`: the same line, for Google AdSense (ads on the website). The
  `google-adsense-account` meta tag on every page (`_layouts/default.html`)
  proves the site is the account's.
- `app-ads.txt`: the line from AdMob (Apps > View all apps > app-ads.txt).
  It must stay at the root of this site, and the site must be the
  "Website" on the app's Google Play store listing.
- `index.html`: the home page, the same for every visitor: what the site
  is, the games, how it works, Vedic maths and a way into the game
  (`play/`). It never redirects: the app repository's `docs/web.md`, "The
  home page".
- `_layouts/default.html`: every page's header, footer and styles. The
  home page's `main` is full-width sections (class `home`), every other
  page's a card (class `page`). Colours follow the app's theme, in light
  and dark.
- `fonts/`: Fredoka, the headings' and the wordmark's font, as in the app
  (SIL Open Font License, `fonts/OFL.txt`). `fredoka.woff2` is
  google/fonts' `ofl/fredoka/Fredoka[wdth,wght].ttf` cut down with
  fontTools to width 100, weights 400–700 and Latin plus a few maths signs,
  its licence kept inside; the commands are in the app repository's
  `docs/web.md`, "The home page".
- For search engines (the app repository's `docs/web.md`, "SEO"):
  - `index.html`, `games/`, `vedic-maths/`, `geography/`, `how-it-helps.md`
    and `sitemap.xml` are written by the app repository's
    `tool/web/site_pages.dart` from the game's own content (the Vedic maths
    pages from its `tool/web/vedic_maths.dart`, the World geography pages
    from its `tool/web/geo_pages.dart` with the data build's country maps):
    run it there, never edit them here;
  - `about.md` and `robots.txt` are written by hand (`robots.txt` keeps
    crawlers out of `/geo-data/`);
  - `og-image.png` (link previews), `favicon.png`, `favicon.ico` (16, 32
    and 48 px, made from the next) and `apple-touch-icon.png` (192 px, also
    the large icon for Google Search);
  - `_layouts/default.html` holds every page's title, description,
    canonical address, preview tags and structured data, and the styles of
    World geography's maps. Their `.geo-map` rule keeps `max-width: 100%`
    and no width, so a map is never shown larger than it is drawn (India's
    boundary rules); `site_pages.dart` stops with exit code 65 otherwise.
- `play/`: the game itself, the app's web build (https://makemesmarter.in/play/).
  It's copied here from the app repository by the steps in its `docs/web.md`;
  never edit it by hand.
- `/geo-data/` (World geography's country maps) isn't in this repository:
  GitHub Pages serves it from the separate public repository
  `MuraskarAmit/geo-data`. Never add a `geo-data/` folder here.
