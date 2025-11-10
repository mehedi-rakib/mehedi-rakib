"use client";

import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

type QA = { q: string; a: string };

const qas: QA[] = [
  {
    q: "What is your typical project timeline?",
    a: "Typically 4–8 weeks depending on scope. After the consultation, I provide a detailed timeline with milestones.",
  },
  {
    q: "Do you offer ongoing maintenance and support?",
    a: "Yes. Maintenance packages include updates, bug fixes, and enhancements as your business grows.",
  },
  {
    q: "Can you work with existing brand guidelines?",
    a: "Absolutely. I can integrate existing brand systems and elevate your digital presence.",
  },
  {
    q: "How do you handle revisions and feedback?",
    a: "Revisions are built into the process with clear communication throughout.",
  },
  {
    q: "How do I get started?",
    a: "Just reach out! We'll discuss needs, create a plan, and get to work.",
  },
];

function QAItem({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="rounded-xl border border-zinc-800" initial={false}>
      <button
        type="button"
        className="w-full p-5 text-left flex items-center justify-between"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{qa.q}</span>
        <span className="text-sm text-muted">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-5 text-sm text-muted overflow-hidden"
          >
            {qa.a}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionTitle title="Got Questions?" eyebrow="{05}" />
        <motion.div className="space-y-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
          {qas.map((qa) => (
            <motion.div key={qa.q} variants={fadeInUp}>
              <QAItem qa={qa} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}