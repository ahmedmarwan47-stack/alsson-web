# El Alsson Website — Development Handoff

## Project Overview
Mobile-responsive website for **El Alsson International Schools** built from Figma designs.

- **Figma file:** `XiHyCHYMDxZA7V0BT4XCsG` — page: "UI Design - Claude Test"
- **Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · `@import "tailwindcss"` + `@theme inline` in `app/globals.css`
- **Fonts:** Self-hosted Neo Sans (`/public/fonts/`) — 400 (`NeoSansIntel.ttf`), 500 (`NeoSansIntel-Medium.ttf`), 700 (`Neo Sans Std Bold.otf`)
- **Dev server:** `npm run dev --port 3001` via `.claude/launch.json` (server name: `alsson-web`)
- **Preview:** `http://localhost:3001` (no basePath in dev — pages are at root, e.g. `http://localhost:3001/calendar`)
- **Source assets folder:** `/Users/ahmed/Downloads/Alsson Imagery/` — extra PNGs (`ea.png`, `44.png`, `full logo.png`, `image 1963.png`, `parentsapp.png`, etc.) get copied into `public/images/` with URL-safe names

---

## Design System

### Color tokens
| Token | Hex | Usage |
|---|---|---|
| Brand Blue | `#0089B7` | Primary buttons, links, highlight words |
| Brand Yellow | `#FFC53A` | Footer headings, CTA backgrounds, accent text |
| Dark Navy | `#001B25` | Navbar, footer top, dark CTA backgrounds |
| Deep Blue | `#003346` / `#006E92` | Gradient stops on dark backgrounds |
| Footer Bottom | `#000E12` | Copyright bar |
| Light Blue bg | `#E0F8FF` / `#E5F3F7` | Open FAQ background, soft section bg |
| Off-white bg | `#FAFAFA` | Most section backgrounds |
| Light gray | `#F5F5F5` | Closed FAQ background, hover state |
| Border gray | `#D4D4D4` | Pill borders |
| Text Primary | `#0A0A0A` | Headings, body |
| Text Secondary | `#404040` / `#525252` | Paragraphs, descriptions |
| Text Muted | `#737373` / `#A3A3A3` | Captions, copyright |

All tokens live in `app/globals.css` under `@theme inline { … }`.

### Spacing & sizing scale
- Section horizontal padding: `section-padding` utility = `px-5` (20px)
- Section vertical padding: `py-10` or `py-12`
- Card corner radius: `rounded-[16px]` for photos, `rounded-[20px]` for cards/CTA blocks
- Button height: `52px` for full-width primary, `40px` for inline pills
- Button corner radius: full-pill `rounded-full`

### Typography
Body: Neo Sans Regular (400). Headings: Neo Sans Medium (500) for soft, Bold (700) for emphasized words inside the same h2. Pattern is the inline highlight:

```tsx
<h2 style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
  Section title{" "}
  <span style={{ color: "#0089B7", fontWeight: 700 }}>Highlight</span>
</h2>
```

### Global text-size floor
**Rule: No DOM text smaller than 12px anywhere on the site.**

