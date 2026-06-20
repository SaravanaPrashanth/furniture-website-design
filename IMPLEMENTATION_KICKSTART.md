# Sri Vetrivel Furnitures - Implementation Kickstart

> Last updated: 2026-06-20  
> Status: **All 6 Phases Complete - Build Ready for Browser QA**

---

## Build Progress Tracker

### Phase 1 - Foundation & Design System ✅ COMPLETE
- [x] `app/globals.css` - 5 design tokens, font vars, marquee & fade-in animations, base body styles
- [x] `app/layout.tsx` - Inter + Playfair Display fonts, full SEO metadata, Open Graph, JSON-LD (FurnitureStore + WebSite schema), viewport
- [x] `app/page.tsx` - scaffolded with section placeholders, placeholder visual for Phase 1
- [x] `lib/products.ts` - 6 products across 3 categories with WhatsApp messages
- [x] `lib/faqs.ts` - 5 FAQs + FAQPage JSON-LD export
- [x] `lib/testimonials.ts` - 3 customer testimonials
- [x] `hooks/useScrollY.ts` - passive scroll listener, used by Navbar + BackToTop
- [x] `hooks/useInView.ts` - IntersectionObserver wrapper for fade-in-up animations
- [x] `components/ui/SectionHeader.tsx` - reusable eyebrow + h2 + subtext block
- [x] `components/ui/WhatsAppButton.tsx` - reusable CTA button (solid + outline variants, 3 sizes)
- [x] shadcn components installed: `sheet`, `accordion`, `tabs`, `badge`, `separator`

### Phase 2 - Navigation ✅ COMPLETE
- [x] `components/navbar/Navbar.tsx` - sticky, scroll-aware transparency, desktop layout
- [x] `components/navbar/NavLinks.tsx` - horizontal (desktop) + vertical (drawer) variants
- [x] `components/navbar/MobileMenu.tsx` - hamburger button + Sheet drawer with nav links + CTA
- [x] `useScrollY` hook integrated for scroll threshold at 80px
- [x] Navbar wired into `app/page.tsx`

### Phase 3 - Hero Section ✅ COMPLETE
- [x] `components/sections/HeroSection.tsx` - parallax bg, H1, subtext, CTA 1, trust badge grid (desktop) + horizontal scroll (mobile)
- [x] `components/sections/TrustBar.tsx` - infinite CSS marquee strip
- [x] Hero background image generated (`/public/images/hero-bg.png`)
- [x] `hooks/useInView.ts` integrated for staggered fade-in-up on hero content

### Phase 4 - Products Section ✅ COMPLETE
- [x] `components/sections/ProductsSection.tsx` - shadcn Tabs, section CTA 2, fade-in-up
- [x] `components/ui/ProductCard.tsx` - image, badge, description, per-card WhatsApp CTA
- [x] `components/ui/ProductGrid.tsx` - responsive 1/2/3-col grid
- [x] All 6 product images generated in `/public/images/products/`
- [x] `lib/products.ts` image paths updated to `.png`

### Phase 5 - Why Us, Testimonials & FAQ ✅ COMPLETE
- [x] `components/sections/WhyUsSection.tsx` - 3 guarantee cards, quality USP copy
- [x] `components/ui/GuaranteeCard.tsx` - icon + title + description card
- [x] `components/sections/TestimonialsSection.tsx` - 3-column static grid
- [x] `components/ui/TestimonialCard.tsx` - star rating, quote, author initials avatar
- [x] `components/sections/FaqSection.tsx` - shadcn Accordion, all collapsed, FAQPage JSON-LD injected

### Phase 6 - Contact, Footer & Polish ✅ COMPLETE
- [x] `components/sections/ContactSection.tsx` - address, hours, phone, CTA 3
- [x] `components/footer/Footer.tsx` - 3-col layout, dynamic year, brand story
- [x] `components/ui/BackToTop.tsx` - fixed button, appears at 300px scroll, smooth scroll
- [x] `app/page.tsx` - all 10 sections composed and exported
- [x] Final plan status updated

