"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  cardHoverLarge,
  cardHoverTransition,
  viewportConfig,
  getReducedMotionVariants,
  getReducedMotionHover,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">What We Do</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Services Built for Scale
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-body">
            End-to-end software development services tailored to your business
            needs, from concept to launch and beyond.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <GlowCard
                  className="group h-full p-6 transition-colors duration-300 hover:border-primary/40"
                  enableHover={!prefersReducedMotion}
                >
                  <motion.div
                    whileHover={getReducedMotionHover(cardHoverLarge, prefersReducedMotion)}
                    transition={cardHoverTransition}
                    className="h-full"
                  >
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-white/50">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-white/60"
                        >
                          <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
