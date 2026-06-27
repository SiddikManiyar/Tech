"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TRUSTED_LOGOS } from "@/lib/constants";
import { fadeUp, viewportConfig, getReducedMotionVariants } from "@/lib/animations";

export default function Logos() {
  const prefersReducedMotion = useReducedMotion();
  const variants = getReducedMotionVariants(fadeUp, prefersReducedMotion);
  const doubledLogos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section className="overflow-hidden border-y border-border py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={variants}
        className="mb-8 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-white/40">
          Services We Provide
        </p>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubledLogos.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="mx-8 inline-flex items-center text-lg font-semibold text-white/50 transition-all duration-300 hover:text-white hover:opacity-100 opacity-50 grayscale hover:grayscale-0"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
