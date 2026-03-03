import React from 'react';

export const Marquee = () => {
  const items = ["+200M FATURADOS COM NOSSOS CLIENTES", "+10 ANOS DE MERCADO", "+3 MIL HORAS ECONOMIZADAS"];
  return (
    <div className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* First Band - Cyan */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-16 bg-cyan-primary -rotate-3 flex items-center overflow-hidden border-y border-black/20 z-10 shadow-[0_10px_30px_rgba(0,242,255,0.3)]">
        <div className="flex animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {items.map((item, j) => (
                <React.Fragment key={j}>
                  <span className="text-black font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">{item}</span>
                  <span className="text-black/30 text-2xl">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Second Band - White/Black */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-16 bg-black dark:bg-white rotate-3 flex items-center overflow-hidden border-y border-white/20 dark:border-black/20 z-0 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
        <div className="flex animate-marquee-reverse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {items.map((item, j) => (
                <React.Fragment key={j}>
                  <span className="text-white dark:text-black font-black text-xl md:text-2xl tracking-tighter whitespace-nowrap">{item}</span>
                  <span className="text-white/30 dark:text-black/30 text-2xl">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
