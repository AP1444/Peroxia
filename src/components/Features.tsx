"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Puzzle, HeartHandshake, Gauge, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "Agile sprints and rapid prototyping mean you see results in weeks, not months.",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Enterprise-grade encryption, SOC 2 compliance-ready, and zero-trust by default.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description:
      "Our solutions plug into your existing stack with clean APIs and zero vendor lock-in.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Partnership",
    description:
      "Not just a vendor — we embed with your team and align on outcomes, not outputs.",
  },
  {
    icon: Gauge,
    title: "99.9% Uptime SLA",
    description:
      "Redundant infrastructure, automated failovers, and 24/7 monitoring keep you online.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Round-the-clock access to senior engineers — not bots, not scripts, real expertise.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Why Peroxia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Built Different,{" "}
            <span className="gradient-text">Built Better</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            We combine technical depth with genuine care for your success. Here&#39;s what
            sets us apart.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group flex gap-5 p-6 rounded-2xl hover:bg-surface-light/40 transition-all duration-300 cursor-default"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
