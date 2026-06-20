'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet'
import { NavLinks } from './NavLinks'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

/**
 * Hamburger trigger + Sheet drawer for mobile navigation.
 * Closes automatically when a nav link is tapped.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center size-10 rounded text-foreground hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {/* Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          id="mobile-nav-drawer"
          side="right"
          className="bg-surface border-border w-[300px] flex flex-col"
        >
          <SheetHeader className="flex flex-row items-center justify-between pb-4 border-b border-border">
            <SheetTitle className="font-serif text-foreground text-lg text-left">
              Sri Vetrivel Furnitures
            </SheetTitle>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center size-8 rounded text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </SheetHeader>

          {/* Nav links */}
          <div className="flex-1 py-6">
            <NavLinks
              orientation="vertical"
              onLinkClick={() => setOpen(false)}
            />
          </div>

          {/* CTA in drawer */}
          <div className="pt-4 pb-2 border-t border-border">
            <WhatsAppButton
              label="WhatsApp Us"
              message="Hi, I would like to enquire about your furniture."
              size="md"
              className="w-full justify-center"
            />
          </div>

          {/* Contact info */}
          <p className="text-muted-foreground text-xs text-center pb-4 leading-relaxed">
            Mon–Fri: 10AM–9PM · Sat–Sun: 11AM–7PM
          </p>
        </SheetContent>
      </Sheet>
    </>
  )
}
