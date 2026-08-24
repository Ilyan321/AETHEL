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
    tl.fromTo(layer1.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 0);
    tl.to(layer1.current, { opacity: 0, x: 30, duration: 0.8, ease: 'power2.in' }, 3.2);

    // Phase 2: 4s to 8s
    tl.fromTo(layer2.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 4);
    tl.to(layer2.current, { opacity: 0, x: 30, duration: 0.8, ease: 'power2.in' }, 7.2);

    // Phase 3: 8s to 12s
    tl.fromTo(layer3.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 8);
    tl.to(layer3.current, { opacity: 0, x: -30, duration: 0.8, ease: 'power2.in' }, 11.2);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
      
      {/* Layer 1 */}
      <div ref={layer1} className="absolute top-1/2 -translate-y-1/2 left-[5vw] max-w-md border-l-2 border-terracotta pl-6 opacity-0">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 01 / CHASSIS</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-4 drop-shadow-lg">MONOLITH ARCHITECTURE</h2>
        <p className="font-sans text-sandstone font-light leading-relaxed mb-6 drop-shadow-md">
          Forged Basalt Carbon shell fused to a Grade 5 Titanium (Ti-6Al-4V) core. Absolute structural rigidity.
        </p>
        <ul className="border-t border-olive/80 pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-chalk">CASING</span><span className="text-white">42.5MM FORGED CARBON</span></li>
          <li className="flex justify-between"><span className="text-chalk">CHASSIS</span><span className="text-white">GRADE 5 TITANIUM</span></li>
          <li className="flex justify-between"><span className="text-chalk">WEIGHT</span><span className="text-white">46.5 GRAMS</span></li>
        </ul>
      </div>

      {/* Layer 2 */}
      <div ref={layer2} className="absolute top-1/2 -translate-y-1/2 left-[5vw] max-w-md border-l-2 border-terracotta pl-6 opacity-0">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 02 / CRYSTAL</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-4 drop-shadow-lg">SAPPHIRE ELEVATION</h2>
        <p className="font-sans text-sandstone font-light leading-relaxed mb-6 drop-shadow-md">
          Domed synthetic corundum sapphire crystal. Dual anti-reflective coating eliminates optical distortion.
        </p>
        <ul className="border-t border-olive/80 pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-chalk">MATERIAL</span><span className="text-white">SYNTHETIC CORUNDUM</span></li>
          <li className="flex justify-between"><span className="text-chalk">HARDNESS</span><span className="text-white">9 MOHS (VICKERS 2000+)</span></li>
          <li className="flex justify-between"><span className="text-chalk">COATING</span><span className="text-white">DUAL AR COATING</span></li>
        </ul>
      </div>

      {/* Layer 3 */}
      <div ref={layer3} className="absolute top-1/2 -translate-y-1/2 right-[5vw] max-w-md border-r-2 border-terracotta pr-6 text-right opacity-0">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 03 / MOVEMENT</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-4 drop-shadow-lg">KINETIC ESCAPEMENT</h2>
        <p className="font-sans text-sandstone font-light leading-relaxed mb-6 ml-auto drop-shadow-md">
          One-minute flying tourbillon in a titanium cage actively counteracts gravitational positional errors.
        </p>
        <ul className="border-t border-olive/80 pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-white">CALIBRE Æ-01</span><span className="text-chalk">CALIBRE</span></li>
          <li className="flex justify-between"><span className="text-white">28,800 VPH (4HZ)</span><span className="text-chalk">FREQUENCY</span></li>
          <li className="flex justify-between"><span className="text-white">72-HOUR TWIN BARREL</span><span className="text-chalk">RESERVE</span></li>
        </ul>
      </div>

    </div>
  );
}
