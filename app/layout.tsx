import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

/* ─── Fonts ─── */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

/* ─── SEO Metadata ─── */

export const metadata: Metadata = {
  title: 'Sri Vetrivel Furnitures | Handcrafted Solid Wood Furniture Chennai',
  description:
    'Premium handcrafted furniture from Kerala teak & quality hardwoods. 25+ years serving Chennai. Custom designs, factory-direct pricing. Visit our showroom in Ayanavaram or WhatsApp us today.',
  keywords: [
    'solid wood furniture Chennai',
    'teak furniture Ayanavaram',
    'custom furniture Chennai',
    'handcrafted wood furniture',
    'furniture workshop Chennai',
    'Kerala teak furniture',
    'sofa set Chennai',
    'bedroom furniture Chennai',
  ],
  authors: [{ name: 'Sri Vetrivel Furnitures' }],
  creator: 'Sri Vetrivel Furnitures',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://srivetrivel.com',
    siteName: 'Sri Vetrivel Furnitures',
    title: 'Sri Vetrivel Furnitures | Handcrafted Solid Wood Furniture Chennai',
    description:
      'Premium handcrafted furniture from Kerala teak & quality hardwoods. 25+ years serving Chennai. Custom designs, factory-direct pricing.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Vetrivel Furnitures — Handcrafted Teak Furniture Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Vetrivel Furnitures | Handcrafted Solid Wood Furniture Chennai',
    description:
      'Premium handcrafted furniture from Kerala teak & quality hardwoods. 25+ years serving Chennai.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#141210',
}

/* ─── JSON-LD Structured Data ─── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FurnitureStore',
      '@id': 'https://srivetrivel.com/#store',
      name: 'Sri Vetrivel Furnitures',
      description:
        'Premium handcrafted solid wood furniture using Kerala teak and quality hardwoods. Custom designs available. 25+ years serving Chennai.',
      url: 'https://srivetrivel.com',
      telephone: '+919710025248',
      priceRange: '₹₹',
      image: '/images/og-image.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.1 South VP Colony, Medavakkam Tank Road',
        addressLocality: 'Ayanavaram',
        addressRegion: 'Tamil Nadu',
        postalCode: '600023',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '13.1069',
        longitude: '80.2213',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '11:00',
          closes: '19:00',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919710025248',
        contactType: 'customer service',
        availableLanguage: ['English', 'Tamil'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://srivetrivel.com/#website',
      url: 'https://srivetrivel.com',
      name: 'Sri Vetrivel Furnitures',
      description: 'Handcrafted solid wood furniture from Chennai',
      inLanguage: 'en-IN',
    },
  ],
}

/* ─── Root Layout ─── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
