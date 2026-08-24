# Product Requirements Document (PRD)

**Project Title:** ÆTHEL — Haute Horology & Kinetic Material Architecture  
**Document Version:** 1.0.0  
**Target Environment:** Production Scrollytelling Web Experience

---

## 1. Executive Summary
ÆTHEL is an interactive scrollytelling web experience engineered to showcase a micro-mechanical timepiece sculpted from raw basalt carbon, brushed copper, and exposed tourbillon mechanics. 

Instead of traditional product marketing pages, ÆTHEL utilizes an ultra-high-definition HTML5 2D Canvas image sequence driven by GSAP ScrollTrigger and Lenis inertial scrolling. Users deconstruct and inspect the internal skeleton of the watch down to the micro-mechanical gear train purely through scroll interaction.

---

## 2. Design System & Visual Guidelines

### 2.1 Color Palette
- **Primary Canvas / Background:** Deep Obsidian Basalt (`#121514`)
- **Accent Layer 1 (Warm Highlight):** Terracotta & Raw Clay (`#B85D3B`)
- **Accent Layer 2 (Mechanical Elements):** Brushed Bronze / Rose Gold (`#A38350`)
- **Surface & Structural Borders:** Muted Lichen Olive (`#3F4A3C`)
- **Typography & Technical Grid:** Sandstone Bone (`#EAE4DC`) & Soft Chalk (`#A6A098`)

### 2.2 Typography Hierarchy
- **Editorial Headings:** High-contrast display serif (`Syne`, `Cinzel`, or `Playfair Display`)
- **Metadata & Technical Schematics:** Monospace tabular figures (`JetBrains Mono` or `Space Mono`)
- **Body & Editorial Narratives:** Clean grotesque sans-serif (`Inter` or `Plus Jakarta Sans`)

### 2.3 Strict Anti-Pattern / Zero "AI Slop" Rule
- **No** generic pill badges (e.g., "🟢 99.9% Uptime", "AI-Powered Chrono").
- **No** generic SaaS glassmorphism blur cards with harsh purple/cyan gradients.
- **No** low-effort boilerplate templates or unstyled standard HTML elements.
- **Yes** to bespoke cursor-following crosshairs, SVG coordinate traces, technical micro-tolerances, and editorial Swiss layouts.

---

## 3. Core Functional Modules

### 3.1 Pinned Canvas Scrubber (Hero -> Disassembly)
- **Viewport Lock:** Container pinned at `100vh` over a total scroll distance of `500vh`.
- **Canvas Rendering Engine:** High-performance `<canvas>` element mapping frame index to GSAP ScrollTrigger progress values `[0.00, 1.00]`.
- **Asset Sequence:** Preloaded sequence of optimized WebP frames located in `/public/sequence/frame_XXXX.webp`.
- **Aspect Ratio Logic:** Dynamic mathematical cover-fit preserving image centering across all display sizes and pixel ratios.

### 3.2 Scroll-Linked HUD (Heads-Up Display)
Four sequential editorial layers fade and slide in precise sync with the exploded view:
1. **0% – 18% | "MONOLITH ARCHITECTURE"**
   * Focus: Forged basalt carbon chassis and contoured lug geometry.
   * Specs: 42.5mm Casing, 11.2mm Depth, Grade 5 Titanium Core.
2. **22% – 42% | "SAPPHIRE ELEVATION"**
   * Focus: Domed anti-reflective sapphire crystal and floating chapter ring.
   * Specs: 9 Mohs Hardness, Dual Anti-Reflective Coating, Skeletonized Index.
3. **48% – 78% | "KINETIC ESCAPEMENT"**
   * Focus: Multi-tier floating bronze gear train, balance wheel, and mainspring.
   * Specs: Calibre Æ-01, 28,800 vph (4Hz), 72-Hour Reserve, 26 Synthetic Rubies.
4. **82% – 100% | "ASSEMBLY & ALLOCATION"**
   * Focus: Reassembled timepiece face and immediate acquisition CTA.
   * Elements: Limited Edition Batch Indicator (e.g., "EDITION 00/50"), Reserve Modal Trigger.

### 3.3 Dynamic Specification Matrix
- A kinetic data grid highlighting micro-tolerances, stress testing parameters, and raw material origins.
- Mouse hover micro-interactions with dynamic SVG crosshair readouts.

### 3.4 Allocation & Waitlist Modal (Backend Connected)
- Direct overlay capturing reservation requests: First Name, Email, Preferred Edition Serial Number (01–50), and Custom Caseback Inscription.
- Client-side validation with instant response and error handling.
