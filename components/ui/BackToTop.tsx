'use client'

import { ArrowUp } from 'lucide-react'
import { useScrollY } from '@/hooks/useScrollY'
import { cn } from '@/lib/utils'

/**
 * Fixed back-to-top button — appears after 300px of scroll.
 * Smooth scrolls to #top via the scroll-smooth class on <html>.
 */
export function BackToTop() {
  const scrollY = useScrollY()
  const visible = scrollY > 300

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center size-11 rounded-full',
        'bg-accent text-foreground shadow-lg',
        'hover:brightness-110 active:scale-95 transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </a>
  )
}
