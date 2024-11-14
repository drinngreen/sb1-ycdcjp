import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      });

      const target = e.target as HTMLElement;
      if (target.classList.contains('magnify-text') || target.classList.contains('hover-glow')) {
        cursor.classList.add('active');
        const rect = target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        target.style.setProperty('--x', `${x}%`);
        target.style.setProperty('--y', `${y}%`);
      } else {
        cursor.classList.remove('active');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden cursor-glow">
      <div className="custom-cursor" ref={cursorRef}></div>
      
      {/* Rest of your Hero component remains exactly the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
        <div className="absolute inset-0 circuit-pattern" />
        <div className="absolute inset-0 grid-pattern" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#2cd4bd] bg-[#2cd4bd]/10 mb-8">
            <Sparkles className="h-4 w-4 text-[#2cd4bd] mr-2" />
            <span className="text-sm text-[#2cd4bd] hover-glow">Leader nello sviluppo digitale</span>
          </div>
          
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
  <span className="magnify-text">La</span>{' '}
  <span className="magnify-text">tua</span>{' '}
  <span className="magnify-text">rivoluzione</span>{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cd4bd] to-[#4ae7d0] magnify-text">
    digitale
  </span>
</h1>
          
<p className="text-xl md:text-2xl text-gray-300 tracking-wide hover-glow max-w-3xl mx-auto">
            Tutte le rivoluzioni partono da un&apos;idea, qual&apos;è la tua?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#2cd4bd]" />
                <p className="text-gray-300 hover-glow">Soluzioni personalizzate per ogni esigenza</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#2cd4bd]" />
                <p className="text-gray-300 hover-glow">Team di esperti dedicato al tuo progetto</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#2cd4bd]" />
                <p className="text-gray-300 hover-glow">Supporto 24/7 e manutenzione continua</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-black bg-[#2cd4bd] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(44,212,189,0.4)]">
                <span className="relative z-10 flex items-center">
                  Scrivici
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a href="#services" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#2cd4bd] text-base font-medium rounded-md text-[#2cd4bd] hover:bg-[#2cd4bd] hover:text-black transition-all duration-300 hover:scale-105">
                Esplora i Servizi
              </a>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white hover-glow">500+</p>
                <p className="text-sm text-gray-400">Progetti Completati</p>
              </div>
              <div className="h-12 w-px bg-gray-800"></div>
              <div>
                <p className="text-3xl font-bold text-white hover-glow">98%</p>
                <p className="text-sm text-gray-400">Clienti Soddisfatti</p>
              </div>
              <div className="h-12 w-px bg-gray-800"></div>
              <div>
                <p className="text-3xl font-bold text-white hover-glow">24/7</p>
                <p className="text-sm text-gray-400">Supporto Tecnico</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#2cd4bd] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#4ae7d0] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#2cd4bd] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Digital Transformation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#2cd4bd]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}