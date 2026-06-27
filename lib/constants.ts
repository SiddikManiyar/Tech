import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Shield,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  gradient: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  stats: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  href: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "AI" | "Infrastructure";
}

export interface WhyUsPillar {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: { text: string; included: boolean }[];
  popular?: boolean;
}

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Careers", href: "#careers" },
];

export const TRUSTED_LOGOS = [
  "SaaS",
  "Chatbot",
  "Automation",
  "SEO",
  "AI Agents",
  "ML Models",
  "Cloud Apps",
  "Mobile Dev",
  "Web Development",
  "UI/UX Design",
  "Cybersecurity",
  "Databases",
  "CRM Systems",
  "IoT Solutions"
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Scalable, performant web applications built with modern frameworks and best practices.",
    icon: Code2,
    features: [
      "Next.js & React applications",
      "Progressive Web Apps",
      "API integration & optimization",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences that users love on every device.",
    icon: Smartphone,
    features: [
      "React Native & Flutter",
      "iOS & Android deployment",
      "Offline-first architecture",
    ],
    gradient: "from-secondary to-accent",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Cloud-native infrastructure designed for reliability, security, and infinite scale.",
    icon: Cloud,
    features: [
      "AWS, GCP & Azure",
      "Serverless architecture",
      "DevOps & CI/CD pipelines",
    ],
    gradient: "from-accent to-primary",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Intelligent features powered by machine learning and large language models.",
    icon: Brain,
    features: [
      "Custom ML models",
      "LLM integration & RAG",
      "AI workflow automation",
    ],
    gradient: "from-primary to-accent",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces backed by research and user-centered design.",
    icon: Palette,
    features: [
      "Design systems",
      "Prototyping & testing",
      "Accessibility compliance",
    ],
    gradient: "from-secondary to-primary",
  },
  {
    id: "security",
    title: "Cybersecurity",
    description:
      "Enterprise-grade security audits and implementations to protect your assets.",
    icon: Shield,
    features: [
      "Penetration testing",
      "Compliance (SOC2, GDPR)",
      "Security architecture",
    ],
    gradient: "from-accent to-secondary",
  },
  {
    id: "analytics",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with custom dashboards and pipelines.",
    icon: BarChart3,
    features: [
      "Real-time dashboards",
      "ETL pipelines",
      "Predictive analytics",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description:
      "Strategic technology guidance to align your digital roadmap with business goals.",
    icon: Settings,
    features: [
      "Architecture reviews",
      "Team augmentation",
      "Digital transformation",
    ],
    gradient: "from-secondary to-accent",
  },
];

export const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    id: "experience",
    title: "Proven Expertise",
    description:
      "With over 200 successful projects across fintech, healthcare, and SaaS, we bring battle-tested expertise to every engagement. Our senior engineers average 8+ years of industry experience.",
    stat: "200+",
    statLabel: "Projects Delivered",
    icon: BarChart3,
  },
  {
    id: "speed",
    title: "Rapid Delivery",
    description:
      "Our agile methodology and reusable component libraries enable us to ship MVPs in weeks, not months. We maintain velocity without sacrificing code quality or architectural integrity.",
    stat: "3x",
    statLabel: "Faster Time-to-Market",
    icon: Code2,
  },
  {
    id: "quality",
    title: "Quality First",
    description:
      "Every line of code goes through rigorous review, automated testing, and performance benchmarking. We maintain 98% client satisfaction through uncompromising quality standards.",
    stat: "98%",
    statLabel: "Client Satisfaction",
    icon: Shield,
  },
  {
    id: "partnership",
    title: "True Partnership",
    description:
      "We embed with your team, not just deliver and disappear. Our average client partnership spans 5 years, with ongoing support, iteration, and strategic guidance.",
    stat: "5yr",
    statLabel: "Avg Partnership",
    icon: Settings,
  },
  {
    id: "innovation",
    title: "Cutting-Edge Tech",
    description:
      "We stay ahead of the curve with AI, edge computing, and modern cloud-native patterns. Your product benefits from the latest innovations without the research overhead.",
    stat: "40+",
    statLabel: "Technologies Mastered",
    icon: Brain,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Deep dive into your business goals, users, and technical requirements.",
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Define architecture, roadmap, and success metrics for the project.",
  },
  {
    id: 3,
    title: "Design",
    description:
      "Create wireframes, prototypes, and a polished design system.",
  },
  {
    id: 4,
    title: "Development",
    description:
      "Agile sprints with weekly demos and continuous integration.",
  },
  {
    id: 5,
    title: "Testing",
    description:
      "Comprehensive QA, performance testing, and security audits.",
  },
  {
    id: 6,
    title: "Launch",
    description:
      "Zero-downtime deployment with monitoring and rollback plans.",
  },
  {
    id: 7,
    title: "Growth",
    description:
      "Ongoing optimization, feature iteration, and scale support.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "gym-pwa",
    title: "GymPro PWA",
    description:
      "A Progressive Web App for gym owners with member management, attendance tracking, billing, and a real-time dashboard — accessible from any device, no install required.",
    category: "Fitness",
    stats: [
      { label: "Gyms Onboarded", value: "10+" },
      { label: "Admin Time Saved", value: "60%" },
      { label: "Owner Rating", value: "4.9★" },
    ],
    tags: ["Next.js", "PWA", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-primary/20 via-secondary/10 to-accent/20",
    href: "#",
    image: "/gym-dashboard.png",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance App",
    description:
      "A QR-code and face-recognition based attendance system for schools and offices. Tracks presence in real-time, generates reports, and notifies parents or managers instantly.",
    category: "EdTech",
    stats: [
      { label: "Institutions Live", value: "5+" },
      { label: "Daily Check-ins", value: "1K+" },
      { label: "Accuracy", value: "99%" },
    ],
    tags: ["React Native", "Python", "OpenCV", "Firebase"],
    gradient: "from-accent/20 via-primary/10 to-secondary/20",
    href: "#",
    image: "/attendance-dashboard.png",
  },
  {
    id: "uni-dashboard",
    title: "University Student Dashboard",
    description:
      "A centralised student portal for universities — covering timetables, attendance records, assignment submissions, fee status, and faculty communication in one clean interface.",
    category: "Education",
    stats: [
      { label: "Universities", value: "3+" },
      { label: "Active Students", value: "500+" },
      { label: "Uptime", value: "99.9%" },
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-secondary/20 via-accent/10 to-primary/20",
    href: "#",
    image: "/university-dashboard.jpg",
  },
];


export const TECH_STACK: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "OpenAI", category: "AI" },
  { name: "TensorFlow", category: "AI" },
  { name: "PyTorch", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Kubernetes", category: "Infrastructure" },
  { name: "Terraform", category: "Infrastructure" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "TechVersa transformed our legacy platform into a modern, scalable system. Their team's expertise in AI integration gave us a competitive edge we didn't think was possible.",
    author: "Aarav Mehta",
    role: "CTO",
    company: "Veloce Labs",
    rating: 5,
    initials: "AM",
  },
  {
    id: "2",
    quote:
      "The speed and quality of delivery exceeded our expectations. They shipped our MVP in 6 weeks and it immediately attracted Series A interest from investors.",
    author: "Ananya Sharma",
    role: "Founder & CEO",
    company: "BanyanPay",
    rating: 5,
    initials: "AS",
  },
  {
    id: "3",
    quote:
      "Working with TechVersa feels like having an elite in-house team. They understand our business deeply and consistently deliver solutions that drive real ROI.",
    author: "Vikram Malhotra",
    role: "VP of Engineering",
    company: "NutriCart",
    rating: 5,
    initials: "VM",
  },
  {
    id: "4",
    quote:
      "Their security-first approach gave us confidence to launch in regulated markets. TechVersa handled SOC2 compliance seamlessly while building our product.",
    author: "Neha Gupta",
    role: "CISO",
    company: "ShieldSync",
    rating: 5,
    initials: "NG",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for MVPs and small projects",
    monthlyPrice: 4999,
    annualPrice: 47988,
    features: [
      { text: "Up to 2 developers", included: true },
      { text: "Weekly progress reports", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "Email support", included: true },
      { text: "Dedicated project manager", included: false },
      { text: "24/7 priority support", included: false },
      { text: "Custom AI integration", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 9999,
    annualPrice: 95988,
    popular: true,
    features: [
      { text: "Up to 5 developers", included: true },
      { text: "Weekly progress reports", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Custom AI integration", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale digital transformation",
    monthlyPrice: 19999,
    annualPrice: 191988,
    features: [
      { text: "Unlimited developers", included: true },
      { text: "Real-time progress dashboard", included: true },
      { text: "Custom analytics & reporting", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Custom AI integration", included: true },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "What types of projects do you specialize in?",
    answer:
      "We specialize in web and mobile applications, AI-powered platforms, cloud infrastructure, and digital transformation projects. Our expertise spans fintech, healthcare, e-commerce, and SaaS industries.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. MVPs typically take 6-8 weeks, while full-scale applications range from 3-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    id: "3",
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely. We offer flexible support packages including bug fixes, feature updates, performance monitoring, and dedicated engineering resources. Most clients continue partnering with us for years.",
  },
  {
    id: "4",
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with 2-week sprints, weekly demos, and continuous deployment. You'll have full visibility through our project dashboard and regular stakeholder meetings.",
  },
  {
    id: "5",
    question: "Can you work with our existing team?",
    answer:
      "Yes, we frequently embed with in-house teams. We can augment your capacity, provide specialized expertise, or lead entire projects while collaborating closely with your stakeholders.",
  },
  {
    id: "6",
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and time-and-materials models. After discovery, we provide transparent estimates with clear milestones. No hidden fees — ever.",
  },
  {
    id: "7",
    question: "What technologies do you use?",
    answer:
      "We use modern, battle-tested technologies including React, Next.js, Node.js, Python, AWS, and various AI/ML frameworks. We choose the best stack for your specific requirements.",
  },
  {
    id: "8",
    question: "How do we get started?",
    answer:
      "Book a free consultation through our website. We'll discuss your goals, assess feasibility, and provide a tailored proposal within 48 hours. No commitment required for the initial call.",
  },
];

export const HERO_STATS = [
  { value: "200+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "5yr", label: "Avg Partnership" },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "AI Integration", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Case Studies", href: "#projects" },
    { label: "Careers", href: "#" },
  ],
  contact: [
    { label: "team@techversa.online", href: "mailto:team@techversa.online" },
    { label: "WhatsApp: +91 8180818416", href: "https://wa.me/918180818416" },
    { label: "Ahilyanagar, India", href: "#" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];
