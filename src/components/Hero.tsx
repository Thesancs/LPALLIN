import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { InteractiveSphere } from './InteractiveSphere';
import { InfiniteGrid } from './ui/infinite-grid-integration';

export const Hero = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden bg-black">
      {/* Background Effect */}
      <InfiniteGrid className="opacity-80" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10 w-full">
        {/* Text Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            Inteligência Artificial que faz sentido para o seu negócio.
          </h1>
          <p className="text-xl md:text-2xl text-white font-semibold mb-10 max-w-2xl leading-relaxed">
            A All In Business Intelligence transforma gargalos em um sistema com IA estratégico, rentável e executável. Clareza no problema. Precisão na solução.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <button className="group px-10 py-5 rounded-full bg-cyan-primary text-black font-bold text-xl flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,242,255,0.3)]">
              Quero mais informações
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-8 text-sm font-medium text-white/40">
            <a href="#metodologia" className="hover:text-cyan-primary transition-colors">Metodologia</a>
            <span>•</span>
            <a href="#solucoes" className="hover:text-cyan-primary transition-colors">Soluções</a>
            <span>•</span>
            <a href="#quem-somos" className="hover:text-cyan-primary transition-colors">Quem Somos</a>
          </div>
        </motion.div>

        {/* Sphere Container - Now on the right for desktop */}
        <div className="w-full lg:w-1/2 h-[350px] md:h-[500px] lg:h-[600px]">
          <InteractiveSphere theme={theme} />
        </div>
      </div>
    </section>
  );
};
