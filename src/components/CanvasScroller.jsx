'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getCoverMath } from '@/utils/canvasMath';

export default function CanvasScroller({ images, frameCount }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    const container = containerRef.current;
    
    const sequence = { frame: 0 };
    const triggers = [];

    const render = () => {
      // Ensure dimensions are strictly viewport
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Force CSS size to viewport so the dense buffer scales down
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const img = images[sequence.frame];
      if (img && img.complete) {
        const { drawWidth, drawHeight, offsetX, offsetY } = getCoverMath(img, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Initial render
    render();
    window.addEventListener('resize', render);

    // Autoplay Timeline (12 seconds for faster pacing)
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(sequence, {
      frame: frameCount - 1,
      duration: 12,
      ease: "none",
      snap: "frame",
      onUpdate: render
    });

    return () => {
      window.removeEventListener('resize', render);
      tl.kill();
    };
  }, [images, frameCount]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <canvas 
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {/* Technical Coordinate Overlay Grid */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="var(--color-chalk)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--color-chalk)" strokeWidth="1" strokeDasharray="4 4" />
          <text x="50.5%" y="49.5%" fill="var(--color-chalk)" className="font-mono text-[10px]">0,0</text>
      </svg>
    </div>
  );
}
