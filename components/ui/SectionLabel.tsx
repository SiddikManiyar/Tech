import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-eyebrow uppercase text-primary tracking-[0.15em]",
        className
      )}
    >
      {children}
    </span>
  );
}
