import React from 'react';

export const CTAFinal = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-8">
          NÃO SAIA AGORA
        </div>
        <h2 className="text-4xl md:text-7xl font-bold mb-8 max-w-4xl mx-auto leading-tight text-white">
          Se você quer parar de improvisar e transformar IA em infraestrutura operacional, preencha o formulário.
        </h2>
        
        <div className="flex flex-col items-center gap-6 mt-12">
          <button className="px-12 py-6 rounded-full bg-cyan-primary text-black font-bold text-2xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(0,242,255,0.4)]">
            Quero mais informações
          </button>
          <div className="flex items-center gap-2 text-cyan-primary font-bold tracking-widest animate-pulse">
            <div className="w-2 h-2 rounded-full bg-cyan-primary" />
            ONLINE 24HRS.
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
