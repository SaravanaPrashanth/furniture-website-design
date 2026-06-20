export type ProductCategory = 'Sofa Sets' | 'Bedroom' | 'Dining'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  badge: string
  priceLabel: string
  description: string
  imagePath: string
  whatsappMessage: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'sofa-teak-3plus2',
    name: 'Kerala Teak 3+2 Sofa Set',
    category: 'Sofa Sets',
    badge: '100% Solid Teak',
    priceLabel: 'Get Custom Quote',
    description:
      'Handcrafted from premium Kerala teak with mortise-and-tenon joinery. Built to last generations.',
    imagePath: '/images/products/sofa-teak-3plus2.png',
    whatsappMessage:
      'Hi, I am interested in the Kerala Teak 3+2 Sofa Set. Please share details and pricing.',
  },
  {
    id: 'sofa-sheesham-lshape',
    name: 'Sheesham Wood L-Shape Sofa',
    category: 'Sofa Sets',
    badge: 'Customisable Sizes',
    priceLabel: 'Get Custom Quote',
    description:
      'Solid sheesham corner sofa with custom upholstery options. Perfect for modern living rooms.',
    imagePath: '/images/products/sofa-sheesham-lshape.png',
    whatsappMessage:
      'Hi, I am interested in the Sheesham L-Shape Sofa. Please share details and pricing.',
  },
  {
    id: 'bed-teak-king',
    name: 'Teak King Bed with Storage',
    category: 'Bedroom',
    badge: 'Factory-Direct Price',
    priceLabel: 'Get Custom Quote',
    description:
      'Solid teak king bed with hydraulic under-storage. Dovetail joints, no MDF or plywood.',
    imagePath: '/images/products/bed-teak-king.png',
    whatsappMessage:
      'Hi, I am interested in the Teak King Bed with Storage. Please share details and pricing.',
  },
  {
    id: 'wardrobe-3door',
    name: 'Solid Wood Wardrobe (3-Door)',
    category: 'Bedroom',
    badge: 'Premium Hardwood',
    priceLabel: 'Get Custom Quote',
    description:
      'Full-height 3-door wardrobe in solid hardwood. Internal shelving and hanging rail included.',
    imagePath: '/images/products/wardrobe-3door.png',
    whatsappMessage:
      'Hi, I am interested in the 3-Door Solid Wood Wardrobe. Please share details and pricing.',
  },
  {
    id: 'dining-teak-6seater',
    name: 'Teak Dining Table (6-Seater)',
    category: 'Dining',
    badge: 'Includes 6 Chairs',
    priceLabel: 'Get Custom Quote',
    description:
      'Kerala teak dining table with matching solid wood chairs. Single-slab top available on request.',
    imagePath: '/images/products/dining-teak-6seater.png',
    whatsappMessage:
      'Hi, I am interested in the Teak Dining Table (6-Seater). Please share details and pricing.',
  },
  {
    id: 'study-table',
    name: 'Solid Wood Study Table',
    category: 'Dining',
    badge: 'Kerala Teak Wood',
    priceLabel: 'Get Custom Quote',
    description:
      'Minimalist Kerala teak study table with integrated shelf and cable management notch.',
    imagePath: '/images/products/study-table.png',
    whatsappMessage:
      'Hi, I am interested in the Solid Wood Study Table. Please share details and pricing.',
  },
]

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Sofa Sets',
  'Bedroom',
  'Dining',
]
