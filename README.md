# 🌌 Premium Astro.js Developer Portfolio Template

A high-performance, visually stunning, single-page developer portfolio template built with **Astro.js** and **GSAP (GreenSock Animation Platform)**. 

Designed with modern dark-mode aesthetics, glassmorphism, responsive components, and fluid micro-animations. Written entirely in **pure JavaScript (no TypeScript syntax)** for simplicity and flexibility.

---

## ✨ Features

- **🚀 Astro.js Power**: Ultra-fast page loads utilizing static generation.
- **🎨 Modern Dark Aesthetics**: Deep space background with curated gradient highlights and glowing blobs.
- **✨ Custom Floating Cursor**: Smooth trailing cursor effect that shifts design on hovering interactive elements.
- **🌌 Interactive Particle Hero**: Real-time canvas particle physics network drawing connections dynamically.
- **⚡ GSAP Animations**: Smooth entrance animations for headers, social links, and lists.
- **📁 Dynamic Project Filter**: Sort projects (All, Web App, DeFi, AI) with staggered GSAP scale & fade transitions.
- **📅 Vertical Experience Timeline**: Sleek timeline node layout highlighting career milestones.
- **✉️ Validated Contact Form**: Interactive input fields with built-in validation and success confirmation state.
- **📱 Fully Responsive**: Tailored grid systems adjusting seamlessly from mobile screens to wide desktops.

---

## 📁 Project Structure

```text
d:/portfolio/
├── public/
│   ├── images/
│   │   ├── project1.png         # Generated dashboard visual
│   │   ├── project2.png         # Generated DeFi visual
│   │   └── project3.png         # Generated AI visual
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro          # Biography & categorized skill tags
│   │   ├── Contact.astro        # Validation check contact form & links
│   │   ├── Experience.astro     # Vertical milestone timeline
│   │   ├── Footer.astro         # Quick navigations & copyright
│   │   ├── Hero.astro           # Header animations & particle canvas
│   │   ├── Navbar.astro         # Glassmorphic header & mobile toggle
│   │   └── Projects.astro       # Interactive card grid with GSAP filtering
│   ├── layouts/
│   │   └── Layout.astro         # HTML Shell, SEO tags, & mouse tracking cursor
│   ├── pages/
│   │   └── index.astro          # Index entry point assembling sections
│   └── styles/
│       └── global.css           # HSL design tokens, layouts, utilities
├── astro.config.mjs             # Astro Configuration (JavaScript type check)
├── jsconfig.json / tsconfig.json# Editor autocompletion configuration
└── package.json                 # Dependency list
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
Run from the root of the project to install all modules:
```bash
npm install
```

### 2. Start Local Development Server
Launch the dev server at `http://localhost:4321`:
```bash
npm run dev
```

### 3. Build for Production
Compile optimized static files directly to `./dist/`:
```bash
npm run build
```

### 4. Preview Local Build
Preview the built files locally before hosting:
```bash
npm run preview
```

---

## 🎨 Customizing Design System

Modify design tokens in [src/styles/global.css](file:///d:/portfolio/src/styles/global.css) under `:root` to instantly change the style:

```css
:root {
  /* Customize brand theme HSL colors here */
  --bg-primary-hsl: 250, 24%, 4%;
  --accent-cyan-hsl: 182, 100%, 50%;
  --accent-violet-hsl: 271, 76%, 53%;
  --accent-pink-hsl: 330, 100%, 50%;
}
```

---

## 📄 License
MIT
