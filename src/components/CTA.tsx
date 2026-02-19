"use client";

import { useRef, useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  "AI & Machine Learning",
  "Cloud Solutions",
  "Custom Software",
  "Data Analytics",
  "Cybersecurity",
  "DevOps & Automation",
  "Other",
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  const inputBaseClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/20";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -inset-y-20 bg-gradient-to-br from-primary/10 via-surface to-accent/10"
      />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Fill out the form and we&apos;ll get back to
            you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Email Us</p>
                  <a
                    href="mailto:hello@peroxia.tech"
                    className="text-white font-medium hover:text-blue-400 transition-colors text-sm"
                  >
                    hello@peroxia.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Call Us</p>
                  <a
                    href="tel:+911234567890"
                    className="text-white font-medium hover:text-emerald-400 transition-colors text-sm"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Visit Us</p>
                  <p className="text-white font-medium text-sm">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <p className="text-2xl font-bold text-blue-400">{"<"}24h</p>
                <p className="text-xs text-muted mt-1">Response Time</p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <p className="text-2xl font-bold text-emerald-400">150+</p>
                <p className="text-xs text-muted mt-1">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 flex flex-col gap-5"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-muted uppercase tracking-wider mb-2 font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputBaseClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-muted uppercase tracking-wider mb-2 font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputBaseClass}
                  />
                </div>
              </div>

              {/* Phone + Service row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs text-muted uppercase tracking-wider mb-2 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputBaseClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs text-muted uppercase tracking-wider mb-2 font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputBaseClass} appearance-none cursor-pointer`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23ffffff40' viewBox='0 0 16 16'%3E%3Cpath d='M8 12L2 6h12z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="" className="bg-[#0a0f1e]">
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0f1e]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-muted uppercase tracking-wider mb-2 font-medium"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className={`${inputBaseClass} resize-none`}
                />
              </div>

              {/* Submit button + status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          fill="currentColor"
                          className="opacity-75"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-rose-400 text-sm font-medium"
                  >
                    <AlertCircle size={18} />
                    {errorMsg}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
