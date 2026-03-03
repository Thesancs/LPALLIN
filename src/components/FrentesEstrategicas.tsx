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
    <>
      {/* Smooth transition from black section above */}
      <div className="h-32 w-full bg-gradient-to-b from-black to-white relative z-20 pointer-events-none" />
      <section className="py-12 pb-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-cyan-bold font-bold tracking-widest text-sm uppercase mb-4 block">3 FRENTES ESTRATÉGICAS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">Como ajudamos sua empresa</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {frentes.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200 hover:border-cyan-bold/50 transition-all text-center shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-bold/10 flex items-center justify-center text-cyan-bold mb-8 mx-auto">
                  {f.icon}
                </div>
                <h4 className="text-2xl font-bold mb-2 text-black">{f.title}</h4>
                <p className="text-cyan-bold text-sm font-bold mb-4 uppercase tracking-wider">{f.subtitle}</p>
                <p className="text-zinc-600 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
