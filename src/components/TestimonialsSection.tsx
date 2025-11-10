"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Don’t take my word for it — take theirs. Delivered beyond expectations and ahead of schedule.",
    author: "Happy Client",
    role: "Founder, Startup Co.",
  },
  {
    quote:
      "Design vision paired with flawless execution. The site loads fast and converts.",
    author: "Marketing Lead",
    role: "SaaS Platform",
  },
];

export default function TestimonialsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="Don’t take my word for it" eyebrow="{04}" />
        <motion.div className="grid gap-6 sm:grid-cols-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          {testimonials.map((t) => (
            <motion.blockquote key={t.author} className="rounded-xl border border-zinc-800 p-5" variants={fadeInUp}>
              <p className="text-lg">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-muted">
                — {t.author}{t.role ? `, ${t.role}` : ""}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}