import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Settings, BarChart3, Code2, Layers, Eye, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Solucoes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const solutions = [
    {
      title: "Agentes de IA para Atendimento e Suporte",
      desc: "Redução de até 70% no tempo de resposta e aumento da satisfação do cliente através de assistentes inteligentes.",
      points: [
        "Monitoramento em tempo real",
        "Qualificação automática de leads",
        "Atendimento 24/7 sem falhas"
      ],
      icon: <MessageSquare />
    },
    {
      title: "Automação de Processos Administrativos",
      desc: "Eliminação de tarefas manuais em RH, financeiro, compras e operações. Workflows inteligentes que economizam centenas de horas mensais.",
      points: [
        "Eliminação de erros humanos",
        "Integração total entre setores",
        "Redução drástica de custos operacionais"
      ],
      icon: <Settings />
    },
    {
      title: "Análise Preditiva e Business Intelligence",
      desc: "Transformação de dados em decisões estratégicas. Dashboards inteligentes que antecipam tendências.",
      points: [
        "Dashboards interativos",
        "Previsão de demanda e churn",
        "Clareza total sobre os números"
      ],
      icon: <BarChart3 />
    }
  ];

  const getIndex = (offset: number) => {
    return (currentIndex + offset + solutions.length) % solutions.length;
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % solutions.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);

  const positions = [-1, 0, 1];

  return (
    <>
      {/* Smooth transition from white to grid/black background */}
      <div className="h-32 w-full bg-gradient-to-b from-white to-transparent relative z-20 pointer-events-none" />
      <section id="solucoes" className="py-12 pb-24 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-cyan-primary font-bold tracking-widest text-sm uppercase mb-4 block">O QUE FAZEMOS?</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-4xl mx-auto leading-tight">
              ESTRUTURA INTELIGENTE COM BASE NA SUA <span className="text-cyan-primary text-gradient-cyan">NECESSIDADE</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-zinc-800 transition-colors text-white z-50"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-zinc-800 transition-colors text-white z-50"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[650px] lg:h-[600px] flex items-center justify-center perspective-1000 mb-12"
          >
            {positions.map((offset) => {
              const index = getIndex(offset);
              const item = solutions[index];

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: offset === 0 ? 0 : offset * 350,
                    scale: offset === 0 ? 1 : 0.85,
                    zIndex: offset === 0 ? 30 : 10,
                    opacity: offset === 0 ? 1 : 0.4,
                    rotateY: offset === 0 ? 0 : offset * -25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                  onClick={() => offset !== 0 && setCurrentIndex(index)}
                  className={`absolute w-full max-w-5xl cursor-pointer ${offset === 0 ? 'cursor-default pointer-events-auto' : 'pointer-events-auto hover:opacity-100'}`}
                >
                  <div className="flex flex-col lg:flex-row glass rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl backdrop-blur-2xl">
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                      <div className="space-y-3">
                        {item.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-primary shrink-0 mt-0.5" />
                            <span className="text-white/80 font-semibold text-sm lg:text-base">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Photo Placeholder Side */}
                    <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-full bg-zinc-950/50 p-4">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-mesh opacity-30" />
                        <div className="relative z-10 text-white/5 font-black text-6xl uppercase tracking-[0.2em] -rotate-12 select-none">
                          ALLIN
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-10 bg-cyan-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-white/30 italic text-sm font-medium">
              <span className="text-cyan-primary/50 font-bold uppercase tracking-widest mr-2">Configuração:</span> Cada estrutura é validada e implementada individualmente.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
