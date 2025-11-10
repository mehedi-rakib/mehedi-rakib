"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

const expertise = [
  {
    title: "Frontend Engineering",
    description:
      "Modern UIs with React and Next.js: SSR/SSG, routing, forms, and state management.",
  },
  {
    title: "Backend APIs",
    description:
      "Robust REST/JSON APIs with Node.js and Laravel, authentication, validation, and testing.",
  },
  {
    title: "Performance & DX",
    description:
      "Optimized bundles, caching, accessibility, and developer workflows to scale confidently.",
  },
];

export default function ExpertiseSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="Technical expertise" eyebrow="{Expertise}" />
        <motion.div className="grid gap-6 md:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          {expertise.map((e) => (
            <motion.div key={e.title} className="rounded-xl border border-zinc-800 p-5" variants={fadeInUp}>
              <div className="text-lg font-semibold">{e.title}</div>
              <p className="mt-2 text-sm text-muted">{e.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}