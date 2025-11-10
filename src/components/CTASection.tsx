"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

export default function CTASection({ id }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="Let’s create something extraordinary together" eyebrow="{07}" />
        <motion.div className="mt-4 flex flex-wrap gap-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          <motion.a variants={fadeInUp} href="#contact" className="rounded-full px-5 py-2 accent-bg text-black text-sm font-medium">
            Start a project
          </motion.a>
          <motion.a variants={fadeInUp} href="#projects" className="rounded-full px-5 py-2 border border-zinc-700 text-sm hover:border-accent/70 hover:text-accent transition-colors">
            See case studies
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}