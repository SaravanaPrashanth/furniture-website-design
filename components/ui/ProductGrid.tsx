import { ProductCard } from '@/components/ui/ProductCard'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

interface ProductGridProps {
  products: Product[]
  className?: string
}

/**
 * Responsive 3-column grid of ProductCards.
 * 1 col on mobile, 2 on tablet, 3 on desktop.
 */
export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
