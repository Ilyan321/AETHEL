"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isPreOrderOpen, setPreOrderOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[85vw] max-w-4xl z-50 bg-basalt/40 backdrop-blur-md border border-white/10 py-2 px-8 rounded-full shadow-2xl">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="font-serif text-2xl tracking-[0.2em] text-sandstone cursor-pointer drop-shadow-lg" onClick={() => window.scrollTo(0,0)}>
            ÆTHEL
          </div>

          {/* Center: Technical Links */}
          <div className="hidden md:flex space-x-12">
            {['DESIGN', 'SPECS', 'ABOUT'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs tracking-[0.2em] text-chalk/70 hover:text-white transition-colors duration-300 drop-shadow-md"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Action */}
          <button 
            onClick={() => setPreOrderOpen(true)}
            className="font-mono text-xs tracking-widest text-terracotta hover:text-white transition-colors duration-300 group flex items-center drop-shadow-md cursor-pointer pointer-events-auto"
          >
            PRE-ORDER
          </button>
          
        </div>
      </nav>

      {/* PRE-ORDER MODAL */}
      {isPreOrderOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#161817] border border-terracotta/20 p-10 sm:p-12 shadow-2xl">
            <button onClick={() => setPreOrderOpen(false)} className="absolute top-6 right-6 font-mono text-white/40 hover:text-white transition-colors text-xl">✕</button>
            
            <div className="font-mono text-terracotta text-xs tracking-[0.3em] mb-4">EDITION 00 / 50</div>
            <h2 className="font-serif text-4xl text-sandstone mb-6">SECURE ALLOCATION</h2>
            
            <p className="font-sans text-white/60 font-light mb-10 leading-relaxed text-sm">
              The Calibre Æ-01 Monolith is strictly restricted to 50 physical examples worldwide. Allocation is granted exclusively via private review. 
            </p>

            <form className="space-y-6 font-mono text-xs tracking-widest" onSubmit={(e) => { e.preventDefault(); alert("Application Dossier Submitted."); setPreOrderOpen(false); }}>
              
              <div className="border-b border-white/20 focus-within:border-terracotta transition-colors pb-1">
                <input type="text" placeholder="FULL LEGAL NAME" required className="bg-transparent text-white placeholder-white/30 focus:outline-none w-full py-2" />
              </div>
              
              <div className="border-b border-white/20 focus-within:border-terracotta transition-colors pb-1">
                <input type="email" placeholder="PRIVATE EMAIL" required className="bg-transparent text-white placeholder-white/30 focus:outline-none w-full py-2" />
              </div>

              <div className="border-b border-white/20 focus-within:border-terracotta transition-colors pb-1">
                <input type="text" placeholder="PRIMARY RESIDENCE (CITY/COUNTRY)" required className="bg-transparent text-white placeholder-white/30 focus:outline-none w-full py-2" />
              </div>

              <div className="border-b border-white/20 focus-within:border-terracotta transition-colors pb-1">
                <input type="text" placeholder="NOTABLE HOROLOGICAL PIECES (OPTIONAL)" className="bg-transparent text-white placeholder-white/30 focus:outline-none w-full py-2" />
              </div>

              <button type="submit" className="w-full mt-6 border border-terracotta text-terracotta hover:bg-terracotta hover:text-black py-4 transition-all duration-300 font-bold tracking-[0.2em]">
                SUBMIT DOSSIER
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
