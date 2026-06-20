import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/testimonials'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

/**
 * Individual customer testimonial quote card.
 * Star rating, quote text, name, and location.
 */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        'flex flex-col gap-4 bg-surface border border-border rounded p-6',
        'hover:border-accent/40 transition-colors duration-200',
        className,
      )}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="size-4 fill-accent text-accent"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-sans text-foreground text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-2 border-t border-border">
        {/* Initials avatar */}
        <div
          className="flex items-center justify-center size-9 rounded-full bg-accent/20 border border-accent/30 shrink-0"
          aria-hidden="true"
        >
          <span className="font-sans font-semibold text-accent text-xs">
            {testimonial.initials}
          </span>
        </div>
        <div className="flex flex-col">
          <cite className="font-sans font-semibold text-foreground text-sm not-italic">
            {testimonial.name}
          </cite>
          <span className="font-sans text-muted-foreground text-xs">
            {testimonial.location}
          </span>
        </div>
      </footer>
    </blockquote>
  )
}
