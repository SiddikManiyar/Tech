"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  springTransition,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  const formatPrice = (monthly: number, annual: number) => {
    const price = isAnnual ? annual : monthly;
    return price.toLocaleString("en-US");
  };

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">Pricing</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Transparent Pricing
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto mb-8 max-w-2xl text-body">
            Flexible plans designed to scale with your business. No hidden fees,
            no surprises.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative inline-flex items-center rounded-full border border-border bg-surface p-1"
          >
            {!prefersReducedMotion && (
              <motion.div
                layoutId="pricing-pill"
                className="absolute inset-y-1 rounded-full border border-primary/30 bg-primary/20"
                style={{
                  width: "calc(50% - 4px)",
                  left: isAnnual ? "calc(50% + 2px)" : "4px",
                }}
                transition={springTransition}
              />
            )}
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={cn(
                "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
                !isAnnual ? "text-white" : "text-white/50"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={cn(
                "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
                isAnnual ? "text-white" : "text-white/50"
              )}
            >
              Annual
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              className={cn(
                "glass relative flex flex-col rounded-2xl p-8",
                tier.popular && "border-2 border-primary bg-primary/5"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mb-1 text-xl font-semibold text-white">
                {tier.name}
              </h3>
              <p className="mb-6 text-sm text-white/50">{tier.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">
                  ₹{formatPrice(tier.monthlyPrice, tier.annualPrice)}+
                </span>
                <span className="text-sm text-white/50">
                  {isAnnual ? "/year" : "/month"}
                </span>
                {isAnnual && (
                  <p className="mt-1 text-xs text-primary">
                    Billed annually (save 20%)
                  </p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-sm"
                  >
                    {feature.included ? (
                      <Check size={16} className="shrink-0 text-green-400" />
                    ) : (
                      <Minus size={16} className="shrink-0 text-white/20" />
                    )}
                    <span
                      className={
                        feature.included ? "text-white/70" : "text-white/30"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "primary" : "ghost"}
                href="#cta"
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
