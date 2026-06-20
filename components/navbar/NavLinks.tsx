'use client'

import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

const LINKS: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

interface NavLinksProps {
  onLinkClick?: () => void
  orientation?: 'horizontal' | 'vertical'
}

/**
 * Desktop inline anchor links and mobile drawer link list.
 * Smooth-scroll is handled by the `scroll-smooth` class on <html>.
 */
export function NavLinks({
  onLinkClick,
  orientation = 'horizontal',
}: NavLinksProps) {
  return (
    <nav
      aria-label="Site navigation"
      className={cn(
        orientation === 'horizontal'
          ? 'flex items-center gap-8'
          : 'flex flex-col gap-1',
      )}
    >
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            'font-sans font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            orientation === 'horizontal'
              ? 'text-sm tracking-wide'
              : 'text-lg py-3 px-4 rounded hover:bg-surface border-b border-border last:border-b-0',
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
