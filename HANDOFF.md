# Mannah Caterers — Project Handoff

**Client:** Mannah Caterers  
**Developer:** B.U.G — Build Your Genie  
**Completion Date:** December 25, 2025  
**Live URL:** [mannahcaterers.com](https://mannahcaterers.com)

---

## Tech Stack

| Technology       | Version  | Purpose                 |
| ---------------- | -------- | ----------------------- |
| React            | 19.2.0   | UI Framework            |
| Vite             | 7.2.4    | Build Tool & Dev Server |
| Tailwind CSS     | 4.1.18   | Styling                 |
| Framer Motion    | 12.23.26 | Page Animations         |
| GSAP             | 3.14.2   | Advanced Animations     |
| React Router DOM | 7.10.1   | Navigation              |
| Lucide React     | 0.561.0  | Icons                   |

---

## Folder Structure

```
mannah-caters/
├── public/              # Static assets (images, videos, favicon)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MenuItem.jsx
│   │   ├── PackageCard.jsx
│   │   ├── QuoteForm.jsx
│   │   └── ...
│   ├── pages/           # Route pages
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Contact.jsx
│   │   └── Quote.jsx
│   ├── context/         # React Context (Cart state)
│   ├── hooks/           # Custom hooks (SEO)
│   ├── constants.js     # Menu items, combos, categories
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template + SEO meta tags
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment (Vercel)

The project is currently deployed on **Vercel (Free Tier)**.

### To Deploy Updates:

1. Push changes to the connected Git repository
2. Vercel automatically builds and deploys

### Manual Deploy:

```bash
# Build locally
npm run build

# Deploy via Vercel CLI (optional)
npx vercel --prod
```

---

## Updating Content

### Menu Items

Edit `src/constants.js` to add, remove, or modify menu items:

```javascript
export const MENU_ITEMS = [
  {
    id: "chicken-biriyani",
    name: "Chicken Biriyani",
    description: "Aromatic basmati rice...",
    category: "biriyani",
    image: "/chickenbiriyani.jpg",
    isPopular: true, // Shows "Popular" badge
  },
  // Add more items...
];
```

### Combo Packages

Modify the package components in `src/components/`:

- `silver-package.jsx`
- `gold-package.jsx`
- `platinum-package.jsx`

---

## Credentials & Access

> ⚠️ **CONFIDENTIAL** — Store securely, do not share publicly.

### Hosting (Vercel)

| Field       | Value                      |
| ----------- | -------------------------- |
| Platform    | Vercel                     |
| Account     | ************\_************ |
| Password    | ************\_************ |
| Project URL | https://vercel.com/...     |

### Domain Registrar

| Field     | Value                      |
| --------- | -------------------------- |
| Registrar | ************\_************ |
| Account   | ************\_************ |
| Password  | ************\_************ |

### Google Search Console

| Field    | Value                      |
| -------- | -------------------------- |
| Account  | ************\_************ |
| Property | mannahcaterers.com         |

---

## Troubleshooting

| Issue               | Solution                                 |
| ------------------- | ---------------------------------------- |
| Build fails         | Run `npm install` to update dependencies |
| Styles not loading  | Clear browser cache, restart dev server  |
| Images not showing  | Check file exists in `public/` folder    |
| Vercel deploy fails | Check build logs in Vercel dashboard     |

---

## Support

For technical support or modifications, contact:

**B.U.G — Build Your Genie**  
📧 [your-email@example.com]  
🌐 [your-website.com]

---

