'use client';

// =============================================================================
// ProductCard — Card de produto individual para o cardápio
// =============================================================================
// Exibe foto, nome, descrição, preço e botão de adicionar ao carrinho.
// Usado no grid de produtos dentro de cada CategorySection.
// =============================================================================

import { Plus } from 'lucide-react';
import { Badge } from '@/src/components/ui/Badge';
import { useCart } from '@/src/hooks/useCart';
import type { Product } from '@/src/lib/types';

interface ProductCardProps {
  product: Product;
}

/**
 * Formata um valor numérico para moeda brasileira (R$).
 */
function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function ProductCard({ product }: ProductCardProps) {
  const { addProduct } = useCart();

  return (
    <article className="group relative flex flex-col bg-adelia-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-adelia-cream/50">
      {/* ── Imagem do Produto ─────────────────────────────────────────────── */}
      <div className="relative aspect-[3/4] bg-adelia-cream overflow-hidden">
        {/* Placeholder visual — será substituído por foto real */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
            {getCategoryEmoji(product.category)}
          </span>
        </div>

        {/* Overlay gradiente sutil no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges (tags) */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                variant={
                  tag === 'vegano'
                    ? 'vegan'
                    : tag === 'sem-gluten'
                    ? 'glutenFree'
                    : tag === 'novo'
                    ? 'new'
                    : 'default'
                }
              >
                {tag === 'vegano'
                  ? '🌿 Vegano'
                  : tag === 'sem-gluten'
                  ? 'Sem Glúten'
                  : tag === 'novo'
                  ? 'Novo'
                  : tag === 'destaque'
                  ? '⭐ Destaque'
                  : tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Botão de adicionar (aparece no hover) */}
        <button
          onClick={() => addProduct(product)}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-adelia-gold text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-adelia-gold-dark active:scale-95 cursor-pointer"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <Plus size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Informações do Produto ────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4 gap-1.5">
        {/* Nome */}
        <h3 className="font-heading font-semibold text-adelia-text text-base leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Descrição */}
        {product.description && (
          <p className="text-adelia-muted text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Peso (quando disponível) */}
        {product.weight && (
          <span className="text-adelia-muted text-xs">
            {product.weight}
          </span>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Preço + Botão mobile */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-adelia-cream/50">
          <span className="font-body font-bold text-adelia-gold text-lg tabular-nums">
            {formatPrice(product.price)}
          </span>

          {/* Botão mobile (sempre visível em telas pequenas) */}
          <button
            onClick={() => addProduct(product)}
            className="sm:hidden w-8 h-8 rounded-full bg-adelia-gold text-white flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
            aria-label={`Adicionar ${product.name}`}
          >
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  );
}

// =============================================================================
// Helper — Emoji padrão por categoria (usado como placeholder de imagem)
// =============================================================================

function getCategoryEmoji(category: string): string {
  const emojiMap: Record<string, string> = {
    paes: '🥖',
    sanduiches: '🥪',
    'mini-brunchs': '🍳',
    ovos: '🥚',
    croques: '🧀',
    almoco: '🥗',
    'bebidas-tradicionais': '☕',
    'bebidas-veganas': '🌿',
    chas: '🍵',
    'sucos-smoothies': '🥤',
    viennoiserie: '🥐',
    patisserie: '🍰',
    bakery: '🍪',
    adicionais: '➕',
    cestas: '🎁',
  };
  return emojiMap[category] || '🍞';
}
