import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock } from 'lucide-react';

export const AvisoSection = () => {
  return (
    <section id="aviso" className="py-24 relative overflow-hidden bg-black z-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
            AVISO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-black dark:text-white">
            NÃO SAIA AGORA. FALTAM POUCOS SEGUNDOS PARA SUA EMPRESA <span className="text-cyan-primary">MUDAR</span>
          </h2>


          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary shrink-0 font-bold text-xl">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Complete o formulário</h4>
                <p className="text-black/60 dark:text-white/60 leading-relaxed">Forneça suas informações no formulário ao lado. Garantimos a segurança total de seus dados. Serão usados apenas para contato.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary shrink-0 font-bold text-xl">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-black dark:text-white">Receba uma ligação personalizada</h4>
                <p className="text-black/60 dark:text-white/60 leading-relaxed">Em um prazo de até <span className="text-black dark:text-white font-bold">5 minutos</span>, um dos nossos especialistas entrará em contato diretamente para agendar a reunião mais importante com você.</p>
              </div>
            </div>

            <div className="p-6 glass rounded-2xl border-cyan-primary/20 flex items-start gap-4">
              <ShieldCheck className="text-cyan-primary shrink-0" />
              <p className="text-sm text-black/50 dark:text-white/50 italic">Garantimos segurança total dos seus dados. Serão usados apenas para contato e diagnóstico.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl border-white/5 relative bg-zinc-900/50"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-primary/10 blur-2xl rounded-full" />
          <h3 className="text-2xl font-bold mb-8 text-white">Complete o formulário</h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <input type="text" placeholder="Seu nome" className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-4 focus:border-cyan-primary outline-none transition-colors text-white placeholder:text-white/30" />
              <input type="email" placeholder="Seu melhor e-mail" className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-4 focus:border-cyan-primary outline-none transition-colors text-white placeholder:text-white/30" />
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                  <span className="text-xl">🇧🇷</span>
                  <span className="text-white/30">|</span>
                </span>
                <input type="tel" placeholder="Telefone" className="w-full bg-zinc-800 border border-white/5 rounded-lg pl-16 pr-4 py-4 focus:border-cyan-primary outline-none transition-colors text-white placeholder:text-white/30" />
              </div>
              <input type="text" placeholder="Nome da empresa" className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-4 focus:border-cyan-primary outline-none transition-colors text-white placeholder:text-white/30" />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 block">Que cenario sua empresa está:</label>
                <select className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-4 focus:border-cyan-primary outline-none transition-colors appearance-none text-white/70">
                  <option value="" className="bg-zinc-900">Selecionar</option>
                  <option value="1" className="bg-zinc-900">Não tenho processo comercial estruturado.</option>
                  <option value="2" className="bg-zinc-900">Tenho equipe comercial, mas falta previsibilidade.</option>
                  <option value="3" className="bg-zinc-900">Gero leads, mas perco na conversão.</option>
                  <option value="4" className="bg-zinc-900">Já uso automações, mas estão desorganizadas.</option>
                  <option value="5" className="bg-zinc-900">Quero automatizar tarefas</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 block">Faturamento mensal aproximado:</label>
                <select className="w-full bg-zinc-800 border border-white/5 rounded-lg px-4 py-4 focus:border-cyan-primary outline-none transition-colors appearance-none text-white/70">
                  <option value="" className="bg-zinc-900">Selecionar</option>
                  <option value="1" className="bg-zinc-900">Até R$ 30 mil</option>
                  <option value="2" className="bg-zinc-900">R$ 30 mil a R$ 80 mil</option>
                  <option value="3" className="bg-zinc-900">R$ 80 mil a R$ 200 mil</option>
                  <option value="4" className="bg-zinc-900">R$ 200 mil a R$ 500 mil</option>
                  <option value="5" className="bg-zinc-900">R$ 500 mil a R$ 1 milhão</option>
                  <option value="6" className="bg-zinc-900">Acima de R$ 1 milhão</option>
                </select>
              </div>
            </div>

            <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 animate-pulse-glow transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Quero mais informações
            </button>
            <p className="text-center text-xs text-white/40 mt-4 flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" />
              Equipe entra em contato em horário comercial para agendar o diagnóstico.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
