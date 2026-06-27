"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import {
  fadeDown,
  mobileMenuContainer,
  mobileMenuItem,
  getReducedMotionVariants,
} from "@/lib/animations";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navVariants = getReducedMotionVariants(fadeDown, prefersReducedMotion);
  const menuVariants = getReducedMotionVariants(mobileMenuContainer, prefersReducedMotion);
  const itemVariants = getReducedMotionVariants(mobileMenuItem, prefersReducedMotion);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-border backdrop-blur-glass"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-16">
          <a href="#" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-transparent.png" alt="TechVersa Logo" className="h-9 w-9 object-contain" />
            <span className="text-lg font-bold text-white">TechVersa</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className="relative text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#cta" size="sm">
              Start Project
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 backdrop-blur-xl lg:hidden"
            style={{ paddingTop: "72px" }}
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={itemVariants}>
                <Button href="#cta" onClick={() => setMobileOpen(false)}>
                  Start Project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
