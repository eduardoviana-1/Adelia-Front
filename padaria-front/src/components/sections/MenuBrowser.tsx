'use client';

// =============================================================================
// MenuBrowser — O visualizador de cardápio completo
// =============================================================================

import { useState, useMemo } from 'react';
import { Heading, Text } from '@/src/components/ui/Typography';
import { CategorySection } from '@/src/components/product/CategorySection';
import { categories, products } from '@/src/lib/mockData';
import type { CategorySlug } from '@/src/lib/types';

export function MenuBrowser() {
  // Estado para a categoria ativa nos tabs
  const [activeTab, setActiveTab] = useState<CategorySlug | 'todos'>('todos');

  // Filtra as categorias para mostrar apenas as que têm produtos e 
  // que o usuário quer ver baseado na tab ativa
  const visibleCategories = useMemo(() => {
    return categories.filter((category) => {
      // Verifica se a categoria tem produtos
      const hasProducts = products.some((p) => p.category === category.slug);
      if (!hasProducts) return false;

      // Verifica o filtro da tab
      if (activeTab === 'todos') return true;
      return category.slug === activeTab;
    });
  }, [activeTab]);

  return (
    <section id="cardapio" className="py-20 bg-adelia-offwhite scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mb-12">
          <Heading as="h2" className="mb-4">Cardápio do Dia</Heading>
          <Text muted className="max-w-2xl text-lg">
            Da nossa cozinha artesanal direto para a sua mesa. Produtos sempre frescos, assados em pequenas fornadas ao longo do dia.
          </Text>
        </div>

        {/* ── Tabs de Filtro ──────────────────────────────────────────────── */}
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar gap-2 sticky top-[80px] z-30 bg-adelia-offwhite/95 backdrop-blur-sm py-4 border-b border-adelia-cream">
          <button
            onClick={() => setActiveTab('todos')}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 ${
              activeTab === 'todos'
                ? 'bg-adelia-blue text-white shadow-md'
                : 'bg-white text-adelia-muted border border-adelia-cream hover:border-adelia-gold hover:text-adelia-gold'
            }`}
          >
            Todos
          </button>
          
          {categories.filter(c => products.some(p => p.category === c.slug)).map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveTab(category.slug)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-body text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                activeTab === category.slug
                  ? 'bg-adelia-blue text-white shadow-md'
                  : 'bg-white text-adelia-muted border border-adelia-cream hover:border-adelia-gold hover:text-adelia-gold'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* ── Seções de Produtos ──────────────────────────────────────────── */}
        <div className="space-y-16">
          {visibleCategories.map((category) => (
            <CategorySection
              key={category.slug}
              category={category}
              products={products.filter((p) => p.category === category.slug)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
