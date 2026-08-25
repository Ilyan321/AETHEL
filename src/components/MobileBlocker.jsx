'use client';
import { useState, useEffect } from 'react';

export default function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is less than standard tablet/desktop size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#161817] flex flex-col items-center justify-center p-8 text-center">
      <div className="font-mono text-terracotta text-xs tracking-[0.4em] mb-6 drop-shadow-md">ÆTHEL</div>
      
      <h2 className="font-serif text-3xl text-sandstone mb-6 tracking-wide drop-shadow-lg">DESKTOP EXCLUSIVE</h2>
      
      <div className="w-[1px] h-12 bg-bronze/50 shadow-[0_0_10px_rgba(163,131,80,0.5)] mb-8"></div>
      
      <p className="font-sans text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
        This cinematic 3D experience requires dedicated hardware acceleration and is crafted exclusively for desktop displays. 
        <br/><br/>
        Please revisit this link on a laptop or desktop computer to explore the Calibre Æ-01.
      </p>
    </div>
  );
}
