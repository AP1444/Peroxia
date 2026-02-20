# Peroxia Technology — Landing Page

A modern, premium landing page for **Peroxia Technology**, built with Next.js, Tailwind CSS v4, Framer Motion, GSAP, and Nodemailer.

Demo - [Peroxia](https://peroxia.vercel.app/)
---

## ✨ Features

- **Cinematic Preloader** — "Peroxia" text fills with blue gradient from bottom to top on a light background, then slides up to reveal the dark site
- **Smart Navbar** — Hides on scroll down, reappears on scroll up from anywhere on the page
- **Hero Section** — GSAP-powered word reveal animation with a 3D rotateX entrance
- **About Section** — Mission/Vision layout with animated stat counters (150+ projects, 50+ clients, etc.)
- **Services (Stacking Cards)** — 6 sticky-stacking service cards with gradient accents, tech tags, and stat highlights
- **Features Grid** — "Why Choose Us" section with hover-interactive cards
- **Testimonials Marquee** — Dual-row infinite scrolling testimonial cards
- **Contact Form** — Fully functional form with Nodemailer email delivery
- **Responsive Design** — Fully responsive across all screen sizes

---

## 🏗️ Architecture

```
src/
├── app/
│   ├── api/contact/
│   │   └── route.ts       # Nodemailer API endpoint
│   ├── layout.tsx          # Root layout, SEO metadata, fonts
│   ├── page.tsx            # Page composition (client component)
│   └── globals.css         # Design tokens & utilities
└── components/
    ├── Preloader.tsx        # Cinematic loading animation
    ├── Navbar.tsx           # Smart hide/show navbar
    ├── Hero.tsx             # GSAP word-reveal hero
    ├── About.tsx            # Mission/Vision + counters
    ├── Services.tsx         # Sticky stacking service cards
    ├── Features.tsx         # Why Choose Us grid
    ├── Testimonials.tsx     # Marquee testimonial cards
    ├── CTA.tsx              # Contact form section
    └── Footer.tsx           # Multi-column footer
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#030712` | Page background |
| Surface | `#111827` | Card backgrounds |
| Primary | `#3b82f6` | Buttons, links, accents |
| Accent | `#06b6d4` | Gradients, highlights |
| Font | Inter (300–900) | All typography |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** (App Router) | Framework, API routes, SSR |
| **Tailwind CSS v4** | Utility-first styling with `@theme` |
| **Framer Motion** | Declarative React animations |
| **GSAP + ScrollTrigger** | Timeline & scroll-linked animations |
| **Nodemailer** | Contact form email delivery |
| **Lucide React** | Icon library |
| **TypeScript** | Type safety |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file and fill in your SMTP credentials:

```bash
cp .env.local.example .env.local
```

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=your-email@gmail.com
```

> **Gmail users**: Generate an App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) (requires 2FA).

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📦 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo
3. Add the environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`)
4. Click **Deploy**

Every push to `main` will auto-deploy.

---

## 📂 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

Built with ❤️ by Peroxia Technology.
