import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Heading } from '@/src/components/ui/Typography';

export function FeaturedGateways() {
  return (
    <section className="py-8 bg-adelia-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
          
          {/* ── Bloco: Cardápio ───────────────────────────────────────────── */}
          <Link href="/cardapio" className="group relative block w-full h-full rounded-2xl overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-adelia-blue/90 via-adelia-blue/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-adelia-gold font-body text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Recém Assados
              </span>
              <Heading as="h3" className="text-white mb-2 group-hover:text-adelia-cream transition-colors">
                Nosso Cardápio
              </Heading>
              <div className="flex items-center gap-2 text-white/90 font-body text-sm font-medium group-hover:text-adelia-gold transition-colors mt-2">
                Explorar Pães e Doces
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* ── Bloco: Cestas ─────────────────────────────────────────────── */}
          <Link href="/cestas" className="group relative block w-full h-full rounded-2xl overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-adelia-blue/90 via-adelia-blue/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-adelia-gold font-body text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Presentes Memoráveis
              </span>
              <Heading as="h3" className="text-white mb-2 group-hover:text-adelia-cream transition-colors">
                Cestas Especiais
              </Heading>
              <div className="flex items-center gap-2 text-white/90 font-body text-sm font-medium group-hover:text-adelia-gold transition-colors mt-2">
                Ver Opções de Presente
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
