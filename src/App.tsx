import React, { useState, useEffect, lazy, Suspense } from 'react';
import { LazyMotion, domMax } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfiniteGrid } from './components/ui/infinite-grid-integration';

// Lazy load sections below the fold
const Marquee = lazy(() => import('./components/Marquee').then(m => ({ default: m.Marquee })));
const AvisoSection = lazy(() => import('./components/AvisoSection').then(m => ({ default: m.AvisoSection })));
const QuemSomos = lazy(() => import('./components/QuemSomos').then(m => ({ default: m.QuemSomos })));
const FrentesEstrategicas = lazy(() => import('./components/FrentesEstrategicas').then(m => ({ default: m.FrentesEstrategicas })));
const MetodologiaCTS = lazy(() => import('./components/MetodologiaCTS').then(m => ({ default: m.MetodologiaCTS })));
const Solucoes = lazy(() => import('./components/Solucoes').then(m => ({ default: m.Solucoes })));
const Pilares = lazy(() => import('./components/Pilares').then(m => ({ default: m.Pilares })));
const Depoimentos = lazy(() => import('./components/Depoimentos').then(m => ({ default: m.Depoimentos })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinal = lazy(() => import('./components/CTAFinal').then(m => ({ default: m.CTAFinal })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-cyan-primary/20 border-t-cyan-primary rounded-full animate-spin" />
  </div>
);

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LazyMotion features={domMax}>
      <div className="min-h-screen bg-black text-white selection:bg-cyan-primary selection:text-black">
        <InfiniteGrid />
        <Navbar />
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <Marquee />
          <AvisoSection />
          <QuemSomos />
          <FrentesEstrategicas />
          <MetodologiaCTS />
          <Solucoes />
          <Pilares />
          <Depoimentos />
          <FAQ />
          <CTAFinal />
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}
