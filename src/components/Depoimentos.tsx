import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const testimonials = [
    { id: 1, title: "Depoimento 01", type: "Case de Sucesso" },
    { id: 2, title: "Depoimento 02", type: "Case de Sucesso" },
    { id: 3, title: "Depoimento 03", type: "Case de Sucesso" },
    { id: 4, title: "Depoimento 04", type: "Case de Sucesso" },
    { id: 5, title: "Depoimento 05", type: "Case de Sucesso" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;
  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="py-24 overflow-hidden bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-bold font-bold tracking-widest text-sm uppercase mb-4 block">PROVA REAL</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black">Empresas que deixaram de testar ferramentas e começaram a operar com método.</h2>
        </motion.div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`px-4 shrink-0 transition-opacity duration-500`}
                style={{ width: `${100 / itemsPerView}%` }}
              >
                {/* Efeito de luz azul escuro no hover e mudança de cor da letra */}
                <div className="aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer border border-black/5 hover:shadow-[0_0_60px_#007785] transition-all duration-700">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.5)] group-hover:scale-110 transition-transform duration-500">
                      <Play className="fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-sm font-bold text-white group-hover:text-cyan-primary transition-colors duration-500 mb-1">{t.title}</p>
                    <p className="text-xs text-white/80 uppercase tracking-widest group-hover:text-white transition-colors duration-500">{t.type}</p>
                  </div>
                  <div className="w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 absolute inset-0 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
          {/* Dots */}
          <div className="flex gap-3">
            {Array.from({ length: testimonials.length - itemsPerView + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-cyan-bold' : 'w-2 bg-black/10'}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors group text-black"
            >
              <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors group text-black"
            >
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <a
            href="#aviso"
            className="mt-8 px-10 py-5 rounded-full bg-cyan-primary text-black font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,242,255,0.3)] animate-pulse-glow text-center"
          >
            Quero ser um case
          </a>
        </div>
      </div>
    </section>
  );
};
