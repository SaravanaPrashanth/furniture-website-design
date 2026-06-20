import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

/**
 * Individual product card - image, name, badge, description, CTA 2.
 * Hover: subtle scale + accent border reveal.
 */
export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      aria-label={product.name}
      className={cn(
        'group flex flex-col bg-surface border border-accent/20 rounded overflow-hidden shadow-md',
        'hover:border-accent/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-300',
        className,
      )}
    >
      {/* Product image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        <Image
          src={product.imagePath}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Badge */}
        <Badge
          variant="outline"
          className="self-start text-accent border-accent/40 text-[11px] tracking-wide uppercase font-semibold"
        >
          {product.badge}
        </Badge>

        {/* Name */}
        <h3 className="font-serif text-foreground text-lg leading-snug">
          {product.name}
        </h3>

        {/* Description */}
        <p className="font-sans text-muted-foreground text-sm leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Price label + CTA */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-border mt-auto">
          <span className="font-sans text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {product.priceLabel}
          </span>
          <WhatsAppButton
            label="Enquire"
            message={product.whatsappMessage}
            size="sm"
          />
        </div>
      </div>
    </article>
  )
}
