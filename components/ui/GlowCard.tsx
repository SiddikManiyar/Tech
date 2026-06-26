"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  cardHover,
  cardHoverTransition,
  getReducedMotionHover,
} from "@/lib/animations";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  enableGlow?: boolean;
  enableHover?: boolean;
}

export default function GlowCard({
  children,
  className,
  enableGlow = true,
  enableHover = true,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableGlow || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "glass card-glow relative",
        className
      )}
      onMouseMove={handleMouseMove}
      whileHover={
        enableHover
          ? getReducedMotionHover(cardHover, prefersReducedMotion)
          : undefined
      }
      transition={cardHoverTransition}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
