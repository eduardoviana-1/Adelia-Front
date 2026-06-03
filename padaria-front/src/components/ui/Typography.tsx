// ---------------------------------------------------------------------------
// Typography — Standardized text components for Adélia Boulangerie
// ---------------------------------------------------------------------------
// Uses the design-system fonts:
//   • Headings → Playfair Display (--font-heading / font-heading)
//   • Body     → Outfit          (--font-body   / font-body)
// ---------------------------------------------------------------------------

// ============================= Heading =====================================

/**
 * Props for the `Heading` component.
 */
export interface HeadingProps {
  /** The semantic heading level to render. Defaults to `h2`. */
  as?: 'h1' | 'h2' | 'h3' | 'h4';

  /** Heading content. */
  children: React.ReactNode;

  /** Additional Tailwind classes for consumer overrides. */
  className?: string;
}

/** Font-size classes mapped to each heading level. */
const headingSizes: Record<NonNullable<HeadingProps['as']>, string> = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
};

/**
 * `Heading` renders a semantic heading (`h1`–`h4`) styled with
 * **Playfair Display** — the brand serif font used across the bakery site.
 *
 * @example
 * ```tsx
 * <Heading as="h1">Nossas Especialidades</Heading>
 * <Heading as="h3" className="text-adelia-gold">Pães Artesanais</Heading>
 * ```
 */
export function Heading({
  as: Tag = 'h2',
  children,
  className = '',
}: HeadingProps) {
  return (
    <Tag
      className={[
        'font-heading font-bold text-adelia-text leading-tight tracking-tight',
        headingSizes[Tag],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}

// =============================== Text ======================================

/**
 * Props for the `Text` component.
 */
export interface TextProps {
  /** Font-size preset. */
  size?: 'sm' | 'base' | 'lg';

  /** When `true`, renders the text in the muted/secondary color. */
  muted?: boolean;

  /** Text content. */
  children: React.ReactNode;

  /** Additional Tailwind classes for consumer overrides. */
  className?: string;

  /** The HTML element to render. Defaults to `p`. */
  as?: 'p' | 'span';
}

/** Font-size classes mapped to each size preset. */
const textSizes: Record<NonNullable<TextProps['size']>, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

/**
 * `Text` renders body copy styled with **Outfit** — the clean sans-serif
 * font used for readability across the bakery UI.
 *
 * @example
 * ```tsx
 * <Text>Nossos pães são feitos diariamente com ingredientes selecionados.</Text>
 * <Text size="sm" muted>Disponível apenas às sextas-feiras.</Text>
 * ```
 */
export function Text({
  size = 'base',
  muted = false,
  children,
  className = '',
  as: Tag = 'p',
}: TextProps) {
  return (
    <Tag
      className={[
        'font-body leading-relaxed',
        textSizes[size],
        muted ? 'text-adelia-muted' : 'text-adelia-text',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}

// ============================= Subtitle ====================================

/**
 * Props for the `Subtitle` component.
 */
export interface SubtitleProps {
  /** Subtitle content — typically a short label or section intro. */
  children: React.ReactNode;

  /** Additional Tailwind classes for consumer overrides. */
  className?: string;
}

/**
 * `Subtitle` renders a decorative **small-caps** label — perfect for
 * section eyebrows, category labels, or understated annotations.
 *
 * @example
 * ```tsx
 * <Subtitle>Destaques da Semana</Subtitle>
 * <Subtitle className="text-adelia-gold">Novidades</Subtitle>
 * ```
 */
export function Subtitle({ children, className = '' }: SubtitleProps) {
  return (
    <p
      className={[
        'font-body text-sm uppercase tracking-[0.2em] font-medium text-adelia-muted',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </p>
  );
}
