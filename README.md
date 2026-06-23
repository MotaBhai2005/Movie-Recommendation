# Movie Recommendation Website - Mentee Guide

Welcome to the Movie Recommendation Website project! This repository contains the code and structure for building a responsive, interactive movie site. 

As a team, you will collaborate using Git and divide responsibilities to create separate components, which will then be merged and polished during the Integration Phase.

---

## 📂 Project Structure

Please place your files exactly in the following directories:

```
Movie-Recommendation/
├── data/
│   └── movies.js         # Shared movie dataset (DO NOT modify this direct copy)
├── Shakti/              # Mentee 1 Directory
│   ├── home.html         # Homepage structure
│   ├── home.css          # Homepage styling
│   └── search.js         # Case-insensitive search module
├── Priyanka/              # Mentee 2 Directory
│   ├── movies.html       # Movie cards listing page
│   ├── movies.css        # Card & filter grid styling
│   └── filter.js         # Filters & dynamic listing module
├── index.html            # Final integrated app (Created during Integration) // I'll make them
├── style.css             # Final integrated styles (Created during Integration) // I'll make them
└── app.js                # Final integrated controller (Created during Integration) //I'll make them
```

---

## 👥 Task Assignments

### 👤 Shakti: Homepage & Search Module

Your goal is to build the initial entry experience for the user.

1. **Hero Section (`Shakti/home.html`, `Shakti/home.css`)**
   - Title, engaging tagline, and background banner.
   - An **"Explore Movies"** button with a smooth-scroll transition that jumps to the movie listing section.
2. **Search Component (`Shakti/search.js`)**
   - A search bar layout with hover states.
   - JavaScript implementation: Search for movies by name. Ensure it is **case-insensitive** and filters matching movies on input or button click.
3. **Navigation Bar (`Shakti/home.html`, `Shakti/home.css`)**
   - Include a logo and nav links (Home, Categories, Top Rated).
   - Use JavaScript to add a dynamic `.active` class highlighting the clicked menu item.

---

### 👤 Priyanka: Movie Listing & Filter Module

Your goal is to display and filter the movie database.

1. **Movie Cards (`Priyanka/movies.html`, `Priyanka/movies.css`)**
   - Design a card layout representing a movie.
   - Each card must display: poster, name, rating, genre, and a brief description.
   - Implement JavaScript loops to dynamically generate these cards from the shared movie dataset.
2. **Category Navigation (`Priyanka/filter.js`)**
   - Create category tags/buttons for: **Action**, **Comedy**, **Drama**, **Sci-Fi**, and **Horror**.
   - Clicking a category must filter and render only movies in that category.
3. **Rating Filters (`Priyanka/filter.js`)**
   - Add filters for: **Above 9**, **Above 8**, and **Above 7**.
   - Show only movies whose ratings satisfy the selection.

---

## 📊 Shared Movie Dataset (`data/movies.js`)

Both mentees must use the shared dataset of 15+ movies across the 5 required categories. The data structure is defined as:

```javascript
const movies = [
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.7,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", // placeholder / beautiful representation
    year: 2014,
    duration: "169 min"
  },
  // ... (dataset contains at least 15 movies)
];
```

## 🤝 Collaboration & Git Guidelines

1. **Fork & Work**: Fork this repository to your own GitHub account, clone it locally, create your feature branch, and submit a Pull Request (PR) when complete.
2. **Work in your own folder**: To avoid merge conflicts, write code only within your allocated folder (`Shakti` or `Priyanka`).
3. **Commit often**: Write meaningful git commit messages (e.g. `feat: added search logic in search.js`).

---

## 📜 Code of Conduct & Standards

To ensure a high-quality codebase, both mentees must adhere to the following standards:

### 1. HTML Structure
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) instead of generic `<div>` wrappers where possible.
- Ensure all interactive elements (buttons, inputs) have clear `id` attributes and appropriate labels/aria-labels for accessibility.
- Keep HTML indentation clean, nested, and easy to read.

### 2. CSS Styling
- **No Inline Styles**: All styles must reside in external CSS stylesheets.
- **Design Consistency**: Use CSS variables for colors, typography sizes, and spacing to keep the website consistent.
- **Responsive Layout**: Design mobile-first or use media queries to ensure the site looks stunning on screens of all sizes (mobile, tablet, desktop).
- Prefer modern layouts: Flexbox for single-axis alignments, Grid for complex two-dimensional alignments.

### 3. JavaScript Logic
- **Scope Safety**: Use `const` and `let` appropriately. Avoid `var` to prevent variable hoisting issues.
- **Modularity**: Break down complex actions into small, single-purpose functions with descriptive names (e.g., `filterMoviesByGenre`, `createMovieCard`).
- **Clean Execution**: Avoid global state clutter. Keep data isolated or export/import modules where appropriate.
- **Self-Documenting Code**: Choose expressive variable and function names. Add brief comments explaining *why* complex logic was implemented, not just *what* the code does.

Have fun coding! 🚀
