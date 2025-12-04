# MEFA Needles Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from professional B2B manufacturing websites like Bosch Industrial, Siemens, and modern SaaS products. Balance industrial credibility with contemporary web design.

## Brand Foundation

**Colors** (specified by user, use as accent only in guidelines):
- Primary: Red #E12531
- Secondary: Orange #F6A942
- Supporting: Dark grays, whites, industrial blues

**Typography Hierarchy**:
- Headings: Poppins (700-800 weight) for strong, professional presence
- Body: Inter (400-600 weight) for excellent readability
- Sizes: Hero 56-72px, H2 40-48px, H3 28-32px, Body 16-18px
- Line height: 1.2 for headings, 1.6-1.8 for body text

**Spacing System**:
Use Tailwind units: 4, 8, 12, 16, 24, 32, 48, 64 for consistent rhythm
Section padding: py-16 to py-24 on desktop, py-12 on mobile

## Layout & Navigation

**Fixed Navigation Bar**:
- Glass-morphism effect (rgba white background with backdrop blur)
- Logo left, horizontal menu center-right
- Sticky on scroll with subtle shadow
- Mobile: Hamburger menu with full-screen overlay (slide from right)
- Height: 80px desktop, 64px mobile

**Page Structure**:
1. **Homepage**: Hero (80vh with founder tribute) → Heritage stats → Product preview grid → Values → CTA
2. **About**: Hero (50vh) → Story (2-column) → Mission/Vision cards → Values grid → Stats bar
3. **Products**: Hero → Filter bar → Product grid (3-4 columns) → Specs table
4. **Timeline**: Hero → Vertical timeline with milestone cards
5. **Facilities**: Hero → Capabilities grid (3 columns)
6. **Contact**: Split layout (form left, info card right)

## Component Design

**Cards**:
- White background, subtle shadow (0 4px 20px rgba(0,0,0,0.08))
- 16px border-radius, 32px padding
- Hover: lift with translateY(-8px), enhanced shadow

**Buttons**:
- Primary: Gradient red-to-orange, white text, 50px border-radius
- Padding: 12px 32px
- Hover: lift 2px, increased shadow
- Secondary: White with red border, red text

**Product Cards**:
- Image container: 250px height, light gray gradient background
- Product image: 70% container size, centered, object-fit contain
- Badge: Top-right corner, red background, white text
- Content: 24px padding, category label (red, uppercase), title, description, feature tags

**Hero Sections**:
- Homepage: Full viewport (80-100vh) with diagonal gradient overlay (dark gray to darker), founder portrait integrated
- Other pages: 50vh with centered text, subtle pattern overlay
- Always include breadcrumb trail on internal pages

## Visual Treatments

**Images**:
- Hero: Large founder portrait (founder.jpg) - positioned right side, 40% width, subtle border/shadow
- Product images: Clean, centered on light backgrounds, uniform sizing
- Facility images: Wide format showcasing manufacturing floor
- About: Company building/machinery photos

**Animations** (minimal, purposeful):
- Scroll-triggered fade-ins for cards (100ms stagger)
- Hover lifts on interactive elements
- Smooth page transitions
- Counter animations for statistics

**Stats Display**:
- Large numbers (48-64px), gradient text treatment
- Small labels below (12px, uppercase, letter-spacing)
- Grid layout: 4 columns on desktop, 2 on mobile

**Timeline Design**:
- Vertical line with gradient (red to orange)
- Circular markers (20px) at milestones
- Cards alternate left/right on desktop, stack on mobile
- Year labels bold and prominent

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768-1024px (2 columns where applicable)
- Desktop: > 1024px (3-4 columns, full layouts)

## Content Sections

**Footer**:
- Dark background (#1A1A1A)
- 4-column grid: Company info with founder tribute, Products, Company links, Contact
- Founder section: Portrait thumbnail, name, title, legacy quote
- Bottom bar: Copyright, minimal links
- Padding: 64px top, 32px bottom

**Forms**:
- Clean input fields with label above
- Focus state: red border
- Submit button: Primary style
- Right column: Dark card with white text for contrast

**Consistency Requirements**:
- Unified navigation across ALL pages
- Same footer on ALL pages
- Consistent spacing and typography
- All product cards follow same pattern
- Mobile menu behavior identical everywhere

This design creates a professional, credible presence for a 50+ year manufacturing legacy while incorporating modern web standards and usability patterns.