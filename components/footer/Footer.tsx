import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Site footer - 3-column desktop layout, stacked on mobile.
 * Dynamic copyright year. No social links per brief.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#top"
              aria-label="Sri Vetrivel Furnitures - back to top"
              className="flex items-start gap-2 leading-tight w-fit"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 mt-0.5 flex-shrink-0">
                <Image
                  src="/images/murugan-spear.png"
                  alt="Lord Murugan"
                  fill
                  className="object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-foreground text-xl font-bold">
                  Sri Vetrivel
                </span>
                <span className="font-sans text-accent text-[10px] tracking-[0.22em] uppercase font-semibold">
                  Furnitures
                </span>
              </div>
            </a>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-xs">
              Handcrafting solid wood furniture from our Ayanavaram workshop
              since 2001. Kerala teak and premium hardwoods - no shortcuts,
              no compromises.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-muted-foreground text-sm hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2">
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                No.1 South VP Colony, Medavakkam Tank Road,
                <br />
                Ayanavaram, Chennai – 600 023
              </p>
              <a
                href="https://wa.me/919710025248"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-muted-foreground text-sm hover:text-accent transition-colors duration-200"
                aria-label="WhatsApp: +91 97100 25248"
              >
                +91 97100 25248
              </a>
              <a
                href="tel:+918838755077"
                className="font-sans text-muted-foreground text-sm hover:text-accent transition-colors duration-200"
                aria-label="Phone: +91 88387 55077"
              >
                +91 88387 55077
              </a>
              <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">
                Mon–Fri: 10 AM–9 PM · Sat–Sun: 11 AM–7 PM
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-muted-foreground text-xs text-center sm:text-left">
            &copy; {year} Sri Vetrivel Furnitures. All rights reserved.
          </p>
          <p className="font-sans text-muted-foreground text-xs text-center sm:text-right">
            Handcrafted in Chennai since 2001.
          </p>
        </div>
      </div>
    </footer>
  )
}
