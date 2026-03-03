import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Cpu } from 'lucide-react';

const Typewriter = () => {
  const words = ["inovar", "aplicar IA", "transformar com IA", "crescer com IA", "automatizar"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="inline-flex items-center px-6 py-2 border-2 border-cyan-primary/50 rounded-2xl bg-black/5 dark:bg-white/5 shadow-[0_0_20px_rgba(0,242,255,0.2)] mx-2 min-w-[200px] justify-center">
      <span className="text-cyan-primary">{words[index].substring(0, subIndex)}</span>
      <span className="w-1 h-8 bg-cyan-primary ml-1 animate-pulse" />
    </span>
  );
};

export const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-24 bg-black relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-primary font-bold tracking-widest text-sm uppercase mb-4 block">Quem Somos</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 flex flex-wrap items-center justify-center gap-y-4 text-white">
            Um novo jeito de <Typewriter /> na sua empresa
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-xl text-white/90 font-medium leading-relaxed">
              <p>A All In Business Intelligence nasceu da frustração do mercado muita gente empurrando ferramenta, chatbot, falsas soluções com IA.</p>
              <p className="text-white font-bold text-2xl border-l-4 border-cyan-primary pl-6 py-2">A gente ocupa o espaço entre o problema e a solução.</p>
              <p>A pergunta não é “qual IA usar?”. É: “qual gargalo está custando mais dinheiro e tempo hoje?”</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 glass rounded-3xl border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:shadow-[0_0_50px_rgba(239,68,68,0.25)] transition-all"
              >
                <h4 className="text-red-500 font-bold text-xl mb-6 flex items-center gap-2">
                  <X className="w-5 h-5" /> O QUE NÃO SOMOS:
                </h4>
                <ul className="space-y-3 text-white/90 text-lg font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> “Agência de automação”</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Chatbot solto</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Implementação solta</li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 glass rounded-3xl border-cyan-primary/40 shadow-[0_0_30px_rgba(0,242,255,0.15)] hover:shadow-[0_0_50px_rgba(0,242,255,0.25)] transition-all"
              >
                <h4 className="text-cyan-primary font-bold text-xl mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> O QUE SOMOS!
                </h4>
                <p className="text-white font-bold text-lg leading-relaxed">Diagnóstico + processo + implementação real, com IA dentro do fluxo.</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="aspect-video glass rounded-3xl overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-primary/10 to-transparent" />
              <Cpu className="w-24 h-24 text-cyan-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
