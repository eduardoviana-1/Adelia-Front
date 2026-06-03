// =============================================================================
// BasketShowcase — Seção dedicada às Cestas de Presente
// =============================================================================

import { Heading, Text } from '@/src/components/ui/Typography';
import { BasketCard } from '@/src/components/product/BasketCard';
import { baskets } from '@/src/lib/mockData';

export function BasketShowcase() {
  return (
    <section id="cestas" className="py-20 bg-adelia-white relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-adelia-gold font-body text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            Presenteie com Emoção
          </span>
          <Heading as="h2" className="mb-4">
            Cestas Especiais Adélia
          </Heading>
          <Text muted className="text-lg">
            Para momentos especiais, faça uma surpresa para quem você ama. Nossas cestas são cuidadosamente montadas com o melhor da nossa produção artesanal.
          </Text>
        </div>

        {/* ── Grid de Cestas ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {baskets.map((basket) => (
            <BasketCard key={basket.id} basket={basket} />
          ))}
        </div>

      </div>

      {/* Background Decorative Pattern (Sutil) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#C4973B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
