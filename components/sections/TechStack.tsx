"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Server,
  Brain,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { TECH_STACK } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  logoScaleIn,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  AI: Brain,
  Infrastructure: Cloud,
};

const categories = ["Frontend", "Backend", "AI", "Infrastructure"] as const;

export default function TechStack() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);
  const logoVariants = getReducedMotionVariants(logoScaleIn, prefersReducedMotion);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">Technologies</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Our Tech Stack
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-body">
            We leverage battle-tested technologies to build robust, scalable,
            and future-proof solutions.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const items = TECH_STACK.filter((t) => t.category === category);

            return (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                >
                  {items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={logoVariants}
                      className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 transition-colors hover:border-primary/30"
                    >
                      <span className="text-sm font-medium text-white/70">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
