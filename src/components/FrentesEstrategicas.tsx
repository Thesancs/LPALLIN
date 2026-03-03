import React from 'react';
import { motion } from 'motion/react';
import { Search, Zap, Code2 } from 'lucide-react';

export const FrentesEstrategicas = () => {
  const frentes = [
    {
      title: "Consultoria Estratégica",
      subtitle: "(Clareza e Prioridade)",
      desc: "Identificamos onde IA realmente gera verdadeiro impacto financeiro e operacional. Sem moda.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Automação Inteligente",
      subtitle: "(Eficiência e Velocidade)",
      desc: "Processos e agentes que eliminam tarefas manuais, reduzem ruído e aumentam consistência e velocidade de execução.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Arquitetura e Integrações",
      subtitle: "(Solução que para em pé)",
      desc: "Integramos sistemas, organizamos dados e definimos processos.",
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-cyan-primary font-bold tracking-widest text-sm uppercase mb-4 block">3 FRENTES ESTRATÉGICAS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Como ajudamos sua empresa</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {frentes.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl border-white/5 hover:border-cyan-primary/30 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary mb-8 mx-auto">
                {f.icon}
              </div>
              <h4 className="text-2xl font-bold mb-2 text-white">{f.title}</h4>
              <p className="text-cyan-primary text-sm font-bold mb-4 uppercase tracking-wider">{f.subtitle}</p>
              <p className="text-white font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
