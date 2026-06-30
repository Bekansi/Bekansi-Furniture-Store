# Bekansi Furniture & Interior Design — Website

**We Design Comfort. We Build Elegance.**

A premium, fully responsive furniture e-commerce website for **Bekansi Furniture & Interior Design**, based in Addis Ababa, Ethiopia. Built entirely with **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build tools, no backend. Ready to deploy directly to **GitHub Pages**.

---

## 🪑 About the Business

| | |
|---|---|
| **Company** | Bekansi Furniture & Interior Design |
| **Country** | Ethiopia |
| **Phone** | +251 98 882 8861 |
| **WhatsApp** | https://wa.me/251988828861 |
| **Tagline** | We Design Comfort. We Build Elegance. |

---

## 📁 Project Structure

```
/
├── index.html              # Full single-page site (all sections)
├── style.css                # All styling, theming & responsive rules
├── script.js                 # All interactivity (cart, wishlist, filters, etc.)
├── README.md
└── assets/
    ├── images/                # Reserved for real product/gallery photography
    ├── icons/
    │   └── sprite.svg          # Source reference for the icon set (inlined in HTML)
    └── logo/
        ├── logo.svg            # Bekansi logo (header & footer)
        └── favicon.svg          # Site favicon
```

> **Note on imagery:** This build ships with elegant SVG iconography and CSS gradient "product art" instead of stock photography, so the site works perfectly offline and loads instantly with zero external image requests. Drop real photography into `assets/images/` and swap the relevant `<svg>` blocks in `script.js` (`PRODUCTS` / `GALLERY` arrays) for `<img>` tags whenever real photos are ready — the layout is already built to support it.

---

## ✨ Features

- **Sticky, blurred navigation bar** with active link underline animation
- **Dark / Light mode** toggle with `localStorage` persistence and OS preference detection
- **Live product search** with instant dropdown results
- **Category filtering** (Sofas, Beds, Wardrobes, Kitchen Cabinets, TV Stands, Dining Sets, Office Furniture, Custom Furniture)
- **Product sorting** (Featured, Price ↑/↓, Name A–Z, Top Rated)
- **Shopping cart** with quantity steppers, totals, and `localStorage` persistence
- **Wishlist** with heart-toggle on every product card
- **WhatsApp Checkout** — cart contents are formatted into a pre-filled WhatsApp message
- **Quote Request Form** — submits directly to WhatsApp with structured project details
- **Product Detail Modal** with specs table, quantity selector, and direct WhatsApp inquiry
- **Gallery with Lightbox** (prev/next navigation, keyboard accessible)
- **Testimonial carousel** with auto-play, dots, and swipe-friendly scrolling
- **Accordion-style FAQ**
- **Scroll-triggered fade-up animations** via `IntersectionObserver`
- **Floating WhatsApp button** (always visible, pulsing)
- **Back-to-top button**
- **Loading animation** on page load
- **Fully responsive** — mobile-first from 320px up to large desktop
- **Accessible** — semantic landmarks, skip link, ARIA attributes, visible focus states, keyboard support for modals/drawers/accordion/gallery

---

## 🔍 SEO Optimization

- Optimized `<title>` and `<meta name="description">` targeting: *Furniture in Ethiopia, Furniture Addis Ababa, Interior Design Ethiopia, Modern Furniture Ethiopia, Kitchen Cabinets Ethiopia*
- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy)
- `FurnitureStore` JSON-LD structured data for rich search results
- Open Graph & Twitter Card meta tags for social sharing
- Descriptive `alt` text and `aria-label`s throughout
- Fast-loading, render-blocking-free architecture (no JS frameworks, no large image payloads, deferred script)

> Before publishing, update the `<link rel="canonical">` and Open Graph URLs in `index.html` to your final GitHub Pages / custom domain URL.

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `bekansi-furniture`).
2. Upload all project files (`index.html`, `style.css`, `script.js`, `README.md`, and the `assets/` folder) to the repository root — keep the folder structure intact.
3. Go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder.
5. Save. Your site will be live at:
   `https://<your-username>.github.io/<repository-name>/`
6. (Optional) Add a custom domain under **Settings → Pages → Custom domain**.

No build step, no `node_modules`, no server — just static files.

---

## ⚙️ Customization Guide

- **Products:** Edit the `PRODUCTS` array at the top of `script.js`. Each product supports `name`, `category`, `price` (ETB, use `0` for "Quote on Request"), `oldPrice`, `rating`, `reviews`, `badge`, `desc`, and a `specs` object.
- **Gallery:** Edit the `GALLERY` array in `script.js`.
- **Testimonials:** Edit the `TESTIMONIALS` array in `script.js`.
- **Brand colors:** All colors are defined as CSS variables at the top of `style.css` (`:root`) — change `--color-dark-brown`, `--color-gold`, `--color-beige`, etc.
- **WhatsApp number:** Update the `WHATSAPP_NUMBER` constant in `script.js` and the `href="https://wa.me/..."` links in `index.html`.
- **Fonts:** Headings use **Poppins**; body copy uses **Lora** (both loaded from Google Fonts in `index.html`).

---

## 🛠️ Tech Notes

- No external JS dependencies — all cart/wishlist/theme state is stored client-side via `localStorage`.
- Icons are SVG `<symbol>` references inlined directly in `index.html` for guaranteed cross-browser rendering (no extra HTTP requests).
- The site is a single HTML page with anchor-linked sections for maximum speed and simplicity; URLs like `#catalog`, `#gallery`, `#contact` work as deep links.
- Tested for Lighthouse performance, accessibility, best practices, and SEO — built with semantic markup, deferred scripts, system fonts as fallback, and no layout-shifting assets to support scores above 95 across categories.

---

## 📄 License

This codebase was custom-built for Bekansi Furniture & Interior Design. All brand assets (logo, name, tagline) are the property of Bekansi Furniture & Interior Design.
