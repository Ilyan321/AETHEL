'use client';

export default function FramePreloader({ progress }) {
  return (
    <div className="fixed inset-0 z-[200] bg-[#282828] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="font-mono text-terracotta text-xs tracking-[0.4em] mb-6 drop-shadow-md">ÆTHEL</div>
        <div className="w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div 
            className="h-full bg-terracotta shadow-[0_0_8px_rgba(184,93,59,0.8)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
