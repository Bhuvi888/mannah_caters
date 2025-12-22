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
    isPopular: true, 
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
    isPopular: true, 
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
    isPopular: true, 
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
    description: "Perfect for small family functions and intimate gatherings.",
    icon: Silver,
    items: ["s1", "s2", "m1", "m4", "d1"],
    features: [
      { label: "Starters", value: "2 Items" },
      { label: "Main Course", value: "2 Rice Items" },
      { label: "Dessert", value: "1 Item" },
    ],
  },

  {
    id: "gold",
    name: "Gold Package",
    description: "Ideal for weddings and medium-sized celebrations.",
    icon: Gold,
    isPopular: true,
    items: ["s1", "s2", "s3", "m1", "m2", "m4", "d1", "l2"],
    features: [
      { label: "Starters", value: "3 Items" },
      { label: "Biriyani", value: "Chicken & Mutton" },
      { label: "Live Counter", value: "Ice Cream" },
      { label: "Dessert", value: "1 Item" },
    ],
  },

  {
    id: "platinum",
    name: "Platinum Package",
    description: "Premium experience with live counters and full spread.",
    icon: Platinum,
    items: ["s1", "s2", "s3", "s4", "m1", "m2", "m3", "m4", "m5", "m6", "d1", "l1", "l2", "l3"],
    features: [
      { label: "Starters", value: "4 Items" },
      { label: "Biriyani", value: "Chicken, Mutton & Beef" },
      { label: "Live Counters", value: "Salad, Ice Cream & Fruits" },
      { label: "Dessert", value: "Included" },
    ],
  },
];