---

---

## 1. Business Context

| Field | Value |
|---|---|
| Brand | Sri Vetrivel Furnitures |
| Type | Local Chennai furniture workshop & showroom |
| Founded | ~2001 (25+ years) |
| Location | No.1 South VP Colony, Medavakkam Tank Road, Ayanavaram, Chennai – 600 023 |
| WhatsApp CTA | +91 97100 25248 |
| Phone (alt) | +91 88387 55077 |
| Hours | Mon–Fri: 10 AM – 9 PM · Sat–Sun: 11 AM – 7 PM |
| USP | 100% solid wood - Kerala teak & premium hardwoods. No compromised materials. |
| Primary conversion | WhatsApp enquiry (wa.me/919710025248) |

---

## 2. Design Token System

### 2.1 Color Palette (5 tokens total - dark theme)

| Token | Hex | Role |
|---|---|---|
| `--color-background` | `#141210` | Page & card backgrounds - near-black with a warm brown undertone |
| `--color-surface` | `#1e1a17` | Elevated surfaces (nav, cards, footer, FAQ items) |
| `--color-accent` | `#8B5E3C` | Teak brown - ALL CTAs, borders, highlights, icons, links |
| `--color-foreground` | `#F0EAE2` | Primary text - warm cream, never pure white |
| `--color-muted` | `#9A8F85` | Secondary/muted text, placeholders, labels |

> **Rule:** Every interactive element (buttons, links, hover borders, focus rings, badge text) uses `--color-accent`. No purple. No blue. Accent appears on dark surfaces only - never on light backgrounds.

#### CSS Token Declaration (globals.css)

```css
@theme inline {
  --color-background: #141210;
  --color-surface:    #1e1a17;
  --color-accent:     #8B5E3C;
  --color-foreground: #F0EAE2;
  --color-muted:      #9A8F85;
  --radius:           0.375rem;

  --font-sans: 'Inter', 'Inter Fallback';
  --font-serif: 'Playfair Display', 'Playfair Display Fallback';
}
```

### 2.2 Typography System

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / H1 | Playfair Display (`font-serif`) | 700 | Hero headline, section titles |
| Heading / H2–H3 | Playfair Display (`font-serif`) | 600 | Section subheadings |
| Body | Inter (`font-sans`) | 400 | All paragraph and label copy |
| UI labels / badges | Inter (`font-sans`) | 500–600 | Buttons, tabs, nav links, badges |

> Line-height for body: `leading-relaxed` (1.625). Max prose width: `max-w-2xl`. Never use Playfair below 18px.

### 2.3 Spacing & Radius

| Token | Value | Usage |
|---|---|---|
| `--radius` | `0.375rem` | All card and button corners |
| Section padding | `py-20 md:py-28` | Vertical breathing room between sections |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Page-wide content boundary |

### 2.4 Animation Tokens

| Effect | Implementation | Notes |
|---|---|---|
| Hero parallax | CSS `transform: translateY()` on scroll via `useScroll` hook | Background image layer moves at 0.4x scroll speed |
| Fade-in on scroll | `IntersectionObserver` with `opacity-0 → opacity-100 translate-y-4 → translate-y-0` | 300ms ease-out, staggered per section |
| Hover on cards | `scale-[1.02] shadow-lg` with `transition-all duration-300` | Product cards and guarantee cards |
| Hover on CTAs | `brightness-110` + slight `scale-[1.02]` | All WhatsApp buttons |
| Sticky nav transition | `bg-transparent → bg-surface/90 backdrop-blur-md` on scroll past 80px | Smooth opacity crossfade |
| Back-to-top | `opacity-0 → opacity-100` when scroll > 300px | Smooth scroll to `#top` |

---

