import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrandLogo({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  return (
    <span className={cn("group inline-flex items-center gap-space-sm", className)}>
      <span className={cn("flex items-center justify-center rounded-full bg-primary text-on-primary shadow-md transition-transform duration-300 group-hover:scale-105", size === "md" ? "size-9" : "size-8")}>
        <Sparkles className={size === "md" ? "size-5" : "size-[18px]"} />
      </span>
      <span className="text-headline-sm tracking-tight text-on-surface">
        Synapse<span className="text-secondary">.ai</span>
      </span>
    </span>
  );
}
