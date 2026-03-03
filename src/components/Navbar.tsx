import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className={`max-w-6xl mx-auto glass rounded-full border border-white/10 dark:border-white/10 border-black/5 px-4 py-2 flex justify-between items-center transition-all duration-500 pointer-events-auto ${isScrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-95' : 'scale-100'}`}>
        <div className="flex items-center gap-4 pl-2">
          <img 
            src={theme === 'dark' ? "/logo.svg" : "/logo1.svg"} 
            alt="All In BI Logo" 
            className="h-8 w-auto" 
            referrerPolicy="no-referrer" 
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/70 dark:text-white/70">
          <a href="#metodologia" className="hover:text-cyan-primary transition-colors">Metodologia</a>
          <a href="#solucoes" className="hover:text-cyan-primary transition-colors">Soluções</a>
          <a href="#quem-somos" className="hover:text-cyan-primary transition-colors">Quem Somos</a>
          <a href="#faq" className="hover:text-cyan-primary transition-colors">Diferenciais</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="hidden md:block">
            <button className="px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-sm hover:bg-cyan-primary dark:hover:bg-cyan-primary transition-colors">
              Conhecer agora
            </button>
          </div>

          <button className="md:hidden text-black dark:text-white pr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-[2rem] border border-black/10 dark:border-white/10 p-8 flex flex-col gap-6 md:hidden pointer-events-auto shadow-2xl text-black dark:text-white"
          >
            <a href="#metodologia" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Metodologia</a>
            <a href="#solucoes" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Soluções</a>
            <a href="#quem-somos" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Quem Somos</a>
            <a href="#faq" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</a>
            <button className="w-full py-4 rounded-2xl bg-cyan-primary text-black font-bold text-lg">
              Conhecer agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
