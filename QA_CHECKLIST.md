# Sri Vetrivel Furnitures - QA & Sign-Off Checklist

**Project:** Sri Vetrivel Furnitures Premium Landing Page  
**Build Date:** 2026-06-20  
**Status:** Phase 1 Complete - Ready for Phase 3 QA  

---

## Build Completion Checklist

### Initial Build (Phases 1-6) ✅ COMPLETE
- [x] Design system established (5 tokens, fonts, animations)
- [x] SEO & JSON-LD metadata configured
- [x] Navbar (desktop + mobile drawer)
- [x] Hero section with parallax
- [x] Products section with tabs
- [x] Why Us with guarantees
- [x] Testimonials grid
- [x] FAQ accordion (all collapsed)
- [x] Contact section
- [x] Footer with dynamic year
- [x] Back to Top button
- [x] All 7 product/hero images generated
- [x] 3 WhatsApp CTAs wired throughout

### Premium Refinements (Phase 1 Upgrade) ✅ COMPLETE
- [x] Hero section decompressed (badges removed, spacing increased)
- [x] All em dashes replaced with hyphens (20+ files)
- [x] Murugan icon integrated into navbar logo
- [x] Murugan icon integrated into footer logo
- [x] Letter-spacing enhanced on headings (0.02em)
- [x] Product card borders refined (border-accent/20)
- [x] Product card shadows added (shadow-md with hover glow)
- [x] Section dividers added between major sections
- [x] Build compilation verified (4.7 seconds, zero errors)

---

## Phase 3: Browser QA Checklist

### Desktop (1440px+)

#### Visual
- [ ] Navbar: Murugan icon fully visible at 60% opacity
- [ ] Hero: Clean, spacious layout with good breathing room
- [ ] Hero: Background parallax effect working smoothly
- [ ] Products: 3-column grid rendering correctly
- [ ] Product cards: Subtle borders and shadows displaying properly
- [ ] Testimonials: 3-column grid with even spacing
- [ ] FAQ: Accordion layout clean and readable
- [ ] Footer: 3-column layout with all content visible
- [ ] Section dividers: Subtle accent lines visible between sections

#### Interactions
- [ ] Navbar links: Smooth scroll to sections working
- [ ] WhatsApp CTA 1 (Hero): Opens WhatsApp with pre-filled message
- [ ] WhatsApp CTA 2 (Products): Per-card messages correct
- [ ] WhatsApp CTA 3 (Contact): Message pre-fill verified
- [ ] "View our collection" link: Smooth scroll to Products
- [ ] Product cards: Hover effects (scale, shadow, border glow)
- [ ] Buttons: Hover states smooth and clear
- [ ] Back to Top: Appears at 300px scroll, smooth scroll works
- [ ] Testimonial cards: No jank on hover

#### Performance
- [ ] Page loads in under 3 seconds
- [ ] No layout shifts during load (CLS < 0.1)
- [ ] Images load quickly (LCP < 2.5s)
- [ ] Interactions responsive (no lag, INP < 200ms)

---

### Tablet (768-1024px)

#### Visual
- [ ] Navbar: Murugan icon visible (sm breakpoint shows it)
- [ ] Hero: Single column layout with proper spacing
- [ ] Products: 2-column grid
- [ ] Product cards: Readable, properly sized
- [ ] Testimonials: 2-column or single column (depends on 1024px)
- [ ] Footer: 2-column or stacked layout working
- [ ] All text: Readable without zooming

#### Interactions
- [ ] Mobile menu: Hamburger button visible and functional
- [ ] Mobile menu: Opens/closes smoothly with Sheet animation
- [ ] Mobile menu: Contains all nav links
- [ ] All CTAs: Tappable with appropriate hit area (44px+)
- [ ] Back to Top: Still accessible and functional

---

### Mobile (375-479px)

#### Visual
- [ ] Navbar: Murugan icon hidden (sm: breakpoint)
- [ ] Brand name: Single line or wrapped appropriately
- [ ] Hero: H1 and text readable at small size
- [ ] Hero: Imagery still prominent
- [ ] Products: 1-column grid with full-width cards
- [ ] Product cards: Images visible, badges readable
- [ ] Testimonials: Single column, cards stacked
- [ ] FAQ: Accordion items full width, readable
- [ ] Contact: Form and info easily readable
- [ ] Footer: Single column, all info visible

#### Interactions
- [ ] Mobile menu: Hamburger icon clear and tappable
- [ ] Mobile menu: Opens with full-screen overlay
- [ ] Mobile menu: Links have good tap targets (min 44x44px)
- [ ] All buttons: Tap-friendly (min 48x48px recommended)
- [ ] Scroll: Smooth and performant
- [ ] Back to Top: Still visible and functional on small screens

#### Performance
- [ ] Page loads within 5 seconds on 4G
- [ ] No layout shifts during load
- [ ] Interactions are snappy (no 100ms+ delays)

---

## Accessibility Checklist

### Keyboard Navigation
- [ ] Tab order is logical throughout the page
- [ ] Focus indicators are visible (outline/highlight)
- [ ] All interactive elements reachable via keyboard
- [ ] No keyboard traps
- [ ] Menu open/close works with Escape key
- [ ] Links work with Enter key

