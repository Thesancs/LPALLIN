import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Settings, BarChart3, Code2, Layers, Eye } from 'lucide-react';

export const Solucoes = () => {
  const solutions = [
    {
      title: "Agentes de IA para Atendimento e Suporte",
      desc: "Redução de até 70% no tempo de resposta e aumento da satisfação do cliente através de assistentes inteligentes.",
      stat: "70%",
      statDesc: "menos tempo de resposta",
      badge: "Comprovado",
      icon: <MessageSquare />
    },
    {
      title: "Automação de Processos Administrativos",
      desc: "Eliminação de tarefas manuais em RH, financeiro, compras e operações. Workflows inteligentes que economizam centenas de horas mensais.",
      stat: "OPERAÇÃO ATIVA",
      statDesc: "100% ESTRUTURADA",
      icon: <Settings />
    },
    {
      title: "Análise Preditiva e Business Intelligence",
      desc: "Transformação de dados em decisões estratégicas. Dashboards inteligentes que antecipam tendências.",
      stat: "Insights em tempo real",
      icon: <BarChart3 />
    },
    {
      title: "Geração Automatizada de Conteúdo",
      desc: "Produção escalável de conteúdo de marketing, relatórios, documentação técnica e comunicação interna com IA generativa.",
      stat: "90%",
      statDesc: "mais produtividade",
      icon: <Code2 />
    },
    {
      title: "Integrações Inteligentes de Sistemas",
      desc: "Conexão de sistemas legados with tecnologias modernas. APIs, webhooks e integrações que eliminam silos de dados.",
      stat: "Conectividade Total",
      icon: <Layers />
    },
    {
      title: "Visão Computacional para Operações",
      desc: "Monitoramento automatizado, controle de qualidade visual, contagem de pessoas/objetos e análise de comportamento.",
      stat: "Monitoramento 24/7",
      icon: <Eye />
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-cyan-primary font-bold tracking-widest text-sm uppercase mb-4 block">SOLUÇÕES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Soluções que entregamos</h2>
          <p className="text-white/60 text-lg font-semibold tracking-wide">adaptadas ao seu contexto</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-primary/40 transition-all flex flex-col h-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary mb-6">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{s.title}</h4>
              <p className="text-white/80 text-base mb-8 flex-grow font-medium leading-relaxed">{s.desc}</p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-cyan-primary font-bold text-2xl">{s.stat}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest font-bold">{s.statDesc || "Impacto Direto"}</div>
                {s.badge && <div className="mt-2 inline-block px-2 py-1 rounded bg-cyan-primary/10 text-cyan-primary text-[10px] font-bold uppercase">{s.badge}</div>}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 glass rounded-3xl border-cyan-primary/20 text-center">
          <p className="text-lg italic text-white/70">
            <span className="text-cyan-primary font-bold">Linha honesta:</span> Não trabalhamos com “lista fechada de produto”. Cada solução é desenhada para seu gargalo específico.
          </p>
        </div>
      </div>
    </section>
  );
};
