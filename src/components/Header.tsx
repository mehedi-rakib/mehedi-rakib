"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-zinc-800">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-zinc-700">
            <Image src="/images/mehedi.png" alt="Mehedi Rakib" fill className="object-cover" sizes="32px" />
          </div>
          <span className="text-sm font-semibold">Mehedi Rakib</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full px-4 py-2 accent-bg text-black text-sm font-medium">
          Get in touch
        </a>
      </div>
    </header>
  );
}