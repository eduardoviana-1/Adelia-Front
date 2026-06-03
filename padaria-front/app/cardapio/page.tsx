import { MenuBrowser } from '@/src/components/sections/MenuBrowser';

export default function CardapioPage() {
  return (
    <>
      <div className="bg-adelia-blue pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wide mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-white/80 font-body max-w-xl mx-auto">
            Da nossa cozinha artesanal direto para a sua mesa. Pães de fermentação natural, folhados franceses e pâtisserie.
          </p>
        </div>
      </div>
      <MenuBrowser />
    </>
  );
}
