// DUMMY DATA — replace with real Dharane Sekuwa menu when available.
// `image` points into /public/media/food/ — drop real photos there.

export interface MenuItem {
  id: string;
  index: string; // "01"
  category: string; // "CHICKEN"
  name: string; // "SEKUWA"
  description: string;
  price: number; // NPR, dummy
  spicy: 0 | 1 | 2 | 3;
  available: boolean;
  bestSeller?: boolean;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "chicken-sekuwa",
    index: "01",
    category: "CHICKEN",
    name: "SEKUWA",
    description:
      "Tender chicken pieces marinated in traditional spices and grilled over charcoal to perfection.",
    price: 380,
    spicy: 2,
    available: true,
    bestSeller: true,
    image: "/media/food/chicken.jpg",
  },
  {
    id: "buff-sekuwa",
    index: "02",
    category: "BUFF",
    name: "SEKUWA",
    description:
      "Slow-marinated overnight, skewered thick, charred hard on the outside and left pink at the core.",
    price: 340,
    spicy: 2,
    available: true,
    image: "/media/food/buff.jpg",
  },
  {
    id: "mutton-sekuwa",
    index: "03",
    category: "MUTTON",
    name: "SEKUWA",
    description:
      "Bone-in cuts, heavy on ginger and garlic, grilled slow until the fat renders into the coal.",
    price: 520,
    spicy: 1,
    available: true,
    image: "/media/food/mutton.jpg",
  },
  {
    id: "special-sekuwa",
    index: "04",
    category: "SPECIAL",
    name: "SEKUWA",
    description:
      "The house platter — a mix of everything off the grill tonight, served on sizzling charcoal.",
    price: 780,
    spicy: 3,
    available: true,
    image: "/media/food/special.jpg",
  },
  {
    id: "fish-sekuwa",
    index: "05",
    category: "FISH",
    name: "SEKUWA",
    description:
      "Whole river fish, stuffed with green chilli and herbs, wrapped and grilled until the skin cracks.",
    price: 460,
    spicy: 1,
    available: false,
    image: "/media/food/fish.jpg",
  },
];
