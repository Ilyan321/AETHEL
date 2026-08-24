export default function AboutSection() {
  return (
    <section id="about" className="relative z-40 bg-transparent border-t-2 border-terracotta/30 shadow-[0_-10px_30px_rgba(184,93,59,0.1)] py-40 px-[10vw]">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="font-mono text-terracotta text-sm tracking-[0.3em] mb-8 drop-shadow-md">HERITAGE & VISION</div>
        <h2 className="font-serif text-5xl text-sandstone leading-tight mb-12 drop-shadow-lg">
          THE RELENTLESS PURSUIT OF ABSOLUTE PRECISION.
        </h2>
        <div className="w-[2px] h-24 bg-bronze/70 shadow-[0_0_15px_rgba(163,131,80,0.3)] mx-auto mb-12"></div>
        <p className="font-sans text-chalk font-light leading-loose text-lg mx-auto max-w-2xl drop-shadow-sm">
          ÆTHEL was founded on a singular philosophy: to strip away the superfluous and elevate the essential. 
          By combining forged carbon architecture with hyper-accurate kinetic escapements, we create timepieces that are not merely worn, but experienced. 
          Each Monolith is meticulously assembled by hand, limited to an edition of exactly 50 pieces worldwide, ensuring that our obsession with perfection remains uncompromised.
        </p>
      </div>
    </section>
  );
}
