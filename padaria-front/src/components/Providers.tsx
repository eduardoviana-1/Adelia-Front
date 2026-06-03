'use client';

// =============================================================================
// Providers — Wrappers globais do cliente
// =============================================================================

import { CartProvider } from '@/src/hooks/useCart';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
