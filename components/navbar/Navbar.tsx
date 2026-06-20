'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useScrollY } from '@/hooks/useScrollY'
import { NavLinks } from './NavLinks'
import { MobileMenu } from './MobileMenu'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

/**
 * Sticky navbar - transparent at top, transitions to frosted surface on scroll.
 * Desktop: logo | nav links (center) | WhatsApp CTA (right)
 * Mobile/Tablet: logo | hamburger icon (right)
 */
export function Navbar() {
  const scrollY = useScrollY()
  const isScrolled = scrollY > 80

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo / Brand name */}
          <a
            href="#top"
            aria-label="Sri Vetrivel Furnitures - back to top"
            className="flex items-start gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 mt-0.5 flex-shrink-0">
              <Image
                src="/images/murugan-spear.png"
                alt="Lord Murugan"
                fill
                className="object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-foreground text-lg lg:text-xl font-bold tracking-tight">
                Sri Vetrivel
              </span>
              <span className="font-sans text-accent text-[10px] tracking-[0.22em] uppercase font-semibold">
                Furnitures
              </span>
            </div>
          </a>

          {/* Desktop nav links - hidden on mobile/tablet */}
          <div className="hidden lg:flex">
            <NavLinks orientation="horizontal" />
          </div>

          {/* Desktop CTA - hidden on mobile/tablet */}
          <div className="hidden lg:flex">
            <WhatsAppButton
              label="Get a Free Quote"
              message="Hi, I would like to get a free quote for furniture."
              size="sm"
            />
          </div>

          {/* Mobile hamburger - hidden on desktop */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
