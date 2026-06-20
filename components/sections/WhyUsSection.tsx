'use client'

import { TreePine, Hammer, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GuaranteeCard } from '@/components/ui/GuaranteeCard'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

const GUARANTEES = [
  {
    icon: TreePine,
    title: 'Only Premium Natural Wood',
    description:
      'We source Kerala teak, sheesham, and select hardwoods — wood with proven grain strength and natural beauty. We never use MDF, plywood, compressed board, or engineered substitutes. What you see is what your furniture is made from.',
  },
  {
    icon: Hammer,
    title: 'Handcrafted by Skilled Artisans',
    description:
      'Each piece is built by craftsmen with decades of experience in traditional joinery — mortise-and-tenon, dovetail, and dowel joints. No shortcuts, no factory lines. Your furniture is made by hand, one piece at a time.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for Decades, Not Years',
    description:
      'We design furniture to outlast trends and fashions. Solid wood construction means your pieces can be repaired, refinished, and passed down. Unlike particle board furniture that warps and breaks within years, ours improves with age.',
  },
]

/**
 * Why Us section — quality USP copy and three guarantee cards.
 * Answers the key objection: why pay more for solid wood?
 */
export function WhyUsSection() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.1 })
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Section header */}
        <div
          ref={headerRef}
          className={cn('fade-in-up', headerInView && 'in-view')}
        >
          <SectionHeader
            id="why-us-heading"
            eyebrow="Why Sri Vetrivel"
            heading="We Refuse to Compromise on Wood Quality"
            subtext="Most furniture stores use MDF cores and veneer surfaces to cut costs. We have never done that in 25 years, and we never will. Here is what you actually get when you buy from us."
          />
        </div>

        {/* Guarantee cards */}
        <div
          ref={cardsRef}
          className={cn(
            'grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up',
            cardsInView && 'in-view',
          )}
        >
          {GUARANTEES.map((g, i) => (
            <div
              key={g.title}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <GuaranteeCard
                icon={g.icon}
                title={g.title}
                description={g.description}
              />
            </div>
          ))}
        </div>

        {/* Supporting copy */}
        <div
          className={cn(
            'max-w-3xl mx-auto text-center fade-in-up',
            cardsInView && 'in-view',
          )}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="font-sans text-muted-foreground text-base leading-relaxed">
            Visit our Ayanavaram showroom and see the difference firsthand — touch the
            grain, feel the weight, ask us anything. We welcome every visitor whether
            you are ready to order or just exploring.
          </p>
        </div>
      </div>
    </section>
  )
}
