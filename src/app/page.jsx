'use client';
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useFramePreloader } from '@/hooks/useFramePreloader';
import FramePreloader from '@/components/FramePreloader';
import CanvasScroller from '@/components/CanvasScroller';
import HeadsUpDisplay from '@/components/HeadsUpDisplay';
import Navbar from '@/components/Navbar';
import SpecMatrix from '@/components/SpecMatrix';
import SpecsSection from '@/components/SpecsSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  const FRAME_COUNT = 300; // Using 300 high-fidelity 30fps frames
  const { images, progress, isLoaded } = useFramePreloader(FRAME_COUNT);

  return (
    <>
      {!isLoaded ? (
        <FramePreloader progress={progress} />
      ) : (
        <main className="relative w-full bg-basalt">
          <Navbar />
          
          {/* Hero Section - Autoplay Presentation */}
          <section className="relative w-full h-screen overflow-hidden">
            {/* Core Autoplay Canvas (Clean View) */}
            <CanvasScroller images={images} frameCount={FRAME_COUNT} />
            <HeadsUpDisplay />
          </section>

          {/* Technical Specs Information Below with Theme Background */}
          <SpecMatrix />

          {/* Calibre AE-01 Technical Specifications */}
          <SpecsSection />

          {/* Brand Heritage Section */}
          <AboutSection />
        </main>
      )}
    </>
  );
}
