# 🌌 Shubham Kumar Pal — Developer Portfolio

A high-performance, visually stunning developer portfolio built with **Next.js 15 (App Router)** and **GSAP (GreenSock Animation Platform)**. 

Designed with an "engineer's notebook" aesthetic, featuring torn paper textures, hand-drawn SVG doodles, GSAP scroll-triggered animations, and fluid smooth scrolling powered by Lenis. Written in **pure JavaScript (no TypeScript syntax)** for simplicity and flexibility.

---

## ✨ Features

- **🚀 Next.js App Router**: Optimized React architecture utilizing the latest Next.js features.
- **🎨 "Engineer's Scrapbook" Aesthetics**: Unique design with paper textures, pushpins, tape, and hand-drawn doodle SVGs.
- **⚡ GSAP ScrollTrigger Animations**: Elements draw themselves and animate in/out as you scroll (fully reversible).
- **🌊 Lenis Smooth Scrolling**: Butter-smooth scrolling experience out of the box.
- **🖥️ Dynamic Boot Sequence**: Terminal-style loading sequence with custom SVG signature drawing on initial load.
- **📁 Global CSS Architecture**: Unified styling system using BEM conventions in a single `globals.css` file for ultimate speed and hydration safety.
- **📱 Fully Responsive**: Fluid layouts that adapt beautifully from small mobile screens to wide desktops.

---

## 📁 Project Structure

```text
d:/portfolio/
├── app/
│   ├── globals.css              # Main stylesheet (BEM architecture, design tokens)
│   ├── layout.jsx               # Next.js Root Layout, Font loader, Lenis provider
│   └── page.jsx                 # Main entry page assembling all sections
├── components/
│   ├── BestWork.jsx             # Highlighted projects section with scroll tracking
│   ├── BootSequence.jsx         # Initial loading animation (runs once per session)
│   ├── BottomNav.jsx            # Sticky bottom navigation bar for mobile
│   ├── Contact.jsx              # Footer contact section with SVG signature
│   ├── Hero.jsx                 # Main header and intro text
│   ├── Origin.jsx               # Biography timeline and journey
│   ├── Projects.jsx             # Grid of side projects and client work
│   ├── SmoothScrolling.jsx      # Lenis scroll provider component
│   └── TopBar.jsx               # Fixed top navigation for desktop
├── public/
│   └── (static assets, images, etc.)
├── jsconfig.json                # Editor autocompletion and path aliasing
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependency list (Next, GSAP, React, Lenis)
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
Run from the root of the project to install all modules:
```bash
npm install
```

### 2. Start Local Development Server
Launch the dev server at `http://localhost:3000`:
```bash
npm run dev
```

### 3. Build for Production
Compile optimized static and server-rendered files:
```bash
npm run build
```

### 4. Start Production Server
Run the compiled production build:
```bash
npm start
```

---

## 🎨 Design System

All styles, CSS variables, fonts, and utilities are managed inside `app/globals.css`. 

Key tokens:
- **Fonts**: Handled natively by Next.js `next/font/google` (Inter for body, Kalam for handwritten accents).
- **Colors**: Defined at the top of `globals.css` (`--bg-color`, `--text-color`, `--accent-yellow`).
- **Animations**: Logic is contained in the respective component `.jsx` files using `@gsap/react` `useGSAP()` hooks.

---

## 📄 License
MIT
