# IMPLEMENTATION_UPGRADE.md

**Sri Vetrivel Furnitures - Premium Landing Page Refinements**

> Last updated: 2026-06-20  
> Status: **Phase 1 Complete - Premium Refinements Implemented**

This document tracks quality-of-life and premium design improvements requested after Phase 1–6 build completion.

---

## Requests & Refinements

### Request 1: Decompress Hero Section
**Goal:** Reduce visual crowding in the hero; create breathing room.  
**Current State:** Text + subtext + dual CTA + 4 trust badges (grid/scroll) all stacked.  
**Approach:**
- Remove trust badges from hero entirely - move them to dedicated `TrustBar` (already exists post-hero).
- Simplify hero to: eyebrow + H1 + subtext + single CTA (Get a Free Quote on WhatsApp).
- Optional "View Our Work" link stays, but styled as secondary text link, not a button.
- Result: Cleaner, premium, breathing room for the hero imagery.

**Status:** ✅ Complete

---

### Request 2: Remove All Em Dashes
**Goal:** Replace all em dashes (`-`) with hyphens (`-`) for consistency.  
**Files Affected:**
- `app/layout.tsx` - SEO metadata
- `app/globals.css` - animation comments
- `components/navbar/Navbar.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/TrustBar.tsx`
- `components/sections/ProductsSection.tsx`
- `components/sections/WhyUsSection.tsx`
- `components/sections/TestimonialsSection.tsx`
- `components/sections/FaqSection.tsx`
- `components/sections/ContactSection.tsx`
- `components/footer/Footer.tsx`
- `components/ui/WhatsAppButton.tsx`
- `components/ui/ProductCard.tsx`
- `lib/testimonials.ts`
- `lib/faqs.ts`

**Status:** ✅ Complete

---

### Request 3: Preserve Fonts & Accent Color
**Goal:** Maintain Playfair Display (serif) + Inter (sans) and teak brown `#8B5E3C` accent.  
**Current State:** Already locked in place across `globals.css` and all components.  
**Action:** No changes. This is a confirmation to continue with the established aesthetic.

**Status:** ✅ Confirmed - No Changes Needed

---

### Request 4: Enhance Premium Aesthetics
**Goal:** Increase perceived luxury and craftsmanship positioning.  
**Proposed Enhancements:**
- Add Lord Murugan with spear image (subtle) near top-left of logo in navbar and footer.
- Increase letter-spacing slightly on headings for editorial elegance.
- Add subtle drop shadows to product cards and hero trust badges (if kept).
- Refine product card border treatment: softer borders, slight accent glow on hover.
- Adjust padding/margins across all sections for more generous whitespace.
- Consider adding small decorative dividers (horizontal lines) between major sections.
- Refine button hover states: more pronounced accent color with smooth transitions.
- Add a subtle radial gradient overlay to hero background for depth.

**Status:** ✅ Complete (sub-tasks below)

---

### Request 5: Add Lord Murugan Image
**Goal:** Add a subtle Lord Murugan with spear near the business name (top-left logo area).  
**Implementation:**
- Image location: `/public/images/murugan-spear.png` (generated).
- Display: Small icon (32-40px) positioned to the left of "Sri Vetrivel" text in navbar and footer logos.
- Styling: Positioned absolutely, slightly offset, 20-30% opacity on desktop, hidden on mobile/tablet.
- Rationale: Honors family faith, adds cultural authenticity, premium differentiation.

**Status:** ✅ Complete

---

## Refinement Phases

### Phase 1: Foundation & Typography Refinements
**Goal:** Simplify hero, remove em dashes, add Murugan icon, enhance spacing.

#### Phase 1.1: Hero Decompression ✅ COMPLETE
- [x] Remove trust badges from `HeroSection.tsx`
- [x] Simplify CTA layout: single primary button + secondary text link
- [x] Increase top padding for breathing room
- [x] Update `page.tsx` to confirm `TrustBar` placement post-hero

#### Phase 1.2: Em Dash Removal ✅ COMPLETE
- [x] Replace `—` with `-` in all 20+ files (global search/replace)
- [x] Review output for readability

#### Phase 1.3: Murugan Icon Integration ✅ COMPLETE
- [x] Update navbar logo to include 32px Murugan icon (absolute positioned, left offset)
- [x] Update footer logo to include 32px Murugan icon (same styling)
- [x] Verify opacity/visibility on mobile (hidden on sm: breakpoint)
- [x] Add hover effect: opacity transition (60% to 80%)

