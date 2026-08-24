export default function AboutSection() {
  return (
    <section id="about" className="relative z-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1412] via-basalt to-basalt border-t border-olive py-40 px-[10vw]">
      
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="font-mono text-terracotta text-sm tracking-[0.3em] mb-8">HERITAGE & VISION</div>
        <h2 className="font-serif text-5xl text-sandstone leading-tight mb-12">
          THE RELENTLESS PURSUIT OF ABSOLUTE PRECISION.
        </h2>
        <div className="w-[1px] h-24 bg-terracotta/50 mx-auto mb-12"></div>
        <p className="font-sans text-chalk font-light leading-loose text-lg mx-auto max-w-2xl">
          ÆTHEL was founded on a singular philosophy: to strip away the superfluous and elevate the essential. 
          By combining forged carbon architecture with hyper-accurate kinetic escapements, we create timepieces that are not merely worn, but experienced. 
          Each Monolith is meticulously assembled by hand, limited to an edition of exactly 50 pieces worldwide, ensuring that our obsession with perfection remains uncompromised.
        </p>
      </div>
    </section>
  );
}
