'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

/**
 * Hero section - full-viewport height with parallax background image.
 * Two-column layout on desktop, stacked on mobile.
 * Contains CTA 1 (Get a Free Quote on WhatsApp).
 */
export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const { ref: contentRef, inView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  /* Parallax on scroll - background moves at 0.35x scroll speed */
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
      aria-label="Hero - Sri Vetrivel Furnitures"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-2xl">

          {/* Left column - text & CTA */}
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
              workshop. No MDF, no compromises - only genuine timber built to
              last generations.
            </p>

            {/* CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start">
              <WhatsAppButton
                label="Get a Free Quote"
                message="Hi, I would like to get a free quote for furniture from Sri Vetrivel Furnitures."
                size="lg"
              />
              <a
                href="#products"
                className="inline-flex items-center pt-4 font-sans text-muted-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View our collection
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
