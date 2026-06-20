'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useInView } from '@/hooks/useInView'
import { FAQS, FAQ_JSON_LD } from '@/lib/faqs'
import { cn } from '@/lib/utils'

/**
 * FAQ section - shadcn Accordion with all items collapsed by default.
 * Injects FAQPage JSON-LD for AEO / Google AI Overviews.
 */
export function FaqSection() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const { ref: accordionRef, inView: accordionInView } = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 bg-surface"
    >
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">

        {/* Section header */}
        <div
          ref={headerRef}
          className={cn('fade-in-up', headerInView && 'in-view')}
        >
          <SectionHeader
            id="faq-heading"
            eyebrow="Frequently Asked Questions"
            heading="Everything You Need to Know"
          />
        </div>

        {/* Accordion - type="single" with no defaultValue means all collapsed */}
        <div
          ref={accordionRef}
          className={cn('fade-in-up', accordionInView && 'in-view')}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-background border border-border rounded px-4 data-[state=open]:border-accent/40 transition-colors duration-200"
              >
                <AccordionTrigger className="font-sans font-medium text-foreground text-left hover:no-underline hover:text-accent py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
