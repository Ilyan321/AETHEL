'use client';
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useFramePreloader } from '@/hooks/useFramePreloader';
import FramePreloader from '@/components/FramePreloader';
import CanvasScroller from '@/components/CanvasScroller';
import HeadsUpDisplay from '@/components/HeadsUpDisplay';
import SpecMatrix from '@/components/SpecMatrix';
export default function Home() {
  const FRAME_COUNT = 300; // Using 300 high-fidelity 30fps frames
  const { images, progress, isLoaded } = useFramePreloader(FRAME_COUNT);

  return (
    <>
      {!isLoaded ? (
        <FramePreloader progress={progress} />
      ) : (
        <main className="relative w-full h-screen overflow-hidden bg-basalt">
          {/* Top Nav (Optional / Minimal) */}
          <nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50 pointer-events-none mix-blend-difference">
            <div className="font-serif text-xl tracking-[0.2em] text-sandstone">ÆTHEL</div>
          </nav>

          {/* Core Autoplay Canvas */}
          <CanvasScroller images={images} frameCount={FRAME_COUNT} />
          
          {/* HUD Layer mapped to Autoplay Timeline */}
          <HeadsUpDisplay />
        </main>
      )}
    </>
  );
}
