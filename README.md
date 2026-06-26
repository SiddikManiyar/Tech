# TechVersa Website

Production-ready Next.js 14 website for TechVersa — a software agency.

## Tech Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript** (strict mode)
- **Tailwind CSS 3** with custom design tokens
- **Framer Motion 11**
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/           → Layout, page, global styles
components/
  layout/      → Navbar, Footer
  sections/    → All page sections
  ui/          → Reusable UI components
  effects/     → Particle canvas, aurora, mouse glow
lib/           → Animations, constants, utilities
```

## Features

- Glass morphism design system with CSS custom properties
- Framer Motion animations with reduced-motion support
- Responsive layouts (mobile, tablet, desktop)
- Particle canvas with visibility-based RAF pausing
- Drag-able testimonial carousel with auto-advance
- Animated pricing toggle, FAQ accordion, and more
