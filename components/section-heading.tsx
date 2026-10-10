import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "center", className }: {
  eyebrow?: string; title: React.ReactNode; description?: string; align?: "left" | "center"; className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl", className)}>
      {eyebrow && <p className="mb-2 font-label text-label-sm font-semibold uppercase tracking-wider text-secondary">{eyebrow}</p>}
      <h2 className="text-headline-xl-mobile text-on-surface md:text-headline-lg">{title}</h2>
      {description && <p className="mt-3 text-body-md text-on-surface-variant">{description}</p>}
    </div>
  );
}
