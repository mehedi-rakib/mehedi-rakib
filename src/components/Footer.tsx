"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();
  const nav = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mehedirakib" },
    { label: "GitHub", href: "https://github.com/mehedi-rakib" },
    { label: "Email", href: "mailto:mehedirakib.dev@gmail.com" },
  ];

  const Icons = {
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Email: MdEmail,
  } as const;

  return (
    <footer className="section">
      <div className="container border-t border-zinc-800 pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 md:justify-between">
          <div className="text-sm text-muted">© {year} Mehedi Rakib. All rights reserved.</div>

          <nav className="flex flex-wrap gap-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm rounded-full border border-zinc-800 px-3 py-1 hover:border-accent/70 hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="grid h-8 w-8 place-items-center rounded-full border border-zinc-800 text-base text-muted hover:text-black hover:bg-[var(--accent)] transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                aria-label={s.label}
              >
                {(() => {
                  const Icon = Icons[s.label as keyof typeof Icons];
                  return <Icon />;
                })()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}