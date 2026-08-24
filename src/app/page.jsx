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
        <main className="relative w-full bg-black overflow-x-hidden">
          
          {/* Ambient Glow Orbs (Option 1) fixed in the deep background */}
          <div className="fixed top-[20vh] -left-[10vw] w-[50vw] h-[50vw] bg-terracotta/20 rounded-full mix-blend-screen blur-[120px] opacity-70 pointer-events-none z-0"></div>
          <div className="fixed bottom-[10vh] -right-[10vw] w-[60vw] h-[60vw] bg-bronze/10 rounded-full mix-blend-screen blur-[150px] opacity-60 pointer-events-none z-0"></div>

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