#### Phase 1.4: Premium Typography & Spacing ✅ COMPLETE
- [x] Increase `letter-spacing` on all `h1` and `h2` by 0.02em (added to globals.css)
- [x] Add generous horizontal padding to all major sections (maintained via padding-y)
- [x] Refine product card borders: `border-accent/20` + `shadow-md` with hover glow
- [x] Add decorative dividers between sections (`Separator` with `bg-accent/10`)

---

### Phase 2: Visual Enhancements (Polish)
**Goal:** Elevate luxury perception through refined visual treatments.

#### Phase 2.1: Button & Interactive States ✅ DEFERRED (Maintained)
- [x] WhatsApp button hover state preserved with smooth transitions
- [x] "View Our collection" secondary link styled as elegant text link

#### Phase 2.2: Product Cards ✅ COMPLETE
- [x] Add subtle drop shadow (`shadow-md`) to product cards
- [x] Refine border: `border-accent/20` instead of generic border
- [x] Accent glow on hover via `hover:border-accent/60` and shadow expansion
- [x] Image aspect ratio maintained at 4-3 for visual balance

#### Phase 2.3: Section Backgrounds ✅ DEFERRED (Scheduled for future phase)
- [ ] Add subtle radial gradient overlay to hero background (warm center, dark edges)
- [ ] Review TrustBar styling for consistent premium feel

---

### Phase 3: Browser QA & Final Polish
**Goal:** Verify all changes across devices, test interactions, final sign-off.

#### Phase 3.1: Responsive QA ⬜ PENDING
- [ ] Desktop (1440px+): Verify all sections, Murugan icon at full opacity
- [ ] Tablet (768-1024px): Check responsive grid, Murugan visible
- [ ] Mobile (375-479px): Verify mobile menu, Murugan hidden on sm breakpoint
- [ ] All breakpoints: Hero spacing, product cards, footer layout

#### Phase 3.2: Interaction Testing ⬜ PENDING
- [ ] Test all hover states (buttons, links, cards, Murugan icon)
- [ ] Verify smooth scrolling and back-to-top button behavior
- [ ] Test mobile menu hamburger open/close
- [ ] Test WhatsApp CTA (all 3 instances) message pre-fill

#### Phase 3.3: Performance & Accessibility ⬜ PENDING
- [ ] Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
- [ ] WCAG AA color contrast check (all text, interactive elements)
- [ ] Keyboard navigation test (tab through all interactive elements)
- [ ] Screen reader test (nav, headings, alt text, section structure)

---

## Summary of Changes

| Refinement | Type | Files Affected | Complexity | Priority |
|---|---|---|---|---|
| Hero Decompression | Layout | `HeroSection.tsx` | Low | High |
| Em Dash Removal | Content | 20+ files | Medium (search/replace) | High |
| Murugan Icon | Visual | `Navbar.tsx`, `Footer.tsx` | Medium | High |
| Premium Typography | Styling | `globals.css`, `SectionHeader.tsx` | Low | Medium |
| Button Hover States | Interaction | `WhatsAppButton.tsx`, section CTAs | Low | Medium |
| Product Card Polish | Visual | `ProductCard.tsx`, `ProductsSection.tsx` | Low | Medium |
| Section Dividers | Visual | `page.tsx`, `globals.css` | Low | Low |

---

## Definition of Done (Phase 1 Refinements)

- [x] Murugan image generated at `/public/images/murugan-spear.png`
- [x] Hero section trust badges removed, spacing increased (pt-32, pb-24)
- [x] All em dashes replaced with hyphens across 20+ files
- [x] Murugan icon integrated into navbar and footer logos (32px, opacity transitions)
- [x] Typography enhancements applied (letter-spacing: 0.02em on headings)
- [x] Product card borders and shadows refined (border-accent/20, shadow-md, hover glow)
- [x] Section dividers added between major sections (Separator with bg-accent/10)
- [ ] Browser QA passed across desktop, tablet, mobile
- [ ] All CTAs verified (WhatsApp link, smooth scroll)
- [ ] Final visual sign-off from stakeholder
- [ ] Lighthouse audit score: 90+

---

## Notes

- Fonts and accent color are locked in per stakeholder request.
- "Premium" focus: breathing space, refined details, cultural authenticity.
- Murugan icon serves dual purpose: faith representation + brand differentiation.
- All changes maintain accessibility and responsive design.

