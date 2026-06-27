import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Pricing from "@/components/sections/Pricing";

import FAQ from "@/components/sections/FAQ";
import Recruitment from "@/components/sections/Recruitment";
import CTA from "@/components/sections/CTA";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false, loading: () => <div className="py-24" aria-hidden="true" /> }
);

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <TechStack />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Recruitment />
      <CTA />
    </>
  );
}
