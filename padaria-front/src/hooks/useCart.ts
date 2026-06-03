'use client';

import {
  createContext,
  createElement,
  useContext,
  useReducer,
  useCallback,
  useState,
  type ReactNode,
} from 'react';
import type { Product, Basket, CartItem } from '@/src/lib/types';

// ============================================================
// Cart State & Actions
// ============================================================

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_PRODUCT'; product: Product }
  | { type: 'ADD_BASKET'; basket: Basket }
  | { type: 'REMOVE_ITEM'; itemId: string }
  | { type: 'UPDATE_QUANTITY'; itemId: string; quantity: number }
  | { type: 'CLEAR_CART' };

function getItemId(item: CartItem): string {
  return item.product.id;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id && item.type === 'product'
      );

      if (existingIndex >= 0) {
        // Incrementa a quantidade se o produto já está no carrinho
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return { items: updatedItems };
      }

      // Adiciona novo item ao carrinho
      return {
        items: [
          ...state.items,
          { product: action.product, quantity: 1, type: 'product' },
        ],
      };
    }

    case 'ADD_BASKET': {
      // Cestas são sempre adicionadas como itens separados
      // (cada cesta é uma encomenda única)
      return {
        items: [
          ...state.items,
          { product: action.basket, quantity: 1, type: 'basket' },
        ],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        items: state.items.filter((item) => getItemId(item) !== action.itemId),
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          items: state.items.filter((item) => getItemId(item) !== action.itemId),
        };
      }

      return {
        items: state.items.map((item) =>
          getItemId(item) === action.itemId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return { items: [] };
    }

    default:
      return state;
  }
}

// ============================================================
// Context
// ============================================================

interface CartContextValue {
  /** Lista de itens no carrinho */
  items: CartItem[];
  /** Quantidade total de itens (somando quantidades) */
  totalItems: number;
  /** Valor total do carrinho em R$ */
  totalPrice: number;
  /** Se o drawer do carrinho está aberto */
  isOpen: boolean;
  /** Abre o drawer do carrinho */
  openCart: () => void;
  /** Fecha o drawer do carrinho */
  closeCart: () => void;
  /** Alterna o drawer */
  toggleCart: () => void;
  /** Adiciona um produto ao carrinho */
  addProduct: (product: Product) => void;
  /** Adiciona uma cesta ao carrinho */
  addBasket: (basket: Basket) => void;
  /** Remove um item pelo ID */
  removeItem: (itemId: string) => void;
  /** Atualiza a quantidade de um item */
  updateQuantity: (itemId: string, quantity: number) => void;
  /** Limpa todo o carrinho */
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

// ============================================================
// Provider
// ============================================================

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);

  // Cálculos derivados
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Actions
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addProduct = useCallback(
    (product: Product) => {
      dispatch({ type: 'ADD_PRODUCT', product });
      setIsOpen(true); // Abre o carrinho ao adicionar
    },
    []
  );

  const addBasket = useCallback(
    (basket: Basket) => {
      dispatch({ type: 'ADD_BASKET', basket });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (itemId: string) => dispatch({ type: 'REMOVE_ITEM', itemId }),
    []
  );

  const updateQuantity = useCallback(
    (itemId: string, quantity: number) =>
      dispatch({ type: 'UPDATE_QUANTITY', itemId, quantity }),
    []
  );

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);

  const value: CartContextValue = {
    items: state.items,
    totalItems,
    totalPrice,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addProduct,
    addBasket,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return createElement(CartContext.Provider, { value }, children);
}

// ============================================================
// Hook
// ============================================================

/**
 * Hook para acessar o estado e ações do carrinho de compras.
 * Deve ser usado dentro de um `CartProvider`.
 *
 * @example
 * ```tsx
 * const { items, addProduct, totalPrice, isOpen, toggleCart } = useCart();
 * ```
 */
export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um <CartProvider>');
  }
  return context;
}
