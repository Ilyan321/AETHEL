"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-basalt/85 backdrop-blur-md border-b border-terracotta/50 py-6 drop-shadow-xl' 
          : 'bg-transparent border-b border-transparent py-8'
      }`}
    >
      <div className="max-w-[90vw] mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="font-serif text-2xl tracking-[0.2em] text-sandstone cursor-pointer drop-shadow-lg">
          ÆTHEL
        </div>

        {/* Center: Technical Links */}
        <div className="hidden md:flex space-x-12">
          {['THE MONOLITH', 'CALIBRE Æ-01', 'HERITAGE'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="font-mono text-xs tracking-[0.2em] text-chalk/70 hover:text-white transition-colors duration-300 drop-shadow-md"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Action */}
        <button className="font-mono text-xs tracking-widest text-terracotta hover:text-white transition-colors duration-300 group flex items-center drop-shadow-md cursor-pointer pointer-events-auto">
          <span className="opacity-50 mr-2 group-hover:opacity-100 transition-opacity">[</span>
          REQUEST ALLOCATION
          <span className="opacity-50 ml-2 group-hover:opacity-100 transition-opacity">]</span>
        </button>
        
      </div>
    </nav>
  );
}