- All sub-12px utility classes (`text-[11px]`, `text-[9px]`) were bumped to `text-[12px]` site-wide.
- Body sets `font-size: 16px` as the base; everything inherits from there.
- The only exception is *decorative text inside `<svg>`* (e.g. the red "PDF" badge on `FileCard`'s file icon). SVG `<text>` uses user units, not CSS px, so it scales with the icon and isn't part of the readable DOM text budget — exempt by design.
- When in doubt, pick 12px (use it for captions, copyright, pill labels). Don't go lower.

### SVG Icon System
**Rule: All SVG icons must be sized 16px, 20px, or 24px only — never larger.**

- **16px** — very tight contexts (inline beside small text, inside small buttons)
- **20px** — default for most inline icons (file cards, action buttons, contact icons)
- **24px** — section-level icons (card headers, large CTAs, column headers)

**Exception:** Decorative icon backplates (colored chips behind icons) can be 40px — the *container*, not the SVG inside.

**Why:** Icons larger than 24px steal visual weight from accompanying text. This was discovered when the PDF icon was 32px and crowded the file card titles.

### Inline icon–text alignment rule
**Rule: For plain icon-and-text rows (info banners, feature rows, contact lines, etc.), the icon's `width` and `height` must equal the text's `lineHeight` in px.**

```tsx
// ✅ correct — 20px icon, 20px line-height
<div className="flex items-start gap-2">
  <svg width="20" height="20" …/>
  <p style={{ fontSize: "13px", lineHeight: "20px" }}>Text</p>
</div>

// ❌ wrong — 20px icon but 1.35 × 13px = 17.5px line-height → icon overshoots, text floats high
<svg width="20" height="20" …/>
<p style={{ fontSize: "13px", lineHeight: "1.35" }}>Text</p>
```

- Always express `lineHeight` as an **absolute px value** (not a unitless multiplier) when pairing with an icon, so the two measurements are comparable.
- Use `items-start` for multi-line text (so the icon aligns with the first line); `items-center` only for guaranteed single-line strings.
- Never add `mt-0.5` / `mt-1` nudges to compensate — those are a sign the sizes don't match. Fix the sizes instead.
- This rule applies to **plain inline rows only**. Large decorative icon backplates (40px containers) and card-header icons are exempt.

### Hero Pill Pattern
Category pill at top of inner pages (e.g. "Admissions", "Academics"):
- Font weight: **400 (Regular)**, not 500/Medium
- Tight gap to H1: `mb-2` not `mb-4`
- Style: `-rotate-2`, yellow `#FFE8B0` bg, dark `#1A1406` text, `rounded-md`, `px-3 py-1`
- Used on: `/admissions` page; will repeat on upcoming inner pages

---

## Completed — Home Page (`app/page.tsx`)

All sections implemented, mobile-only, fully verified in browser. Order top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Full-viewport photo, gradient overlay, chip, headline, Apply Now + Start Virtual Tour CTAs |
| 2 | Select Your School | 3 cards (American, British, IBDP) with photos. Wrapped in `ScrollReveal` with staggered `delay={i*100}` |
| 3 | Join Our Community | Admissions tagline, photo with **EA monogram** (`ea-pattern.png`) overlapping bottom-right, 2 stat pills |
| 4 | About El-Alsson | Two-tone paragraph using `<AboutTextReveal />` (per-char scroll darkening), Know More button, 2×2 stat grid |
| 5 | Important Announcements | 3 announcement rows wrapped in `<Link>` with right-chevron arrow |
| 6 | Featured Events | Gradient bg, Previous/Upcoming toggle, Grease hero card, 4 photo cards (horizontal scroll) |
| 7 | El Alsson Facilities | Dark navy bg, 5 facility cards (horizontal scroll), pagination dots |
| 8 | Media & News | Featured post + 3 article cards (side-by-side, image stretches to text height via `flex items-stretch` + `h-full`), Read All button |
| 9 | Alsson El Kheir | Teal bg, 3 fanned/rotated photos, heading + CTA |
| 10 | El-Alsson In Shots | 2×4 Instagram photo grid, **inline SVG** Instagram icon (camera outline), gradient button |
| 11 | Stay Connected (App CTA) | Light blue gradient card, 3 feature rows, Know More button (full width), **full-width row** with App Store + Google Play (each `flex-1`, **inline SVG** Apple/PlayStore icons), spacer 300px before phone mockup |
| 12 | FAQs (`<FAQsSection />`) | 5 questions, smooth height accordion via `grid-template-rows: 0fr ↔ 1fr`, + icon rotates to × on open |
| 13 | **Pre-footer CTA** | **NEW** — Yellow (#FFC53A) bg, "Now Enrolling for 2026" pill, "Ready to Join El-Alsson" headline, full-width Apply Now (blue) + Start Virtual Tour (white) buttons, centered `student-cta.png` boy below |

### Above + below the home page
- `<Navbar />` from `components/layout/Navbar.tsx` — fixed dark navbar, logo + **44.png badge** (height 38px, gap-3.5 from logo), hamburger, full-screen overlay menu
- `<Footer />` from `components/layout/Footer.tsx` — `full-logo.png` (52px tall, not stretched), newsletter, 6 accordion link groups with yellow headings, contact info, **centered** social icons (Facebook/Instagram/X/LinkedIn/YouTube inline SVGs), `#000E12` bottom bar

---

## Repeating Patterns — copy these on the next pages

### Pattern 1: Section structure
```tsx
<section className="bg-[#FAFAFA] section-padding py-12">
  <ScrollReveal>
    <p className="text-[13px] font-bold text-[#0A0A0A] mb-2 tracking-wide">EYEBROW</p>
    <h2 className="mb-4" style={{ fontSize: "28px", lineHeight: "1.2", fontWeight: 400 }}>
      Section title{" "}
      <span style={{ color: "#0089B7", fontWeight: 700 }}>Highlight</span>
    </h2>
    <p className="text-[#525252] text-[16px] leading-[1.6] mb-6">Lead paragraph.</p>
  </ScrollReveal>
  {/* … content … */}
</section>
```

### Pattern 2: Scroll reveal (always-on premium feel)
Wrap any element with `<ScrollReveal>`. Stagger items with `delay={i * 80}` or `delay={150}`.

```tsx
<ScrollReveal delay={100}>
  <Card />
</ScrollReveal>
```
- One-shot IntersectionObserver, disconnects after first trigger
- Fade-in-up: opacity 0→1, translateY 28px→0, easing `cubic-bezier(0.22,1,0.36,1)`, 700ms

### Pattern 3: Primary button (full-width)
```tsx
<Link href="…" className="w-full flex items-center justify-center gap-2 rounded-full
  bg-[#0089B7] text-white text-[15px] font-medium
  active:bg-[#006E92] transition-colors"
  style={{ height: "52px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)" }}>
  Apply Now
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</Link>
```

### Pattern 4: Secondary / outline button (full-width)
```tsx
<Link href="…" className="w-full flex items-center justify-center rounded-full
  border border-[#262626] text-[#262626] text-[15px] font-medium
  active:bg-[#F5F5F5] transition-colors"
  style={{ height: "52px" }}>
  Explore Admissions
</Link>
```

### Pattern 5: Filter / toggle pill (e.g. Previous / Upcoming)
```tsx
<div className="inline-flex bg-white rounded-full p-1 border border-[#E5E5E5]">
  {tabs.map(t => (
    <button key={t} className={`px-3 py-1.5 text-[13px] rounded-full transition-colors ${
      active === t ? "bg-[#0089B7] text-white" : "text-[#525252]"
    }`}>{t}</button>
  ))}
</div>
```

### Pattern 6: Accordion (smooth height, no jump)
Always use the grid-rows trick — never conditional mount.

```tsx
<div className="grid transition-[grid-template-rows] duration-300 ease-out"
  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
  <div className="overflow-hidden">
    {/* content always rendered */}
  </div>
</div>
```
+ icon rotates: `style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}`.

### Pattern 7: Horizontal scroll carousel
```tsx
<div className="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5 snap-x snap-mandatory">
  {items.map(item => (
    <div key={item.id} className="shrink-0 w-[280px] snap-start">…</div>
  ))}
</div>
```
The `-mx-5 px-5` lets cards bleed to screen edges while keeping the section's `px-5`.

### Pattern 8: Stat pills (border-only, with bullet)
```tsx
<div className="inline-flex items-center gap-2 border border-[#D4D4D4] rounded-full px-4 py-2">
  <span className="w-1.5 h-1.5 rounded-full bg-[#0089B7] shrink-0" />
  <span className="text-[14px] text-[#404040]">45+ Student Nationalities</span>
</div>
```

### Pattern 9: Decorative EA monogram overlay
```tsx
<div className="relative">
  <div className="rounded-[16px] overflow-hidden h-[280px]">
    <img src="/images/photo.jpg" className="w-full h-full object-cover" />
  </div>
  <img src="/images/ea-pattern.png" alt="" aria-hidden
    className="absolute pointer-events-none select-none drop-shadow-xl"
    style={{ bottom: "-28px", right: "-10px", width: "120px", height: "auto" }}
  />
</div>
```

### Pattern 10: Dark CTA card with brand gradient
```tsx
<div className="relative rounded-[20px] overflow-hidden"
  style={{ background: "linear-gradient(135deg, #001B25 0%, #003749 60%, #006E92 100%)" }}>
  {/* … content … */}
</div>
```

### Pattern 11: Horizontal slider (Our Story style)
All slides rendered in the DOM in a flex row. `overflow-hidden` wrapper clips to one slide at a time. Padding lives **inside each slide** — not on the wrapper — so the clip is flush to the screen edges.

```tsx
// Section has no overflow-hidden — only the inner wrapper does
<div className="overflow-hidden">
  <div
    className="flex"
    style={{
      transform: `translateX(-${idx * 100}%)`,
      transition: "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    }}
  >
    {ITEMS.map((item) => (
      <div key={item.id} className="w-full shrink-0 section-padding">
        {/* slide content */}
      </div>
    ))}
  </div>
</div>
```

Add touch swipe support with a `useRef` tracking `touchStartX`. Fire `navigate` when delta > 48px.
Keep all slide content equal height so the section doesn't resize between slides.

### Pattern 12: Sticky scroll-trigger section (Mission/Vision style)
Two-content swap driven by scroll position — no click needed.

```tsx
// Outer div: 200svh tall (the scroll budget)
// Inner div: sticky top-0, 100svh (stays in view while outer scrolls)
// Passive scroll listener: progress = -top / (height - vh), swap at 50%
<div ref={containerRef} style={{ height: "200svh" }}>
  <div className="sticky top-0 overflow-hidden" style={{ height: "100svh" }}>
    {/* content keyed on animKey for story-slide fade */}
  </div>
</div>
```
Track previous index with a `useRef` so state updates only fire on actual change.
The `pt-16` inside the sticky div clears the fixed navbar (64px).

### Pattern 13: Yellow pre-footer CTA (use as-is on every page that needs conversion)
Layout: pill → headline → description → full-width buttons → centered cutout image below.
Source: see `app/page.tsx` "Pre-footer CTA" section.

### Pattern 14: Standardized "In Shots" Instagram section
Drop in once per page that needs an Instagram gallery. Always 2 columns × 3 rows (6 photos), no overlays, gradient Instagram button below.

```tsx
import InShotsSection from "@/components/ui/InShotsSection";

<InShotsSection titlePrefix="El-Alsson" photos={INSTA_PHOTOS} />
// titlePrefix becomes "{prefix} In Shots" — e.g. "El-Alsson In Shots", "Alumni In Shots"
```
Used by home, alumni, guidance — every page on the site renders this identically; only `titlePrefix` and `photos` change. Pass exactly 6 photos (extras are ignored). Black-overlay hover state from the Figma desktop variant is dropped on mobile.

---

## Components Built

| Component | Path | Purpose |
|---|---|---|
| `Navbar` | `components/layout/Navbar.tsx` | Fixed dark navbar (`h-16`, `z-50`) with hamburger and full-screen overlay menu |
| `Footer` | `components/layout/Footer.tsx` | `"use client"` accordion footer with newsletter + social icons |
| `PreFooterCTA` | `components/layout/PreFooterCTA.tsx` | Yellow "Ready to Join" CTA — drop above `<Footer />` on every conversion page |
| `ScrollReveal` | `components/home/ScrollReveal.tsx` | One-shot fade-in-up wrapper. Props: `children`, `className`, `delay` (ms) |
| `AboutTextReveal` | `components/home/AboutTextReveal.tsx` | Character-by-character darkening (rgb 163→10) tied to scroll position |
| `FAQsSection` | `components/home/FAQsSection.tsx` | Smooth-height accordion with + → × icon |
| `FacilitiesSection` | `components/home/FacilitiesSection.tsx` | Dark navy horizontal-scroll facility cards — shared between home and about |
| `StoryTimeline` | `components/about/StoryTimeline.tsx` | `"use client"` horizontal slider — 5 milestones, arrows, scrubber, swipe |
| `MissionVision` | `components/about/MissionVision.tsx` | `"use client"` sticky-scroll section — Mission→Vision swap at 50% scroll progress |
| `ValuesAccordion` | `components/about/ValuesAccordion.tsx` | `"use client"` grid-rows accordion — 3 values, item 02 open by default |
| `StaffSection` | `components/about/StaffSection.tsx` | `"use client"` 2-col staff grid with `flex-wrap` filter chips and View More |
| `FileCard` | `components/ui/FileCard.tsx` | PDF download card — folded-paper icon (24px) + red "PDF" badge (inline SVG `<text>`, scales with icon) + size + download arrow (20px). Reusable across all brochure sections |
| `InShotsSection` | `components/ui/InShotsSection.tsx` | Standardized Instagram gallery — 2×3 photo grid + gradient Instagram CTA. Props: `titlePrefix`, `photos[]`. Used by home, alumni and guidance |
| `ParentsAppSection` | `components/parents/ParentsAppSection.tsx` | `"use client"` — replaces the inline Parents App block. Phone mockup with 3 absolutely-positioned, rotated "flying" widget cards (each tappable → View Video), pagination + full carousel below |
| `FacilityGallery` | `components/facilities/FacilityGallery.tsx` | `"use client"` — single gallery carousel with prev/next yellow arrows, snap scroll, and pagination dots (same arrow language as home `FacilitiesSection`). Used 4× on the Facilities page |
| `AgeComparisonChart` | `components/admissions/AgeComparisonChart.tsx` | `"use client"` 3-tab interactive table (American/British/Egypt Equivalent), 15 rows, grid layout `[56px_88px_1fr]` |
| `FeesSection` | `components/admissions/FeesSection.tsx` | `"use client"` currency toggle (🇺🇸 American / 🇬🇧 British), fees table, installment schedule with red deadlines, brochure downloads |
| `ResultsSection` | `components/academics/ResultsSection.tsx` | `"use client"` toggle between two chart cards (Exam Scores / AP Results) with animated bar charts and student photos |
| `StagePolicies` | `components/academics/StagePolicies.tsx` | `"use client"` 2-col FileCard grid with View More (first 6 visible, reveals rest). Used on all age stage pages |

`ScrollReveal` is the workhorse — use it for every meaningful content block on new pages. `FileCard` is the standard for all PDF/brochure downloads.

---

## File Tree

```
alsson-web/
├── app/
│   ├── layout.tsx           # Root layout — imports Navbar + Footer
│   ├── page.tsx             # Home page (server component) — all sections complete
│   ├── about/
│   │   └── page.tsx         # About page (server component) — all sections complete
│   ├── academics/
│   │   └── american/
│   │       ├── page.tsx     # American School list page — stats, results, stages carousel
│   │       └── [stage]/
│   │           └── page.tsx # Dynamic stage page — 5 slugs, generateStaticParams
│   ├── admissions/
│   │   └── page.tsx         # Admissions page (server component) — 9 sections, 3 feedback rounds
│   └── globals.css          # Tailwind v4 config + design tokens + utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # client — fixed, h-16, z-50
│   │   ├── Footer.tsx       # client — accordion state
│   │   └── PreFooterCTA.tsx # server — yellow CTA shared across pages
│   ├── ui/
│   │   └── FileCard.tsx     # PDF download card — 24px PDF icon + 20px download arrow
│   ├── home/
│   │   ├── ScrollReveal.tsx
│   │   ├── AboutTextReveal.tsx
│   │   ├── FAQsSection.tsx
│   │   └── FacilitiesSection.tsx  # shared — also used on about page
│   ├── about/
│   │   ├── StoryTimeline.tsx   # client — horizontal slide + swipe
│   │   ├── MissionVision.tsx   # client — sticky scroll swap
│   │   ├── ValuesAccordion.tsx # client — grid-rows accordion
│   │   └── StaffSection.tsx    # client — 2-col grid + filter chips
│   ├── academics/
│   │   ├── ResultsSection.tsx  # client — toggle pills, exam/AP chart cards
│   │   └── StagePolicies.tsx   # client — View More grid for 12 policies
│   └── admissions/
│       ├── AgeComparisonChart.tsx  # client — 3-tab table, 15 rows
│       └── FeesSection.tsx         # client — toggle, fees table, installments
├── lib/
│   ├── data.ts              # Shared data (SCHOOLS, ANNOUNCEMENTS, CURRICULA, etc.)
│   └── stages.ts            # StageData + STAGES array for 5 American School stages
└── public/
    ├── fonts/               # Neo Sans family
    └── images/              # All Figma + project-folder assets (see below)
```

### `/public/images/` — full asset list
```
logo.svg                 full-logo.png            44.png            book-icon.svg
ea-pattern.png           ea-monogram.png          student-cta.png   parentsapp.png

hero-bg.jpg              about-students.jpg       about-campus.jpg
american-school.jpg      british-school.jpg       ibdp-school.jpg
stat-experience.png      stat-curricula.png       stat-campus.png   stat-nationalities.png

event-hero-grease.jpg    event-art-exhibition.jpg event-prophets-birthday.jpg
event-graduation-2024.jpg event-student-art.jpg

facility-sports-hall.jpg facility-playgrounds.jpg facility-classrooms.jpg
facility-theatre.jpg     facility-libraries.jpg

blog-featured-hercules.jpg blog-magic-walls.jpg   blog-class-2025.jpg  blog-belcash.jpg

elkheir-1.jpg            elkheir-2.jpg            elkheir-3.jpg

insta-1.jpg … insta-8.jpg   instagram-icon.png    logo2.png

phone-mockup.jpg         app-avatar.jpg
apple-logo.png           google-play-logo.png

# About page assets
about-hero.jpg           story-2006.jpg
mission-bg.jpg           vision-bg.jpg
values-photo.jpg         founder.png
quote-mark.svg

accred-1.png  accred-2.png  accred-3.png  accred-4.png  accred-5.png

staff-1.jpg   staff-2.jpg   staff-3.jpg   staff-4.jpg

# American School / Stage assets
american-hero.jpg        american-difference.jpg
stage-preschool.jpg      stage-kindergarten.jpg   stage-elementary.jpg
stage-middle.jpg         stage-high.jpg
stage-hero-1.jpg         stage-hero-2.jpg         stage-hero-3.jpg    stage-hero-4.jpg
stage-overview.jpg       stage-facilities.jpg
results-student-1.jpg    results-student-2.jpg
```

---

## Completed — About Page (`app/about/page.tsx`)

Built from Figma frame **`10730:19691` "About Us • Desktop"** (no mobile frame exists — desktop design translated to the mobile patterns). Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | `about-hero.jpg`, "About Us" eyebrow, "Education for Life / The Story of El Alsson", Apply Now + Virtual Tour |
| 2 | Our Story (`#history`) | `<StoryTimeline />` — 5 milestones (1982→2023), yellow prev/next arrows, year scrubber with rounded connector lines. **Horizontal slide animation**: all slides in a flex track, `translateX(-idx * 100%)` with `cubic-bezier(0.25,0.46,0.45,0.94)` over 420ms. Touch swipe support (48px threshold). Padding lives inside each slide (not on the overflow wrapper) so clipping is flush. Descriptions equalized to ~165 chars each for consistent card height. |
| 3 | Mission/Vision (`#mission-vision`) | `<MissionVision />` — sticky scroll section (`200svh` outer, `sticky top-0 100svh` inner). Shows Mission on enter; passive scroll listener swaps to Vision at 50% progress. Word, statement, and photo all transition. Scroll hint fades on swap. |
| 4 | Values (`#values`) | `<ValuesAccordion />` — 3 numbered items, grid-rows accordion, open item bg `#F0F0F0`. **Bullets for items 01/03 are placeholder; 02 from Figma** |
| 5 | Facilities | Reuses `<FacilitiesSection />` from home (identical design) |
| 6 | Accreditations (`#accreditations`) | CSS marquee (`.marquee-track` in globals.css), 2 rows × 5 logos, edge fades, BSO report button |
| 7 | Founder's Vision (`#directors-message`) | Dark gradient, inline quote-mark SVG, `founder.png` full-bleed below text with subtle `h-20` top gradient blend |
| 8 | Staff In Action | `<StaffSection />` — `flex-wrap` filter chips (All/Leadership/American/British/Administration), `grid-cols-2` with `aspect-[3/4]` cards, View More reveals rest. **Names/roles/emails are placeholder** |
| 9 | Pre-footer CTA | `<PreFooterCTA />` (extracted to `components/layout/PreFooterCTA.tsx`, also used by home) |

New components live in `components/about/`. New utilities in `globals.css`: `.story-slide` (content-swap fade) and `.marquee-track` / `@keyframes marquee`.

New images: `about-hero.jpg`, `story-2006.jpg`, `mission-bg.jpg`, `vision-bg.jpg`, `values-photo.jpg`, `founder.png` (replaces `founder.jpg`), `quote-mark.svg`, `accred-1..5.png`, `staff-1..4.jpg`.

---

## Completed — Admissions Page (`app/admissions/page.tsx`)

Built from Figma frame **`11470:37174` "Admissions • Mobile"** in mobile-first Next.js. **Status: COMPLETE** after 3 user feedback refinement rounds.

### Layout & Sections (top-to-bottom)

| # | Section | Final State |
|---|---|---|
| 1 | Hero | Light blue `#F2F9FB` bg, yellow rotated "Admissions" pill (weight 400, tight gap to H1), "Join Our Community" headline, lead, Apply Now + Virtual Tour. **CSS grid layout**: `gridTemplateRows: "auto 1fr"` ensures image fills remaining viewport. Hero image fully fills available space. |
| 2 | How to Apply (`#process`) | Heading "How to **Apply**", 2 stacked CTAs, 4 step cards (`bg-[#F5F5F5] rounded-[16px]`). Step 2 has bullet list, Step 4 has light blue "Please Note" callout |
| 3 | Open Days (`#open-days`) | `bg-[#FAFAFA]` (solid, NOT gradient — matches prior "How to Apply" section), 3 info pills with inline SVG icons (globe/school/tie, 20px), 2 day cards (`bg-[#CCE7F1]`) with First/Second Slot inner rows and Save to Calendar button |
| 4 | Age Comparison Chart (`#chart`) | `<AgeComparisonChart />` client component — 3 tab pills (American/British/Egypt Equivalent), sticky header row, 15 data rows in grid `[56px_88px_1fr]`. Stage column color-coded by band. CardIcon 20px. |
| 5 | Side Info Cards | 2×2 layout (light-dark / dark-light pattern per Figma): **Top row** — Buses (light) LEFT + School Year (dark) RIGHT. **Bottom row** — Arabic & Religion (dark) LEFT + School Uniform (light) RIGHT. Bus image slides in from left edge (`-left-4`, not full-width). Student cutout positioned bottom-right per Figma. |
| 6 | Information & Brochures (`#brochures`) | 2-col grid of `<FileCard />` components — reusable PDF download card with 24px folded-paper icon + red "PDF" badge + title + size + 20px download arrow |
| 7 | Tuition & Fees (`#fees`) | `<FeesSection />` client — currency toggle (🇺🇸 American / 🇬🇧 British with flag emojis), fees table by grade level, transport note, installment schedule (with red deadline text), brochure downloads (reuses `<FileCard />`) |
| 8 | Reach Our Team (`#contact`) | 2×2 staff grid (image + name/phone overlay, `aspect-[3/4]`), **single combined card** for Email + Office Location (no divider, `mt-5` spacing), map image below |
| 9 | Pre-footer CTA | `<PreFooterCTA />` — yellow bg, "Now Enrolling for 2026" pill, buttons, centered student photo |

### Feedback Refinement History

**Round 1 — Initial Build**
- All 9 sections coded from Figma specs

**Round 2 — Layout & Spacing Fixes**
- Hero image: switched from `flex` layout to CSS `grid` with `gridTemplateRows: "auto 1fr"` — image now truly fills remaining viewport
- Open Days: changed background from gradient (`from-[#E9F7FB] to-[#FAFAFA]`) to solid `#FAFAFA` (matching prior section, not Age Comparison)
- Side cards: reordered array to achieve light-dark / dark-light alternation per Figma
- Side card images: added `imgStyle` property to distinguish "bus" (full-width) from "uniform" (bottom-right cutout)
- PDF icon: reduced 40px → 32px to free space for file card titles
- Reach card: combined Email + Office into single card with thin divider

**Round 3 — SVG Icon Standard + Image Swap**
- Established SVG icon rule: **only 16/20/24px** allowed site-wide
- FileCard: PDF icon 32px → 24px (w-6 h-6), download arrow 24px → 20px (w-5 h-5)
- CardIcon: 22px → 20px
- Bus image: swapped from placeholder to actual `/images/bus.png` (Alsson fleet photo, 537×200 px, transparent bg)
- Bus positioning: changed from centered full-width to sliding in from left (`-left-4`), height auto, no text overlap
- Reach card: removed divider, kept tight spacing with `mt-5`

### Components & Assets

**Client components:**
- `components/admissions/AgeComparisonChart.tsx` — interactive 3-tab age/grade comparison table
- `components/admissions/FeesSection.tsx` — tuition calculator with currency toggle + installment schedule
- `components/ui/FileCard.tsx` — reusable PDF download card (also used by home/about brochure sections)

**Images:**
- `admissions-hero.jpg`, `admissions-map.jpg`
- `admissions-staff-1.jpg`, `admissions-staff-2.jpg`, `admissions-staff-3.jpg`, `admissions-staff-4.jpg`
- `bus.png` (Alsson bus fleet, 537×200 px, used in Age Comparison side cards)

---

## Completed — Parents Page (`app/parents/page.tsx`)

Built from Figma frame **`11470:38279` "Parents • Desktop"** (desktop design translated to the mobile patterns, like About). Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Same grid layout as admissions hero (`auto 1fr`). Pill "Beyond The Classes - Parents", "Welcome To The El Alsson Family" H1, Apply Now + Virtual Tour, `parents-hero.jpg` fills remaining viewport |
| 2 | Uniform & Dress Code (`#uniform`) | `<UniformToggle />` client — Primary/Elementary ↔ Secondary/Senior pills (active `#33A1C5` on `#E5E5E5` track per Figma). Uniform chart image too dense for mobile → rendered 820px wide in horizontal scroll container (Pattern 7) with swipe hint. **Both tabs show `uniform-primary.png` — no Secondary chart asset exists in Figma yet.** Then: The Rules (green `#3FAC33` check-circle / red `#CA4141` alert-circle inline SVGs, 20px), Exceptions & Notes card (`#F5F5F5`), On-Campus Uniform Shop card (`#F2F9FB`) with View Size Chart + View Uniform Policy buttons |
| 3 | Parent Council (`#council`) | Dark navy `#001B25`. Photo, rotated pill, "Your Voice in Our **School's Future**" (yellow bold highlight on dark), Join the Council + Presentation (download icon) buttons, divider, 2 feature rows with 48px gray-line illustrations (`icon-creativity.svg`, `icon-distance-learning.svg` — monochrome `#E5E5E5` by design) |
| 4 | School Policies (`#policies`) | `<PoliciesGrid />` client — 12 `<FileCard />`s in 2-col grid, first 6 visible, View More reveals rest and removes itself. **Policy names are realistic placeholders** (Figma repeats "PreKindergarten - Admissions") |
| 5 | Parents App (`#app`) | Gradient `#004B67 → #001B25`. Pill (not rotated per Figma), "Everything Parents Need, In **One App**" (yellow 500-weight), App Store/Google Play buttons (same inline SVGs as home), phone mockup 250px with CSS border circle rings behind, 5 feature cards in horizontal snap carousel (w-300px, alternating ±1° rotation, 88px image + title + desc + View Video link) |
| 6 | Pre-footer CTA | `<PreFooterCTA />` |

New components: `components/parents/UniformToggle.tsx`, `components/parents/PoliciesGrid.tsx`, `components/parents/ParentsAppSection.tsx` (all client).

**Feedback round 2 updates:**
- **Uniform image** — was 820px-wide in a horizontal scroll container; now `w-full h-auto` filling the viewport edge-to-edge at its intrinsic aspect ratio (no stretch, no horizontal swipe). `UniformToggle.tsx`. Caption updated to "Pinch to zoom for more detail".
- **Parents App** — moved out of `page.tsx` into `ParentsAppSection.tsx`. Phone mockup centered with **3 absolutely-positioned, rotated widget cards "flying" around it** (top-left, mid-right, bottom-left) — each tappable to "View Video". The flying widgets cycle through the feature set as the user pages through pagination dots / horizontal carousel below, so every feature can be foregrounded. Carousel buttons keep the full set reachable on mobile (the floating cards are interactive, not just decorative).

New images: `parents-hero.jpg`, `uniform-primary.png` (catalog chart), `parent-council.jpg`, `icon-creativity.svg`, `icon-distance-learning.svg`, `parents-app-phone.png`, `app-feat-{updates,fees,pickup,calendar,bus}.jpg` (1254×1254 each).

Navbar: added **Parents** entry (after Student Life) with children → `#uniform`, `#council`, `#policies`, `#app`.

---

## Completed — Alumni Page (`app/alumni/page.tsx`)

Built from Figma frame **`11470:39477` "Alumni • Desktop"** (desktop design translated to the mobile patterns). Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Same grid layout as admissions/parents hero. Pill "El Alsson Connected", "Calling All / El Alsson Alumni!" H1 (two lines), single primary CTA "Register As Alumni" → anchors to `#register`, `alumni-hero.jpg` fills viewport |
| 2 | EA Alumni Council (`#council`) | Gradient `#E9F7FB → #FAFAFA`. Centered heading, "Established in 2013…" lead, mailto link to marketing@alsson.com. `<CouncilGrid />` client — 8 photos (`alumni-council-1..8.jpg`) in 2-col `aspect-[3/4]` grid, first 4 visible, "Show More Members" (down chevron) reveals rest |
| 3 | Alumni Making An Impact (`#impact`) | Two paragraphs from Figma (reunions at Haraneya + NEWGIZA 2022, three generations), then 3 stacked photos h-280 with 0 / +2° / −2° rotation (desktop had sticky text + rotated column — mobile keeps just the rotation accent) |
| 4 | Alumni in Shots (`#shots`) | Same pattern as home "El-Alsson In Shots": 2×4 grid (h-120 cells), 6th cell has dark overlay with heart 22 + comment 5 inline SVGs, gradient Instagram button @elalsson_Official |
| 5 | Register As An Alsson Alumni (`#register`) | **This page's conversion block — replaces PreFooterCTA** (per Figma, no yellow pre-footer here). Yellow `#FFC53A` rounded-[20px] card: heading (Regular "Register As" / Bold "An Alsson Alumni"), white/20 inner form card. Fields: Full Name, Mobile, Email, Instagram (IG icon inside input), School + Graduation Year selects (custom 16px chevrons, `appearance-none`), Company/University + Job Title, Submit, privacy note. **Plain server-rendered form — no submit handler/backend wired yet** |

New component: `components/alumni/CouncilGrid.tsx` (client).

**Feedback round 2 updates:**
- **Council grid (tap-to-reveal)** — Figma desktop had a hover state revealing name / class year / email. Mobile has no hover, so each card is now a `<button>` with a small "Tap" info pill in the resting state; tapping shows a dark gradient overlay with the member's name (white), class year (yellow `#FFC53A`), and email as a `mailto:` link. Tap again (or any other card) to dismiss. Member data lives in the `MEMBERS` array in `CouncilGrid.tsx` — names/years/emails are realistic placeholders.
- **Alumni In Shots** — replaced inline section with `<InShotsSection titlePrefix="Alumni" photos={SHOTS} />`. Black-overlay hover state on the 6th photo (was just Figma's desktop hover illustration) removed. Standardized to 2 cols × 3 rows like the home page — only 6 photos used (`alumni-insta-7/8.jpg` are now orphaned assets, kept in `/public/images` for future use).

New images: `alumni-hero.jpg`, `alumni-council-1..8.jpg`, `alumni-impact-1..3.jpg`, `alumni-insta-1..8.jpg`.

Navbar: added **Alumni** entry with children → `#council`, `#impact`, `#shots`, `#register`.

---

## Completed — Alsson El Kheir Page (`app/elkheir/page.tsx`)

Built from Figma frame **`11470:39644` "Alsson El-Kheir • Desktop"**. Route is `/elkheir` to match pre-existing links in `ElKheirSection` (home) and Footer. Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Pill "Alsson El-Kheir", "El Alsson Charity Activities" H1, merged two-paragraph lead, single **Donate Now** CTA (anchors `#impact` — no donate URL exists yet), `elkheir-hero.jpg` |
| 2 | History of Alsson El-Kheir (`#history`) | Centered heading + lead, 2 video thumbnail cards |
| 3 | Continuing Effort (`#effort`) | Same layout, 2 video cards. Both rows render from a shared `VIDEO_ROWS` array |
| 4 | Lasting Impact (`#impact`) | Dark `#001B25` — same layout as Parents council section: photo, pill "Charity Events", yellow-bold highlight heading, Donate Now, divider, 2 feature rows with gray-line icons (`icon-awareness.svg`, `icon-contributions.svg`) |
| 5 | Orphanage Visits (`#visits`) | Heading is **Medium weight, no highlight** (per Figma). Horizontal snap carousel (Pattern 7) of 3 photos, middle one is a video card. Desktop slider arrows dropped — swipe is the mobile idiom |
| 6 | Past Cases (`#cases`) | Horizontal snap carousel of 4 story cards (Fatima, Yassin, Mahmoud, Um Mariam — real copy from Figma) + visual-only View More button |
| 7 | Winter Drive (`#winter`) | "Continuing Charity" eyebrow, video card + 2 small photos in 2-col grid |
| 8 | Pre-footer CTA | `<PreFooterCTA />` |

Shared in-page helpers: `PlayBadge` (red YouTube-style chip, 56×40 with white triangle) + `VideoCard` (photo + 30% black overlay + badge). **All video cards link to `#` — real YouTube URLs needed.** No client components — carousels are CSS snap-scroll.

New images: `elkheir-hero.jpg`, `elkheir-history-1/2.jpg`, `elkheir-effort-1/2.jpg`, `elkheir-impact.jpg`, `elkheir-visit-1..3.jpg`, `elkheir-case-{fatima,yassin,mahmoud,mariam}.jpg`, `elkheir-winter-{video,1,2}.jpg`, `icon-awareness.svg`, `icon-contributions.svg`.

Navbar: added **Alsson El Kheir** entry with children → `#history`, `#impact`, `#cases`, `#winter`.

Note: Figma has a typo "Alsson El-Keir" in the Lasting Impact heading — corrected to "El-Kheir" in code.

---

## Completed — Guidance & Student Services Page (`app/guidance/page.tsx`)

Built from Figma frame **`11470:39851` "Guidance and Student Services • Desktop"**. Route is `/guidance` to match the pre-existing Footer link. Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Pill "Student Wellbeing", "Guidance & / Student Services" H1, lead, Apply Now + Virtual Tour, `guidance-hero.jpg` |
| 2 | Social & Emotional Counseling (`#counseling`) | Centered heading + lead on `#FAFAFA`, then a full-bleed `#F5F5F5` band (per Figma) with 3 stacked rows: Individual Counseling, Group & Peer Programs, Wellbeing Workshops & Crisis Support — each image h-240 + 20px medium title + body (desktop's alternating sticky rows flattened for mobile) |
| 3 | College Counseling (`#college`) | Dark `#001B25`, same layout as Parents council: photo, pill, "Your Path **To University**". **Feature rows: Figma still had leftover council copy ("Meaningful Impact"/"Collaborative Growth") — replaced with college-specific copy (University Fairs / Application Support); same gray-line icons** |
| 4 | Learning Support Services (`#support`) | `<SupportAccordion />` client — full-bleed (`-mx-5`) numbered accordion. Open item: `#003749` bg, `#E5F3F7` number, white body, `#CCE7F1` bullet pills, photo. Item 01 (American School, Grades 1-8) open by default with real Figma copy + 4 pills. **Items 02/03 (British Primary/Secondary) were closed in Figma — copy is placeholder** |
| 5 | El-Alsson In Shots (`#shots`) | Home-page Instagram grid pattern; **reuses `alumni-insta-1..8.jpg`** (Figma reuses the same gallery instance) |
| 6 | Pre-footer CTA | `<PreFooterCTA />` |

New component: `components/guidance/SupportAccordion.tsx` (client).

**Feedback round 2 updates:**
- **Learning Support accordion photos** — items 02 (British Primary) and 03 (British Secondary) previously had `img: null`. Each now gets its own photo: 02 reuses `guidance-individual.jpg`, 03 reuses `guidance-wellbeing.jpg`. Real Figma assets weren't provided for these cells; if/when they're added, just swap the `img` paths in `SupportAccordion.tsx`'s `DEPARTMENTS` array.
- **El-Alsson In Shots** — replaced inline section with `<InShotsSection titlePrefix="El-Alsson" photos={SHOTS} />`. Standardized to 2 cols × 3 rows.

New images: `guidance-hero.jpg`, `guidance-individual.jpg`, `guidance-group.jpg`, `guidance-wellbeing.jpg`, `guidance-college.jpg`, `guidance-support.jpg`.

Navbar: added **Student Services** entry → `#counseling`, `#college`, `#support`.

---

## Completed — Facilities Page (`app/facilities/page.tsx`)

Built from Figma frame **`11470:37743` "Facilites • Desktop"**. Route is `/facilities` to match pre-existing links (home `FacilitiesSection` + Footer). Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Pill "Facilities", "Beyond The Classroom" H1, lead, Apply Now + Virtual Tour, `facilities-hero.jpg` |
| 2-5 | 4 gallery sections | All rendered from one `GALLERIES` array. Each: yellow eyebrow chip (not rotated — section labels per Figma), 28px medium heading, lead, then horizontal snap carousel of 4 **album cards** (w-240 h-340, rounded-[8px]): cover photo + Junior pill (`#00526E` white) / Senior pill (`#FFC53A` black) top-left + photo-count chip bottom-right (`#0089B7` pill, `#003749` icon circle, 16px inline album SVG, "52 Photos"). Desktop slider arrows dropped — swipe carousel per mobile idiom |
| 6 | Pre-footer CTA | `<PreFooterCTA />` |

Sections: `#performing-arts` "State of the Art" (eyebrow "Performing Arts"), `#outdoors` "Playgrounds and Fields", `#pool` "Indoor Heated Pool" (eyebrow "Athletic"), `#libraries` "Libraries & Research Hubs" (eyebrow "Educational").

**Content notes:** all copy is verbatim from Figma, including its quirks — section 1's lead talks about classrooms while its eyebrow says "Performing Arts" and its photos show stage performances (design-side mismatch); "52 Photos" counts are the same placeholder on all 16 albums; album cards link to `#` — a real gallery/lightbox destination doesn't exist yet.

New images: `facilities-hero.jpg`, `facility-album-{1..4}{a..d}.jpg` (16 album covers, 678×960 each).

Navbar: added **Facilities** entry → `#performing-arts`, `#outdoors`, `#pool`, `#libraries`.

**Feedback round 2 updates:**
- **Arrow-driven carousel** — each gallery section is now a `<FacilityGallery />` client component matching the home page's facilities scroll pattern (yellow `#FFC53A` round arrows, pagination dots, snap scrolling). Arrow fades to 0 + becomes non-interactive when you hit the boundary.
- **Screen-edge padding** — scroll container has `px-5` so the first/last albums always have 20px of breathing room from the viewport edges (no more glued-to-screen photos).
- **Varied photo counters** — each of the 16 albums now has a distinct placeholder count (e.g. 42 / 58 / 31 / 67 …) instead of every chip reading "52 Photos". Replace with real counts once available.
- Card width reduced from 240 → 220 to keep the arrow controls from overlapping content.
- AlbumCard radius reduced from `rounded-[8px]` → `rounded-[12px]` (matches sibling cards on the site).

`AlbumCard` lives inside `FacilityGallery.tsx`; album-cover icon is the same 16px inline SVG.

---

## Completed — American School Page (`app/academics/american/page.tsx`)

Built from Figma frame **`11470:27997` "American School • Desktop"** (desktop design translated to mobile patterns). Route is `/academics/american`. Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Light blue `#F2F9FB` bg, "American School" pill (rotated, yellow), "American Education Redefined" heading, description about AERO standards + AP courses, Apply Now + Virtual Tour, full-width hero photo below |
| 2 | Stats | 2×2 grid: +20 Years Of Experience, 1270 Students Every Year, 420 Staff Members, 165 Full Time Teachers |
| 3 | El Alsson Difference (`#difference`) | Full-bleed photo with dark gradient overlay, "Our Legacy of Excellence" eyebrow, heading "El Alsson **Difference**", curriculum description (CCSS, NGSS, C3) |
| 4 | Academic Stages (`#stages`) | "Academic **Stages**" heading, subtext, horizontal snap carousel of 5 stage cards (Pre-School, Kindergarten, Elementary, Middle, High) — each links to `/academics/american/[stage]` |
| 5 | Outperforming The Global Standards (`#results`) | `<ResultsSection />` client — "El-Alsson Results" eyebrow, toggle pills (Exam Scores / AP Results), two chart cards: (1) Exams Scoring 3+ with 3 bars (Global 61.2%, Egypt 65.8%, El Alsson 72.7%), (2) AP Students 3+ over years (2021-2023). Two student photos below |
| 6 | University Matriculation (`#matriculation`) | Heading, subtext, dark rounded card with SVG world map + 10 yellow university pin markers |
| 7 | Pre-footer CTA | `<PreFooterCTA />` |

New component: `components/academics/ResultsSection.tsx` (client — toggle between two chart cards).

New images: `american-hero.jpg`, `american-difference.jpg`, `stage-preschool.jpg`, `stage-kindergarten.jpg`, `stage-elementary.jpg`, `stage-middle.jpg`, `stage-high.jpg`, `results-student-1.jpg`, `results-student-2.jpg`.

Navbar: updated **Academics** entry with children → American School, Pre-School & Pre-K, Kindergarten & G1, Elementary (G2-G5), Middle School (G6-G8), High School (G9-G12).

---

## Completed — Single Age Stage Page (`app/academics/american/[stage]/page.tsx`)

Built from Figma frame **`11470:36783` "Single Age Stage • Desktop"** (desktop design translated to mobile patterns). Dynamic route `/academics/american/[stage]` with `generateStaticParams` for all 5 stages. Stage data lives in `lib/stages.ts`. Sections top-to-bottom:

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Light blue bg, "American School" pill, stage-specific title (multi-line), description, Apply Now + Virtual Tour, 4 overlapping rotated student photos (6° / -5° / 10° / -9° rotations, border-matched to bg) |
| 2 | Overview (`#overview`) | Photo (h-240), "Overview" heading (bold), 2 paragraphs of stage-specific text |
| 3 | Facilities & Enrichment (`#facilities`) | Gradient `#E9F7FB → #FAFAFA`, heading with blue highlight, lead, photo, vertical progress bar with 3 feature items (yellow 40px icon circles), "Explore El Alsson Facilities" outline button → `/facilities` |
| 4 | Joining Our Programs (`#programs`) | Dark `#001B25`, heading "Joining Our **Programs**" (yellow highlight), subtext, 1–2 `#003749` cards per stage — each with title, age requirement, 4 feature rows with inline SVG icons + description. Pre-School has 2 cards (Pre-School + Pre-K), Elementary/Middle/High have 1 card |
| 5 | More Academic Stages (`#more-stages`) | Heading "More Academic **Stages**", horizontal snap carousel of the 4 other stages (excludes current), each links to its own page |
| 6 | Handbooks & Guides (`#handbooks`) | Heading, 4 `<FileCard />`s in 2-col grid |
| 7 | School Policies (`#policies`) | Heading, description, `<StagePolicies />` client — 12 `<FileCard />`s, first 6 visible, View More reveals rest |
| 8 | Pre-footer CTA | `<PreFooterCTA />` |

New components:
- `components/academics/StagePolicies.tsx` (client — View More for policies grid)
- `components/academics/ResultsSection.tsx` (client — chart toggle, shared with American School page)

Data file: `lib/stages.ts` — `StageData` interface with all 5 stages (pre-school, kindergarten, elementary, middle-school, high-school). Each stage has: title, heroDescription, heroPhotos, overviewImage, overviewText, facilitiesTitle/Lead/Image/Features, programs (1–2 cards), handbooks (4 items), policies (12 items). **Policy/handbook names are realistic placeholders.**

New images: `stage-hero-1..4.jpg`, `stage-overview.jpg`, `stage-facilities.jpg`.

---

## Completed — Careers Pages (`app/careers/page.tsx`, `app/careers/[slug]/page.tsx`)

Built from Figma frames **`11470:40547` "Careers • Desktop"** and **`11470:40714` "Single Career • Desktop"**. Routes `/careers` (list) and `/careers/[slug]` (detail). Career data lives in `lib/careers.ts`.

### Careers List Page (`/careers`)

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Light blue `#F2F9FB` bg, "Join Our Team" pill, "Open Positions At El Alsson" heading (Medium 500), lead text, View Open Positions (blue) + Start Virtual Tour (outline) CTAs |
| 2 | Open Positions (`#positions`) | "OPEN POSITIONS" eyebrow, "Current **Vacancies**" heading. 4 job rows divided by `divide-y divide-[#E5E5E5]`. Each row: bold title + teal `#00526E` meta pills (school · type · date) + "More Details ↗" link. Each row links to `/careers/[slug]` |
| 3 | Life At El Alsson (`#life`) | Rounded-[20px] card, full photo `careers-life.jpg` with `linear-gradient(60deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 65%)` overlay. "More Than a Workplace" eyebrow, "Life At El Alsson" heading, description, white-border "Explore Life At El Alsson" outline button |

No `<PreFooterCTA />` — Figma does not include one here.

### Single Career Page (`/careers/[slug]`)

| # | Section | Notes |
|---|---|---|
| 1 | Hero | Light blue bg, "Job Details" pill, job title (Medium), meta row, full-width "APPLY NOW →" blue button (mailto: vacancies@alsson.com) |
| 2 | Sticky sub-header | `bg-[#E5F3F7]` band, `sticky top-16 z-10` — shows truncated title + school·type + compact "Apply Now" pill. Stays visible while scrolling the job content |
| 3 | Application callout | White `rounded-[16px]` card with `border-l-4 border-[#006E92]`. Rolling-interview note + "Please email your CV" + numbered steps. `vacancies@alsson.com` is a clickable `mailto:` link |
| 4 | "You will need:" | Bullet list — job-specific requirements from `lib/careers.ts` |
| 5 | "Skills and Knowledge:" | Bullet list — job-specific skills from `lib/careers.ts` |
| 6 | Bottom CTA | Full-width Apply Now button, mailto note, "← Back to all positions" link to `/careers` |

`generateStaticParams` pre-generates all 4 slugs. Data is typed via `CareerPosition` interface — add/remove positions in `lib/careers.ts`.

New images: `careers-life.jpg` (Life At El Alsson staff photo — Figma node `11470:40705`).

Navbar: **Careers** now has children: "Open Positions" (`/careers#positions`) and "Life At El Alsson" (`/life`). The "Explore Life At El Alsson" button on the careers list page links to `/life`.

---

## Completed — Life At El Alsson (`app/life/page.tsx`)

Built from Figma frame **`11470:38073` "Life at Alsson • Desktop"**. Route `/life`. Client carousel component lives at `components/life/LifeGallery.tsx`.

| # | Section | Notes |
|---|---|---|
| 1 | Hero | `#F2F9FB` bg, "Life At El‑Alsson" rotated yellow pill, "Teach. Inspire, Call It Home." h1 (Medium), lead text, full-width "START VIRTUAL TOUR" outline CTA → `/admissions#tour`. Full-bleed `life-hero.jpg` (no horizontal padding) 240px tall |
| 2 | The New Giza Experience | `#FAFAFA` bg. Heading + description. `<LifeGallery />` client component — 4 photos (`life-newgiza-1..4.jpg`), 260px wide cards, yellow `#FFC53A` prev/next arrow buttons, CSS snap-scroll |
| 3 | Philosophy of El Alsson Family | `#001B25` bg. Heading with yellow "El Alsson Family" bold highlight. `#D4D4D4` description. Full-bleed `-mx-5` video card (`life-philosophy-video.jpg`, dark gradient overlay, centered play button, "Watch: Working At El-Alsson" title) |
| 4 | Inspire The Next Generation | `#001B25` bg. Heading with yellow "Generation", description, "View Open Positions →" white-border outline button → `/careers`. 2×2 photo grid (`life-inspire-1..4.jpg`, 170px each). Yellow `+165 Teachers` stat pill (96px circle, `rotate(5deg)`) centered absolutely over the grid |
| 5 | Voices of El Alsson | `linear-gradient(#E9F7FB → #FAFAFA)` bg. Heading + description. CSS snap-scroll carousel (no arrows) — 4 cards: 3× dark navy testimonial cards (86px avatar circle, quote, name in Caveat 30px, role) + 1× video card (`life-testimonial-video.jpg`, dark overlay, play button) |
| 6 | Everything You Need To Know | `#FAFAFA` bg. Centered heading. 3× `<FileCard />` PDFs: "Egypt safer than US and UK", "New Expatriate Teachers' Information", "Employment FAQs" (all 94 KB, `href="#"` placeholder) |

No `<PreFooterCTA />` — Figma does not include one here.

Caveat font loaded via `<link>` tag in `app/layout.tsx` (moved from `globals.css` to avoid PostCSS `@import` ordering error). Images: 14 assets in `public/images/life-*.jpg`.

---

## What's Next — Inner Pages

Build pages in this order:

### ✅ Priority 4: Student Life — COMPLETE
Four sub-pages under `app/student-life/`:

| Route | File | Key sections |
|---|---|---|
| `/student-life/leadership` | `app/student-life/leadership/page.tsx` | Hero, MUN (light), Student Council (dark `#001B25`), InShots, PreFooterCTA |
| `/student-life/arts` | `app/student-life/arts/page.tsx` | Hero, `<SportGallery>` Performing Arts, `<EventsShowcase>` Creative Events, InShots, PreFooterCTA |
| `/student-life/sports` | `app/student-life/sports/page.tsx` | Hero, `<SportGallery>` Basketball, `<SportGallery>` Football, `<CompetitionsSection>` Sports Competitions, `<HouseSystem>`, InShots, PreFooterCTA |
| `/student-life/experiential-learning` | `app/student-life/experiential-learning/page.tsx` | Hero, Educational Events (2-col grid), `<TripsGallery>`, `<CompetitionsSection>` Learning Competitions, `<ExhibitionsSection>`, InShots, PreFooterCTA |

Shared components (`components/student-life/`):
- **`SportGallery.tsx`** — reusable 220px photo carousel with yellow arrows + pagination dots; used for Performing Arts, Basketball, Football galleries.
- **`EventsShowcase.tsx`** — crossfade photo + 3 tappable event rows with yellow accent bar + expand animation; used on Arts page.
- **`CompetitionsSection.tsx`** — 268px card carousel (photo + number + title + description); used on Sports and Experiential Learning.
- **`HouseSystem.tsx`** — 400svh scroll-hijacked sticky section; 4 house cards (Thebes/red, Siwa/yellow, Karnak/teal, Memphis/navy) stack horizontally on scroll, each card's RIGHT-edge 52px logo strip peeks as the next slides in. Uses `calc(-N% + 52px)` translateX formula.
- **`TripsGallery.tsx`** — dark `#001B25` carousel with trip cards: full-bleed photo, gradient overlay, location + date pills.
- **`ExhibitionsSection.tsx`** — dark `#001B25` section with pill-tab switcher (Science/Arts/Business), crossfade full-bleed photo, text card below.

Navbar `Student Life` children updated to: Leadership, Arts & Creativity, Sports & Athletics, Experiential Learning.

### Priority 5: Events & Media (`app/events/page.tsx`, `app/news/page.tsx`)
Reuse the Featured Events and Media & News patterns directly.

### Priority 6: Contact (`app/contact/page.tsx`)
Form + map + contact details (reuse footer contact pattern).

### Cross-cutting
- **Pre-footer CTA**: `<PreFooterCTA />` from `components/layout/PreFooterCTA.tsx` — drop it above `<Footer />` on every conversion-target page. Home + About already use it. See Pattern 13.
- **Desktop/responsive breakpoints**: entire site is mobile-only. Each section will need `md:` / `lg:` variants when desktop work begins. Defer until inner pages are mostly built.
- **Interactivity gaps**: Featured Events toggle, Facilities pagination dots, Instagram 6th-cell hover overlay — all visual-only. Wire these up when you reach them.

---

## How to Navigate the Figma

```
Figma file key:  XiHyCHYMDxZA7V0BT4XCsG
Page:            "UI Design - Claude Test"
```

The whole page frame is too large for one `get_metadata` call. Drill into specific node IDs section by section.

### Known home page node IDs
| Node | Section |
|---|---|
| `11470:25477` | Featured Events |
| `11470:25661` | El Alsson Facilities |
| `11470:25681` | Media & News |
| `11470:25729` | Alsson El Kheir |
| `11470:25730` | El-Alsson In Shots (Instagram) |
| `11470:25759` | Stay Connected (App CTA) |
| `11470:43260` | Footer |
| `11470:25820` | Pre-footer CTA (Ready to Join El-Alsson) |

### Workflow for a new section
1. `get_screenshot` on the Figma node → save to `/tmp/section.png` → `Read` to view.
2. `get_design_context` with `excludeScreenshot: true` to get inline code + asset URLs + variable defs.
3. `curl -s -o public/images/{name}.{ext} "{figma url}"` for every asset (URLs expire in 7 days).
4. Match the design but translate to **the patterns above**, not raw Figma-emitted Tailwind. Use `section-padding`, `ScrollReveal`, the color tokens, and the button patterns. Do not paste Figma-generated wrapper chains.
5. Verify in browser at `http://localhost:3001` — scroll, screenshot, fix.

---

## Key Conventions

- **Server components by default.** `page.tsx` files have no `"use client"`. Extract interactive islands into separate `"use client"` components in `components/`.
- **Mobile-only viewport for now** — the preview frame is sized to mobile width. Don't add desktop breakpoints until the user asks.
- **No Tailwind plugins installed** — use arbitrary values `[value]` or inline `style={{}}` for one-off CSS. Tailwind v4 with `@theme inline`.
- **Images:** plain `<img>` with `/* eslint-disable-next-line @next/next/no-img-element */` (not `next/image`). The project hasn't configured a Next image domain list.
- **Figma asset URLs expire in 7 days** — always `curl -s -o` them immediately after `get_design_context`.
- **Inline SVG icons** beat raster icons everywhere — Apple/Play Store, Instagram, social icons, arrows. Use `currentColor` for stroke/fill so they inherit text color.
- **`section-padding`** class = `px-5`. Horizontal overflow carousels use `-mx-5 px-5` to bleed to screen edges.
- **`no-scrollbar`** utility is defined in `globals.css` — use it on every horizontal scroll container.
- **Filenames with spaces** in `/Users/ahmed/Downloads/Alsson Imagery/` (e.g. `image 1963.png`) → copy to URL-safe names (`student-cta.png`) when moving into `public/images/`.
- **44 badge** (`/images/44.png`): height 38px, gap-3.5 (14px) from logo in Navbar.
- **Footer logo** (`/images/full-logo.png`): height 52px, `width: auto` — never use `logo.svg` in footer (it has `preserveAspectRatio="none"` and stretches).
- **Per-page CTA**: every page that's a conversion target should end with the yellow "Ready to Join El-Alsson" pre-footer CTA before `<Footer />`.
- **Standardized "In Shots"**: import `<InShotsSection />` instead of re-rolling the 2×3 Instagram grid (see Pattern 14). Only the `titlePrefix` changes between pages.
- **12px text floor**: never use `text-[Npx]` with N < 12 anywhere (including utility classes and inline styles). Tiny decorative text inside `<svg>` is exempt because it uses user units, not CSS px.
