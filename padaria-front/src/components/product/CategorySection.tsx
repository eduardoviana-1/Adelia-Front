'use client';

// =============================================================================
// CategorySection — Agrupador de produtos por categoria
// =============================================================================
// Renderiza o título da categoria e o grid de ProductCards.
// =============================================================================

import { ProductCard } from './ProductCard';
import { Heading, Text } from '@/src/components/ui/Typography';
import type { Category, Product } from '@/src/lib/types';

interface CategorySectionProps {
  category: Category;
  products: Product[];
}

export function CategorySection({ category, products }: CategorySectionProps) {
  if (!products || products.length === 0) return null;

  return (
    <section 
      id={category.slug} 
      className="py-12 scroll-mt-24 border-b border-adelia-cream last:border-0"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          {category.icon && (
            <span className="text-3xl" aria-hidden="true">
              {category.icon}
            </span>
          )}
          <Heading as="h2">{category.name}</Heading>
        </div>
        
        {category.description && (
          <Text muted className="max-w-2xl">
            {category.description}
          </Text>
        )}
        
        {category.availableUntil && (
          <div className="mt-3 inline-block bg-adelia-cream text-adelia-gold-dark text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Disponível até as {category.availableUntil}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
