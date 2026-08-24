export default function SpecMatrix() {
  const specs = [
    { label: "THERMAL EXPANSION", value: "0.002% / 100°C" },
    { label: "WATER RESISTANCE", value: "10 ATM (100M)" },
    { label: "WEIGHT (W/O STRAP)", value: "46.5 GRAMS" },
    { label: "MAGNETIC RESIST", value: "4,800 A/m" },
    { label: "SHOCK TOLERANCE", value: "5,000 Gs" },
    { label: "LUMINESCENCE", value: "X1 GRADE" },
  ];

  return (
    <section className="relative z-40 bg-basalt border-t border-olive py-32 px-[10vw]">
      <h2 className="font-serif text-3xl text-sandstone text-center mb-16 tracking-wide">
        TECHNICAL TOLERANCES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specs.map((spec, idx) => (
          <div 
            key={idx} 
            className="group relative border border-olive p-8 hover:border-bronze transition-colors duration-300"
          >
            {/* Corner Accent */}
            <div className="absolute top-2 right-2 text-chalk font-mono text-[10px] opacity-50 group-hover:opacity-100 group-hover:text-terracotta transition-opacity">
              +
            </div>
            
            <div className="font-mono text-xs tracking-widest text-chalk mb-4">
              {spec.label}
            </div>
            <div className="font-serif text-2xl text-sandstone group-hover:text-bronze transition-colors">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
