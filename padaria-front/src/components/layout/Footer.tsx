// =============================================================================
// Footer — Rodapé do site
// =============================================================================

import { MapPin, Phone } from 'lucide-react';
import { Heading, Text } from '@/src/components/ui/Typography';

export function Footer() {
  return (
    <footer className="bg-adelia-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* ── Top Section (3 Columns) ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold tracking-[0.2em] text-adelia-gold mb-1">
              ADÉLIA
            </h2>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-white/70 mb-4 block">
              Boulangerie
            </span>
            
            {/* Art Déco Ornament */}
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
              <path d="M20 0C14.4772 0 10 4.47715 10 10H0V12H40V10H30C30 4.47715 25.5228 0 20 0Z" fill="#C4973B" fillOpacity="0.5"/>
              <path d="M20 3C16.134 3 13 6.13401 13 10H27C27 6.13401 23.866 3 20 3Z" fill="#C4973B"/>
            </svg>

            <Text className="text-white/80 max-w-sm text-sm">
              Padaria francesa artesanal em Campinas. Pães de fermentação natural, folhados idênticos aos da França e pâtisserie refinada.
            </Text>
          </div>

          {/* Column 2: Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Heading as="h4" className="text-adelia-gold mb-6 uppercase tracking-wider text-sm font-body">
              Horários
            </Heading>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li>Terça a Sábado: 7h às 19h</li>
              <li>Domingo: 7h às 14h</li>
              <li className="text-adelia-gold-light">Segunda: Fechado</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Heading as="h4" className="text-adelia-gold mb-6 uppercase tracking-wider text-sm font-body">
              Contato
            </Heading>
            <ul className="space-y-4 font-body text-sm text-white/80">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-adelia-gold shrink-0" />
                <span>Campinas, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-adelia-gold shrink-0" />
                <span>(19) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-adelia-gold shrink-0 font-bold">@</span>
                <a href="#" className="hover:text-adelia-gold transition-colors">adeliaboulangerie</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-adelia-gold/30 to-transparent mb-8" />

        {/* ── Bottom Section ──────────────────────────────────────────────── */}
        <div className="text-center">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Adélia Boulangerie. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
