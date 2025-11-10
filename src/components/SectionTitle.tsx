"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerParent } from "@/components/animations";

type SectionTitleProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export default function SectionTitle({ title, eyebrow, className }: SectionTitleProps) {
  return (
    <motion.div className={clsx("mb-8", className)} initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerParent}>
      {eyebrow && (
        <motion.div variants={fadeInUp} className="text-sm tracking-widest uppercase accent">{eyebrow}</motion.div>
      )}
      <motion.h2 variants={fadeInUp} className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">{title}</motion.h2>
    </motion.div>
  );
}