## 3. WhatsApp CTA Strategy

Three CTA placements minimum - each contextually distinct:

| # | Location | Label | Context |
|---|---|---|---|
| CTA 1 | Hero section | "Get a Free Quote on WhatsApp" | Primary conversion - high intent visitors |
| CTA 2 | Products section (mid-page) | "Enquire About This Piece" | On each product card (or a section-level CTA below the grid) |
| CTA 3 | Footer / Contact section | "Chat With Us on WhatsApp" | Bottom-of-page conversion - visitors who scrolled to the end |

All CTA buttons share the same pattern: `bg-accent text-foreground font-semibold px-6 py-3 rounded hover:brightness-110 transition`.  
WhatsApp icon (Lucide `MessageCircle` or SVG) precedes every CTA label.

---

## 4. SEO & AEO Strategy

### 4.1 Metadata (layout.tsx)

```
title: "Sri Vetrivel Furnitures | Handcrafted Solid Wood Furniture Chennai"
description: "Premium handcrafted furniture from Kerala teak & quality hardwoods. 
              25+ years serving Chennai. Custom designs. Factory-direct pricing. 
              Visit our showroom in Ayanavaram or WhatsApp us today."
keywords: solid wood furniture Chennai, teak furniture Ayanavaram, 
          custom furniture Chennai, handcrafted wood furniture, 
          furniture workshop Chennai
```

### 4.2 Open Graph

- `og:type` → `website`
- `og:title` → same as page title
- `og:description` → same as meta description
- `og:image` → generated hero product image (1200×630 optimized)

