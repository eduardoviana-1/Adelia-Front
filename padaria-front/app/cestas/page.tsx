import { BasketShowcase } from '@/src/components/sections/BasketShowcase';
import { Heading, Text } from '@/src/components/ui/Typography';

export default function CestasPage() {
  return (
    <>
      <div className="bg-adelia-blue pt-32 pb-20 text-center relative overflow-hidden">
        {/* Padrão Art Déco Decorativo */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="#C4973B" strokeWidth="2" />
            <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="#C4973B" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-adelia-gold font-body text-xs font-bold uppercase tracking-[0.2em] block mb-3">
            Presenteie com Emoção
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wide mb-4">
            Cestas Especiais
          </h1>
          <p className="text-white/80 font-body max-w-xl mx-auto">
            Nossas cestas são cuidadosamente montadas com o melhor da nossa produção artesanal. Uma experiência francesa completa na sua casa.
          </p>
        </div>
      </div>

      <BasketShowcase />

      {/* Regras de Encomenda */}
      <section className="bg-adelia-cream py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Heading as="h3" className="mb-4">Como encomendar sua cesta?</Heading>
          <Text className="mb-6">
            Para garantir o mais alto padrão de qualidade e frescor, todas as nossas cestas exigem <strong>2 dias de antecedência</strong> para o preparo. Acompanha embalagem premium Adélia (caixa rígida azul petróleo com fita de cetim dourada) e cartão de presentes personalizado.
          </Text>
        </div>
      </section>
    </>
  );
}
