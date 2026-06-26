"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { WHY_US_PILLARS } from "@/lib/constants";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function AnimatedCounter({
  value,
  inView,
}: {
  value: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const match = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, "");

    if (!inView || !match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const duration = 1500;
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [inView, value]);

  return <span>{display}</span>;
}

export default function WhyUs() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">Why TechVersa</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Why Choose Us
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-body">
            We combine technical excellence with genuine partnership to deliver
            results that exceed expectations.
          </motion.p>
        </motion.div>

        <div ref={sectionRef} className="relative space-y-16">
          <svg
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(10, 186, 181, 0.2)"
              strokeWidth="2"
              strokeDasharray="8 8"
              style={{
                strokeDashoffset: isInView ? 0 : 1000,
                transition: "stroke-dashoffset 2s ease-out",
              }}
            />
          </svg>

          {WHY_US_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isReversed = index % 2 !== 0;
            const slideVariants = getReducedMotionVariants(
              isReversed ? fadeRight : fadeLeft,
              prefersReducedMotion
            );

            return (
              <motion.div
                key={pillar.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={slideVariants}
                className={cn(
                  "relative flex flex-col items-center gap-8 lg:flex-row",
                  isReversed && "lg:flex-row-reverse"
                )}
              >
                <div className="flex w-full flex-col items-center gap-4 lg:w-2/5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gradient-primary">
                      <AnimatedCounter value={pillar.stat} inView={isInView} />
                    </p>
                    <p className="text-sm text-white/50">{pillar.statLabel}</p>
                  </div>
                </div>

                <div className="w-full lg:w-3/5">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-body leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
