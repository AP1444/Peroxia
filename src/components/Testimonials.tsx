"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Peroxia rebuilt our entire data pipeline in under 8 weeks. The AI models they delivered increased our forecast accuracy by 40%. Absolutely world-class engineering team.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "NovaBridge Analytics",
    rating: 5,
  },
  {
    quote:
      "We evaluated six vendors — Peroxia was the only team that truly understood our domain. Their cloud migration was seamless, and our infra costs dropped 35% overnight.",
    name: "Raj Malhotra",
    role: "CTO",
    company: "FinLeap Systems",
    rating: 5,
  },
  {
    quote:
      "The quality of their code, the clarity of communication, and the speed of delivery were unlike anything we'd experienced. They feel like an extension of our own team.",
    name: "Emily Rodriguez",
    role: "Head of Product",
    company: "Orbitly Health",
    rating: 5,
  },
  {
    quote:
      "Their DevOps expertise transformed our deployment process from days to minutes. Zero downtime migrations and bulletproof CI/CD pipelines. Highly recommend.",
    name: "James Park",
    role: "Engineering Lead",
    company: "CloudScale IO",
    rating: 5,
  },
  {
    quote:
      "Peroxia's cybersecurity audit uncovered vulnerabilities three other firms missed. Their team is thorough, communicative, and genuinely invested in our success.",
    name: "Aisha Patel",
    role: "CISO",
    company: "VaultEdge Security",
    rating: 5,
  },
  {
    quote:
      "From initial scoping to production launch, everything was delivered on time and under budget. Their technical depth across AI and cloud is truly exceptional.",
    name: "Marcus Liu",
    role: "Director of Technology",
    company: "Horizon Digital",
    rating: 5,
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[400px] p-6 rounded-2xl border border-white/[0.08] bg-[#0f1629] hover:border-white/[0.15] transition-colors duration-300 group">
      <Quote
        size={24}
        className="text-primary/30 mb-3 group-hover:text-primary/50 transition-colors duration-300"
      />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-muted text-sm leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-muted">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 px-6"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Don&apos;t take our word for it — hear directly from the teams
            we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Row 1: scrolls left */}
        <div className="marquee-container mb-6">
          <div className="marquee-track marquee-left">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: scrolls right */}
        <div className="marquee-container">
          <div className="marquee-track marquee-right">
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
