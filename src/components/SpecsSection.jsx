export default function SpecsSection() {
  return (
    <section id="specs" className="relative z-40 bg-transparent border-t-2 border-terracotta/30 shadow-[0_-10px_30px_rgba(184,93,59,0.1)] py-32 px-[10vw]">

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-terracotta text-sm tracking-[0.3em] mb-4 text-center drop-shadow-md">CALIBRE Æ-01</div>
        <h2 className="font-serif text-4xl text-sandstone mb-20 text-center tracking-widest drop-shadow-lg">TECHNICAL SPECIFICATIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-mono text-sm tracking-widest">
          <div className="group border-t-2 border-olive/30 pt-6 hover:border-bronze transition-all duration-300 hover:shadow-[0_-15px_20px_-15px_rgba(163,131,80,0.3)]">
            <span className="text-chalk/70 block mb-2">MOVEMENT</span>
            <span className="text-white text-lg">ONE-MINUTE FLYING TOURBILLON</span>
          </div>
          <div className="group border-t-2 border-olive/30 pt-6 hover:border-bronze transition-all duration-300 hover:shadow-[0_-15px_20px_-15px_rgba(163,131,80,0.3)]">
            <span className="text-chalk/70 block mb-2">FREQUENCY</span>
            <span className="text-white text-lg">28,800 VPH (4HZ)</span>
          </div>
          <div className="group border-t-2 border-olive/30 pt-6 hover:border-bronze transition-all duration-300 hover:shadow-[0_-15px_20px_-15px_rgba(163,131,80,0.3)]">
            <span className="text-chalk/70 block mb-2">POWER RESERVE</span>
            <span className="text-white text-lg">72 HOURS (TWIN BARREL)</span>
          </div>
          <div className="group border-t-2 border-olive/30 pt-6 hover:border-bronze transition-all duration-300 hover:shadow-[0_-15px_20px_-15px_rgba(163,131,80,0.3)]">
            <span className="text-chalk/70 block mb-2">JEWELS</span>
            <span className="text-white text-lg">35 RUBIES</span>
          </div>
          <div className="group border-t-2 border-olive/30 pt-6 hover:border-bronze transition-all duration-300 hover:shadow-[0_-15px_20px_-15px_rgba(163,131,80,0.3)]">
            <span className="text-chalk/70 block mb-2">WATER RESISTANCE</span>
            <span className="text-white text-lg">10 ATM (100 METERS)</span>
          </div>
          <div className="group border-t-2 border-olive/30 pt-6 hover:border-bronze transition-all duration-300 hover:shadow-[0_-15px_20px_-15px_rgba(163,131,80,0.3)]">
            <span className="text-chalk/70 block mb-2">TOTAL WEIGHT</span>
            <span className="text-white text-lg">46.5 GRAMS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
