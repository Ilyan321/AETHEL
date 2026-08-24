# ÆTHEL — Haute Horology Scrollytelling Experience

This project is a high-performance scrollytelling web experience built purely with HTML5 Canvas, GSAP ScrollTrigger, and Lenis for inertial scrolling. It avoids generic UI patterns, adhering to a strict bespoke "Zero AI Slop" editorial design system as specified in the PRD.

## Features implemented:
- **Pinned Canvas Scrubber:** 100 frames mapped to a 500vh scroll container. (Placeholder rotating geometries generated via Python).
- **Scroll-Linked HUD:** 4 staggered editorial phases appearing dynamically in sync with the scroll percentage.
- **Inertial Scrolling:** Powered by `@studio-freight/lenis`.
- **Custom Cursor Crosshair:** SVG/CSS-based bespoke interaction.
- **Waitlist / Allocation Modal:** Accessible via navigation and final phase, with simulated backend submission and form validation.
- **Specification Matrix:** CSS Grid-based micro-tolerance technical specs section.

## How to run locally:

Since the project uses ES Modules and dynamically loads assets (the canvas frames), it needs to be served over HTTP.

You can instantly start a local server using Python:

```bash
cd /home/ilyan/ÆTHEL
python3 -m http.server 8000
```

Then open your browser and navigate to `http://localhost:8000`.

## Assets
The placeholder `100` WebP frames were dynamically generated via Python and are located in `public/sequence/`. You can replace them with the ultra-high-definition 3D rendered watch frames later, following the `frame_XXXX.webp` naming convention (0000 to 0099).
