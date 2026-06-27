"use client";

import { useRef, useState, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
  getReducedMotionVariants,
} from "@/lib/animations";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AuroraBackground from "@/components/effects/AuroraBackground";
import { cn } from "@/lib/utils";

const ParticleCanvas = dynamic(
  () => import("@/components/effects/ParticleCanvas"),
  { ssr: false }
);

function BarChartCard() {
  const bars = [40, 65, 45, 80, 60, 90, 75];
  return (
    <div className="p-4">
      <p className="mb-3 text-xs font-medium text-white/50">Analytics</p>
      <svg viewBox="0 0 200 80" className="h-20 w-full">
        {bars.map((height, i) => (
          <rect
            key={i}
            x={i * 28 + 4}
            y={80 - height}
            width={20}
            height={height}
            rx={4}
            fill="url(#barGradient)"
            className="animate-stroke-draw"
            style={{
              opacity: 0.8,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function CodeSnippetCard() {
  const codeLines = [
    'const ai = new Agent({',
    '  model: "gpt-4",',
    '  tools: [search, code],',
    '});',
    'await ai.run(task);',
  ];

  return (
    <div className="p-4 font-mono text-xs">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
      </div>
      <div className="overflow-hidden">
        {codeLines.map((line, i) => (
          <div key={i} className="text-white/60">
            <span className="text-accent/60 mr-2 select-none">{i + 1}</span>
            <span
              className="inline-block overflow-hidden whitespace-nowrap"
              style={{
                animation: `typewriter 4s steps(${line.length}) ${i * 0.5}s infinite`,
                maxWidth: "100%",
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowDiagramCard() {
  const nodes = [
    { x: 30, y: 40, label: "Input" },
    { x: 100, y: 20, label: "AI" },
    { x: 100, y: 60, label: "Process" },
    { x: 170, y: 40, label: "Output" },
  ];

  return (
    <div className="p-4">
      <p className="mb-2 text-xs font-medium text-white/50">AI Workflow</p>
      <svg viewBox="0 0 200 80" className="h-20 w-full">
        <line x1="50" y1="40" x2="80" y2="25" stroke="rgba(15,118,110,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="50" y1="40" x2="80" y2="55" stroke="rgba(15,118,110,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="120" y1="25" x2="145" y2="40" stroke="rgba(20,184,166,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="120" y1="55" x2="145" y2="40" stroke="rgba(20,184,166,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
        {nodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="14" fill="rgba(15,118,110,0.2)" stroke="#0F766E" strokeWidth="1.5" />
            <text x={node.x} y={node.y + 3} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontWeight="600">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  style?: React.CSSProperties;
}

function TiltCard({ children, className, animationClass, style }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      className={cn("glass transition-transform duration-300 ease-spring", animationClass, className)}
      style={{ transform, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const leftVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const fadeUpVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-32">
      <AuroraBackground />
      <ParticleCanvas />
      <div className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:px-8 lg:flex-row lg:gap-8 lg:px-16">
        <motion.div
          className="w-full lg:w-[60%]"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
        >
          <motion.div variants={fadeUpVariants}>
            <Badge variant="primary" className="mb-6">
              <Sparkles size={12} />
              Trusted by 200+ companies
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="text-display text-gradient mb-6"
          >
            Building Intelligent Digital Products That Scale.
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mb-8 max-w-xl text-body text-white/60"
          >
            We craft cutting-edge web, mobile, and AI solutions that transform
            businesses and delight users. From MVP to enterprise scale.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="mb-10 flex flex-wrap gap-4">
            <Button href="#cta">
              Start Your Project
              <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" href="#projects">
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-8 border-t border-border pt-8"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[400px] w-full lg:w-[40%]"
          initial="hidden"
          animate="visible"
          variants={getReducedMotionVariants(fadeRight, prefersReducedMotion)}
        >
          <TiltCard
            className="absolute left-0 top-0 z-10 w-[75%]"
            animationClass="animate-float"
          >
            <BarChartCard />
          </TiltCard>
          <TiltCard
            className="absolute right-0 top-16 z-20 w-[70%]"
            animationClass="animate-float-slow"
            style={{ animationDelay: "1s" }}
          >
            <CodeSnippetCard />
          </TiltCard>
          <TiltCard
            className="absolute bottom-0 left-8 z-30 w-[65%]"
            animationClass="animate-float-delayed"
          >
            <WorkflowDiagramCard />
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
