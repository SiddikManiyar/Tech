import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons: Record<string, React.ReactNode> = {
  Twitter: <Twitter size={18} />,
  LinkedIn: <Linkedin size={18} />,
  GitHub: <Github size={18} />,
  Dribbble: <Dribbble size={18} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-gradient-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-transparent.png" alt="TechVersa Logo" className="h-9 w-9 object-contain" />
              <span className="text-lg font-bold text-white">TechVersa</span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Building intelligent digital products that scale. Your trusted
              partner for web, mobile, and AI solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} TechVersa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-white/50 transition-all hover:border-primary/40 hover:text-primary"
              >
                {socialIcons[social.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
