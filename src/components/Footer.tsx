"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const links = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  solutions: [
    { label: "AI & ML", href: "#services" },
    { label: "Cloud", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "DevOps", href: "#services" },
  ],
};

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm text-white">
                P
              </div>
              <span className="text-lg font-bold tracking-tight">
                Peroxia<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Building intelligent software solutions that drive meaningful
              business outcomes.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-surface-light flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider text-muted">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider text-muted">
              Solutions
            </h4>
            <ul className="space-y-3">
              {links.solutions.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider text-muted">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@peroxia.tech"
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  hello@peroxia.tech
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-muted">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-muted">
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; 2025 Peroxia Technology. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
