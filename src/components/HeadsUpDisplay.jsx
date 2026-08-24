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
    // Master Autoplay Timeline (20 seconds) synced with CanvasScroller
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: 0s to 5s
    tl.fromTo(layer1.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }, 0);
    tl.to(layer1.current, { opacity: 0, x: 30, duration: 1, ease: 'power2.in' }, 4);

    // Phase 2: 5s to 10s
    tl.fromTo(layer2.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }, 5);
    tl.to(layer2.current, { opacity: 0, x: 30, duration: 1, ease: 'power2.in' }, 9);

    // Phase 3: 10s to 15s
    tl.fromTo(layer3.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }, 10);
    tl.to(layer3.current, { opacity: 0, x: -30, duration: 1, ease: 'power2.in' }, 14);

    // Phase 4: 15s to 20s
    tl.fromTo(layer4.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }, 15);
    tl.to(layer4.current, { opacity: 0, y: -30, duration: 1, ease: 'power2.in' }, 19);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
      
      {/* Layer 1 */}
      <div ref={layer1} className="absolute top-1/2 -translate-y-1/2 left-[5vw] max-w-md border-l-2 border-terracotta bg-basalt/70 backdrop-blur-md p-8 shadow-2xl opacity-0">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 01 / CHASSIS</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-4">MONOLITH ARCHITECTURE</h2>
        <p className="font-sans text-sandstone font-light leading-relaxed mb-6">
          Forged Basalt Carbon shell fused to a Grade 5 Titanium (Ti-6Al-4V) core. Absolute structural rigidity.
        </p>
        <ul className="border-t border-olive/50 pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-chalk">CASING</span><span className="text-white">42.5MM FORGED CARBON</span></li>
          <li className="flex justify-between"><span className="text-chalk">CHASSIS</span><span className="text-white">GRADE 5 TITANIUM</span></li>
          <li className="flex justify-between"><span className="text-chalk">WEIGHT</span><span className="text-white">46.5 GRAMS</span></li>
        </ul>
      </div>

      {/* Layer 2 */}
      <div ref={layer2} className="absolute top-1/2 -translate-y-1/2 left-[5vw] max-w-md border-l-2 border-terracotta bg-basalt/70 backdrop-blur-md p-8 shadow-2xl opacity-0">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 02 / CRYSTAL</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-4">SAPPHIRE ELEVATION</h2>
        <p className="font-sans text-sandstone font-light leading-relaxed mb-6">
          Domed synthetic corundum sapphire crystal. Dual anti-reflective coating eliminates optical distortion.
        </p>
        <ul className="border-t border-olive/50 pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-chalk">MATERIAL</span><span className="text-white">SYNTHETIC CORUNDUM</span></li>
          <li className="flex justify-between"><span className="text-chalk">HARDNESS</span><span className="text-white">9 MOHS (VICKERS 2000+)</span></li>
          <li className="flex justify-between"><span className="text-chalk">COATING</span><span className="text-white">DUAL AR COATING</span></li>
        </ul>
      </div>

      {/* Layer 3 */}
      <div ref={layer3} className="absolute top-1/2 -translate-y-1/2 right-[5vw] max-w-md border-r-2 border-terracotta bg-basalt/70 backdrop-blur-md p-8 shadow-2xl text-right opacity-0">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 03 / MOVEMENT</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-4">KINETIC ESCAPEMENT</h2>
        <p className="font-sans text-sandstone font-light leading-relaxed mb-6 ml-auto">
          One-minute flying tourbillon in a titanium cage actively counteracts gravitational positional errors.
        </p>
        <ul className="border-t border-olive/50 pt-4 font-mono text-xs space-y-2">
          <li className="flex justify-between"><span className="text-white">CALIBRE Æ-01</span><span className="text-chalk">CALIBRE</span></li>
          <li className="flex justify-between"><span className="text-white">28,800 VPH (4HZ)</span><span className="text-chalk">FREQUENCY</span></li>
          <li className="flex justify-between"><span className="text-white">72-HOUR TWIN BARREL</span><span className="text-chalk">RESERVE</span></li>
        </ul>
      </div>

      {/* Layer 4 */}
      <div ref={layer4} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center bg-basalt/70 backdrop-blur-md p-10 border border-olive/50 shadow-2xl opacity-0 pointer-events-auto">
        <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">PHASE 04 / ACQUISITION</div>
        <h2 className="font-serif text-4xl text-white leading-tight mb-8">FINAL ASSEMBLY</h2>
        <div className="border border-terracotta px-6 py-2 inline-block font-mono text-sm text-sandstone mb-2">
          EDITION 00 / 50
        </div>
      </div>

    </div>
  );
}
