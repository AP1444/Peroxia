import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peroxia Technology — Intelligent Software Solutions",
  description:
    "Peroxia Technology transforms ideas into intelligent software. We specialize in AI, cloud solutions, custom software development, and digital transformation for forward-thinking businesses.",
  keywords: [
    "Peroxia Technology",
    "AI solutions",
    "cloud computing",
    "software development",
    "digital transformation",
  ],
  openGraph: {
    title: "Peroxia Technology — Intelligent Software Solutions",
    description:
      "Transform your business with AI-powered software, cloud infrastructure, and cutting-edge digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
