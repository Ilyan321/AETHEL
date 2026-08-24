export default function SpecsSection() {
  return (
    <section id="specs" className="relative z-40 bg-gradient-to-tr from-basalt via-[#1a1a15] to-[#252119] border-t border-olive py-32 px-[10vw]">
      
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-bronze/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-terracotta text-sm tracking-[0.3em] mb-4 text-center">CALIBRE Æ-01</div>
        <h2 className="font-serif text-4xl text-sandstone mb-20 text-center tracking-widest">TECHNICAL SPECIFICATIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-mono text-sm tracking-widest">
          <div className="border-t border-olive/50 pt-6">
            <span className="text-chalk/70 block mb-2">MOVEMENT</span>
            <span className="text-white text-lg">ONE-MINUTE FLYING TOURBILLON</span>
          </div>
          <div className="border-t border-olive/50 pt-6">
            <span className="text-chalk/70 block mb-2">FREQUENCY</span>
            <span className="text-white text-lg">28,800 VPH (4HZ)</span>
          </div>
          <div className="border-t border-olive/50 pt-6">
            <span className="text-chalk/70 block mb-2">POWER RESERVE</span>
            <span className="text-white text-lg">72 HOURS (TWIN BARREL)</span>
          </div>
          <div className="border-t border-olive/50 pt-6">
            <span className="text-chalk/70 block mb-2">JEWELS</span>
            <span className="text-white text-lg">35 RUBIES</span>
          </div>
          <div className="border-t border-olive/50 pt-6">
            <span className="text-chalk/70 block mb-2">WATER RESISTANCE</span>
            <span className="text-white text-lg">10 ATM (100 METERS)</span>
          </div>
          <div className="border-t border-olive/50 pt-6">
            <span className="text-chalk/70 block mb-2">TOTAL WEIGHT</span>
            <span className="text-white text-lg">46.5 GRAMS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
