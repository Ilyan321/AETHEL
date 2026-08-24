"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-basalt/30 backdrop-blur-md border-b border-white/5 py-6 shadow-xl">
      <div className="max-w-[90vw] mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="font-serif text-2xl tracking-[0.2em] text-sandstone cursor-pointer drop-shadow-lg">
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
        <button className="font-mono text-xs tracking-widest text-terracotta hover:text-white transition-colors duration-300 group flex items-center drop-shadow-md cursor-pointer pointer-events-auto">
          PRE-ORDER
        </button>
        
      </div>
    </nav>
  );
}