### 4.3 Structured Data (JSON-LD in layout.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Sri Vetrivel Furnitures",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.1 South VP Colony, Medavakkam Tank Road",
    "addressLocality": "Ayanavaram",
    "addressRegion": "Chennai",
    "postalCode": "600 023",
    "addressCountry": "IN"
  },
  "telephone": "+919710025248",
  "openingHours": ["Mo-Fr 10:00-21:00", "Sa-Su 11:00-19:00"],
  "priceRange": "₹₹",
  "hasMap": "https://maps.google.com/?q=Ayanavaram+Chennai"
}
```

### 4.4 AEO (Answer Engine Optimization)

- FAQ section uses `schema.org/FAQPage` JSON-LD - answers the exact queries Google AI Overviews pull
- Each section heading is phrased as a natural search query where appropriate
- `<article>` and `<section>` semantics throughout
- Product names use full descriptive copy ("Kerala Teak Sofa Set") not short labels

### 4.5 Performance

- Next.js Image component for all product images (`priority` on hero)
- `font-display: swap` for both Google Fonts
- Minimal third-party scripts - no analytics trackers in Phase 1
- `viewport` meta: `width=device-width, initial-scale=1`

---

## 5. Page Section Map (Full Page Architecture)

```
┌─────────────────────────────────┐
│  <Navbar>                       │  Sticky, transparent → frosted on scroll
│    Logo | Products · Why Us · FAQs · Contact | WhatsApp CTA btn
│    Mobile: Hamburger → Sheet drawer
├─────────────────────────────────┤
│  <HeroSection>                  │  Parallax bg, CTA 1
│    H1 headline + subtext        │
│    [Get Free Quote on WhatsApp] │  ← CTA 1
│    Trust badges row             │
├─────────────────────────────────┤
│  <TrustBar>                     │  Scrolling marquee strip
│    "25+ Years" · "Kerala Teak"  │
│    "100% Solid Wood" · etc.     │
├─────────────────────────────────┤
│  <ProductsSection id="products">│
│    Section headline + tabs      │
│    3-column product grid        │
│    [Enquire About This Piece]   │  ← CTA 2 (per card or section footer)
├─────────────────────────────────┤
│  <WhyUsSection id="why-us">     │
│    Kerala Teak USP copy         │
│    3 quality guarantee cards    │
├─────────────────────────────────┤
│  <TestimonialsSection>          │  Static grid (3 cards)
│    Customer quote cards         │
├─────────────────────────────────┤
│  <FaqSection id="faqs">         │  Shadcn Accordion, all collapsed
│    5 FAQ items w/ FAQPage JSON  │
├─────────────────────────────────┤
│  <ContactSection id="contact">  │
│    Address · Hours · Phone      │
│    [Chat With Us on WhatsApp]   │  ← CTA 3
├─────────────────────────────────┤
│  <Footer>                       │  Dynamic year, brand story
│    Logo col | Quick Links col   │
│    Contact col | Hours col      │
│    Bottom bar: © {year} notice  │
└─────────────────────────────────┘
│  <BackToTopButton>              │  Fixed, appears after 300px scroll
└─────────────────────────────────┘
```

---

## 6. Component Inventory

Each file must remain under 600 lines. Components are organized by concern.

### 6.1 Layout & Global

| File | Responsibility | Approx Lines |
|---|---|---|
| `app/layout.tsx` | Root layout, fonts, SEO metadata, JSON-LD, `<html className="bg-background">` | ~60 |
| `app/page.tsx` | Imports and composes all section components | ~40 |
| `app/globals.css` | Design tokens, Tailwind v4 theme, font vars | ~80 |

### 6.2 Navigation

| File | Responsibility |
|---|---|
| `components/navbar/Navbar.tsx` | Full navbar shell - sticky logic, scroll state |
| `components/navbar/NavLinks.tsx` | Desktop anchor links with smooth scroll |
| `components/navbar/MobileMenu.tsx` | Hamburger button + Sheet drawer (shadcn Sheet) |

### 6.3 Sections

| File | Section | Key Features |
|---|---|---|
| `components/sections/HeroSection.tsx` | Hero | Parallax, CTA 1, trust badge row |
| `components/sections/TrustBar.tsx` | Trust bar | CSS marquee animation |
| `components/sections/ProductsSection.tsx` | Products | Tabs shell, imports ProductGrid |
| `components/sections/WhyUsSection.tsx` | Why Us | Quality USP copy, 3 guarantee cards |
| `components/sections/TestimonialsSection.tsx` | Testimonials | Static 3-card grid |
| `components/sections/FaqSection.tsx` | FAQ | shadcn Accordion, FAQPage JSON-LD |
| `components/sections/ContactSection.tsx` | Contact | Address, hours, CTA 3 |

### 6.4 Shared UI

| File | Responsibility |
|---|---|
| `components/ui/WhatsAppButton.tsx` | Reusable WhatsApp CTA button (icon + label + wa.me link) |
| `components/ui/ProductCard.tsx` | Single product card (image, name, badge, CTA) |
| `components/ui/ProductGrid.tsx` | Renders 6 cards in responsive grid |
| `components/ui/GuaranteeCard.tsx` | Individual guarantee / feature card |
| `components/ui/TestimonialCard.tsx` | Single testimonial quote card |
| `components/ui/BackToTop.tsx` | Fixed back-to-top button with scroll trigger |
| `components/ui/SectionHeader.tsx` | Reusable heading + subtext block for all sections |
| `components/footer/Footer.tsx` | Full footer layout |

### 6.5 Hooks & Utilities

| File | Responsibility |
|---|---|
| `hooks/useScrollY.ts` | Returns current scrollY - used by Navbar and BackToTop |
| `hooks/useInView.ts` | IntersectionObserver wrapper for fade-in animations |
| `lib/products.ts` | Static product data array (name, category, badge, image path) |
| `lib/faqs.ts` | Static FAQ data array (question + answer) |
| `lib/testimonials.ts` | Static testimonials data array |

---

## 7. Product Data (Static - lib/products.ts)

6 products across 3 tab categories:

| Tab | Product | Badge | Price Label |
|---|---|---|---|
| Sofa Sets | Kerala Teak 3+2 Sofa Set | 100% Solid Teak | Get Custom Quote |
| Sofa Sets | Sheesham Wood L-Shape Sofa | Customisable Sizes | Get Custom Quote |
| Bedroom | Teak King Bed with Storage | Factory-Direct Price | Get Custom Quote |
| Bedroom | Solid Wood Wardrobe (3-Door) | Premium Hardwood | Get Custom Quote |
| Dining | Teak Dining Table (6-Seater) | Includes 6 Chairs | Get Custom Quote |
| Dining | Solid Wood Study Table | Kerala Teak Wood | Get Custom Quote |

---

## 8. FAQ Data (Static - lib/faqs.ts)

| # | Question | Key answer points |
|---|---|---|
| 1 | What wood types do you use? | Kerala teak, sheesham, premium hardwoods - no MDF or compressed wood |
| 2 | Do you offer custom sizes? | Yes - all pieces fully customisable, WhatsApp for quote |
| 3 | How is delivery handled? | In-house delivery team, pan-Chennai. Delivery charges applicable based on location. |
| 4 | Can I visit the showroom? | Yes - workshop & showroom same location. Mon–Fri 10AM–9PM, Sat–Sun 11AM–7PM |
| 5 | How do I place an order? | WhatsApp us at +91 97100 25248 - we'll confirm specs, timeline, and pricing |

---

## 9. Responsive Breakpoint Behavior

| Element | Mobile (<640px) | Tablet (640–1024px) | Desktop (>1024px) |
|---|---|---|---|
| Navbar links | Hidden - hamburger only | Hidden - hamburger only | Visible inline |
| Mobile drawer | Full-width Sheet | Full-width Sheet | N/A |
| Hero | Single column, text centered | Single column, text left | Two-column split |
| Product grid | 1 column | 2 columns | 3 columns |
| Guarantee cards | Stack vertically | 2 columns | 3 columns |
| Testimonials | Stack vertically | 2 columns | 3 columns |
| Footer | Single column stack | 2 columns | 4 columns |

---

## 10. Implementation Phases

### Phase 1 - Foundation & Design System
**Goal:** Project scaffolding, design tokens, fonts, globals, root layout, SEO metadata, JSON-LD.
- `app/layout.tsx` - fonts (Playfair Display + Inter), metadata, JSON-LD, html class
- `app/globals.css` - all 5 design tokens, font vars, base body styles
- `app/page.tsx` - scaffold with section placeholder imports
- Confirm shadcn components needed: Sheet, Accordion, Tabs
- Install all required shadcn components in one batch

### Phase 2 - Navigation
**Goal:** Sticky navbar with scroll-aware transparency, desktop links, mobile hamburger drawer.
- `Navbar.tsx`, `NavLinks.tsx`, `MobileMenu.tsx`
- `hooks/useScrollY.ts`
- Smooth-scroll anchor behavior for `#products`, `#why-us`, `#faqs`, `#contact`

