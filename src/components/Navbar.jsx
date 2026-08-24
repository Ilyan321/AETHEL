"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[85vw] max-w-4xl z-50 bg-basalt/40 backdrop-blur-md border border-white/10 py-2 px-8 rounded-full shadow-2xl">
      <div className="flex items-center justify-between">
        
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
