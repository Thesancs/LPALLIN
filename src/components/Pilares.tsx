import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Layers, TrendingUp, Zap, X, MessageSquare, Settings } from 'lucide-react';

export const Pilares = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const pilares = [
    {
      capitulo: "01",
      title: "Pensamento Sistêmico",
      quote: "O problema nunca está isolado.",
      desc: "Antes de automatizar qualquer processo, mapeamos como ele se conecta ao todo. Uma automação mal pensada pode criar mais problemas do que resolve. Nossa visão sistêmica garante que cada mudança melhore o conjunto, não apenas uma parte.",
      footer: "CADA ENGRENAGEM AFETA A MÁQUINA INTEIRA.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      capitulo: "02",
      title: "Impacto Mensurável",
      quote: "Se não podemos medir, não vendemos.",
      desc: "Cada projeto começa com métricas claras de sucesso. Prometemos redução de custos, economia de horas, aumento de eficiência — e documentamos tudo. Você saberá exatamente o retorno do seu investimento.",
      footer: "DADOS SÃO A ÚNICA VERDADE.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      capitulo: "03",
      title: "Independência Tecnológica",
      quote: "Não vendemos ferramentas.",
      desc: "Somos completamente independentes de fornecedores. Não temos acordos comerciais que influenciam nossas recomendações. A solução que indicamos é genuinamente a melhor para o seu caso específico.",
      footer: "FOCO NA SOLUÇÃO, NÃO NO SOFTWARE.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      capitulo: "04",
      title: "Capacidade de Dizer Não",
      quote: "Às vezes, a melhor solução é não fazer.",
      desc: "Se IA não é a solução certa, dizemos. Se o momento não é adequado, avisamos. Se o orçamento não faz sentido, somos honestos. Preferimos perder um projeto hoje do que sua confiança amanhã.",
      footer: "HONESTIDADE ANTES DO CONTRATO.",
      icon: <X className="w-6 h-6" />
    },
    {
      capitulo: "05",
      title: "Tradução Clara",
      quote: "Zero jargão desnecessário.",
      desc: "Eliminamos a complexidade artificial. Executivos entendem o impacto no negócio, times técnicos entendem a implementação, stakeholders entendem o cronograma. Todos ficam alinhados, sem ruídos.",
      footer: "CLAREZA É RESPEITO PELO SEU TEMPO.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      capitulo: "06",
      title: "Construção Durável",
      quote: "Solução que continua funcionando com escala.",
      desc: "Não fazemos remendos. Construímos infraestrutura operacional que cresce com sua empresa, garantindo que a tecnologia seja um ativo de longo prazo, não um custo temporário.",
      footer: "FEITO PARA DURAR E ESCALAR.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-primary font-bold tracking-widest text-sm uppercase mb-4 block">PILARES QUE NOS DEFINEM</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Os 6 Pilares que Nos Definem</h2>
          <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">O mercado de IA está saturado de promessas vazias. <span className="text-white font-bold">Esta é a nossa história</span> — e por que fazemos diferente.</p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan-primary origin-top -translate-x-1/2 hidden md:block z-0"
          />
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 top-0 bottom-0 w-px bg-cyan-primary origin-top md:hidden z-0"
          />

          {/* Moving Light Dot */}
          <motion.div
            style={{
              top: useTransform(scaleY, [0, 1], ["0%", "100%"]),
              opacity: useTransform(scaleY, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
            }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-primary rounded-full blur-[6px] z-20 shadow-[0_0_20px_rgba(0,242,255,1)]"
          />

          <div className="space-y-24">
            {pilares.map((p, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Icon on the line */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  whileInView={{ scale: 1.2, opacity: 1 }}
                  viewport={{ once: false, margin: "-20% 0% -20% 0%" }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-cyan-primary/50 flex items-center justify-center text-cyan-primary z-10 shadow-[0_0_20px_rgba(0,242,255,0.3)]"
                >
                  {p.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0.2, x: i % 2 === 0 ? 50 : -50, filter: "grayscale(100%) brightness(50%)" }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "grayscale(0%) brightness(100%)",
                    boxShadow: "0 0 50px rgba(0,242,255,0.15)"
                  }}
                  viewport={{ once: false, margin: "-25% 0% -25% 0%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-[45%] ml-12 md:ml-0 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="glass p-8 md:p-10 rounded-3xl border-white/10 hover:border-cyan-primary/50 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-primary/5 blur-3xl rounded-full group-hover:bg-cyan-primary/20 transition-colors" />

                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest mb-4 block">Capítulo {p.capitulo}</span>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-cyan-primary transition-colors">{p.title}</h4>
                    <p className="text-white font-bold italic mb-6 text-lg">"{p.quote}"</p>
                    <p className="text-white font-medium leading-relaxed mb-8">{p.desc}</p>

                    <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-cyan-primary shadow-[0_0_10px_rgba(0,242,255,1)]"
                      />
                      <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest">{p.footer}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
