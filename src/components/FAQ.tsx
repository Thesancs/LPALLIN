import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. O que vocês fazem na prática?",
      a: "Organizamos a operação da empresa e colocamos inteligência onde existe desperdício de tempo, energia ou dinheiro. Nosso foco é fazer o negócio funcionar com mais método e menos improviso."
    },
    {
      q: "2. Isso é só automação?",
      a: "Não. Automação sem direção só cria confusão mais rápida. Primeiro organizamos o processo. Depois aplicamos a tecnologia."
    },
    {
      q: "3. Vocês só orientam ou colocam para rodar?",
      a: "Fazemos os dois. Mostramos o caminho e também colocamos a estrutura para funcionar."
    },
    {
      q: "4. Quanto tempo leva para aparecer resultado?",
      a: "Depende do problema atual da empresa. Mas normalmente os primeiros ganhos aparecem quando organizamos ritmo, padrão e acompanhamento das oportunidades."
    },
    {
      q: "5. Vocês trabalham com quais ferramentas?",
      a: "Com as que fizerem sentido para cada negócio. Não vendemos ferramenta específica. Vendemos organização e eficiência."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-primary font-bold tracking-widest text-sm uppercase mb-4 block">FAQ</span>
          <h2 className="text-4xl font-bold text-white">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl border-white/10 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 text-cyan-primary ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
