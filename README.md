# Yuva Frontend Web Developer Internship – Week 1 Task

## Project Title: Transforming Wireframes into Static Web Pages

### Project Description
This project is an implementation of the **Yuva Frontend Web Developer Internship – Week 1 Task**. It converts a modern digital agency/SaaS product wireframe into a pixel-perfect, responsive, accessible, and high-performance static web application using clean HTML5, custom CSS3, and native Vanilla JavaScript.

---

## 🎯 Objective
The primary objective of this task is to convert design wireframes and visual concepts into clean, functional frontend code without relying on heavy CSS frameworks (such as Bootstrap or Tailwind) or JavaScript libraries/frameworks (like React or Vue). 

Key goals achieved:
- Strict compliance with HTML5 semantic standards.
- Fully responsive layout adaptation across Desktop, Laptop, Tablet, and Mobile screens.
- Zero horizontal overflow on mobile viewports.
- WCAG AA contrast ratios, focus outline visibility, and screen-reader accessibility.
- Fast loading speed suitable for GitHub Pages deployment.

---

## 🛠️ Technologies Used
- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<details>`, `<summary>`).
- **CSS3**: Custom Properties (variables), Flexbox, CSS Grid layout systems, modern typography (`Inter`, `Plus Jakarta Sans`), and responsive media queries.
- **Vanilla JavaScript (ES6+)**: DOM manipulation for mobile drawer navigation, theme switcher, portfolio filtering, dynamic pricing toggle, and form validation.

---

## ✨ Features
1. **Header & Navigation Bar**:
   - Sticky glassmorphic navbar with logo icon and quick section anchors.
   - Interactive Light & Dark theme switcher storing user preference in `localStorage`.
   - Accessible mobile hamburger drawer menu with slide-in animation.
2. **Hero Section**:
   - High-impact headline, subtext, CTA action buttons, and live stat counters.
   - Wireframe visual preview mockup with floating feature badges.
3. **Features Showcase**:
   - 6 responsive feature cards highlighting semantic HTML5, Flexbox & Grid layouts, accessibility, and zero external dependency footprint.
4. **Interactive Showcase / Projects**:
   - Filterable project grid with tabs (*All*, *Web Apps*, *Mobile UI*, *Design Systems*).
   - Card zoom effects on hover, technology badges, and live preview links.
5. **Services & Pricing**:
   - Monthly / Annual billing switch with a 20% discount calculation logic.
   - 3-tier pricing cards with a highlighted "Most Popular" wireframe plan.
6. **FAQ Accordion**:
   - Collapsible `<details>` & `<summary>` questions providing instant answers regarding internship requirements and execution.
7. **Contact Form & Verification**:
   - Contact detail card with response indicators.
   - Functional contact form with client-side validation, error messages, and success feedback toasts.
8. **Footer**:
   - Quick navigation links, technology stack breakdown, copyright info, and a smooth back-to-top scroll button.

---

## 📁 Project Structure
```text
yuva_frontend_week1/
│
├── index.html        # Semantic HTML5 web page markup
├── style.css         # Custom CSS stylesheet with design tokens & responsive queries
├── script.js         # Native JavaScript for menu, themes, filters & form handling
├── images/           # High-resolution wireframe mockups and project previews
│   ├── hero-mockup.jpg
│   ├── project-1.jpg
│   └── project-2.jpg
└── README.md         # Detailed project documentation and submission guide
```

---

## 🚀 How to Run the Project Locally

### Option 1: Direct File Access
1. Clone or download this repository.
2. Open the project folder `yuva_frontend_week1`.
3. Double click on `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code Extension)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## 📱 Responsive Design Details
The web page is engineered using a mobile-first philosophy with specific CSS media query breakpoints:

| Device Viewport | Width Range | Layout Behavior |
| :--- | :--- | :--- |
| **Desktop / Wide Monitors** | `> 1200px` | Full multi-column grid, sticky top bar, split hero layout. |
| **Laptop** | `992px - 1199px` | 2-column feature & project grids, auto-adjusting font sizes. |
| **Tablet** | `768px - 991px` | Stacked hero section, 2-column stats & cards, responsive padding. |
| **Mobile** | `< 767px` | Slide-in drawer navigation, single column stacking, touch targets > 44px, zero horizontal scrolling (`overflow-x: hidden`). |

---

## 📚 Learning Outcomes
Through completing this internship task, the following skills were developed and reinforced:
- Structuring HTML pages semantically for improved SEO and screen reader accessibility.
- Mastering CSS Grid and Flexbox layout models without framework dependencies.
- Creating maintainable CSS design systems using CSS variables for theme switching.
- Implementing responsive media queries to prevent viewport overflow issues.
- Handling DOM events, element filtering, and client-side form validation using lightweight Vanilla JavaScript.
- Preparing production-ready static assets for GitHub Pages deployment.

---

## 🌐 GitHub Deployment Instructions
1. Initialize git in the project root: `git init`
2. Add all files: `git add .`
3. Commit changes: `git commit -m "Complete Yuva Frontend Internship Week 1 project"`
4. Push to your GitHub repository.
5. In GitHub repository settings, navigate to **Pages** and set the source branch to `main` / `root`.
6. Your static site will be live within seconds!
