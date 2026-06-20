import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subtext?: string
  /** Alignment: left or center. Defaults to center. */
  align?: 'left' | 'center'
  /** Optional id applied to the h2 for aria-labelledby references. */
  id?: string
  className?: string
}

/**
 * Reusable section heading block used across all landing page sections.
 * Eyebrow → H2 (serif) → optional subtext.
 */
export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'center',
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent font-sans">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
        {heading}
      </h2>
      {subtext && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          {subtext}
        </p>
      )}
    </div>
  )
}
