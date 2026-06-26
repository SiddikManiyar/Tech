"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import Button from "@/components/ui/Button";
import AuroraBackground from "@/components/effects/AuroraBackground";

const ParticleCanvas = dynamic(
  () => import("@/components/effects/ParticleCanvas"),
  { ssr: false }
);

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      <AuroraBackground intensity="high" />
      <div className="absolute inset-0 opacity-30">
        <ParticleCanvas />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-heading text-gradient mb-6"
          >
            Let&apos;s Build Something Incredible.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-body"
          >
            Ready to transform your idea into a world-class digital product?
            Let&apos;s start the conversation today.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="mailto:team@techversa.online">
              <MessageCircle size={16} />
              Book Free Consultation
            </Button>
            <Button variant="ghost" href="#pricing">
              Get a Quote
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
