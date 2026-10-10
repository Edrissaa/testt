import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full rounded-full bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface shadow-sm transition-shadow duration-200 placeholder:text-outline hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/70";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldClass, className)} {...props} />;
}
