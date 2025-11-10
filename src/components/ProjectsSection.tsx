"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
};

const sampleProjects: Project[] = [
  {
    title: "Full‑stack App",
    description: "End‑to‑end web web application with a Next.js frontend and Node.js Express REST API backend.",
    tags: ["Next.js", "Node.js", "TypeScript"],
    link: "https://jpreconditioncars.com",
    image: "/images/jpreconditon.png",
  },
  {
    title: "Laravel SaaS",
    description: "E-commerce platform with Laravel, authentication, billing, and admin dashboard.",
    tags: ["Laravel", "MySQL", "Tailwind"],
    link: "https://dailyneedsbd.com",
    image: "/images/Daily-Needs-Bangladesh-Online-Shopping-Daily-Needs-Bangladesh.png",
  },
  {
    title: "React Next-js",
    description: "E-commerce platform with React, Next.js, and optimized SEO.",
    tags: ["React", "API", "SEO"],
    link: "https://eurasiasupplies.com",
    image: "/images/Eurasia-Supplies-Brand-Cosmetics-of-bangladesh.png",
  },
];

export default function ProjectsSection({ id, projects = sampleProjects }: { id?: string; projects?: Project[] }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="Technical expertise" eyebrow="{Portfolio}" />

        {/* 2x2 grid like the reference screenshot: three project cards + one CTA tile */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 3).map((p, idx) => (
            <motion.a
              key={p.title + idx}
              href={p.link ?? "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="block rounded-xl border border-zinc-800 overflow-hidden hover:border-accent/60 transition-colors"
            >
              {p.image && (
                <div className="relative w-full aspect-[16/10] bg-zinc-900">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                    className="object-cover object-top"
                    priority={idx === 0}
                  />
                </div>
              )}
              <div className="p-5">
                <div className="text-xl font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-zinc-900/60 px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {/* Accent CTA tile mirrors the bright green block in the screenshot */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="rounded-xl accent-bg text-black flex items-center justify-center aspect-[16/10] font-semibold text-xl hover:opacity-90 transition-opacity"
          >
            Explore all projects →
          </motion.a>
        </div>
      </div>
    </section>
  );
}