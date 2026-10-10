import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-xl", {
  variants: {
    tone: {
      lowest: "bg-surface-container-lowest",
      low: "bg-surface-container-low",
    },
    elevation: { flat: "shadow-sm", raised: "shadow-md", float: "shadow-xl" },
    interactive: {
      true: "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift",
      false: "",
    },
  },
  defaultVariants: { tone: "lowest", elevation: "flat", interactive: false },
});

export function Card({ className, tone, elevation, interactive, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return <div className={cn(cardVariants({ tone, elevation, interactive }), className)} {...props} />;
}
