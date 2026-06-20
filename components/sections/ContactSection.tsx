'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Our Showroom & Workshop',
    lines: [
      'No.1 South VP Colony',
      'Medavakkam Tank Road',
      'Ayanavaram, Chennai – 600 023',
    ],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 97100 25248 (WhatsApp)', '+91 88387 55077'],
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    lines: ['Mon – Fri: 10:00 AM – 9:00 PM', 'Sat & Sun: 11:00 AM – 7:00 PM'],
  },
]

/**
 * Contact section — address, phone, hours, and CTA 3 (Chat on WhatsApp).
 */
export function ContactSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Section header */}
        <div className={cn('fade-in-up', inView && 'in-view')} ref={ref}>
          <SectionHeader
            id="contact-heading"
            eyebrow="Visit Us"
            heading="Come See Our Craftsmanship in Person"
            subtext="Our workshop is our showroom. You are always welcome to walk in, see pieces in progress, and feel the quality of our wood firsthand."
          />
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                'flex flex-col gap-3 bg-surface border border-border rounded p-6 fade-in-up',
                inView && 'in-view',
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-center size-10 rounded bg-accent/10 border border-accent/20 self-start">
                <item.icon className="size-5 text-accent" aria-hidden="true" />
              </div>
              <span className="font-sans font-semibold text-foreground text-sm tracking-wide uppercase">
                {item.label}
              </span>
              <address className="not-italic flex flex-col gap-0.5">
                {item.lines.map((line) => (
                  <span
                    key={line}
                    className="font-sans text-muted-foreground text-sm leading-relaxed"
                  >
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>

        {/* CTA 3 */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-sans text-muted-foreground text-sm text-center max-w-md">
            Ready to discuss your furniture? Send us a message on WhatsApp and
            we will get back to you within a few hours.
          </p>
          <WhatsAppButton
            label="Chat With Us on WhatsApp"
            message="Hi, I would like to discuss a furniture project with Sri Vetrivel Furnitures."
            size="lg"
          />
        </div>
      </div>
    </section>
  )
}
