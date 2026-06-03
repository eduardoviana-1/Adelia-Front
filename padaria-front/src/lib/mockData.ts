// =============================================================================
// Adélia Boulangerie — Mock Data
// =============================================================================
// Representative subset of the real catalog for development and prototyping.
// All prices are in BRL (R$). Text is in Portuguese (pt-BR).
// =============================================================================

import type { Category, CategorySlug, Product, Basket } from './types';

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export const categories: Category[] = [
  {
    slug: 'paes',
    name: 'Pães de Fermentação Natural',
    description: 'Pães artesanais com fermentação lenta de 24h',
    icon: '🥖',
  },
  {
    slug: 'sanduiches',
    name: 'Sanduíches Tradicionais',
    description: 'Combinações clássicas francesas',
    icon: '🥪',
  },
  {
    slug: 'mini-brunchs',
    name: 'Mini Brunchs',
    description: 'Pratos individuais para brunch',
    icon: '🍳',
    availableUntil: '15h',
  },
  {
    slug: 'croques',
    name: 'Croques',
    description: 'Os clássicos sanduíches gratinados franceses',
    icon: '🧀',
  },
  {
    slug: 'bebidas-tradicionais',
    name: 'Bebidas Tradicionais',
    description: 'Cafés especiais e bebidas quentes',
    icon: '☕',
  },
  {
    slug: 'viennoiserie',
    name: 'Viennoiserie',
    description: 'Folhados e pães amanteigados clássicos',
    icon: '🥐',
  },
  {
    slug: 'patisserie',
    name: 'Pâtisserie',
    description: 'Doces refinados da confeitaria francesa',
    icon: '🍰',
  },
  {
    slug: 'bakery',
    name: 'Bakery',
    description: 'Cookies, financiers e itens de forno',
    icon: '🍪',
  },
  {
    slug: 'cestas',
    name: 'Cestas & Presentes',
    description: 'Cestas especiais para presentear ou compartilhar',
    icon: '🎁',
  },
];

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const products: Product[] = [
  // ── Pães de Fermentação Natural ──────────────────────────────────────────
  {
    id: 'pao-001',
    code: 1,
    name: 'Croissant Tradicional',
    description: 'Massa folhada com manteiga francesa, fermentação de 24h',
    price: 16,
    weight: '70g',
    category: 'paes',
    tags: ['destaque'],
    imageUrl: 'https://images.unsplash.com/photo-1517433367897-f10f1b8c0b02?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pao-002',
    code: 2,
    name: 'Pãozinho Fermentação Natural',
    description: 'Pãozinho artesanal de massa madre',
    price: 8,
    weight: '60g',
    category: 'paes',
    imageUrl: 'https://images.unsplash.com/photo-1589367920908-a60f73557555?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pao-003',
    code: 3,
    name: 'Ciabatta',
    description: 'Pão italiano rústico de crosta crocante',
    price: 8,
    weight: '80g',
    category: 'paes',
    imageUrl: 'https://images.unsplash.com/photo-1599507914022-f191f6ddb6f7?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pao-004',
    code: 4,
    name: 'Mini Brioche',
    description: 'Brioche amanteigado individual',
    price: 10,
    weight: '50g',
    category: 'paes',
    imageUrl: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pao-005',
    code: 5,
    name: 'Pão de Queijo Tradicional',
    description: 'Receita mineira com queijo curado artesanal',
    price: 12,
    weight: '70g',
    category: 'paes',
    imageUrl: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Sanduíches Tradicionais ──────────────────────────────────────────────
  {
    id: 'sand-001',
    code: 10,
    name: 'Croissant Presunto de Parma e Brie',
    description: 'Croissant recheado com presunto de Parma e queijo Brie',
    price: 59,
    category: 'sanduiches',
    tags: ['destaque'],
    imageUrl: 'https://images.unsplash.com/photo-1627532306915-181180b62e4f?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'sand-002',
    code: 11,
    name: 'Misto Quente no Brioche',
    description: 'Clássico misto quente no pão brioche amanteigado',
    price: 30,
    category: 'sanduiches',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'sand-003',
    code: 12,
    name: 'Croissant Presunto e Muçarela',
    description: 'Croissant com presunto e muçarela gratinada',
    price: 30,
    category: 'sanduiches',
    imageUrl: 'https://images.unsplash.com/photo-1627532306915-181180b62e4f?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Mini Brunchs ─────────────────────────────────────────────────────────
  {
    id: 'brunch-001',
    code: 20,
    name: 'Normandia',
    description: 'Mini brunch com seleção inspirada na Normandia',
    price: 65,
    category: 'mini-brunchs',
    imageUrl: 'https://images.unsplash.com/photo-1640722300067-b5b63a948e65?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'brunch-002',
    code: 21,
    name: 'Bretanha',
    description: 'Mini brunch com sabores da Bretanha',
    price: 65,
    category: 'mini-brunchs',
    imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'brunch-003',
    code: 22,
    name: 'Provence',
    description: 'Mini brunch com ingredientes provençais',
    price: 65,
    category: 'mini-brunchs',
    imageUrl: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'brunch-004',
    code: 23,
    name: 'Borgonha',
    description: 'Mini brunch inspirado na região da Borgonha',
    price: 70,
    category: 'mini-brunchs',
    imageUrl: 'https://images.unsplash.com/photo-1484723091791-009f58fb3b1f?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'brunch-005',
    code: 24,
    name: 'Vegano Provençal',
    description: 'Mini brunch 100% vegano com toque provençal',
    price: 70,
    category: 'mini-brunchs',
    tags: ['vegano'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Croques ──────────────────────────────────────────────────────────────
  {
    id: 'croque-001',
    code: 30,
    name: 'Croque Monsieur',
    description: 'Sanduíche gratinado com presunto e queijo gruyère',
    price: 55,
    category: 'croques',
    imageUrl: 'https://images.unsplash.com/photo-1599388832692-2cc3df19f506?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'croque-002',
    code: 31,
    name: 'Croque Madame',
    description: 'Croque Monsieur coroado com ovo perfeito',
    price: 65,
    category: 'croques',
    tags: ['destaque'],
    imageUrl: 'https://images.unsplash.com/photo-1628185806670-8cd4e156ca01?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'croque-003',
    code: 32,
    name: 'Croissant Madame',
    description: 'Croissant gratinado com presunto, queijo e ovo',
    price: 70,
    category: 'croques',
    tags: ['novo'],
    imageUrl: 'https://images.unsplash.com/photo-1627532306915-181180b62e4f?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Bebidas Tradicionais ─────────────────────────────────────────────────
  {
    id: 'beb-001',
    code: 50,
    name: 'Espresso',
    description: 'Café espresso com grãos especiais torrados artesanalmente',
    price: 11.90,
    weight: '50ml',
    category: 'bebidas-tradicionais',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-07cf868baf73?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'beb-002',
    code: 51,
    name: 'Cappuccino com Canela',
    description: 'Cappuccino cremoso com canela em pó',
    price: 18,
    weight: '200ml',
    category: 'bebidas-tradicionais',
    imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'beb-003',
    code: 52,
    name: 'Chocolate Suisse',
    description: 'Chocolate quente suíço com leite vaporizado',
    price: 25,
    weight: '250ml',
    category: 'bebidas-tradicionais',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'beb-004',
    code: 53,
    name: 'Chai Latte',
    description: 'Chá chai com leite vaporizado e especiarias',
    price: 25,
    weight: '250ml',
    category: 'bebidas-tradicionais',
    imageUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Viennoiserie ─────────────────────────────────────────────────────────
  {
    id: 'vienn-001',
    code: 60,
    name: 'Croissant de Amêndoas',
    description: 'Croissant recheado com creme de amêndoas e lascas crocantes',
    price: 39,
    category: 'viennoiserie',
    tags: ['destaque'],
    imageUrl: 'https://images.unsplash.com/photo-1523294587484-b87afce0534e?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'vienn-002',
    code: 61,
    name: 'Pain au Chocolat',
    description: 'Folhado com bastões de chocolate belga 70%',
    price: 35,
    category: 'viennoiserie',
    tags: ['destaque'],
    imageUrl: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'vienn-003',
    code: 62,
    name: 'Pistache Roll',
    description: 'Roll folhado com creme de pistache siciliano',
    price: 50,
    category: 'viennoiserie',
    tags: ['novo'],
    imageUrl: 'https://images.unsplash.com/photo-1579290074121-6d73eb8b22a5?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'vienn-004',
    code: 63,
    name: 'Tarte aux Pommes',
    description: 'Tortinha de maçã caramelizada com massa folhada',
    price: 35,
    category: 'viennoiserie',
    imageUrl: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'vienn-005',
    code: 64,
    name: 'Cinnamon Roll',
    description: 'Roll de canela com glacê de cream cheese',
    price: 30,
    category: 'viennoiserie',
    imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Pâtisserie ───────────────────────────────────────────────────────────
  {
    id: 'pat-001',
    code: 70,
    name: 'Éclair',
    description: 'Massa choux recheada com creme e cobertura de chocolate',
    price: 29,
    category: 'patisserie',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pat-002',
    code: 71,
    name: 'Torta Sablée de Mirtilo',
    description: 'Torta de massa sablée com creme e mirtilos frescos',
    price: 40,
    category: 'patisserie',
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pat-003',
    code: 72,
    name: 'Torta Real de Framboesa',
    description: 'Torta premium com framboesas frescas e creme pâtissière',
    price: 50,
    category: 'patisserie',
    tags: ['destaque'],
    imageUrl: 'https://images.unsplash.com/photo-1514845514660-f20dd332dbb5?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'pat-004',
    code: 73,
    name: 'Brownie Especial Adélia',
    description: 'Brownie intenso com chocolate belga e flor de sal',
    price: 39,
    category: 'patisserie',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
    available: true,
  },

  // ── Bakery ───────────────────────────────────────────────────────────────
  {
    id: 'bak-001',
    code: 80,
    name: 'Cookie de Baunilha',
    description: 'Cookie artesanal com baunilha de Madagascar',
    price: 20,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-fea2d2091396?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'bak-002',
    code: 81,
    name: 'Financier Tradicional',
    description: 'Bolo francês de amêndoas com manteiga tostada',
    price: 30,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'bak-003',
    code: 82,
    name: 'Financier Pistache',
    description: 'Financier com pistache siciliano e cobertura',
    price: 39,
    category: 'bakery',
    tags: ['novo'],
    imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
  {
    id: 'bak-004',
    code: 83,
    name: 'Canelé de Bordeaux',
    description: 'Bolinho caramelizado com baunilha e rum',
    price: 19,
    category: 'bakery',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop',
    available: true,
  },
];

// ---------------------------------------------------------------------------
// Baskets (Cestas)
// ---------------------------------------------------------------------------

export const baskets: Basket[] = [
  {
    id: 'cesta-001',
    name: 'Cesta 1',
    subtitle: 'O Melhor da Boulangerie Francesa',
    serves: 4,
    price: 320,
    pricePerPerson: 80,
    items: [
      { quantity: '01', name: 'Mini Baguete' },
      { quantity: '01', name: 'Mini Baguete Vienois' },
      { quantity: '02', name: 'Mini Brioches' },
      { quantity: '02', name: 'Croissant Tradicional' },
      { quantity: '02', name: 'Pain au Chocolat' },
      { quantity: '02', name: 'Croissant de Amêndoas' },
      { quantity: '200g', name: 'Geleia da Casa' },
      { quantity: '04 porções', name: 'Manteiga' },
    ],
  },
  {
    id: 'cesta-002',
    name: 'Cesta 2',
    subtitle: 'Brunch para 3 Pessoas',
    serves: 3,
    price: 300,
    pricePerPerson: 100,
    items: [
      { quantity: '01', name: 'Mini Baguete Ervas' },
      { quantity: '02', name: 'Croissant Tradicional' },
      { quantity: '02', name: 'Pain au Chocolat' },
      { quantity: '02', name: 'Mini Brioches' },
      { quantity: '03', name: 'Pancakes' },
      { quantity: '200g', name: 'Frios Fatiados' },
      { quantity: '150g', name: 'Salada de Frutas' },
      { quantity: '150g', name: 'Geleia da Casa' },
      { quantity: '03 porções', name: 'Manteiga' },
    ],
  },
  {
    id: 'cesta-003',
    name: 'Cesta 3',
    subtitle: 'Brunch para 5 Pessoas',
    serves: 5,
    price: 370,
    pricePerPerson: 74,
    items: [
      { quantity: '03', name: 'Croissant Tradicional' },
      { quantity: '02', name: 'Pain au Chocolat' },
      { quantity: '04', name: 'Pancakes' },
      { quantity: '01', name: 'Mini Baguete Ervas' },
      { quantity: '02', name: 'Mini Brioche' },
      { quantity: '250g', name: 'Frios Fatiados' },
      { quantity: '250g', name: 'Geleia da Casa' },
      { quantity: '200g', name: 'Salada de Frutas' },
    ],
  },
  {
    id: 'cesta-004',
    name: 'Cesta 4',
    subtitle: 'Hotel Ritz Paris',
    serves: 5,
    price: 400,
    pricePerPerson: 80,
    items: [
      { quantity: '02', name: 'Croissant Tradicional' },
      { quantity: '01', name: 'Chocolatine' },
      { quantity: '01', name: 'Pain au Chocolat' },
      { quantity: '02', name: 'Mini Brioches' },
      { quantity: '01', name: 'Croissant de Amêndoas' },
      { quantity: '01', name: 'Roll de Pistache' },
      { quantity: '01', name: 'Mini Baguete Tradicional' },
      { quantity: '01', name: 'Financier Pistache' },
      { quantity: '05', name: 'Macarons' },
      { quantity: '250g', name: 'Geleia da Casa' },
      { quantity: '05 porções', name: 'Manteiga' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/** Returns all products belonging to a given category */
export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((product) => product.category === slug);
}

/** Returns the category object for a given slug, or undefined if not found */
export function getCategoryBySlug(slug: CategorySlug): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
