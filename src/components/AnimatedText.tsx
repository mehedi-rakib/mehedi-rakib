"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

type AnimatedTextProps = {
  lines: string[];
  className?: string;
  delay?: number;
};

export default function AnimatedText({ lines, className, delay = 0 }: AnimatedTextProps) {
  return (
    <div className={clsx("overflow-hidden", className)}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.15,
          }}
          className="will-change-transform"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold">
            {line}
          </div>
        </motion.div>
      ))}
    </div>
  );
}