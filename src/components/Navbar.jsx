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
        <div className="fixed inset-0 z-[100] bg-[#161817]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-3xl bg-[#282828] border-t-2 border-terracotta/40 shadow-[0_0_50px_rgba(184,93,59,0.15)] p-10 sm:p-14">
            <button onClick={() => setPreOrderOpen(false)} className="absolute top-8 right-8 font-mono text-chalk hover:text-terracotta transition-colors text-2xl">✕</button>
            
            <div className="font-mono text-terracotta text-xs tracking-[0.4em] mb-4 drop-shadow-md">EDITION 00 / 50</div>
            <h2 className="font-serif text-4xl sm:text-5xl text-sandstone mb-6 tracking-wide drop-shadow-lg">SECURE ALLOCATION</h2>
            <div className="w-[2px] h-12 bg-bronze/50 shadow-[0_0_10px_rgba(163,131,80,0.5)] mb-8"></div>
            
            <p className="font-sans text-chalk/80 font-light mb-12 leading-relaxed text-sm max-w-xl">
              The Calibre Æ-01 Monolith is strictly restricted to exactly 50 physical examples worldwide. 
              Allocation is granted exclusively via private review. 
              Please submit your collector dossier below for consideration.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 font-mono text-xs tracking-widest" onSubmit={(e) => { e.preventDefault(); alert("Application Dossier Submitted."); setPreOrderOpen(false); }}>
              
              <div className="flex flex-col border-b border-white/10 focus-within:border-terracotta transition-colors pb-2 group">
                <label className="text-white/40 mb-2 group-focus-within:text-terracotta transition-colors">FULL LEGAL NAME</label>
                <input type="text" required className="bg-transparent text-white focus:outline-none" />
              </div>
              
              <div className="flex flex-col border-b border-white/10 focus-within:border-terracotta transition-colors pb-2 group">
                <label className="text-white/40 mb-2 group-focus-within:text-terracotta transition-colors">PRIVATE EMAIL</label>
                <input type="email" required className="bg-transparent text-white focus:outline-none" />
              </div>

              <div className="flex flex-col border-b border-white/10 focus-within:border-terracotta transition-colors pb-2 group">
                <label className="text-white/40 mb-2 group-focus-within:text-terracotta transition-colors">PRIMARY RESIDENCE (CITY / COUNTRY)</label>
                <input type="text" required className="bg-transparent text-white focus:outline-none" />
              </div>

              <div className="flex flex-col border-b border-white/10 focus-within:border-terracotta transition-colors pb-2 group">
                <label className="text-white/40 mb-2 group-focus-within:text-terracotta transition-colors">PREFERRED EDITION NUMBER (01-50)</label>
                <input type="number" min="1" max="50" className="bg-transparent text-white focus:outline-none" />
              </div>

              <div className="flex flex-col border-b border-white/10 focus-within:border-terracotta transition-colors pb-2 group md:col-span-2">
                <label className="text-white/40 mb-2 group-focus-within:text-terracotta transition-colors">CURRENT HOROLOGICAL COLLECTION (NOTABLE PIECES)</label>
                <input type="text" className="bg-transparent text-white focus:outline-none" />
              </div>

              <button type="submit" className="md:col-span-2 mt-4 bg-transparent border border-terracotta text-terracotta hover:bg-terracotta hover:text-black hover:shadow-[0_0_20px_rgba(184,93,59,0.4)] font-bold tracking-[0.3em] py-5 transition-all duration-300">
                SUBMIT DOSSIER
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
