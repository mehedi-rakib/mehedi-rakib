"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

const steps = [
  {
    title: "Discovery",
    slug: "Discovery/01",
    bullets: [
      "Initial Consultation: Understand vision, goals, audience",
      "Research: Analyze competitors and trends",
      "Define Scope: Objectives, deliverables, timelines",
    ],
    duration: "3–5 days",
  },
  {
    title: "Design",
    slug: "Design/02",
    bullets: [
      "Wireframing: Structure and IA",
      "Style Guide: Colors, fonts, UI elements",
      "Prototype: Clickable mockups, feedback, finalize",
    ],
    duration: "1–2 weeks",
  },
  {
    title: "Build",
    slug: "Build/03",
    bullets: [
      "Page Construction: Implement structure",
      "Content Integration: Text, images, video",
      "Basic SEO: On-page optimization",
    ],
    duration: "~1 week",
  },
  {
    title: "Launch",
    slug: "Launch/04",
    bullets: [
      "Client Review: Present and collect feedback",
      "Revisions: Iterate and polish",
    ],
    duration: "2–3 days",
  },
];

export default function ProcessSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="How it works" eyebrow="{03}" />
        <motion.div className="grid gap-6 md:grid-cols-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          {steps.map((s) => (
            <motion.div key={s.slug} className="rounded-xl border border-zinc-800 p-5" variants={fadeInUp}>
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="accent text-sm tracking-widest uppercase">{s.slug}</div>
                  <div className="mt-1 text-xl font-semibold">{s.title}</div>
                </div>
                <div className="text-sm text-muted">{s.duration}</div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-muted">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}