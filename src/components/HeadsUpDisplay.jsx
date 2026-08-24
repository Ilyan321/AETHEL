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
      <div ref={layer1} className="absolute bottom-[15vh] left-[8vw] max-w-md opacity-0 flex space-x-6 bg-basalt/30 backdrop-blur-md px-6 py-6 rounded-lg border border-white/10 shadow-lg">
        <div className="w-[2px] h-full bg-terracotta/80 shadow-[0_0_8px_rgba(184,93,59,0.5)]"></div>
        <div className="pt-2 pb-1">
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-2 drop-shadow-md">PHASE 01 / CHASSIS</div>
          <h2 className="font-serif text-xl text-white tracking-widest mb-3 drop-shadow-lg">FORGED CARBON SHELL</h2>
          <p className="font-sans text-xs text-sandstone font-light leading-relaxed drop-shadow-md">
            An ultra-lightweight Basalt Carbon exoskeleton fused perfectly to a Grade 5 Titanium core.
          </p>
        </div>
      </div>

      {/* Minimal Layer 2 */}
      <div ref={layer2} className="absolute bottom-[15vh] left-[8vw] max-w-md opacity-0 flex space-x-6 bg-basalt/30 backdrop-blur-md px-6 py-6 rounded-lg border border-white/10 shadow-lg">
        <div className="w-[2px] h-full bg-terracotta/80 shadow-[0_0_8px_rgba(184,93,59,0.5)]"></div>
        <div className="pt-2 pb-1">
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-2 drop-shadow-md">PHASE 02 / CRYSTAL</div>
          <h2 className="font-serif text-xl text-white tracking-widest mb-3 drop-shadow-lg">SAPPHIRE ELEVATION</h2>
          <p className="font-sans text-xs text-sandstone font-light leading-relaxed drop-shadow-md">
            Domed synthetic corundum sapphire crystal treated with a dual anti-reflective coating for absolute clarity.
          </p>
        </div>
      </div>

      {/* Minimal Layer 3 */}
      <div ref={layer3} className="absolute bottom-[15vh] right-[8vw] max-w-md opacity-0 flex space-x-6 text-right justify-end bg-basalt/30 backdrop-blur-md px-6 py-6 rounded-lg border border-white/10 shadow-lg">
        <div className="pt-2 pb-1">
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-2 drop-shadow-md">PHASE 03 / MOVEMENT</div>
          <h2 className="font-serif text-xl text-white tracking-widest mb-3 drop-shadow-lg">KINETIC ESCAPEMENT</h2>
          <p className="font-sans text-xs text-sandstone font-light leading-relaxed drop-shadow-md ml-auto">
            The Calibre Æ-01 flying tourbillon actively counteracts gravitational positional errors at 28,800 VPH.
          </p>
        </div>
        <div className="w-[2px] h-full bg-terracotta/80 shadow-[0_0_8px_rgba(184,93,59,0.5)]"></div>
      </div>

    </div>
  );
}
