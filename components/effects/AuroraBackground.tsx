import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export default function AuroraBackground({
  className,
  intensity = "medium",
}: AuroraBackgroundProps) {
  const opacityMap = {
    low: "opacity-30",
    medium: "opacity-50",
    high: "opacity-70",
  };

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div
        className={cn(
          "absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full blur-[120px]",
          opacityMap[intensity]
        )}
        style={{
          background: "radial-gradient(circle, rgba(10, 186, 181, 0.4) 0%, transparent 70%)",
          animation: "aurora 15s ease infinite alternate",
        }}
      />
      <div
        className={cn(
          "absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full blur-[100px]",
          opacityMap[intensity]
        )}
        style={{
          background: "radial-gradient(circle, rgba(173, 238, 217, 0.3) 0%, transparent 70%)",
          animation: "aurora 18s ease infinite alternate-reverse",
        }}
      />
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]",
          opacityMap[intensity]
        )}
        style={{
          background: "radial-gradient(circle, rgba(255, 237, 243, 0.25) 0%, transparent 70%)",
          animation: "aurora 20s ease infinite alternate",
        }}
      />
    </div>
  );
}
