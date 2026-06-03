'use client';

// =============================================================================
// CartDrawer — Carrinho de compras lateral (Slide-over)
// =============================================================================

import { useEffect } from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/src/hooks/useCart';
import { Button } from '@/src/components/ui/Button';
import { Heading, Text } from '@/src/components/ui/Typography';
import { Badge } from '@/src/components/ui/Badge';

/** Formata número para moeda R$ */
function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function CartDrawer() {
  const { items, totalPrice, isOpen, closeCart, removeItem, updateQuantity } = useCart();

  // Trava o scroll da página quando o drawer está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* ── Overlay (Fundo Escuro) ──────────────────────────────────────── */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* ── Drawer Panel ────────────────────────────────────────────────── */}
      <div 
        className="fixed inset-y-0 right-0 w-full sm:w-[420px] bg-adelia-white shadow-2xl z-50 flex flex-col animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
      >
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-adelia-cream">
          <div className="flex items-center gap-2">
            <Heading as="h3" className="text-xl">Seu Carrinho</Heading>
            <span className="text-adelia-muted font-body">({items.length})</span>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 text-adelia-muted hover:text-adelia-gold transition-colors rounded-full hover:bg-adelia-cream/50 cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </header>

        {/* Corpo: Lista de Itens ou Empty State */}
        <div className="flex-1 overflow-y-auto p-6 bg-adelia-offwhite">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-adelia-cream rounded-full flex items-center justify-center mb-2">
                <ShoppingBag size={32} className="text-adelia-gold/50" />
              </div>
              <Heading as="h4" className="text-adelia-text">Seu carrinho está vazio</Heading>
              <Text muted className="max-w-[250px]">Explore nosso cardápio e adicione itens deliciosos para sua experiência.</Text>
              <Button variant="outline" className="mt-4" onClick={closeCart}>
                Ver Cardápio
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const itemId = item.product.id;
                const isBasket = item.type === 'basket';
                const p = item.product;

                return (
                  <li key={itemId} className="flex gap-4">
                    {/* Imagem Placeholder */}
                    <div className="w-20 h-20 shrink-0 bg-adelia-cream rounded-xl flex items-center justify-center text-2xl border border-adelia-gold/10">
                      {isBasket ? '🎁' : '🥐'}
                    </div>

                    {/* Detalhes do Item */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          {isBasket && (
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-adelia-gold block mb-0.5">
                              Cesta Especial
                            </span>
                          )}
                          <h4 className="font-heading font-semibold text-adelia-text text-base leading-tight">
                            {p.name}
                          </h4>
                        </div>
                        <button 
                          onClick={() => removeItem(itemId)}
                          className="text-adelia-muted hover:text-red-500 transition-colors p-1 cursor-pointer"
                          aria-label="Remover item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Subtitle/Badge para Cestas */}
                      {isBasket && 'subtitle' in p && (
                        <p className="text-xs text-adelia-muted mt-1 truncate max-w-[200px]">
                          {p.subtitle}
                        </p>
                      )}
                      
                      {isBasket && 'serves' in p && (
                        <div className="mt-2">
                          <Badge variant="serves">Serve {p.serves} pessoas</Badge>
                        </div>
                      )}

                      <div className="flex-1" />

                      {/* Preço e Controles */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="font-body font-bold text-adelia-text tabular-nums">
                          {formatPrice(p.price * item.quantity)}
                        </div>
                        
                        {/* Controles de Quantidade */}
                        <div className="flex items-center bg-adelia-white border border-adelia-cream rounded-full h-8 overflow-hidden shadow-sm">
                          <button 
                            onClick={() => updateQuantity(itemId, item.quantity - 1)}
                            className="w-8 h-full flex items-center justify-center text-adelia-muted hover:text-adelia-text hover:bg-adelia-cream transition-colors cursor-pointer"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-body text-sm font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(itemId, item.quantity + 1)}
                            className="w-8 h-full flex items-center justify-center text-adelia-muted hover:text-adelia-text hover:bg-adelia-cream transition-colors cursor-pointer"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer (Resumo e Checkout) */}
        {items.length > 0 && (
          <div className="p-6 bg-adelia-white border-t border-adelia-cream shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-lg text-adelia-text">Total</span>
              <span className="font-body text-2xl font-bold text-adelia-gold tabular-nums">
                {formatPrice(totalPrice)}
              </span>
            </div>
            
            <Button variant="primary" size="lg" fullWidth>
              Finalizar Pedido
            </Button>
            
            <p className="text-center text-xs text-adelia-muted mt-3">
              Pedido mínimo: R$ 30,00 • Entrega para Campinas
            </p>
          </div>
        )}
      </div>
    </>
  );
}