### Screen Reader Testing (NVDA / JAWS / VoiceOver)
- [ ] Page title announced correctly
- [ ] Navigation landmarks identified
- [ ] Section headings announced with correct level (h1, h2, h3)
- [ ] Images have descriptive alt text (product images)
- [ ] Decorative images marked as such (Murugan icon, spacers)
- [ ] Form labels associated with inputs (if applicable)
- [ ] Product card structure clear (title, description, button)
- [ ] Accordion: State changes announced (expanded/collapsed)
- [ ] Button purposes clear (Get a Free Quote, View our collection, etc.)

### Color Contrast (WCAG AA)
- [ ] Text on backgrounds: 4.5:1 ratio (normal text)
- [ ] Large text (18pt+): 3:1 ratio
- [ ] Buttons and interactive elements: 3:1 ratio
- [ ] Borders against background: sufficient contrast
- [ ] Murugan icon: Visible against navbar/footer background

### Mobile Accessibility
- [ ] Touch targets minimum 44x44px
- [ ] Zoom functionality works (no maximum-scale restriction)
- [ ] Orientation change (portrait/landscape) works smoothly
- [ ] No horizontal scroll on small screens

---

## SEO & Metadata Checklist

- [ ] Metadata renders correctly (open graph, twitter cards)
- [ ] Canonical URL set
- [ ] Mobile viewport meta tag present
- [ ] All section headings (h1, h2, h3) properly structured
- [ ] Images have meaningful alt text
- [ ] JSON-LD schema valid (FurnitureStore, WebSite, FAQPage)
- [ ] robots.txt allows crawling
- [ ] Structured data markup valid via schema.org validator

---

## Feature Verification Checklist

### Navigation
- [ ] Navbar sticky on scroll
- [ ] Navbar transparency changes at 80px scroll
- [ ] Nav links scroll to correct sections
- [ ] Mobile menu drawer opens/closes
- [ ] Mobile menu contains: Logo, links, CTA

### Hero Section
- [ ] Parallax effect smooth and noticeable
- [ ] Background image loads and displays properly
- [ ] H1 text: "Handcrafted Solid Wood Furniture Since 2001"
- [ ] Subtext: "Premium Kerala Teak & Quality Hardwoods"
- [ ] CTA 1: "Get a Free Quote" button functional
- [ ] Secondary link: "View our collection" scrolls to products
- [ ] WhatsApp message pre-fill: "Hi, I would like to get a free quote..."

### Products Section
- [ ] Tabs: Sofas, Beds, Storage, Dining, Study
- [ ] Each tab shows 2 products
- [ ] Product images load and display properly
- [ ] Product badges visible (e.g., "100% Solid Wood")
- [ ] Product descriptions readable
- [ ] Per-card WhatsApp CTA shows product name in message
- [ ] CTA 2: "Get a Custom Quote" button at section bottom

### Why Us Section
- [ ] 3 guarantee cards visible
- [ ] Cards show icon + title + description
- [ ] Trust badges: "25+ Years", "100% Solid Wood", "Quality Materials"

### Testimonials Section
- [ ] 3 testimonial cards displayed
- [ ] Star ratings visible (5 stars each)
- [ ] Quotes readable
- [ ] Author names/initials visible
- [ ] Cards have hover effect

### FAQ Section
- [ ] All 5 FAQ items visible (collapsed by default)
- [ ] Accordion expands on click
- [ ] Expanded item collapses when other opens
- [ ] Content readable and properly formatted
- [ ] Correct answers (check: delivery charges, customization, etc.)

### Contact Section
- [ ] Address: "No.1 South VP Colony, Medavakkam Tank Road, Ayanavaram, Chennai - 600 023"
- [ ] Phone: "8838755077"
- [ ] WhatsApp: "9710025248"
- [ ] Hours: "Monday to Friday - 10AM to 9PM, Saturday & Sunday - 11AM to 7PM"
- [ ] CTA 3: WhatsApp button functional

### Footer
- [ ] Brand logo with Murugan icon visible
- [ ] Brand story: "Since 2001, we've been crafting..." text present
- [ ] Footer links: Products, Why Us, FAQs
- [ ] Contact info: Address, phone, WhatsApp
- [ ] Copyright year: Dynamic (2026)
- [ ] Footer divider visible (Separator element)

### Back to Top Button
- [ ] Hidden on initial load
- [ ] Appears when scrolled 300px down
- [ ] Smooth scroll to top on click
- [ ] Button is accessible (keyboard + mouse)
- [ ] Fade in/out animation smooth

---

## Sign-Off

### Stakeholder Checklist
- [ ] Visual refinements approved
- [ ] Murugan icon placement approved
- [ ] Hero decompression meets expectations
- [ ] Premium aesthetic achieved
- [ ] All functionality working as described
- [ ] Ready for production deployment

### Developer Checklist
- [ ] All unit tests passing (if applicable)
- [ ] No console errors in browser
- [ ] No TypeScript errors in build
- [ ] Lighthouse scores: Perf 90+, Accessibility 90+, SEO 90+, Best Practices 90+
- [ ] Mobile rendering verified on multiple devices
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Performance baseline established (LCP < 2.5s, CLS < 0.1, INP < 200ms)

### Final Approval
- [ ] QA Lead: _________________ Date: _________
- [ ] Stakeholder: _________________ Date: _________
- [ ] Project Manager: _________________ Date: _________

---

## Notes & Issues

**Outstanding Issues:** None currently identified

**Follow-up Tasks (Post-Launch):**
- Monitor Lighthouse scores in production
- Track Core Web Vitals via web.dev
- Gather user feedback on hero redesign
- Consider gradient overlay enhancement in v2.0

---

**Document Status:** Ready for QA Phase 3  
**Last Updated:** 2026-06-20
