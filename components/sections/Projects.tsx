"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  viewportConfig,
  getReducedMotionVariants,
} from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function LaptopMockup({
  gradient,
  image,
  onMouseMove,
  onMouseLeave,
  transform,
}: {
  gradient: string;
  image?: string;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  transform: string;
}) {
  return (
    <div
      className="relative mx-auto w-full max-w-md transition-transform duration-300 ease-spring"
      style={{ transform }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="rounded-t-xl border border-border bg-surface-2 p-2">
        <div className="flex items-center gap-1.5 px-2 py-1">
          <div className="h-2 w-2 rounded-full bg-red-500/50" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
          <div className="h-2 w-2 rounded-full bg-green-500/50" />
        </div>
        {image ? (
          <div className="aspect-video overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Project screenshot"
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : (
          <div
            className={cn(
              "aspect-video rounded-lg bg-gradient-to-br",
              gradient
            )}
          />
        )}
      </div>
      <div className="mx-auto h-3 w-3/4 rounded-b-lg bg-surface-2" />
      <div className="mx-auto h-1 w-1/2 rounded-b bg-border" />
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [transform, setTransform] = useState(
    "perspective(800px) rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-2xl bg-gradient-to-br p-8 md:p-12",
        project.gradient
      )}
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <Badge variant="primary" className="mb-4">
            {project.category}
          </Badge>
          <h3 className="mb-3 text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="mb-6 text-body">{project.description}</p>

          <div className="mb-6 flex flex-wrap gap-4">
            {project.stats.map((stat) => (
              <div key={stat.label} className="glass rounded-lg px-4 py-2">
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button href={project.href} variant="ghost" size="sm">
            View Case Study
            <ArrowUpRight size={14} />
          </Button>
        </div>

        <LaptopMockup
          gradient={project.gradient}
          image={project.image}
          transform={transform}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const containerVariants = getReducedMotionVariants(staggerContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(fadeUp, prefersReducedMotion);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel className="mb-4">Portfolio</SectionLabel>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-heading text-gradient mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-body">
            Real results for real businesses. Explore our latest case studies
            and success stories.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="space-y-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