### Phase 3 - Hero Section
**Goal:** Full-height hero with parallax background, headline, CTA 1, trust badges.
- `HeroSection.tsx`
- Generate hero product image (premium teak sofa in warm studio light)
- `hooks/useInView.ts` for staggered fade-in
- Parallax layer using scroll offset

### Phase 4 - Products Section
**Goal:** Tabbed product showcase with cards, generated images, per-card CTA 2.
- `lib/products.ts` - static data
- `ProductCard.tsx`, `ProductGrid.tsx`, `ProductsSection.tsx`
- Generate all 6 product images
- `WhatsAppButton.tsx` reusable component

### Phase 5 - Why Us, Testimonials & FAQ
**Goal:** Quality USP section, testimonials grid, accordion FAQ with structured data.
- `WhyUsSection.tsx`, `GuaranteeCard.tsx`
- `TestimonialsSection.tsx`, `TestimonialCard.tsx`
- `lib/testimonials.ts`
- `FaqSection.tsx` with `lib/faqs.ts`, FAQPage JSON-LD injection
- `TrustBar.tsx` marquee strip

### Phase 6 - Contact, Footer & Polish
**Goal:** Contact section with CTA 3, dynamic footer, back-to-top, final animation pass.
- `ContactSection.tsx` - address, hours, phone, CTA 3
- `Footer.tsx` - dynamic `new Date().getFullYear()`
- `BackToTop.tsx`
- `SectionHeader.tsx` reusable component audit
- Final scroll-triggered fade-in pass across all sections
- Responsive QA across all breakpoints

