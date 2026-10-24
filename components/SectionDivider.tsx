"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionDividerProps = {
  number?: string;
  label?: string;
};

export default function SectionDivider({ number, label }: SectionDividerProps) {
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex items-center gap-4 py-4">
        {number && (
          <motion.span
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-xs font-display font-semibold text-accent uppercase tracking-wider"
          >
            {number}
          </motion.span>
        )}

        {label && (
          <span className="text-xs text-muted uppercase tracking-wider">
            {label}
          </span>
        )}

        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="h-px flex-1 bg-border origin-left"
        />
      </div>
    </div>
  );
}