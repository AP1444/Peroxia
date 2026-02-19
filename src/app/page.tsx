"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      {/* Navbar must be OUTSIDE the transformed wrapper for position:fixed to work */}
      <Navbar />
      <div
        style={{
          transform: loaded ? "translateY(0)" : "translateY(60px)",
          opacity: loaded ? 1 : 0,
          transition: loaded
            ? "transform 0.9s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.7s ease"
            : "none",
        }}
      >
        <main>
          <Hero />
          <About />
          <Services />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
