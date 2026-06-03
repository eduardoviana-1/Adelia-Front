'use client';

// =============================================================================
// Navbar — Navegação principal do site
// =============================================================================

import { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/src/hooks/useCart';

import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const [hasMounted, setHasMounted] = useState(false);

  // Evita hydration mismatch para o badge do carrinho
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Detecta scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cardápio', href: '/cardapio' },
    { name: 'Cestas', href: '/cestas' },
    { name: 'Sobre Nós', href: '/#sobre' },
  ];

  return (
    <>
      {/* ── Announcement Bar ──────────────────────────────────────────────── */}
      <div className="bg-adelia-gold text-white text-xs font-semibold py-2 px-4 text-center tracking-wide z-50 relative">
        🌟 Eleita a melhor padaria de Campinas pela VEJA COMER & BEBER
      </div>

      {/* ── Main Navbar ───────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-adelia-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Esquerda: Mobile Menu Toggle */}
          <div className="flex-1 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-adelia-text hover:text-adelia-gold transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Esquerda: Desktop Links */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-adelia-text hover:text-adelia-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-adelia-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Centro: Logo */}
          <div className="flex flex-col items-center justify-center flex-none">
            <Link href="/" className="text-center group">
              <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-[0.2em] text-adelia-text group-hover:text-adelia-gold transition-colors duration-300">
                ADÉLIA
              </h1>
              <span className="block font-body text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-adelia-muted font-medium mt-0.5">
                Boulangerie
              </span>
            </Link>
          </div>

          {/* Direita: Carrinho */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={toggleCart}
              className="relative p-2 text-adelia-text hover:text-adelia-gold transition-colors group cursor-pointer"
              aria-label="Abrir carrinho"
            >
              <ShoppingBag size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              {hasMounted && totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-adelia-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce-subtle border border-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ───────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-adelia-white animate-fade-in flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-adelia-text hover:text-adelia-gold cursor-pointer"
              aria-label="Fechar menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
            <div className="text-center mb-8">
              <h2 className="font-heading text-4xl font-bold tracking-[0.2em] text-adelia-gold">
                ADÉLIA
              </h2>
            </div>
            
            <nav className="flex flex-col items-center gap-6">
              {[...navLinks, { name: 'Contato', href: '#contato' }].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-heading font-semibold text-adelia-text hover:text-adelia-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
