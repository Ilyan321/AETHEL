# ÆTHEL Haute Horlogerie

An ultra-luxury, high-performance web experience for the conceptual independent watchmaker **ÆTHEL**. Built to showcase the *Calibre Æ-01 Monolith* timepiece using cinematic 3D sequence rendering and smooth scroll-based interactions.

## 🕰️ The Experience

This repository contains the front-end codebase for the ÆTHEL digital showcase. The application is built to deliver a heavy, mechanical, and deeply immersive premium aesthetic, discarding standard web layouts for an interactive cinematic journey.

### Core Technologies:
- **Next.js (App Router):** Fast, React-based framework.
- **GSAP (ScrollTrigger):** Synchronizes the 300-frame 3D sequence and Heads-Up Display (HUD) directly to the user's scroll position.
- **Lenis:** Provides butter-smooth, interpolated momentum scrolling.
- **Tailwind CSS:** Fully customized brutalist luxury theme utilizing deep charcoals (`#282828`), Terracotta, Bronze, and Sandstone accents.
- **HTML5 Canvas:** High-fidelity 60fps frame-by-frame 3D video sequence rendering via a custom `useFramePreloader` Web Worker implementation.

## ⚙️ Features

- **Cinematic Canvas Scroller:** The hero section translates scroll velocity into 3D rotational mechanics, parsing hundreds of `.webp` frames instantly.
- **Micro-Preloader:** An ultra-minimal loading state prevents blank flashes while caching 3D textures in the background.
- **GSAP Heads-Up Display:** As the watch rotates to specific angles, synchronized frosted-glass data panels elegantly slide into view to detail specific mechanical elements (Chassis, Crystal, Movement).
- **Architectural Typography:** Uses a tight grid system, micro-typography (`text-[10px]`), and tracking-heavy (`tracking-widest`) layouts to mimic high-end Swiss print magazines.
- **Private Dossier Pre-Order:** A sleek, single-column allocation application modal designed for high-net-worth collectors.

## 🚀 Getting Started

First, ensure you have the required 300 `.webp` sequence frames placed in the `public/sequence/` directory.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

*Made by Ilyan Khan.*
