// =============================================================================
// Adélia Boulangerie — Domain Types
// =============================================================================
// Centralized TypeScript types for products, categories, baskets, and cart.
// All monetary values are in BRL (R$).
// =============================================================================

// ---------------------------------------------------------------------------
// Product
// ---------------------------------------------------------------------------

/** A single bakery product (bread, pastry, drink, etc.) */
export interface Product {
  id: string;
  /** Optional item number from the printed catalog */
  code?: number;
  name: string;
  description?: string;
  /** Price in BRL */
  price: number;
  /** Weight or volume, e.g. '70g', '200ml' */
  weight?: string;
  /** Which category this product belongs to */
  category: CategorySlug;
  /** Special tags for filtering / badges */
  tags?: ProductTag[];
  /** URL or path to the product image */
  imageUrl?: string;
  /** Whether the product is currently available for ordering */
  available?: boolean;
}

/** Tags used for product badges and filtering */
export type ProductTag = 'vegano' | 'sem-gluten' | 'novo' | 'destaque';

// ---------------------------------------------------------------------------
// Category
// ---------------------------------------------------------------------------

/** All valid category slugs (used as discriminated union) */
export type CategorySlug =
  | 'paes'
  | 'sanduiches'
  | 'mini-brunchs'
  | 'ovos'
  | 'croques'
  | 'almoco'
  | 'bebidas-tradicionais'
  | 'bebidas-veganas'
  | 'chas'
  | 'sucos-smoothies'
  | 'viennoiserie'
  | 'patisserie'
  | 'bakery'
  | 'adicionais'
  | 'cestas';

/** A product category with display metadata */
export interface Category {
  slug: CategorySlug;
  name: string;
  description?: string;
  /** Emoji icon for UI display */
  icon?: string;
  /** Availability window, e.g. '18h' */
  availableUntil?: string;
}

// ---------------------------------------------------------------------------
// Baskets (Cestas)
// ---------------------------------------------------------------------------

/** A curated gift / brunch basket */
export interface Basket {
  id: string;
  name: string;
  subtitle: string;
  /** Number of people the basket serves */
  serves: number;
  /** Total price in BRL */
  price: number;
  /** Price per person in BRL */
  pricePerPerson: number;
  /** List of items included in the basket */
  items: BasketItem[];
  /** URL or path to the basket image */
  imageUrl?: string;
}

/** A single item inside a basket */
export interface BasketItem {
  /** Quantity as shown in the catalog, e.g. '02', '250g', '05 porções' */
  quantity: string;
  name: string;
}

// ---------------------------------------------------------------------------
// Cart
// ---------------------------------------------------------------------------

/** An item in the shopping cart (can be a product or a basket) */
export interface CartItem {
  product: Product | Basket;
  quantity: number;
  type: 'product' | 'basket';
}
