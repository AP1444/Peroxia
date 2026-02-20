"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Peroxia rebuilt our entire data pipeline in under 8 weeks. The AI models they delivered increased our forecast accuracy by 40%.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "NovaBridge Analytics",
  },
  {
    quote:
      "We evaluated six vendors — Peroxia was the only team that truly understood our domain. Infra costs dropped 35% after migration.",
    name: "Raj Malhotra",
    role: "CTO",
    company: "FinLeap Systems",
  },
  {
    quote:
      "The quality of their code, the clarity of communication, and the speed of delivery were unlike anything we'd experienced.",
    name: "Emily Rodriguez",
    role: "Head of Product",
    company: "Orbitly Health",
  },
  {
    quote:
      "Their DevOps expertise transformed our deployment process from days to minutes. Zero downtime migrations.",
    name: "James Park",
    role: "Engineering Lead",
    company: "CloudScale IO",
  },
  {
    quote:
      "Peroxia's security audit uncovered vulnerabilities three other firms missed. Thorough and genuinely invested in our success.",
    name: "Aisha Patel",
    role: "CISO",
    company: "VaultEdge Security",
  },
  {
    quote:
      "From scoping to production launch, everything was delivered on time and under budget. Technical depth across AI and cloud is exceptional.",
    name: "Marcus Liu",
    role: "Director of Technology",
    company: "Horizon Digital",
  },
];

const row1 = testimonials.slice(0, 3);
const row2 = testimonials.slice(3, 6);

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] p-5 rounded-xl border border-white/[0.05] bg-surface hover:border-white/[0.1] transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-foreground text-xs font-semibold shrink-0">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground leading-tight">
            {t.name}
          </p>
          <p className="text-xs text-muted truncate">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
      <Quote
        size={16}
        className="text-primary/20 mb-2 group-hover:text-primary/35 transition-colors duration-300"
      />
      <p className="text-muted text-[13px] leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden section-alt"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Don&apos;t take our word for it — hear from the teams
            we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Row 1 */}
        <div className="marquee-container mb-5">
          <div className="marquee-track marquee-left">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
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
