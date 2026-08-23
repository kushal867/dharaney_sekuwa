// MEDIA REGISTRY — every real photo/video the site expects, in one place.
//
// Drop files at the paths below (under /public/media/...) and they appear
// automatically — no component code needs to change. Until a file exists,
// <MediaSlot> renders an honest placeholder, never a fake stock photo.
//
// Folder structure expected under /public/media/:
//   hero/         counter-bg.jpg          — wide grill/skewer shot behind the hero ticket
//   skewer/       skewer.mp4 (+poster.jpg) — the signature scroll interaction
//   food/         chicken.jpg, buff.jpg, mutton.jpg, special.jpg, fish.jpg
//   fire/         grill-bg.jpg, char.jpg, smoke.jpg, flavour.jpg
//   story/        dharan.jpg, lalitpur.jpg
//   people/       chef.jpg, hands.jpg, serving.jpg
//   restaurant/   gallery-01.jpg ... gallery-05.jpg
//   hunger/       craving.jpg             — background for the "how hungry" section

export type MediaKind = "image" | "video";

export interface MediaAsset {
  src: string;
  kind: MediaKind;
  label: string;
  poster?: string;
}

export const media = {
  heroCounter: {
    src: "/media/hero/counter-bg.jpg",
    kind: "image",
    label: "HERO — GRILL COUNTER",
  } satisfies MediaAsset,

  skewer: {
    src: "/media/skewer/skewer.mp4",
    poster: "/media/skewer/poster.jpg",
    kind: "video",
    label: "SKEWER SCROLL — PIECES SEPARATING",
  } satisfies MediaAsset,

  fireBg: {
    src: "/media/fire/grill-bg.jpg",
    kind: "image",
    label: "MADE OVER FIRE — GRILL",
  } satisfies MediaAsset,
  char: { src: "/media/fire/char.jpg", kind: "image", label: "CHAR" } satisfies MediaAsset,
  smoke: { src: "/media/fire/smoke.jpg", kind: "image", label: "SMOKE" } satisfies MediaAsset,
  flavour: { src: "/media/fire/flavour.jpg", kind: "image", label: "FLAVOUR" } satisfies MediaAsset,

  dharan: { src: "/media/story/dharan.jpg", kind: "image", label: "STORY — DHARAN" } satisfies MediaAsset,
  lalitpur: { src: "/media/story/lalitpur.jpg", kind: "image", label: "STORY — LALITPUR" } satisfies MediaAsset,

  chef: { src: "/media/people/chef.jpg", kind: "image", label: "THE HANDS — CHEF" } satisfies MediaAsset,
  hands: { src: "/media/people/hands.jpg", kind: "image", label: "THE HANDS — PREP" } satisfies MediaAsset,
  serving: { src: "/media/people/serving.jpg", kind: "image", label: "THE HANDS — SERVING" } satisfies MediaAsset,

  hungerBg: { src: "/media/hunger/craving.jpg", kind: "image", label: "HOW HUNGRY — CLOSE-UP" } satisfies MediaAsset,
} as const;

export const galleryMedia: (MediaAsset & { caption: string })[] = [
  { src: "/media/restaurant/gallery-01.jpg", kind: "image", label: "THE GRILL", caption: "the grill" },
  { src: "/media/restaurant/gallery-02.jpg", kind: "image", label: "THE TABLES", caption: "the tables" },
  { src: "/media/restaurant/gallery-03.jpg", kind: "image", label: "THE LIGHTS", caption: "the lights" },
  { src: "/media/restaurant/gallery-04.jpg", kind: "image", label: "THE PEOPLE", caption: "the people" },
  { src: "/media/restaurant/gallery-05.jpg", kind: "image", label: "THE NIGHT", caption: "the night" },
];
