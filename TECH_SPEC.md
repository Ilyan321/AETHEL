# Technical Architecture & Implementation Specification

**Project:** ÆTHEL — Kinetic Haute Horology Platform  
**File:** `TECH_SPEC.md`  
**Version:** 2.0.0 (Architectural Blueprint)  
**Target Stack:** React / Next.js (App Router), Tailwind CSS, GSAP, Lenis

---

## 1. System Architecture Overview

The ÆTHEL frontend architecture relies on a strict decoupling of the visual rendering layer from the DOM layout layer to guarantee 60fps performance without layout thrashing.

*   **Scroll Interception (Lenis):** Takes over native scrolling to provide mathematical inertia and smooth deceleration.
*   **Progress Mapping (GSAP ScrollTrigger):** Listens to the virtual scroll position and maps the container's 500vh scroll depth to a normalized `0.000` to `1.000` float value.
*   **Visual Render Engine (HTML5 Canvas):** A 2D context that acts as a dumb painter. It listens to the GSAP progress value, calculates the correct frame index, and paints the pre-cached WebP frame.
*   **HUD DOM Layer (React):** Standard DOM elements sitting on top of the canvas. GSAP triggers distinct entry/exit animations for these elements based on specific scroll milestones.

---

## 2. Directory Tree & Component Responsibilities

```text
aethel/
├── public/sequence/ (Contains 180 WebP frames)
├── src/
│   ├── app/
│   │   ├── api/reserve/route.js (Backend allocation endpoint)
│   │   ├── layout.jsx (Root layout & font injection)
│   │   ├── page.jsx (Main assembly)
│   │   └── globals.css (Tailwind & CSS variables)
│   ├── components/
│   │   ├── CanvasScroller.jsx (Bridges GSAP and Canvas API)
│   │   ├── FramePreloader.jsx (Blocks UI until assets are in memory)
│   │   ├── HeadsUpDisplay.jsx (Manages the 4 editorial scroll phases)
│   │   ├── SpecMatrix.jsx (Interactive technical data grid)
│   │   └── ReservationModal.jsx (Form and API interaction state)
│   ├── hooks/
│   │   └── useFramePreloader.js (Memory management logic)
│   └── utils/
│       └── canvasMath.js (Aspect ratio calculation logic)
```

---

## 3. Core Logic Flows & Requirements

### 3.1 Asset Preloading & Memory Management
*   **Logic:** The application MUST NOT initialize the canvas or allow scrolling until 100% of the image sequence is loaded into browser memory.
*   **State:** The hook must return an array of instantiated `Image` objects, a `progress` integer (0-100), and a `isLoaded` boolean.
*   **Fallback:** If a frame fails to load, it should log an error but not halt the sequence.

### 3.2 Dynamic Aspect-Ratio Math
*   **Logic:** Standard CSS `object-fit: cover` does not work inside a canvas context. The agent must implement a custom mathematical function to scale the images.
*   **Requirement:** The calculation must compare the canvas dimensions against the image natural dimensions, determine the highest ratio (width vs. height), and crop the overflow evenly from the center. This ensures the watch remains dead-center across all mobile, tablet, and desktop breakpoints without stretching.

### 3.3 The Scroller Synchronization
*   **Container Setup:** The parent container must be sized to `500vh`. The inner canvas wrapper must be `sticky` or `fixed` and sized to `100vh`.
*   **Update Loop:** On every GSAP tick, multiply the progress float by the total number of frames. Apply `Math.floor()` to get the current frame index.
*   **Render Instruction:** Clear the canvas context and draw the new image using the aspect-ratio math described above. Note: The canvas context should be initialized with `alpha: false` to optimize GPU performance.

### 3.4 Data Contract: Allocation API
The backend route handles waitlist logic and must adhere to the following contract.

*   **Endpoint:** `POST /api/reserve`
*   **Request Payload:**
    *   `fullName` (String, Required)
    *   `email` (String, Required, must validate format)
    *   `editionSerial` (String, Optional)
    *   `customEngraving` (String, Optional)
*   **Validation:** If required fields are missing, return HTTP `400` with a clear error message.
*   **Success Response (HTTP 201):**
    *   Must return a generated `allocationCode` (Format: `ÆT-[4-digits]`).
    *   Must return the original payload data and a `status` of 'CONFIRMED'.
*   **Error Response (HTTP 500):** Catch all server errors and return a generic fallback message.
