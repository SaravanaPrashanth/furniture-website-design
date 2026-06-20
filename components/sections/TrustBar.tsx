const TRUST_ITEMS = [
  '25+ Years of Craftsmanship',
  'Kerala Teak Wood',
  '100% Solid Wood',
  'No MDF - Ever',
  'Custom Sizes Available',
  'Pan-Chennai Delivery',
  'Factory-Direct Pricing',
  'Workshop & Showroom in Ayanavaram',
]

/**
 * Infinite-scroll marquee trust strip between the hero and products sections.
 * Pure CSS animation - no JavaScript required.
 */
export function TrustBar() {
  /* Duplicate items to create seamless infinite loop */
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS]

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-border bg-surface py-4"
    >
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 font-sans text-sm font-medium text-muted-foreground"
          >
            {/* Accent diamond separator */}
            <span
              className="size-1.5 rounded-sm rotate-45 bg-accent shrink-0"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
