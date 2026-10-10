import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("font-label text-label-sm font-medium text-on-surface", className)} {...props} />;
}
