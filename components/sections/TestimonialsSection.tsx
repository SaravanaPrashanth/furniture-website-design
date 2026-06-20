'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { useInView } from '@/hooks/useInView'
import { TESTIMONIALS } from '@/lib/testimonials'
import { cn } from '@/lib/utils'

/**
 * Testimonials section — static 3-card grid.
 * No carousel library needed; static layout is robust and accessible.
 */
export function TestimonialsSection() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Section header */}
        <div
          ref={headerRef}
          className={cn('fade-in-up', headerInView && 'in-view')}
        >
          <SectionHeader
            id="testimonials-heading"
            eyebrow="What Our Customers Say"
            heading="Trusted by Chennai Families for Over Two Decades"
          />
        </div>

        {/* Testimonial grid */}
        <div
          ref={gridRef}
          className={cn(
            'grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up',
            gridInView && 'in-view',
          )}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
