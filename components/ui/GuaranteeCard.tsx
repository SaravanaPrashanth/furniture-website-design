import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface GuaranteeCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Individual guarantee / feature card used in WhyUsSection.
 * Accent icon, serif title, body description.
 */
export function GuaranteeCard({
  icon: Icon,
  title,
  description,
  className,
}: GuaranteeCardProps) {
  return (
    <div
      className={cn(
        'group flex flex-col gap-4 bg-surface border border-border rounded p-6',
        'hover:border-accent/50 hover:scale-[1.02] transition-all duration-300',
        className,
      )}
    >
      {/* Icon */}
      <div className="flex items-center justify-center size-12 rounded bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-200">
        <Icon className="size-6 text-accent" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-serif text-foreground text-xl leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
