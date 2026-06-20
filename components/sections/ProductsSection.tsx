'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProductGrid } from '@/components/ui/ProductGrid'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { useInView } from '@/hooks/useInView'
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products'
import { cn } from '@/lib/utils'

/**
 * Products section — tabbed by category (Sofa Sets / Bedroom / Dining).
 * Section-level CTA 2 below the grid.
 */
export function ProductsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Section header */}
        <div
          ref={ref}
          className={cn('fade-in-up', inView && 'in-view')}
        >
          <SectionHeader
            eyebrow="Our Collection"
            heading="Furniture Built to Last Generations"
            subtext="Every piece is handcrafted from 100% solid wood. Browse our most popular categories below — custom sizes available on all items."
            id="products-heading"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="Sofa Sets" className="w-full">
          <TabsList className="bg-surface border border-border rounded p-1 flex gap-1 w-full max-w-sm mx-auto mb-8">
            {PRODUCT_CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="flex-1 text-sm font-sans font-medium data-[state=active]:bg-accent data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground rounded transition-colors"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {PRODUCT_CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <ProductGrid
                products={PRODUCTS.filter((p) => p.category === cat)}
              />
            </TabsContent>
          ))}
        </Tabs>

        {/* Section-level CTA 2 */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <p className="font-sans text-muted-foreground text-sm text-center max-w-md">
            Don&apos;t see exactly what you need? We build fully custom pieces
            — just send us your requirements on WhatsApp.
          </p>
          <WhatsAppButton
            label="Enquire About Any Piece"
            message="Hi, I would like to enquire about a custom furniture piece from Sri Vetrivel Furnitures."
            size="md"
          />
        </div>
      </div>
    </section>
  )
}
