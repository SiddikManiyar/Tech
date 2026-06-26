"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  faqContent,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);
  const contentVariants = getReducedMotionVariants(faqContent, prefersReducedMotion);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">FAQ</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-body">
            Everything you need to know about working with TechVersa.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="space-y-3"
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div key={item.id} variants={itemVariants}>
                <div className="glass overflow-hidden rounded-xl">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-white">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                    >
                      <ChevronDown
                        size={18}
                        className={cn(
                          "shrink-0 transition-colors",
                          isOpen ? "text-primary" : "text-white/40"
                        )}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contentVariants}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-white/60">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
