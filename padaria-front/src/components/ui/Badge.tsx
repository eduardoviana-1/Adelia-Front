import { Users } from 'lucide-react';

// ---------------------------------------------------------------------------
// Badge — Small label component for product / category tags
// ---------------------------------------------------------------------------

/**
 * Props for the `Badge` component.
 */
export interface BadgeProps {
  /** Visual variant that controls color scheme and optional icon.
   *  - `default`    — neutral cream background.
   *  - `vegan`      — green tones with 🌿 emphasis.
   *  - `glutenFree` — warm amber tones.
   *  - `new`        — gold highlight, draws attention.
   *  - `info`       — soft blue informational.
   *  - `serves`     — blue badge with people icon (e.g. "Serve 8 pessoas").
   */
  variant?: 'default' | 'vegan' | 'glutenFree' | 'new' | 'info' | 'serves';

  /** Badge content — usually a short text string. */
  children: React.ReactNode;

  /** Additional Tailwind classes for consumer overrides. */
  className?: string;
}

// ---------------------------------------------------------------------------
// Style maps
// ---------------------------------------------------------------------------

/** Color & border styles per variant. */
const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-adelia-cream text-adelia-text',
  vegan: 'bg-green-50 text-green-700 border border-green-200',
  glutenFree: 'bg-amber-50 text-amber-700 border border-amber-200',
  new: 'bg-adelia-gold text-white font-bold',
  info: 'bg-adelia-blue/10 text-adelia-blue',
  serves: 'bg-adelia-blue text-white',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * `Badge` renders a small, pill-shaped label used throughout the bakery UI
 * to tag products with dietary info, novelty markers, or serving counts.
 *
 * @example
 * ```tsx
 * <Badge variant="vegan">Vegano 🌿</Badge>
 * <Badge variant="new">Novo</Badge>
 * <Badge variant="serves">Serve 8 pessoas</Badge>
 * ```
 */
export function Badge({
  variant = 'default',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        // Base styles — small rounded pill
        'inline-flex items-center gap-1 rounded-full px-3 py-1',
        'text-xs font-medium leading-none whitespace-nowrap select-none',
        // Variant-specific
        variantStyles[variant],
        // Consumer overrides
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* People icon for the "serves" variant */}
      {variant === 'serves' && (
        <Users size={12} className="shrink-0" aria-hidden="true" />
      )}

      {children}
    </span>
  );
}
