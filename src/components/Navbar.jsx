"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isSpecsOpen, setSpecsOpen] = useState(false);
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
            <a href="#design" className="font-mono text-xs tracking-[0.2em] text-chalk/70 hover:text-white transition-colors duration-300 drop-shadow-md">
              DESIGN
            </a>
            <button onClick={() => setSpecsOpen(true)} className="font-mono text-xs tracking-[0.2em] text-chalk/70 hover:text-white transition-colors duration-300 drop-shadow-md cursor-pointer">
              SPECS
            </button>
            <a href="#about" className="font-mono text-xs tracking-[0.2em] text-chalk/70 hover:text-white transition-colors duration-300 drop-shadow-md">
              ABOUT
            </a>
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

      {/* SPECS MODAL */}
      {isSpecsOpen && (
        <div className="fixed inset-0 z-[100] bg-basalt/90 backdrop-blur-lg flex items-center justify-center p-8">
          <div className="relative w-full max-w-3xl bg-[#121514] border border-olive/50 p-12 shadow-2xl">
            <button onClick={() => setSpecsOpen(false)} className="absolute top-6 right-6 font-mono text-chalk hover:text-white text-xl">✕</button>
            <div className="font-mono text-terracotta text-sm tracking-[0.3em] mb-4">CALIBRE Æ-01</div>
            <h2 className="font-serif text-4xl text-sandstone mb-12">TECHNICAL SPECIFICATIONS</h2>
            <div className="grid grid-cols-2 gap-8 font-mono text-sm">
              <div className="border-b border-olive/30 pb-4"><span className="text-chalk block mb-1">MOVEMENT</span><span className="text-white">One-minute flying tourbillon</span></div>
              <div className="border-b border-olive/30 pb-4"><span className="text-chalk block mb-1">FREQUENCY</span><span className="text-white">28,800 VPH (4Hz)</span></div>
              <div className="border-b border-olive/30 pb-4"><span className="text-chalk block mb-1">POWER RESERVE</span><span className="text-white">72 Hours (Twin Barrel)</span></div>
              <div className="border-b border-olive/30 pb-4"><span className="text-chalk block mb-1">JEWELS</span><span className="text-white">35 Rubies</span></div>
              <div className="border-b border-olive/30 pb-4"><span className="text-chalk block mb-1">WATER RESISTANCE</span><span className="text-white">10 ATM (100 Meters)</span></div>
              <div className="border-b border-olive/30 pb-4"><span className="text-chalk block mb-1">TOTAL WEIGHT</span><span className="text-white">46.5 Grams</span></div>
            </div>
          </div>
        </div>
      )}

      {/* PRE-ORDER MODAL */}
      {isPreOrderOpen && (
        <div className="fixed inset-0 z-[100] bg-basalt/90 backdrop-blur-lg flex items-center justify-center p-8">
          <div className="relative w-full max-w-xl bg-gradient-to-br from-basalt to-[#2a1710] border border-terracotta/30 p-12 shadow-2xl">
            <button onClick={() => setPreOrderOpen(false)} className="absolute top-6 right-6 font-mono text-chalk hover:text-white text-xl">✕</button>
            <div className="font-mono text-terracotta text-sm tracking-[0.3em] mb-4">EDITION 00 / 50</div>
            <h2 className="font-serif text-4xl text-white mb-8">REQUEST ALLOCATION</h2>
            <p className="font-sans text-chalk font-light mb-8">
              Due to the highly limited production run of 50 pieces, allocation is strictly by application. Please submit your details for consideration.
            </p>
            <form className="space-y-6 flex flex-col font-mono text-sm" onSubmit={(e) => { e.preventDefault(); alert("Allocation requested."); setPreOrderOpen(false); }}>
              <input type="text" placeholder="FULL NAME" required className="bg-transparent border-b border-olive text-white p-2 focus:outline-none focus:border-terracotta transition-colors" />
              <input type="email" placeholder="EMAIL ADDRESS" required className="bg-transparent border-b border-olive text-white p-2 focus:outline-none focus:border-terracotta transition-colors" />
              <input type="text" placeholder="COLLECTOR REFERENCE (OPTIONAL)" className="bg-transparent border-b border-olive text-white p-2 focus:outline-none focus:border-terracotta transition-colors" />
              <button type="submit" className="mt-8 bg-terracotta text-basalt font-bold tracking-widest py-4 hover:bg-bronze transition-colors">SUBMIT APPLICATION</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
