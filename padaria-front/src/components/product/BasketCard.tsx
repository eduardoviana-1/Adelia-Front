'use client';

// =============================================================================
// BasketCard — Card especial para as Cestas de Presente
// =============================================================================
// Card horizontal maior que mostra: nome, subtítulo, lista de itens inclusos,
// badge "Serve X pessoas", preço total e preço por pessoa.
// =============================================================================

import { Gift, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/src/components/ui/Button';
import { Badge } from '@/src/components/ui/Badge';
import { useCart } from '@/src/hooks/useCart';
import type { Basket } from '@/src/lib/types';

interface BasketCardProps {
  basket: Basket;
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

export function BasketCard({ basket }: BasketCardProps) {
  const { addBasket } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="group relative bg-adelia-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-adelia-gold/20">
      {/* ── Barra decorativa superior dourada ─────────────────────────────── */}
      <div className="h-1 bg-gradient-to-r from-adelia-gold/40 via-adelia-gold to-adelia-gold/40" />

      <div className="flex flex-col md:flex-row">
        {/* ── Imagem / Visual da Cesta ──────────────────────────────────── */}
        <div className="relative w-full md:w-72 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-adelia-cream to-adelia-offwhite flex items-center justify-center shrink-0">
          <div className="text-center">
            <Gift
              size={48}
              className="text-adelia-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-500"
              strokeWidth={1.5}
            />
            <span className="text-adelia-muted text-xs font-body uppercase tracking-wider">
              Cesta Especial
            </span>
          </div>

          {/* Badge de servir */}
          <div className="absolute top-3 right-3">
            <Badge variant="serves">
              Serve {basket.serves} pessoas
            </Badge>
          </div>
        </div>

        {/* ── Conteúdo ─────────────────────────────────────────────────── */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          {/* Cabeçalho */}
          <div className="mb-3">
            <span className="text-adelia-gold font-body text-xs uppercase tracking-[0.15em] font-semibold">
              {basket.name}
            </span>
            <h3 className="font-heading font-bold text-adelia-text text-xl md:text-2xl mt-0.5 leading-tight">
              {basket.subtitle}
            </h3>
          </div>

          {/* Lista de itens (expansível) */}
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-adelia-muted text-sm hover:text-adelia-gold transition-colors cursor-pointer"
            >
              <span>{isExpanded ? 'Esconder' : 'Ver'} itens inclusos ({basket.items.length})</span>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {isExpanded && (
              <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 animate-fade-in">
                {basket.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-2 text-sm text-adelia-text py-0.5"
                  >
                    <span className="text-adelia-gold font-semibold text-xs min-w-[3rem] text-right tabular-nums">
                      {item.quantity}
                    </span>
                    <span className="text-adelia-muted">×</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Preço + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-adelia-cream">
            <div>
              <span className="font-heading font-bold text-adelia-text text-2xl tabular-nums">
                {formatPrice(basket.price)}
              </span>
              <span className="block text-adelia-muted text-sm mt-0.5">
                {formatPrice(basket.pricePerPerson)} por pessoa
              </span>
            </div>

            <Button
              variant="primary"
              size="md"
              icon={Gift}
              onClick={() => addBasket(basket)}
            >
              Encomendar Cesta
            </Button>
          </div>

          {/* Aviso de antecedência */}
          <p className="text-adelia-muted text-xs mt-3 italic">
            * Pedido com 2 dias de antecedência. Embalagem premium inclusa.
          </p>
        </div>
      </div>
    </article>
  );
}