---

## 11. shadcn Components Required

Install before Phase 2 begins:

```bash
pnpm dlx shadcn@latest add sheet accordion tabs
```

---

## 12. Google Fonts Required

Add to `app/layout.tsx` via `next/font/google`:

```ts
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter    = Inter({ subsets: ['latin'], variable: '--font-sans' })
```

---

## 13. Image Generation Queue (Phase 3–4)

| # | Image | Prompt brief |
|---|---|---|
| 1 | Hero background | Warmly lit Chennai showroom interior, solid teak wood sofa set on dark wood floor, golden hour lighting, cinematic depth |
| 2 | Kerala Teak 3+2 Sofa | Elegant teak 3-seater + 2-seater sofa set, rich grain, warm studio lighting, dark background |
| 3 | Sheesham L-Shape Sofa | Deep brown sheesham L-shape sofa, corner unit, clean lines, warm overhead light |
| 4 | Teak King Bed | Solid teak king bed frame with under-storage drawers, bedroom setting, warm ambient light |
| 5 | 3-Door Wardrobe | Solid wood 3-door wardrobe with carved handles, full height, dark warm background |
| 6 | Teak Dining Table | Kerala teak 6-seater dining table with matching chairs, overhead pendant light |
| 7 | Study Table | Solid wood study table with shelf, minimalist, warm desk lamp |

---

## 14. File Naming & Structure

```
app/
  layout.tsx
  page.tsx
  globals.css

components/
  navbar/
    Navbar.tsx
    NavLinks.tsx
    MobileMenu.tsx
  sections/
    HeroSection.tsx
    TrustBar.tsx
    ProductsSection.tsx
    WhyUsSection.tsx
    TestimonialsSection.tsx
    FaqSection.tsx
    ContactSection.tsx
  footer/
    Footer.tsx
  ui/
    WhatsAppButton.tsx
    ProductCard.tsx
    ProductGrid.tsx
    GuaranteeCard.tsx
    TestimonialCard.tsx
    BackToTop.tsx
    SectionHeader.tsx

hooks/
  useScrollY.ts
  useInView.ts

lib/
  products.ts
  faqs.ts
  testimonials.ts

public/
  images/
    hero-bg.jpg
    products/
      sofa-teak-3plus2.jpg
      sofa-sheesham-lshape.jpg
      bed-teak-king.jpg
      wardrobe-3door.jpg
      dining-teak-6seater.jpg
      study-table.jpg
```

---

## 15. Definition of Done (Per Phase)

- [ ] No TypeScript errors
- [ ] No layout shift on desktop → tablet → mobile
- [ ] All CTAs link to `https://wa.me/919710025248`
- [ ] Sticky nav transitions correctly on scroll
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] All sections have `id` attributes for anchor scroll
- [ ] Back-to-top appears after 300px scroll
- [ ] FAQ accordion - all panels collapsed by default
- [ ] Footer year is dynamic (`new Date().getFullYear()`)
- [ ] JSON-LD validates at schema.org/validator
- [ ] No color outside the 5-token palette
- [ ] Every file under 600 lines

---

*This document is the single source of truth for the Sri Vetrivel Furnitures landing page build. All implementation decisions made during coding must reference and stay consistent with this plan.*
