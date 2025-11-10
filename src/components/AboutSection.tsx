"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

export default function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="Get to know me" eyebrow="{About}" />
        <motion.div className="space-y-4 text-sm md:text-base text-muted max-w-3xl" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          <motion.p variants={fadeInUp}>
            I’m Mehedi Rakib — a Web Developer focused on building fast, accessible, and delightful digital products. I love turning ideas into real experiences that help businesses grow.
          </motion.p>
          <motion.p variants={fadeInUp}>
            My stack includes <span className="accent">React</span>, <span className="accent">Next.js</span>, <span className="accent">TypeScript</span>, and modern CSS. On the backend, I’m comfortable with <span className="accent">Node.js</span> and <span className="accent">Laravel</span>, shipping robust APIs with authentication, validation, and testing.
          </motion.p>
          <motion.p variants={fadeInUp}>
            I care deeply about performance, SEO, and maintainable architecture — aiming for sites that are snappy, scalable, and a joy to work on.
          </motion.p>
        </motion.div>

        <motion.div className="mt-6 grid gap-4 sm:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          <motion.div variants={fadeInUp} className="rounded-xl border border-zinc-800 p-4">
            <div className="text-2xl font-semibold">3+ years</div>
            <div className="text-sm text-muted">Building production web apps</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="rounded-xl border border-zinc-800 p-4">
            <div className="text-2xl font-semibold">15+ projects</div>
            <div className="text-sm text-muted">From landing pages to SaaS</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="rounded-xl border border-zinc-800 p-4">
            <div className="text-2xl font-semibold">Performance‑first</div>
            <div className="text-sm text-muted">Core Web Vitals and accessibility</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}