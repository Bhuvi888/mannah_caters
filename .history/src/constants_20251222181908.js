import Silver from "./components/silver-package";
import Gold from "./components/gold-package";
import Platinum from "./components/platinum-package";
export const CATEGORIES = [
  { id: "starters", label: "Starters", title: "Starters" },
  { id: "mains", label: "Main Course", title: "Biriyani & Rice" },
  { id: "desserts", label: "Desserts", title: "Desserts" },
  { id: "live", label: "Live Counters", title: "Live Counters" },
];


export const MENU_ITEMS = [
  // 🔥 STARTERS
  {
    id: "s1",
    name: "Chicken 65",
    description: "Crispy deep-fried chicken tossed in aromatic spices.",
    image: "/images/chicken65.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s2",
    name: "Chicken Kebab",
    description: "Juicy grilled chicken kebabs with traditional seasoning.",
    image: "/images/chicken-kebab.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s3",
    name: "Chilli Chicken",
    description: "Indo-Chinese style spicy chicken with peppers and sauces.",
    image: "/images/chilli-chicken.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s4",
    name: "Fish Fry (Seer Fish / Salmon)",
    description: "Shallow-fried premium fish with coastal spices.",
    image: "/images/fish-fry.jpg",
    isVeg: false,
    category: "starters",
  },

  // 🍚 MAIN COURSE – BIRIYANI & RICE
  {
    id: "m1",
    name: "Chicken Biriyani",
    description: "Classic dum-style biriyani with aromatic basmati rice.",
    image: "/images/chicken-biryani.jpg",
    isVeg: false,
    category: "mains",
  },
  {
    id: "m2",
    name: "Mutton Biriyani",
    description: "Slow-cooked mutton biriyani with rich spices.",
    image: "/images/mutton-biryani.jpg",
    isVeg: false,
    category: "mains",
  },
  {
    id: "m3",
    name: "Beef Biriyani",
    description: "Flavorful beef biriyani cooked in traditional style.",
    image: "/images/beef-biryani.jpg",
    isVeg: false,
    category: "mains",
  },
  {
    id: "m4",
    name: "Ghee Rice",
    description: "Fragrant rice cooked with ghee and whole spices.",
    image: "/images/ghee-rice.jpg",
    isVeg: true,
    category: "mains",
  },
  {
    id: "m5",
    name: "Veg Birinji",
    description: "Traditional vegetable birinji with coconut aroma.",
    image: "/images/veg-birinji.jpg",
    isVeg: true,
    category: "mains",
  },
  {
    id: "m6",
    name: "Mushroom Birinji",
    description: "Rich mushroom birinji cooked with mild spices.",
    image: "/images/mushroom-birinji.jpg",
    isVeg: true,
    category: "mains",
  },

  // 🍨 DESSERTS
  {
    id: "d1",
    name: "Pineapple Kesari",
    description: "Classic South Indian kesari infused with pineapple.",
    image: "/images/pineapple-kesari.jpg",
    isVeg: true,
    category: "desserts",
  },

  // 🍦 LIVE COUNTERS
  {
    id: "l1",
    name: "Live Salad Counter",
    description: "Freshly prepared salads with multiple dressings.",
    image: "/images/salad-counter.jpg",
    isVeg: true,
    category: "live",
  },
  {
    id: "l2",
    name: "Ice Cream Counter",
    description: "Multiple ice cream flavors served live.",
    image: "/images/ice-cream.jpg",
    isVeg: true,
    category: "live",
  },
  {
    id: "l3",
    name: "Fresh Fruit Counter",
    description: "Seasonal fruits served fresh.",
    image: "/images/fruits.jpg",
    isVeg: true,
    category: "live",
  },
];


export const PACKAGES = [
  {
    id: "silver",
    name: "Silver Package",
    description: "Ideally suited for intimate gatherings and family functions.",
    icon: Silver,

    // 👇 THIS IS THE KEY
    items: ["1", "3", "4", "6"],

    features: [
      { label: "Starters", value: "2 Items" },
      { label: "Mains", value: "3 Items" },
      { label: "Staples", value: "Rice & Breads" },
      { label: "Dessert", value: "1 Premium" },
    ],
  },

  {
    id: "gold",
    name: "Gold Package",
    description:
      "Sophisticated blend of classic traditions and modern culinary innovation.",
    icon: Gold,
    isPopular: true,

    items: ["1", "2", "3", "4", "5", "6"],

    features: [
      { label: "Starters", value: "4 Items" },
      { label: "Mains", value: "5 Items" },
      { label: "Specialty", value: "Biryani" },
      { label: "Drinks", value: "Welcome" },
      { label: "Dessert", value: "2 Items" },
    ],
  },

  {
    id: "platinum",
    name: "Platinum Package",
    description:
      "The ultimate luxury experience with live stations and white glove service.",
    icon: Platinum,

    items: ["1", "2", "3", "4", "5", "6"],

    features: [
      { label: "Live", value: "Counters" },
      { label: "Spread", value: "Unlimited" },
      { label: "Service", value: "Premium" },
      { label: "Styling", value: "Decor" },
    ],
  },
];
