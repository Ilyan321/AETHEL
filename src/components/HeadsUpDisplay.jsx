'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeadsUpDisplay() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    // Master Autoplay Timeline (12 seconds)
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: 0s to 4s
    tl.fromTo(layer1.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 0);
    tl.to(layer1.current, { opacity: 0, x: 20, duration: 0.8, ease: 'power2.in' }, 3.2);

    // Phase 2: 4s to 8s
    tl.fromTo(layer2.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 4);
    tl.to(layer2.current, { opacity: 0, x: 20, duration: 0.8, ease: 'power2.in' }, 7.2);

    // Phase 3: 8s to 12s
    tl.fromTo(layer3.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 8);
    tl.to(layer3.current, { opacity: 0, x: -20, duration: 0.8, ease: 'power2.in' }, 11.2);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
      
      {/* Minimal Layer 1 */}
      <div ref={layer1} className="absolute bottom-[20vh] left-[10vw] opacity-0 flex items-center space-x-4">
        <div className="h-[1px] w-12 bg-terracotta"></div>
        <div>
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-1 drop-shadow-md">PHASE 01</div>
          <h2 className="font-serif text-lg text-white tracking-widest drop-shadow-lg">CHASSIS</h2>
        </div>
      </div>

      {/* Minimal Layer 2 */}
      <div ref={layer2} className="absolute bottom-[20vh] left-[10vw] opacity-0 flex items-center space-x-4">
        <div className="h-[1px] w-12 bg-terracotta"></div>
        <div>
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-1 drop-shadow-md">PHASE 02</div>
          <h2 className="font-serif text-lg text-white tracking-widest drop-shadow-lg">CRYSTAL</h2>
        </div>
      </div>

      {/* Minimal Layer 3 */}
      <div ref={layer3} className="absolute bottom-[20vh] right-[10vw] opacity-0 flex items-center space-x-4 text-right">
        <div>
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-1 drop-shadow-md">PHASE 03</div>
          <h2 className="font-serif text-lg text-white tracking-widest drop-shadow-lg">MOVEMENT</h2>
        </div>
        <div className="h-[1px] w-12 bg-terracotta"></div>
      </div>

    </div>
  );
}
