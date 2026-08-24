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
      <div ref={layer1} className="absolute bottom-[15vh] left-[8vw] max-w-md opacity-0 flex space-x-6">
        <div className="w-[2px] h-full bg-terracotta/80 shadow-[0_0_8px_rgba(184,93,59,0.5)]"></div>
        <div className="py-1">
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-2 drop-shadow-md">PHASE 01 / EXPLODED VIEW</div>
          <h2 className="font-serif text-xl text-white tracking-widest mb-3 drop-shadow-lg">STRUCTURAL DECONSTRUCTION</h2>
          <p className="font-sans text-xs text-sandstone font-light leading-relaxed drop-shadow-md">
            The forged basalt carbon casing unbinds, revealing the inner titanium core architecture.
          </p>
        </div>
      </div>

      {/* Minimal Layer 2 */}
      <div ref={layer2} className="absolute bottom-[15vh] left-[8vw] max-w-md opacity-0 flex space-x-6">
        <div className="w-[2px] h-full bg-terracotta/80 shadow-[0_0_8px_rgba(184,93,59,0.5)]"></div>
        <div className="py-1">
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-2 drop-shadow-md">PHASE 02 / COMPONENT SEPARATION</div>
          <h2 className="font-serif text-xl text-white tracking-widest mb-3 drop-shadow-lg">KINETIC ISOLATION</h2>
          <p className="font-sans text-xs text-sandstone font-light leading-relaxed drop-shadow-md">
            Individual mechanical tolerances and the flying tourbillon cage are exposed in zero-gravity suspension.
          </p>
        </div>
      </div>

      {/* Minimal Layer 3 */}
      <div ref={layer3} className="absolute bottom-[15vh] right-[8vw] max-w-md opacity-0 flex space-x-6 text-right justify-end">
        <div className="py-1">
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-2 drop-shadow-md">PHASE 03 / FINAL SYNTHESIS</div>
          <h2 className="font-serif text-xl text-white tracking-widest mb-3 drop-shadow-lg">HARMONIC REASSEMBLY</h2>
          <p className="font-sans text-xs text-sandstone font-light leading-relaxed drop-shadow-md ml-auto">
            Over 300 micro-components seamlessly realign into the definitive Monolith structure.
          </p>
        </div>
        <div className="w-[2px] h-full bg-terracotta/80 shadow-[0_0_8px_rgba(184,93,59,0.5)]"></div>
      </div>

    </div>
  );
}
