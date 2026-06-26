"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export default function Process() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const lineWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">Our Process</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            How We Work
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-body">
            A proven 7-step methodology that ensures transparency, quality, and
            on-time delivery every time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={itemVariants}
        >
          <div
            ref={containerRef}
            className="relative overflow-x-auto pb-8 scrollbar-thin"
          >
            <div className="relative flex min-w-max gap-0 px-4">
              <div className="absolute left-8 right-8 top-8 h-0.5 bg-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: prefersReducedMotion ? "100%" : lineWidth }}
                />
              </div>

              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex w-56 flex-col items-center px-4"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div
                    className={cn(
                      "relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-surface transition-all duration-300",
                      activeStep === index
                        ? "border-primary shadow-glow"
                        : "border-border"
                    )}
                  >
                    <span
                      className={cn(
                        "text-lg font-bold transition-colors",
                        activeStep === index ? "text-primary" : "text-white/50"
                      )}
                    >
                      {step.id}
                    </span>
                  </div>
                  <h3 className="mt-4 text-center text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-xs leading-relaxed text-white/50 line-clamp-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
