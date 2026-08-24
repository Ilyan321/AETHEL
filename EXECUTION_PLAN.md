# Execution Instructions for Antigravity Agent CLI

**Project Context:** ÆTHEL (Haute Horology Scrollytelling Experience)
**Role:** You are an elite Frontend Engineer & WebGL/Canvas Specialist.
**Prerequisites:** You MUST read and internalize `PRD.md` and `TECH_SPEC.md` before writing a single line of code.

---

## STRICT GUARDRAILS & DESIGN CONSTRAINTS
1. **Zero "AI Slop":** Do not use generic placeholder UI components (no pill badges, no glassmorphism blur panels with neon gradients, no generic dashboard cards).
2. **Aesthetic Compliance:** Stick rigorously to the defined palette (Basalt `#121514`, Terracotta `#B85D3B`, Bronze `#A38350`, Sandstone `#EAE4DC`). Use minimal, high-contrast, editorial typography.
3. **Performance First:** The core canvas render loop must hit 60fps. Do not trigger DOM repaints during the scroll event; all heavy lifting belongs on the canvas.

---

## STEP-BY-STEP EXECUTION PLAN

### Phase 1: Environment & Scaffolding
- Initialize the Next.js (App Router) environment if not already present.
- Configure Tailwind CSS exactly strictly to the design tokens defined in the `TECH_SPEC.md`. Set the global background to Basalt and text to Sandstone.
- Scaffold the directory structure matching the architecture blueprint.

### Phase 2: Asset Pipeline & Memory Management
- Build the `useFramePreloader` hook. 
- **Requirement:** It must load exactly 180 WebP frames from `/public/sequence/` into an in-memory array of `Image` objects.
- Build the `FramePreloader` UI component. It must block the main application from rendering until the hook returns `isLoaded: true`. Show a minimalist, luxury typographic percentage counter.

### Phase 3: The Core Scroller (GSAP + Canvas)
- Implement `CanvasScroller.jsx`.
- **Scroll Hijacking:** Integrate `@studio-freight/lenis` for smooth inertial scrolling at the layout level.
- **Trigger:** Set up a `500vh` scroll container with a pinned `100vh` sticky child containing the canvas. Use GSAP `ScrollTrigger` to scrub this timeline.
- **Render Math:** Implement the custom aspect-ratio cover-fit logic inside `utils/canvasMath.js` so the frames remain perfectly centered and scaled on all viewports without stretching. 
- **Paint Loop:** On the GSAP update tick, map the progress to the correct frame index and paint it to the 2D canvas context.

### Phase 4: HUD & Typographic Overlays
- Build `HeadsUpDisplay.jsx` to sit completely decoupled on top of the canvas layer.
- Map distinct GSAP timelines to the four scroll phases outlined in `PRD.md`.
- **Phase 1 (0-18%):** Fade in Monolith Architecture specs.
- **Phase 2 (22-42%):** Fade in Sapphire Elevation specs.
- **Phase 3 (48-78%):** Fade in Kinetic Escapement specs.
- **Phase 4 (82-100%):** Fade in the final reassembly view and the allocation call-to-action.

### Phase 5: Backend & Interactive Modal
- Build the Next.js Route Handler (`/api/reserve`) exactly to the data contract specified in `TECH_SPEC.md`. Ensure strict validation of the email and payload.
- Build `ReservationModal.jsx` as a cleanly designed, form-controlled overlay. It must communicate with the API route and display the returned `allocationCode` in a premium, receipt-style format upon success.
