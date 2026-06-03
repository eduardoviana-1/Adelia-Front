// =============================================================================
// Adélia Boulangerie — Root Layout
// =============================================================================
// Configures Playfair Display (headings) and Outfit (body) fonts via
// next/font/google, and sets SEO metadata for the bakery.
// =============================================================================

import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

import { Providers } from "@/src/components/Providers";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { CartDrawer } from "@/src/components/layout/CartDrawer";

// ---------------------------------------------------------------------------
// Font Configuration
// ---------------------------------------------------------------------------

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ---------------------------------------------------------------------------
// Metadata (SEO)
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Adélia Boulangerie | Padaria Francesa Artesanal em Campinas",
  description:
    "A melhor padaria francesa de Campinas. Pães de fermentação natural, croissants, pâtisserie refinada e cestas de presente. Eleita a melhor pela VEJA COMER & BEBER.",
  keywords: [
    "padaria francesa",
    "boulangerie",
    "campinas",
    "croissant",
    "pão artesanal",
    "cestas de presente",
    "delivery padaria",
  ],
};

// ---------------------------------------------------------------------------
// Root Layout Component
// ---------------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-adelia-offwhite text-adelia-text font-body">
        <Providers>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
