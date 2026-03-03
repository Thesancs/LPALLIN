import React from 'react';
import { motion } from 'motion/react';

export const MetodologiaCTS = () => {
  const steps = [
    {
      letter: "C",
      title: "Consultar",
      desc: "Diagnóstico profundo do funil/comercial (CRM, WhatsApp, rotina do time, mapeamento de processos), auditoria de dados e baseline de métricas."
    },
    {
      letter: "A",
      title: "Arquitetar",
      desc: "Arquitetura da solução (processos + IA + automação), caminho de implementação, especificação clara do que vai ser automatizado, matriz de riscos e projeção de ROI."
    },
    {
      letter: "S",
      title: "Ship",
      desc: "Implementação estratégica, testes, monitoramento, documentação e treinamento do time."
    },
    {
      letter: "E",
      title: "Evoluir",
      desc: "Otimização, ajustes de playbook e automações, relatórios e suporte evolutivo contínuo."
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-bold font-bold tracking-widest text-sm uppercase mb-4 block">METODOLOGIA</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Métodologia C.A.S.E </h2>
          <p className="text-xl text-zinc-600 font-medium max-w-3xl mx-auto">Processo estruturado que começa onde muita empresa erra: entendendo a operação antes de “colocar IA”.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                boxShadow: "0 0 40px rgba(0,143,163,0.15)",
                borderColor: "rgba(0,143,163,0.3)"
              }}
              viewport={{ once: true, margin: "-20% 0% -20% 0%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-b from-cyan-bold/10 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-zinc-50 p-8 rounded-3xl h-full flex flex-col border border-zinc-200 transition-all">
                <div className="text-6xl font-black text-cyan-bold/10 mb-6 group-hover:text-cyan-bold transition-colors">{step.letter}</div>
                <h4 className="text-2xl font-bold mb-4 text-black">{step.title}</h4>
                <p className="text-zinc-600 text-base font-medium leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
