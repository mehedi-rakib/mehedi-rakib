"use client";

import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

type Skill = { name: string; level: number };

const defaultSkills: Skill[] = [
  { name: "Node.js", level: 90 },
  { name: "Next.js", level: 90 },
  { name: "React", level: 90 },
  { name: "Laravel", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 85 },
];

export default function SkillsSection({ id, skills = defaultSkills }: { id?: string; skills?: Skill[] }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="My creative toolbox" eyebrow="{02}" />
        <div className="space-y-5">
          {skills.map((s, idx) => (
            <div key={s.name + idx}>
              <div className="flex justify-between text-sm">
                <span>{s.name}</span>
                <span className="accent">{s.level}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded bg-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded accent-bg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}