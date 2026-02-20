"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  BarChart3,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI models, NLP pipelines, and intelligent automation that transform raw data into actionable business insights.",
    gradient: "from-blue-600 to-cyan-500",
    bg: "#0c1929",
    accent: "#22d3ee",
    accentClass: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    tags: ["Deep Learning", "NLP", "Computer Vision"],
    stat: { value: "40%", label: "Avg. accuracy improvement" },
    glowColor: "rgba(34,211,238,0.08)",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud architecture on AWS, GCP, and Azure — from migration strategy to fully managed infrastructure.",
    gradient: "from-violet-600 to-purple-500",
    bg: "#130c29",
    accent: "#a78bfa",
    accentClass: "text-violet-400",
    iconBg: "bg-violet-500/15",
    tags: ["AWS", "GCP", "Azure", "Kubernetes"],
    stat: { value: "99.9%", label: "Uptime SLA guarantee" },
    glowColor: "rgba(167,139,250,0.08)",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "End-to-end product engineering — from rapid prototyping to production-grade platforms built for scale and performance.",
    gradient: "from-emerald-600 to-teal-500",
    bg: "#0c1f1a",
    accent: "#34d399",
    accentClass: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    tags: ["React", "Node.js", "TypeScript", "Go"],
    stat: { value: "3x", label: "Faster time to market" },
    glowColor: "rgba(52,211,153,0.08)",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Real-time dashboards, predictive analytics, and data pipelines that turn complexity into clarity for smarter decisions.",
    gradient: "from-orange-500 to-amber-500",
    bg: "#1f150c",
    accent: "#fbbf24",
    accentClass: "text-amber-400",
    iconBg: "bg-amber-500/15",
    tags: ["BI Dashboards", "ETL", "Predictive Models"],
    stat: { value: "10TB+", label: "Data processed daily" },
    glowColor: "rgba(251,191,36,0.08)",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Enterprise-grade security audits, penetration testing, and zero-trust architecture to protect your digital assets.",
    gradient: "from-rose-600 to-pink-500",
    bg: "#1f0c14",
    accent: "#fb7185",
    accentClass: "text-rose-400",
    iconBg: "bg-rose-500/15",
    tags: ["Pen Testing", "SOC 2", "Zero Trust"],
    stat: { value: "0", label: "Breaches on our watch" },
    glowColor: "rgba(251,113,133,0.08)",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and container orchestration for faster, more reliable software delivery.",
    gradient: "from-indigo-600 to-blue-500",
    bg: "#0f0c29",
    accent: "#818cf8",
    accentClass: "text-indigo-400",
    iconBg: "bg-indigo-500/15",
    tags: ["Docker", "Terraform", "CI/CD", "GitOps"],
    stat: { value: "50+", label: "Deployments per day" },
    glowColor: "rgba(129,140,248,0.08)",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center pt-20 pb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Solutions That Scale
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            We deliver end-to-end technology solutions tailored to your business
            goals, from initial concept through launch and beyond.
          </p>
        </motion.div>

        {/* Stacking cards */}
        {services.map((service, i) => (
          <div
            key={service.title}
            className="sticky rounded-3xl border border-white/[0.08] shadow-2xl shadow-black/50 overflow-hidden"
            style={{
              top: `${80 + i * 40}px`,
              zIndex: i + 1,
              marginBottom: "20px",
              backgroundColor: service.bg,
            }}
          >
            {/* Corner glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, ${service.glowColor}, transparent 70%)`,
              }}
            />
            {/* Bottom-left glow */}
            <div
              className="absolute bottom-0 left-0 w-60 h-60 pointer-events-none"
              style={{
                background: `radial-gradient(circle at bottom left, ${service.glowColor}, transparent 70%)`,
              }}
            />

            <div className="relative p-8 md:p-12 lg:p-14">
              {/* Top row: number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-white/[0.06] text-7xl md:text-8xl font-black leading-none select-none">
                  0{i + 1}
                </span>
                <div
                  className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center border border-white/[0.06]`}
                >
                  <service.icon size={28} className={service.accentClass} />
                </div>
              </div>

              {/* Two-column layout on larger screens */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                {/* Left: title + description */}
                <div className="max-w-xl">
                  <h3
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]"
                        style={{ color: service.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: stat + CTA */}
                <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[200px]">
                  {/* Stat highlight */}
                  <div
                    className="rounded-2xl border border-white/[0.06] px-6 py-4"
                    style={{ background: `${service.glowColor}` }}
                  >
                    <div
                      className="text-3xl md:text-4xl font-black leading-none mb-1"
                      style={{ color: service.accent }}
                    >
                      {service.stat.value}
                    </div>
                    <div className="text-muted text-xs uppercase tracking-wider font-medium">
                      {service.stat.label}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <div
                      className={`h-[2px] w-10 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-16 transition-all duration-300`}
                    />
                    <span
                      className={`text-sm font-medium ${service.accentClass} group-hover:translate-x-1 transition-transform duration-300`}
                    >
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer */}
        <div style={{ height: "40vh" }} aria-hidden="true" />
      </div>
    </section>
  );
}
