// =============================================================================
// Hero — Banner principal da Home
// =============================================================================

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-adelia-blue overflow-hidden">
      
      {/* ── Background Image com Overlay ────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Usando um gradiente profundo como fallback, mas na vida real seria a foto da padaria */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-adelia-blue/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-adelia-offwhite via-transparent to-transparent opacity-90" />
      </div>

      {/* ── Conteúdo Principal ──────────────────────────────────────────── */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center animate-fade-in mt-[-10vh]">
        
        {/* Ornamento Art Déco Sutil */}
        <div className="mb-6 opacity-80">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0L35 10H25L30 0Z" fill="#C4973B" />
            <path d="M10 10L15 20H5L10 10Z" fill="#C4973B" />
            <path d="M50 10L55 20H45L50 10Z" fill="#C4973B" />
            <path d="M15 10H45" stroke="#C4973B" strokeWidth="1.5" />
          </svg>
        </div>

        <h2 className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-adelia-gold mb-4">
          A Arte da Fermentação Natural
        </h2>
        
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold max-w-4xl leading-[1.1] mb-6 drop-shadow-lg">
          O Pedaço Mais Gostoso <br/> 
          <span className="italic font-medium">da França em Campinas</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-white/90 max-w-2xl mb-10 leading-relaxed font-light">
          Nascemos da excelência e tradição. Nossa paixão é levar até você a verdadeira experiência das boulangeries francesas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/cardapio" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" fullWidth>
              Nosso Cardápio
            </Button>
          </Link>
          <Link href="/cestas" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" fullWidth>
              Ver Cestas
            </Button>
          </Link>
        </div>
      </div>

      {/* ── Scroll Indicator ────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#cardapio" className="text-adelia-text/50 hover:text-adelia-gold transition-colors flex flex-col items-center">
          <span className="text-xs font-body uppercase tracking-widest mb-2 font-medium">Cardápio</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
