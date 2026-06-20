'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

const TRUST_BADGES = [
  { label: '25+ Years', sub: 'of Chennai craftsmanship' },
  { label: '100% Solid Wood', sub: 'No MDF. No compromise.' },
  { label: 'Kerala Teak', sub: 'Premium hardwoods only' },
  { label: 'Custom Sizes', sub: 'Built to your specification' },
]

/**
 * Hero section — full-viewport height with parallax background image.
 * Two-column layout on desktop, stacked on mobile.
 * Contains CTA 1 (Get a Free Quote on WhatsApp).
 */
export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const { ref: contentRef, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  /* Parallax on scroll — background moves at 0.35x scroll speed */
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY * 0.35
        parallaxRef.current.style.transform = `translateY(${offset}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      aria-label="Hero — Sri Vetrivel Furnitures"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background layer */}
      <div
        ref={parallaxRef}
        className="parallax-layer absolute inset-0 -top-[15%] -bottom-[15%]"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Subtle vignette from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column — text & CTA */}
          <div
            ref={contentRef}
            className={cn(
              'flex flex-col gap-6 fade-in-up',
              inView && 'in-view',
            )}
          >
            {/* Eyebrow */}
            <span className="text-accent font-sans font-semibold text-xs tracking-[0.22em] uppercase">
              Chennai&apos;s Premier Wood Workshop
            </span>

            {/* H1 */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] text-balance">
              Handcrafted Furniture in{' '}
              <em className="not-italic text-accent">Kerala Teak</em>{' '}
              &amp; Premium Hardwoods
            </h1>

            {/* Subtext */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Over 25 years of solid wood craftsmanship from our Ayanavaram
              workshop. No MDF, no compromises — only genuine timber built to
              last generations.
            </p>

            {/* CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <WhatsAppButton
                label="Get a Free Quote on WhatsApp"
                message="Hi, I would like to get a free quote for furniture from Sri Vetrivel Furnitures."
                size="lg"
              />
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold font-sans text-foreground border border-border rounded hover:border-accent hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right column — trust badges (desktop) */}
          <div
            className={cn(
              'hidden lg:grid grid-cols-2 gap-4 fade-in-up',
              inView && 'in-view',
            )}
            style={{ transitionDelay: '150ms' }}
          >
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="bg-surface/70 backdrop-blur-sm border border-border rounded p-5 flex flex-col gap-1 hover:border-accent/40 transition-colors duration-200"
              >
                <span className="font-serif text-foreground text-xl font-bold">
                  {badge.label}
                </span>
                <span className="font-sans text-muted-foreground text-sm">
                  {badge.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile trust badges — horizontal scroll */}
        <div className="lg:hidden mt-10 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex-none snap-start bg-surface/70 backdrop-blur-sm border border-border rounded p-4 min-w-[160px]"
            >
              <span className="font-serif text-foreground text-base font-bold block">
                {badge.label}
              </span>
              <span className="font-sans text-muted-foreground text-xs mt-0.5 block">
                {badge.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
