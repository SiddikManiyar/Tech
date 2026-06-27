import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/effects/MouseGlow";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechVersa — Building Intelligent Digital Products That Scale",
  description:
    "TechVersa is a software agency specializing in web development, mobile apps, AI integration, and cloud solutions. Trusted by 200+ companies worldwide.",
  keywords: [
    "software agency",
    "web development",
    "mobile apps",
    "AI integration",
    "cloud solutions",
    "TechVersa",
  ],
  openGraph: {
    title: "TechVersa — Building Intelligent Digital Products That Scale",
    description:
      "We craft cutting-edge web, mobile, and AI solutions that transform businesses and delight users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg font-sans antialiased">
        <MouseGlow />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
