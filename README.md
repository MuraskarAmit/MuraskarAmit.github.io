# MuraskarAmit.github.io

The website of the Make Me Smarter Android app, served by GitHub Pages at
https://makemesmarter.in (named in `CNAME`; https://muraskaramit.github.io
redirects there). The domain is registered at Hostinger, whose DNS points
`@` at GitHub's four Pages addresses and `www` at muraskaramit.github.io.

- `privacy-policy.md`: the app's privacy policy, an exact copy of
  `docs/privacy-policy.md` in the app's own (private) repository. Change it
  there first, then copy it here; the app shows the same text.
- `app-ads.txt`: the line from AdMob (Apps > View all apps > app-ads.txt).
  It must stay at the root of this site, and the site must be the
  "Website" on the app's Google Play store listing.
- `index.html`: the home page, which sends visitors straight on to the game
  (`play/`). `_layouts/default.html` is the layout of the other pages (the
  privacy policy).
- `play/`: the game itself, the app's web build (https://makemesmarter.in/play/).
  It's copied here from the app repository by the steps in its `docs/web.md`;
  never edit it by hand.
