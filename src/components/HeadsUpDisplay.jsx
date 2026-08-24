'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeadsUpDisplay() {
  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);
  const layer4 = useRef(null);

  useEffect(() => {
    // Master Autoplay Timeline (10 seconds for 300 frames) synced with CanvasScroller
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: 0s to 2.2s
    tl.fromTo(layer1.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0);
    tl.to(layer1.current, { opacity: 0, y: -50, duration: 0.4, ease: 'power2.in' }, 1.8);

    // Phase 2: 2.2s to 4.8s
    tl.fromTo(layer2.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 2.2);
    tl.to(layer2.current, { opacity: 0, y: -50, duration: 0.6, ease: 'power2.in' }, 4.2);

    // Phase 3: 4.8s to 8.2s
    tl.fromTo(layer3.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 4.8);
    tl.to(layer3.current, { opacity: 0, y: -50, duration: 0.4, ease: 'power2.in' }, 7.8);

    // Phase 4: 8.2s to 10s
    tl.fromTo(layer4.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 8.2);
    tl.to(layer4.current, { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' }, 9.5);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-30">
      
      {/* Layer 1 */}
      <div ref={layer1} className="absolute top-1/2 -translate-y-1/2 left-[10vw] max-w-md border-l-2 border-terracotta pl-8 opacity-0">
        <div className="font-mono text-bronze text-xs tracking-[0.2em] mb-4">PHASE 01 / CHASSIS</div>
        <h2 className="font-serif text-4xl text-sandstone leading-tight mb-4 text-shadow-sm">MONOLITH ARCHITECTURE</h2>
        <p className="font-sans text-chalk font-light leading-relaxed mb-6">
          Forged Basalt Carbon shell fused to a Grade 5 Titanium (Ti-6Al-4V) core. Absolute structural rigidity.
        </p>
        <ul className="border-t border-olive pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-chalk">CASING</span><span>42.5MM FORGED CARBON</span></li>
          <li className="flex justify-between"><span className="text-chalk">CHASSIS</span><span>GRADE 5 TITANIUM</span></li>
          <li className="flex justify-between"><span className="text-chalk">WEIGHT</span><span>46.5 GRAMS</span></li>
        </ul>
      </div>

      {/* Layer 2 */}
      <div ref={layer2} className="absolute top-1/2 -translate-y-1/2 left-[10vw] max-w-md border-l-2 border-terracotta pl-8 opacity-0">
        <div className="font-mono text-bronze text-xs tracking-[0.2em] mb-4">PHASE 02 / CRYSTAL</div>
        <h2 className="font-serif text-4xl text-sandstone leading-tight mb-4 text-shadow-sm">SAPPHIRE ELEVATION</h2>
        <p className="font-sans text-chalk font-light leading-relaxed mb-6">
          Domed synthetic corundum sapphire crystal. Dual anti-reflective coating eliminates optical distortion.
        </p>
        <ul className="border-t border-olive pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-chalk">MATERIAL</span><span>SYNTHETIC CORUNDUM</span></li>
          <li className="flex justify-between"><span className="text-chalk">HARDNESS</span><span>9 MOHS (VICKERS 2000+)</span></li>
          <li className="flex justify-between"><span className="text-chalk">COATING</span><span>DUAL AR COATING</span></li>
        </ul>
      </div>

      {/* Layer 3 */}
      <div ref={layer3} className="absolute top-1/2 -translate-y-1/2 right-[10vw] max-w-md border-r-2 border-terracotta pr-8 text-right opacity-0">
        <div className="font-mono text-bronze text-xs tracking-[0.2em] mb-4">PHASE 03 / MOVEMENT</div>
        <h2 className="font-serif text-4xl text-sandstone leading-tight mb-4 text-shadow-sm">KINETIC ESCAPEMENT</h2>
        <p className="font-sans text-chalk font-light leading-relaxed mb-6 ml-auto">
          One-minute flying tourbillon in a titanium cage actively counteracts gravitational positional errors.
        </p>
        <ul className="border-t border-olive pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span>CALIBRE Æ-01</span><span className="text-chalk">CALIBRE</span></li>
          <li className="flex justify-between"><span>28,800 VPH (4HZ)</span><span className="text-chalk">FREQUENCY</span></li>
          <li className="flex justify-between"><span>72-HOUR TWIN BARREL</span><span className="text-chalk">RESERVE</span></li>
        </ul>
      </div>

      {/* Layer 4 */}
      <div ref={layer4} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center opacity-0 pointer-events-auto">
        <div className="font-mono text-bronze text-xs tracking-[0.2em] mb-4">PHASE 04 / ACQUISITION</div>
        <h2 className="font-serif text-4xl text-sandstone leading-tight mb-8 text-shadow-sm">FINAL ASSEMBLY</h2>
        <div className="border border-olive px-6 py-2 inline-block font-mono text-sm text-chalk mb-8">
          EDITION 00 / 50
        </div>
      </div>

    </div>
  );
}
