import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-2 rounded-full font-label", {
  variants: {
    variant: {
      soft: "bg-surface-container-low px-space-md py-1.5 text-label-md text-on-surface shadow-sm",
      muted: "bg-surface-container px-space-sm py-1 text-label-sm text-on-surface-variant",
      accent: "bg-secondary-fixed px-space-md py-1 text-label-sm text-on-secondary-fixed",
      glass: "bg-surface/90 px-space-md py-1.5 text-label-sm text-on-surface backdrop-blur-md shadow-sm",
    },
  },
  defaultVariants: { variant: "soft" },
});

export function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
