# 3V TEK — Static HTML/CSS/JS Site

A vanilla, framework-free conversion of the 3V TEK React site. Just open `index.html` in a browser, or serve the folder with any static server (recommended for the products CSV fetch).

## Pages

- `index.html` — Home (hero, services, stats, brands marquee, projects, testimonial, CTA)
- `services.html` — Services
- `products.html` — Products catalogue (filters, search, sort, pagination)
- `product.html?id=<slug>` — Product detail
- `brand-partners.html` — Mixed wall of brand logos
- `projects.html` — Project gallery + lightbox
- `about.html` — About
- `contact.html` — Contact form (client-side validation, toast notifications)

## Run locally

```bash
# Any static server works
npx serve .
# or
python3 -m http.server 8080
```

## Files

- `css/styles.css` — All styles (no Tailwind, semantic tokens via CSS vars)
- `js/site.js` — Shared navbar, footer, reveal observer, toast, icons, brand data
- `js/home.js` — Home page logic
- `js/products-data.js` — Product catalog + CSV merger
- `js/products.js` — Products page logic
- `assets/products.csv` — Product overrides (same format as the React app)

## Notes

- Brand logos are fetched from logo.clearbit.com with text fallback.
- Hero video & images come from Pexels/Unsplash CDNs.
- Replace `assets/products/...` images at will and reference them in `assets/products.csv`.

## Overview

This repository is a self-contained static website for 3V TEK. It reproduces the UI and functionality of the original React site using plain HTML, CSS, and JavaScript. The site is intended for simple static hosting, quick edits, and lightweight local development.

## Guidance & What To Do

- **Preview locally:** Use a static server so the CSV fetches and module imports (if any) work correctly.
  ```bash
  npx serve .
  # or
  python -m http.server 8080
  ```
- **Edit content:** Pages are plain HTML (`index.html`, `products.html`, etc.). Update markup directly or add new partials and include them via `js/site.js` if needed.
- **Products data:** Product metadata is assembled from `assets/products.csv` and the static `assets/products/` images. Edit the CSV to change product fields (slug, title, images, price, etc.).
- **Assets:** Put images in `assets/products/` or referenced subfolders. Use descriptive slugs that match `product.html?id=<slug>` values.
- **Styles:** All styles live in `css/styles.css`. Keep design tokens (CSS variables) consistent when adding components.
- **JS behavior:** Shared logic is in `js/site.js`. Page-specific logic lives in `js/home.js` and `js/products.js`. Update product merging or filters in `js/products-data.js`.

## Development Workflow

1. Run a static server (see Preview locally).
2. Make small changes to HTML/CSS/JS and refresh the browser.
3. If you add images or CSV rows, confirm URLs and slugs match the product detail links.

## File Structure (high level)

- **Root pages:** `index.html`, `products.html`, `product.html`, `services.html`, `about.html`, `contact.html`
- **Styles:** `css/styles.css`
- **Scripts:** `js/site.js`, `js/home.js`, `js/products-data.js`, `js/products.js`
- **Assets:** `assets/` (logos, product-images, Project-images, products.csv)

## Troubleshooting

- If products do not appear, verify `assets/products.csv` is reachable (static server required) and the CSV rows are valid.
- For missing images, check the path under `assets/` and confirm filenames are exact (case-insensitive on Windows, case-sensitive on some servers).
- For JS errors, open the browser console and trace to the file named in the stack trace (usually in `js/`).

## Contributing

If you want to make larger changes or add features, open an issue or create a branch in your VCS. Keep changes small and test locally with the static server before committing.

---

Updated with guidance for local development, editing content, and troubleshooting.
