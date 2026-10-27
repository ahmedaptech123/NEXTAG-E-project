# NEXTAG Website — Code Explanation

This guide explains the main files and how the website works. The project is a simple front-end student demonstration built with HTML, CSS, and JavaScript.

## 1. Project file list

- `index.html` — home page with the hero, featured products, collection categories, newsletter demo, and footer.
- `products.html` — product catalog with category filters, brand filters, and a search field.
- `brands.html` — links to product lists filtered by brand.
- `compare.html` — lets visitors compare up to three products.
- `about.html` — introduces the sample NEXTAG project.
- `contact.html` — shows sample contact details and a validated contact form.
- `faq.html` — answers common questions using expandable FAQ items.
- `location.html` — placeholder for the real shop address and map.
- `style.css` — shared colors, fonts, spacing, cards, layouts, and responsive rules.
- `script.js` — product data, rendering, filtering, compare-list behavior, mobile menu, and form feedback.
- `assets/` — reserved for local images or a logo if you choose to add them later.

## 2. How the files work together

Each HTML page links to `style.css` for the shared design and `script.js` for interactive features. Keeping the same stylesheet gives every page a consistent appearance. The JavaScript is loaded with `defer`, so the browser reads the HTML before running the script.

## 3. Important HTML concepts

- `<!DOCTYPE html>` tells the browser to use modern HTML.
- `<head>` contains the page title, character encoding, viewport settings, and linked CSS/JavaScript.
- `<header>` contains the logo and navigation.
- `<nav>` contains links between separate pages.
- `<main>` contains the main page content.
- `<section>` groups related content, such as the hero or product collection.
- `<article>` is used for an individual product card.
- `<form>`, `<label>`, `<input>`, `<select>`, and `<textarea>` create form controls.
- `<footer>` contains secondary links and copyright information.
- `alt` text on images helps visitors using assistive technology and appears if an image cannot load.

## 4. How CSS works

`style.css` controls the appearance of every page.

- `:root` stores reusable colors and font choices as CSS variables.
- `font-family` controls typography; the design uses a serif font for display headings and a sans-serif font for body text.
- CSS Grid (`display: grid`) creates product cards and two-column page layouts.
- Flexbox (`display: flex`) aligns the navigation, buttons, and section headings.
- `gap`, `padding`, and `margin` control spacing.
- `border`, `background`, and `border-radius` style the cards and form fields.
- `:hover` adds small interactions when the pointer moves over links or cards.
- `@media` rules change the layout for tablet and mobile screens.
- `object-fit: cover` keeps product images filling their image area without stretching.

## 5. How JavaScript works

### Product data
At the beginning of `script.js`, the `products` array stores each sample product's ID, name, brand, category, price, color, material, description, and image URL. To add a sample product, add another object using the same fields.

### Product cards
`productCard(product)` builds the HTML for one product card. `renderProducts(target, list)` places the cards inside the selected page element.

### Filtering and searching
The Products page reads the category and brand dropdowns and the search input. When a visitor changes one of them, the `update()` function filters the product array and redraws the results.

### Product comparison
The comparison list stores product IDs in browser `localStorage` under the key `nextagCompare`. Visitors can add up to three products, remove an item, or clear the list. This is browser-only storage, not a database.

### Mobile navigation
The menu button adds or removes the `open` CSS class on the navigation. The CSS shows the links when that class is present on a small screen.

### Contact and newsletter forms
The browser checks required fields and email formatting. JavaScript prevents a real page reload and displays a confirmation message. **The forms do not send or store information** because this project has no server or database.

### Current year
JavaScript finds elements with the `current-year` class and inserts the current year in the footer automatically.

## 6. How to run the website

1. Extract the `NEXTAG` folder from the ZIP file.
2. Keep the HTML files, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a modern browser.
4. Use the navigation links to open each separate page.
5. An internet connection is needed for the Google Fonts and remote Unsplash images used by this demo.

## 7. Important limitations

- This is a front-end demonstration, not a full online store.
- There is no checkout, payment system, server, or database.
- Contact and newsletter forms only display demo feedback.
- Product prices and details are illustrative, not verified offers.
- The location page needs the real shop address before it can be published.
- Brand names are used as sample catalog categories; NEXTAG does not claim affiliation with them.
- Before using the site for a real business, replace sample contact details, confirm product rights and information, and add secure back-end functionality if needed.

## 8. Suggested improvements for a later version

1. Add a real company logo and locally stored, properly licensed images.
2. Connect the forms to a secure back end.
3. Store products in a database or structured product file.
4. Add a genuine store address and map.
5. Test keyboard navigation, color contrast, page speed, and mobile layouts.
