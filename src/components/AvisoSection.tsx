import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock } from 'lucide-react';

export const AvisoSection = () => {
  return (
    <section id="aviso" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
            AVISO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
            NÃO SAIA AGORA. FALTAM POUCOS SEGUNDOS PARA SUA EMPRESA <span className="text-cyan-primary">MUDAR</span>
          </h2>
          
        
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary shrink-0 font-bold text-xl">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Complete o formulário</h4>
                <p className="text-white/60 leading-relaxed">Forneça suas informações no formulário ao lado. Garantimos a segurança total de seus dados. Serão usados apenas para contato.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary shrink-0 font-bold text-xl">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Receba uma ligação personalizada</h4>
                <p className="text-white/60 leading-relaxed">Em um prazo de até <span className="text-white font-bold">5 minutos</span>, um dos nossos especialistas entrará em contato diretamente para agendar a reunião mais importante com você.</p>
              </div>
            </div>

            <div className="p-6 glass rounded-2xl border-cyan-primary/20 flex items-start gap-4">
              <ShieldCheck className="text-cyan-primary shrink-0" />
              <p className="text-sm text-white/50 italic">Garantimos segurança total dos seus dados. Serão usados apenas para contato e diagnóstico.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl border-cyan-primary/20 relative"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-primary/10 blur-2xl rounded-full" />
          <h3 className="text-2xl font-bold mb-8 text-white">Complete o formulário</h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Nome Completo</label>
                  <input type="text" placeholder="Nome" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors text-white" />
            <input type="email" placeholder="Email corporativo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors text-white" />
            <input type="tel" placeholder="WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors text-white" />
            <input type="text" placeholder="Empresa" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors text-white" />
            
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors appearance-none text-white/50">
              <option value="" className="bg-black">Segmento</option>
              <option value="Serviços" className="bg-black">Serviços</option>
              <option value="Indústria" className="bg-black">Indústria</option>
              <option value="Varejo" className="bg-black">Varejo</option>
              <option value="Imobiliário" className="bg-black">Imobiliário</option>
              <option value="Saúde" className="bg-black">Saúde</option>
              <option value="Educação" className="bg-black">Educação</option>
              <option value="Outros" className="bg-black">Outros</option>
            </select>

            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors appearance-none text-white/50">
              <option value="" className="bg-black">Faturamento mensal</option>
              <option value="ate-50k" className="bg-black">Até R$ 50k</option>
              <option value="50k-200k" className="bg-black">R$ 50k - R$ 200k</option>
              <option value="200k-500k" className="bg-black">R$ 200k - R$ 500k</option>
              <option value="acima-500k" className="bg-black">Acima de R$ 500k</option>
            </select>

            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-primary outline-none transition-colors appearance-none text-white/50">
              <option value="" className="bg-black">Maior gargalo hoje</option>
              <option value="Atendimento" className="bg-black">Atendimento</option>
              <option value="Qualificação" className="bg-black">Qualificação</option>
              <option value="Follow-up" className="bg-black">Follow-up</option>
              <option value="Pipeline" className="bg-black">Pipeline</option>
              <option value="Dados" className="bg-black">Dados</option>
              <option value="Processos internos" className="bg-black">Processos internos</option>
            </select>

            <button className="w-full py-4 bg-cyan-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform mt-4 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
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
