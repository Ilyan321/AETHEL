export default function SpecMatrix() {
  const phases = [
    {
      title: "MONOLITH ARCHITECTURE",
      subtitle: "PHASE 01 / CHASSIS",
      desc: "Forged Basalt Carbon shell fused to a Grade 5 Titanium (Ti-6Al-4V) core. Absolute structural rigidity.",
      specs: [
        { label: "CASING", value: "42.5MM FORGED CARBON" },
        { label: "CHASSIS", value: "GRADE 5 TITANIUM" },
        { label: "WEIGHT", value: "46.5 GRAMS" }
      ]
    },
    {
      title: "SAPPHIRE ELEVATION",
      subtitle: "PHASE 02 / CRYSTAL",
      desc: "Domed synthetic corundum sapphire crystal. Dual anti-reflective coating eliminates optical distortion.",
      specs: [
        { label: "MATERIAL", value: "SYNTHETIC CORUNDUM" },
        { label: "HARDNESS", value: "9 MOHS (2000+ VICKERS)" },
        { label: "COATING", value: "DUAL AR COATING" }
      ]
    },
    {
      title: "KINETIC ESCAPEMENT",
      subtitle: "PHASE 03 / MOVEMENT",
      desc: "One-minute flying tourbillon in a titanium cage actively counteracts gravitational positional errors.",
      specs: [
        { label: "CALIBRE", value: "CALIBRE Æ-01" },
        { label: "FREQUENCY", value: "28,800 VPH (4HZ)" },
        { label: "RESERVE", value: "72-HOUR TWIN BARREL" }
      ]
    }
  ];

  return (
    <section id="design" className="relative z-40 bg-gradient-to-br from-basalt via-[#1a1412] to-[#2a1710] border-t border-olive py-32 px-[10vw]">
      
      {/* Subtle overlay texture/noise if wanted, or just clean gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-terracotta/10 via-transparent to-transparent pointer-events-none"></div>

      <h2 className="font-serif text-3xl text-sandstone text-center mb-24 tracking-widest uppercase">
        Architectural Deconstruction
      </h2>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {phases.map((phase, idx) => (
          <div 
            key={idx} 
            className="group relative border-l border-olive pl-8 hover:border-terracotta transition-colors duration-500"
          >
            <div className="font-mono text-terracotta text-xs tracking-[0.2em] mb-4">
              {phase.subtitle}
            </div>
            <h3 className="font-serif text-2xl text-sandstone mb-4 group-hover:text-white transition-colors">
              {phase.title}
            </h3>
            <p className="font-sans text-chalk font-light leading-relaxed mb-8 h-24">
              {phase.desc}
            </p>
            
            <ul className="border-t border-olive/50 pt-6 space-y-4 font-mono text-xs tracking-widest">
              {phase.specs.map((s, i) => (
                <li key={i} className="flex flex-col space-y-1">
                  <span className="text-chalk opacity-70">{s.label}</span>
                  <span className="text-white">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
