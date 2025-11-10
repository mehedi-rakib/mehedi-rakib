"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { staggerParent as headlineParent, scaleIn as pillVariant, fadeInUp as lineVariant, slideInRight as rightPanelVariant, whileInViewDefaults } from "@/components/animations";

type HeroSectionProps = {
  id?: string;
  name?: string;
  role?: string;
  location?: string;
  experienceText?: string;
};

export default function HeroSection({
  id,
  name = "Mehedi Rakib",
  role = "Web Developer",
  location = "Dhaka, Bangladesh",
  experienceText = "(2022 — PRESENT)",
}: HeroSectionProps) {
  const city = location.split(",")[0];
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mehedirakib", icon: <FaLinkedin /> },
    { label: "GitHub", href: "https://github.com/mehedi-rakib", icon: <FaGithub /> },
    { label: "Twitter", href: "https://twitter.com/replace", icon: <FaTwitter /> },
    { label: "Email", href: "mailto:mehedirakib.dev@gmail.com", icon: <MdEmail /> },
  ];

  // Note: variants imported from shared animations helper

  return (
    <section id={id} className="section">
      <div className="container relative overflow-hidden">
        {/* Glossy overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden />

        {/* Two-column layout with minimal gap and tighter right column */}
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)] items-start">
          {/* Left: headline, copy, CTA */}
          <motion.div initial="hidden" whileInView="show" viewport={whileInViewDefaults} variants={headlineParent}>
            {/* Availability */}
            <div className="mb-3 flex items-center gap-2 text-sm text-muted">
              <motion.span
                className="inline-block h-2 w-2 rounded-full accent-bg"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span>Available for freelance</span>
            </div>

            {/* Headline with pill chips */}
            <div className="space-y-2">
              <motion.div variants={lineVariant} className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
                Hi! I&apos;m
                <motion.span variants={pillVariant} className="ml-2 inline-block rounded-full px-4 py-1 bg-zinc-900 border border-zinc-700 text-2xl sm:text-3xl md:text-4xl">
                  {name}
                </motion.span>
              </motion.div>
              <motion.div variants={lineVariant} className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
                a
                <motion.span variants={pillVariant} className="ml-2 inline-block rounded-full px-4 py-1 bg-zinc-900 border border-zinc-700 text-2xl sm:text-3xl md:text-4xl">
                  {role}
                </motion.span>
                from
                <motion.span variants={pillVariant} className="ml-2 inline-block rounded-full px-4 py-1 bg-zinc-900 border border-zinc-700 text-2xl sm:text-3xl md:text-4xl">
                  {city}
                </motion.span>
              </motion.div>
              <motion.div variants={lineVariant} className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
                turning your ideas into
              </motion.div>
              <motion.div variants={lineVariant} className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
                pixel-perfect realities
              </motion.div>
            </div>

            {/* Supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={whileInViewDefaults}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg text-muted max-w-2xl"
            >
              I&apos;m dedicated to crafting websites that bring your ideas to life,
              combining design and development to deliver fast, impactful results.
            </motion.p>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 accent-bg text-black text-sm font-medium shadow-[0_6px_30px_rgba(158,255,0,0.35)]"
              >
                See what I can do
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>

          {/* Right column: experience pill + profile + social icons */}
          <motion.div initial="hidden" whileInView="show" viewport={whileInViewDefaults} variants={rightPanelVariant} className="hidden md:flex md:justify-self-end w-full">
            {/* Experience pill button */}
            <div className="flex md:justify-end absolute top-1/2 right-0">
              <motion.span initial={{ opacity: 0, y: -10, x: 20 }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="rounded-full px-4 py-2 border border-zinc-700 text-sm bg-zinc-900/60">
                {experienceText}
              </motion.span>
            </div>

            <div className="absolute bottom-10 right-0">
            {/* Profile */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-4 flex items-center gap-4 md:justify-end">
              
              <div className="text-right">
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-xs text-muted">{role} • {location}</div>
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-700">
                <Image src="/images/mehedi.webp" alt={name} fill sizes="48px" className="object-cover" />
              </div>
            </motion.div>

            {/* Social icons */}
            <motion.div className="mt-3 flex md:justify-end gap-2" variants={headlineParent}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  variants={lineVariant}
                  className="grid h-8 w-8 place-items-center rounded-full border border-zinc-700 text-base text-muted hover:text-black hover:bg-[var(--accent)] transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-8 h-[2px] w-full origin-left accent-bg"
        />
      </div>
    </section>
  );
}