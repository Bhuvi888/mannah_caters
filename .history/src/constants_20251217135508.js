export const CATEGORIES = [
  { id: "starters", label: "Starters", title: "Appetizers & Starters" },
  { id: "mains", label: "Main Course", title: "Main Course" },
  { id: "breads", label: "Breads & Rice", title: "Breads & Rice" },
  { id: "desserts", label: "Desserts", title: "Desserts" },
  { id: "drinks", label: "Beverages", title: "Beverages" },
];

export const MENU_ITEMS = [
  {
    id: "1",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYjOODN5xGUG0UNT9yhaCcwlzGCKh4PC40mqqZUF9bBVffThlhxEhWV0WjrCQp_nXIg4CIhlKh-p2P1oR08hsGFl7r-Uk28iANpMFwwiwnYDbD3OWw4PPEXIYpLBGotN_M4tLD3KR9K2Ivarxsr-DO24qtKM9_3JEL2jXu-N9SeLtGgXyiX_BnyMNhKfFhBw8yux9POudK0Tn03UlLE03osE-fkTt5E1JPPfido7_seh9ToMdpZSUvibW2hzAL7o12GTnpR7KOKsUj",
    isVeg: true,
    category: "starters",
  },
  {
    id: "2",
    name: "Chicken Malai Tikka",
    description:
      "Creamy, tender chicken chunks marinated in yogurt and spices.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5Kwyih5mdf2xntBTc_iO98h5Bh65zZR51hAeRRB1KoCv2_CD0ISkbTNdfOCNc2bIaM5EliBjt5ObGRp-Qq3SeGr1riw15OpZEvAXaz-WczEyOp10YXt4D9SmoMmBhWUJ4kzrFxxSRNZD5mkUSmZkQ0IjeYwxbzcRWvgPo0h7rcm4DK8TOrMElI6ouaL5Xle79ms-6v-YGupc5Vnebz29Zt2kwrwgumwItdypQQTX-E5chMdXg9WPxCUL4r7FUS_NXN-AMJ0GaiJgu",
    isVeg: false,
    category: "starters",
  },
  {
    id: "3",
    name: "Cocktail Samosa",
    description: "Mini pastry pockets filled with spicy potato mix.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnh2AM5NaIZDNv7PlXfavFkEsuoBog9xaU7eKfxmDcctV_8N3wULpVwesYFIo8AmAZefngLjZB1TmLPqSkmGzrecnZjQqrOUnFYYA_9s9spWZ5c5hidj_laL-2Hl5__X_9HoxKMBYeF0pLZdtMx-w1Xev6_0gZQdxGFQWVdSx3_WL1epH5zjMO38-npowqEsaLFUo5wMS4mJjoouvRMg5wqen5ZnZ9yXLj07dsqQvBjs0NA_leLEMCmiC66SYKbqMZcGm60IkztyFe",
    isVeg: true,
    category: "starters",
  },
  {
    id: "4",
    name: "Butter Chicken",
    description: "Smoked chicken simmered in a velvety tomato gravy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDhqbOfZ46VsUT-SerbSk_-j61FeyI__ZM0z1c3yyYxkb7pSxDg9A-5ykSwMin3fiaruveEOwDXQDYj0YDjyLtSJs6b1tUeTHyB_m6XnbKoOqYmoAvsVgWIpw2fpuuD8jDPiPKlOb6lgnU-wJo38effGwzsV_TqWlo7cl5b7vghInL6kBO8XyjQscfQLbeBGMGTCX_HkwnNwpA9d8e4-kh3qKSYZYBV_Tw8BHi6nVtsJTySVX5O4qZKhTxD78seJk2OkydQLqr8rat",
    isVeg: false,
    category: "mains",
  },
  {
    id: "5",
    name: "Lamb Rogan Josh",
    description: "Aromatic Kashmiri lamb curry with fennel and ginger.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD50zW7olLT_fUiGTivPwbeuOyb-TCb2nzhpva1VJx0FPLvvhxFrSKybWyaj4J4qElZnWVCOgRlAHPNqgfv8zbViLvqkuT8SfT634nGErwzQWur6y8hMhRehZzeZt8tDl_8aWdcRTBQdpoBpMvPHv01fzei7_TG3dFnkzow55rn22Mtr_9b0yBUt0bOeFLWiEq8YERABF1JqTmobO3AYJD4OkOHsaWIogqAniKi182-8HxKq3Ua4m7uDT0xe5dMGept-HsNsgC3mgj",
    isVeg: false,
    category: "mains",
  },
  {
    id: "6",
    name: "Hyderabadi Dum Biryani",
    description: "Basmati rice cooked with aromatic spices and saffron.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4eQbGRsLuHiEugECR8Y8sWNX2Y-ZwpGaKzTs2cATjS7ExYmIYt4C2uzxFF6LgSAbvuUf7m-sL7ZsSROBVEc9vSqQHeJfXRx_EahirQ4jWHH6LibXn1A74YPx17B4FvAq6G9-P_kTPqZYqMbeES4N7GcyL2z1RDe5K2ZFDyrPFgj4Hjt2Y5i9_T5I3kEDRNHpNnhTBXO5MV-Qmbuy5wxbIDuNxIr6l7sSMDGIXagDw6z7xlQEGQFz3yB7cQpoaWNg2darSPhOK-klr",
    isVeg: true,
    category: "breads",
  },
];

export const PACKAGES = [
  {
    id: "silver",
    name: "Silver Package",
    description: "Ideally suited for intimate gatherings and family functions.",
    icon: "emoji_events",
    features: [
      {
        label: "Starters",
        value: "2 Items",
        subtext: "Veg or Non-Veg selection",
      },
      { label: "Mains", value: "3 Items", subtext: "Curries & Dry dishes" },
      {
        label: "Staples",
        value: "Rice & Breads",
        subtext: "Assorted Indian Breads",
      },
      { label: "Dessert", value: "1 Premium", subtext: "Traditional Sweets" },
    ],
  },
  {
    id: "gold",
    name: "Gold Package",
    description:
      "Sophisticated blend of classic traditions and modern culinary innovation.",
    icon: "workspace_premium",
    isPopular: true,
    features: [
      { label: "Starters", value: "4 Items", subtext: "Exquisite appetizers" },
      { label: "Mains", value: "5 Items", subtext: "Classic & Modern" },
      { label: "Specialty", value: "Biryani", subtext: "+ Specialty Breads" },
      { label: "Drinks", value: "Welcome", subtext: "Refreshing Mocktails" },
      { label: "Dessert", value: "2 Items", subtext: "Hot & Cold" },
    ],
  },
  {
    id: "platinum",
    name: "Platinum Package",
    description:
      "The ultimate luxury experience with live stations and white glove service.",
    icon: "diamond",
    features: [
      { label: "Live", value: "Counters", subtext: "Interactive Cooking" },
      { label: "Spread", value: "Unlimited", subtext: "Global Cuisines" },
      { label: "Service", value: "Premium", subtext: "White Glove Staff" },
      { label: "Styling", value: "Decor", subtext: "Custom Setup" },
    ],
  },
];
