# Paradise Nursery – e-plantShopping

Paradise Nursery is an online house-plant shop built with **React**, **Redux Toolkit** and **Vite**.

## Features
- Landing page with the company name, an About Us section and a **Get Started** button
- Navbar with links to Home (landing), Plants (product listing) and Cart, plus a live cart-quantity badge
- Product listing in four sections (Air Purifying, Aromatic Fragrant, Insect Repellent, Medicinal), each plant shown as a card with image, name, description, cost and **Add to Cart**
- "Add to Cart" is disabled once a plant is in the cart
- Cart page with a card per plant: thumbnail, unit cost, subtotal, **+ / −** quantity buttons and **Delete**
- Total cart amount updates automatically; **Continue Shopping** and **Checkout** buttons

## Project structure
```
src/
  App.jsx          landing page
  App.css          global + landing styles (background image)
  AboutUs.jsx      company details
  ProductList.jsx  navbar + product listing
  CartItem.jsx     shopping cart page
  CartSlice.jsx    Redux slice: addItem, removeItem, updateQuantity
  store.js         Redux store
```

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
```bash
npm run deploy
```
Then enable Pages in the repo settings (branch `gh-pages`, root).

Live URL: _add your deployed URL here_
