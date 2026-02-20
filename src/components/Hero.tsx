"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".hero-word");
      tl.fromTo(
        words,
        { y: 80, opacity: 0, rotateX: 40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.08 }
      );
    }

    if (subRef.current) {
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.3"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 },
        "-=0.3"
      );
    }

    if (orbRef.current) {
      gsap.to(orbRef.current, {
        y: -30,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const headlineWords = [
    "Transforming",
    "Ideas",
    "Into",
    "Intelligent",
    "Software",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      {/* Floating Orbs */}
      <div ref={orbRef} className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Next-Gen Technology Solutions
        </motion.div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          style={{ perspective: "600px" }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className="hero-word inline-block opacity-0"
              style={{
                transformStyle: "preserve-3d",
                marginRight: "0.3em",
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
        >
          Peroxia Technology empowers businesses with AI-driven software, scalable cloud
          infrastructure, and elegant digital experiences that drive real results.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow"
          >
            Get Started
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-surface-lighter text-muted hover:text-foreground hover:border-primary/30 font-medium text-sm transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </a>
    </section>
  );
}
