'use client';

export default function FramePreloader({ progress }) {
  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-basalt text-sandstone">
      <div className="font-serif text-2xl tracking-[0.2em] mb-4">ÆTHEL</div>
      <div className="font-mono text-sm tracking-widest text-chalk">
        INITIALIZING KINETICS
      </div>
      <div className="mt-8 relative w-64 h-[1px] bg-olive">
        <div 
          className="absolute top-0 left-0 h-full bg-terracotta transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-4 font-mono text-xs text-bronze">{progress}%</div>
    </div>
  );
}
