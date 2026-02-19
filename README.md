# Peroxia Technology — Landing Page

A modern, premium landing page for **Peroxia Technology**, built with Next.js 16, Tailwind CSS v4, Framer Motion, GSAP, and Lucide React.

🔗 **Live Demo**: [Peroxia](https://peroxia.vercel.app/)

---

## Approach & Design Decisions

### Design Philosophy
- **Dark premium aesthetic** with a deep navy background (`#030712`), electric blue primary (`#3b82f6`), and cyan accent (`#06b6d4`)
- **Strong typography hierarchy** using Inter (Google Font) with weights 300-900
- **Glassmorphism** on the navbar with backdrop blur — creates depth without clutter
- **Gradient border cards** using CSS mask technique for a subtle glow effect
- Custom CSS design tokens via Tailwind v4's `@theme` system for consistency

### Architecture
```
src/
├── app/
│   ├── layout.tsx        # Root layout, SEO metadata, font setup
│   ├── page.tsx          # Page composition (server component)
│   └── globals.css       # Design system tokens & utilities
└── components/
    ├── Navbar.tsx         # Fixed navbar with scroll morph
    ├── Hero.tsx           # GSAP word-reveal hero
    ├── About.tsx          # Mission/Vision + GSAP counter
    ├── Services.tsx       # 6 service cards grid
    ├── Features.tsx       # Why Choose Us section
    ├── Testimonials.tsx   # Social proof cards
    ├── CTA.tsx            # Parallax CTA section
    └── Footer.tsx         # Multi-column footer
```

Each section is an isolated client component with co-located data. Page composition happens in a server component (`page.tsx`) for optimal performance.

---

## Animation Decisions

| Animation | Library | Rationale |
|-----------|---------|-----------|
| **Hero word reveal** | GSAP | Split-text with `rotateX` 3D entrance — GSAP's timeline sequencing is perfect for staggered orchestration |
| **Stats counter** | GSAP | Smooth number interpolation with `onUpdate` — GSAP handles decimal tween values natively |
| **Parallax CTA background** | GSAP ScrollTrigger | ScrollTrigger provides scrub-linked parallax that stays buttery at 60fps |
| **Scroll reveal sections** | Framer Motion `whileInView` | Declarative and clean — each section fades + slides up when scrolled into view |
| **Staggered cards** | Framer Motion variants | Parent `staggerChildren` + child `variants` pattern keeps code minimal |
| **Hover micro-interactions** | Framer Motion `whileHover` | Scale, lift, and glow on cards/buttons — feels responsive without being distracting |
| **Navbar scroll morph** | CSS + Framer Motion | Background blur + padding shrink on scroll — lightweight and smooth |

**Philosophy**: Every animation serves a purpose (guide attention, provide feedback, enhance hierarchy). No gratuitous motion.

---

## Tech Choices

| Technology | Version | Why |
|------------|---------|-----|
| Next.js | 16 (App Router) | Static export, server components, optimal image handling |
| Tailwind CSS | v4 | New `@theme` system, zero-config, utility-first |
| Framer Motion | 12 | Best React animation library — declarative, performant |
| GSAP | 3.14 | Industry-standard for complex timeline & scroll animations |
| Lucide React | Latest | Lightweight, consistent icon set — drop-in with React |
| TypeScript | 5 | Type safety across components and props |

---

## Tradeoffs & Improvements

With more time, I would add:
- **Page transition animation** with Framer Motion `AnimatePresence` on route changes
- **Loading screen** with a branded skeleton shimmer
- **Blog/Case Study section** with MDX content
- **Contact form** with server action + validation
- **Intersection Observer** for more granular scroll-triggered animations
- **Image optimization** with `next/image` for real photography assets
- **i18n support** for multi-language targeting
- **Core Web Vitals** audit with Lighthouse CI

---

## Getting Started

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
```


Built with ❤️ for Peroxia Technology Frontend Engineering Evaluation.
