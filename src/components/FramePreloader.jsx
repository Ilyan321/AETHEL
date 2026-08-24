'use client';

export default function FramePreloader({ progress }) {
  return (
    <div className="fixed inset-0 z-[200] bg-[#282828] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="font-mono text-terracotta text-[10px] tracking-[0.4em] mb-4">ÆTHEL</div>
        <div className="w-24 h-[1px] bg-white/5 overflow-hidden">
          <div 
            className="h-full bg-terracotta transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
