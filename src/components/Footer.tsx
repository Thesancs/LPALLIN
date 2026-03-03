import React from 'react';

export const Footer = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <footer className="py-12 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img 
            src={theme === 'dark' ? "/logo.svg" : "/logo1.svg"} 
            alt="All In BI Logo" 
            className="h-6 w-auto" 
            referrerPolicy="no-referrer" 
            loading="lazy"
          />
        </div>
        
        <p className="text-black/40 dark:text-white/40 text-sm">
          2026 © All In Business Intelligence — Todos os direitos reservados
        </p>

        <div className="flex gap-6 text-black/40 dark:text-white/40 text-sm">
          <a href="#" className="hover:text-cyan-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-cyan-primary transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};
