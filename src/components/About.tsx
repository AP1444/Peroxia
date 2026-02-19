"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import gsap from "gsap";

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Global Clients", value: 50, suffix: "+" },
  { label: "Uptime Guarantee", value: 99.9, suffix: "%", decimals: 1 },
  { label: "Years of Innovation", value: 5, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(counterRef, { once: false, margin: "-50px" });

  useEffect(() => {
    if (!inView || !counterRef.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            obj.val.toFixed(decimals) + suffix;
        }
      },
    });
  }, [inView, value, suffix, decimals]);

  return (
    <span ref={counterRef} className="text-3xl md:text-4xl font-bold gradient-text">
      0{suffix}
    </span>
  );
}

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To democratize cutting-edge technology and make intelligent software accessible to businesses of every scale.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    text: "A world where technology amplifies human potential, enabling organizations to solve their most complex challenges.",
  },
  {
    icon: Users,
    title: "Our Culture",
    text: "We foster curiosity, champion ownership, and believe that diverse perspectives build the best products.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
            Building the Future of{" "}
            <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Founded with the belief that technology should empower — not overwhelm — Peroxia
            Technology partners with forward-thinking businesses to build software that truly
            matters.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              className="gradient-border p-8 rounded-2xl hover:bg-surface-light/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
              />
              <p className="text-muted text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
