'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2, type LucideIcon } from 'lucide-react';

// ---------------------------------------------------------------------------
// Button — Primary CTA and utility button for Adélia Boulangerie
// ---------------------------------------------------------------------------

/**
 * Props for the `Button` component.
 *
 * @extends ButtonHTMLAttributes — inherits all native `<button>` props.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button.
   *  - `primary`   — gold background (#C4973B), main call-to-action.
   *  - `secondary` — dark blue background (#1B3A5C).
   *  - `outline`   — gold border, transparent background.
   *  - `ghost`     — transparent, text-only with subtle hover.
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

  /** Sizing preset. */
  size?: 'sm' | 'md' | 'lg';

  /** Optional Lucide icon component to render inside the button. */
  icon?: LucideIcon;

  /** Where the icon should appear relative to the label. */
  iconPosition?: 'left' | 'right';

  /** Stretch the button to fill its container width. */
  fullWidth?: boolean;

  /** Show a spinner and disable interaction while an async action runs. */
  loading?: boolean;
}

// ---------------------------------------------------------------------------
// Style maps — Tailwind classes keyed by variant / size
// ---------------------------------------------------------------------------

/** Background, text, border & hover styles per variant. */
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-adelia-gold text-white hover:bg-adelia-gold-dark active:bg-adelia-gold-dark focus-visible:ring-adelia-gold/50',
  secondary:
    'bg-adelia-blue text-white hover:brightness-110 active:brightness-95 focus-visible:ring-adelia-blue/50',
  outline:
    'border-2 border-adelia-gold text-adelia-gold bg-transparent hover:bg-adelia-gold hover:text-white focus-visible:ring-adelia-gold/50',
  ghost:
    'bg-transparent text-adelia-text hover:bg-adelia-cream focus-visible:ring-adelia-text/20',
};

/** Padding, font-size & icon sizing per size preset. */
const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
};

/** Icon dimensions that match each size preset. */
const iconSizeMap: Record<NonNullable<ButtonProps['size']>, number> = {
  sm: 14,
  md: 18,
  lg: 22,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * `Button` is the main interactive element across the Adélia Boulangerie UI.
 *
 * @example
 * ```tsx
 * import { ShoppingCart } from 'lucide-react';
 * <Button variant="primary" icon={ShoppingCart}>
 *   Adicionar ao Carrinho
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      fullWidth = false,
      loading = false,
      disabled,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const iconSize = iconSizeMap[size];

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[
          // Base layout & typography
          'inline-flex items-center justify-center font-body font-medium rounded-lg',
          // Smooth transitions & focus ring
          'transition-all duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          // Disabled / loading state
          'disabled:opacity-50 disabled:pointer-events-none',
          // Cursor
          'cursor-pointer',
          // Variant & size specific
          variantStyles[variant],
          sizeStyles[size],
          // Full width
          fullWidth ? 'w-full' : '',
          // Consumer overrides
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {/* Loading spinner — replaces icon when active */}
        {loading && (
          <Loader2
            size={iconSize}
            className="animate-spin shrink-0"
            aria-hidden="true"
          />
        )}

        {/* Leading icon */}
        {!loading && Icon && iconPosition === 'left' && (
          <Icon size={iconSize} className="shrink-0" aria-hidden="true" />
        )}

        {/* Label */}
        {children && <span>{children}</span>}

        {/* Trailing icon */}
        {!loading && Icon && iconPosition === 'right' && (
          <Icon size={iconSize} className="shrink-0" aria-hidden="true" />
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
