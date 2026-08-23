# Media drop-in guide

Drop real Dharane Sekuwa photo/video files at these exact paths and they
appear on the site automatically — no code changes needed. Until a file
exists at a path, that spot on the site shows a labeled placeholder
instead of a fake photo.

The full list of expected files/labels lives in `src/data/media.ts`.

```
media/
  hero/
    counter-bg.jpg   — wide grill/skewer shot behind the hero ticket card.
  skewer/
    skewer.mp4        — REQUIRED for the signature interaction. Close-up
                         video of a skewer of sekuwa, pieces separating.
                         Scroll position scrubs this video's playback time.
    poster.jpg         — optional poster frame shown before the video loads.
  food/
    chicken.jpg
    buff.jpg
    mutton.jpg
    special.jpg
    fish.jpg           — one photo per menu item, roughly 5:4 crop.
  fire/
    grill-bg.jpg        — grill/charcoal background for "Made Over Fire".
    char.jpg
    smoke.jpg
    flavour.jpg         — three close-ups for the CHAR / SMOKE / FLAVOUR cards.
  story/
    dharan.jpg
    lalitpur.jpg
  people/
    chef.jpg
    hands.jpg
    serving.jpg
  restaurant/
    gallery-01.jpg ... gallery-05.jpg — restaurant atmosphere shots.
  hunger/
    craving.jpg          — close-up food shot behind "How Hungry Are You?"
```

Video: MP4 (H.264), a few seconds is enough — the scrub reads its
`duration` and maps scroll progress to `currentTime`. Keep it well
compressed; it loads early in the page.

Images: JPG, reasonably compressed (display resolution is enough, no need
for camera-original size).
