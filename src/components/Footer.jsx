'use client';

export default function Footer() {
  return (
    <footer className="relative z-40 bg-[#161817] border-t-2 border-terracotta/20 pt-24 pb-12 px-[10vw]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="md:col-span-5">
          <h2 className="font-serif text-3xl text-sandstone tracking-widest mb-4">ÆTHEL</h2>
          <div className="font-mono text-terracotta text-[10px] tracking-[0.3em] mb-6">HAUTE HORLOGERIE</div>
          <p className="font-sans text-white/40 text-xs leading-relaxed max-w-sm">
            Forging the future of mechanical timekeeping through advanced carbon architecture, uncompromising precision, and obsessive attention to detail.
          </p>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-2 flex flex-col space-y-5 font-mono text-xs tracking-widest">
          <h3 className="text-white mb-4">THE MAISON</h3>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">PHILOSOPHY</a>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">ATELIER</a>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">MASTER CRAFTSMEN</a>
        </div>

        <div className="md:col-span-2 flex flex-col space-y-5 font-mono text-xs tracking-widest">
          <h3 className="text-white mb-4">COLLECTIONS</h3>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">CALIBRE Æ-01</a>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">BESPOKE</a>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">ARCHIVE</a>
        </div>

        <div className="md:col-span-3 flex flex-col space-y-5 font-mono text-xs tracking-widest">
          <h3 className="text-white mb-4">CLIENT SERVICES</h3>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">PRIVATE CONCIERGE</a>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">MAINTENANCE</a>
          <a href="#" className="text-white/40 hover:text-terracotta transition-colors">CERTIFICATE OF ORIGIN</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 font-mono text-[10px] tracking-[0.2em] text-white/30">
        <p>© {new Date().getFullYear()} ÆTHEL HOROLOGY. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0 flex items-center space-x-3 uppercase">
          <span>MADE BY ILYAN KHAN</span>
        </p>
      </div>
    </footer>
  );
}
