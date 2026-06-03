import Image from 'next/image';
import { Heading, Text } from '@/src/components/ui/Typography';

export function OurStory() {
  return (
    <section id="sobre" className="py-24 bg-adelia-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ── Imagem ──────────────────────────────────────────────────────── */}
          <div className="relative aspect-[4/5] rounded-t-full overflow-hidden bg-adelia-cream shadow-xl border-4 border-adelia-offwhite group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 border-[8px] border-adelia-gold/20 rounded-t-full pointer-events-none" />
          </div>

          {/* ── Conteúdo ────────────────────────────────────────────────────── */}
          <div className="flex flex-col">
            <span className="text-adelia-gold font-body text-xs font-bold uppercase tracking-[0.2em] mb-4">
              A Tradição Adélia
            </span>
            <Heading as="h2" className="mb-6 leading-tight">
              A Verdadeira Arte da Fermentação Natural
            </Heading>
            
            <Text className="mb-6 text-lg leading-relaxed text-adelia-text/80">
              Fundada pelos chefs Fernando e Dânia, a Adélia Boulangerie nasceu com um propósito claro: trazer a verdadeira experiência das padarias parisienses para Campinas.
            </Text>

            <Text className="mb-8 leading-relaxed text-adelia-muted">
              Nossos pães respeitam o tempo da natureza. Com um processo de fermentação de 24 horas, massa madre exclusiva e a mais pura manteiga de padrão francês, cada fornada é uma celebração à panificação artesanal de excelência. Sem atalhos, apenas tempo, técnica e paixão.
            </Text>

            {/* Citação */}
            <div className="border-l-2 border-adelia-gold pl-6 py-2 mt-4 relative">
              <span className="absolute -left-3 -top-2 text-4xl text-adelia-gold/30 font-heading">"</span>
              <p className="font-heading text-xl italic text-adelia-text leading-snug">
                Nossa maior alegria é ver os clientes fecharem os olhos ao provar o primeiro pedaço do nosso croissant.
              </p>
              <span className="block mt-3 text-sm font-body font-bold text-adelia-muted uppercase tracking-wider">
                — Fernando & Dânia
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
