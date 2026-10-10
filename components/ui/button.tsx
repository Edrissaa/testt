import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-label text-label-md transition-all duration-200 ease-out select-none disabled:pointer-events-none disabled:opacity-60 active:scale-[0.97] [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary shadow-md hover:bg-primary-container hover:shadow-lg hover:scale-[1.02]",
        secondary: "bg-surface-container text-on-surface hover:bg-surface-container-high",
        ghost: "text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface",
        glass: "bg-surface-container-lowest/90 text-on-surface shadow-md backdrop-blur-md hover:bg-surface-container-lowest hover:scale-[1.02]",
      },
      size: {
        sm: "px-4 py-1.5 text-label-sm",
        default: "px-space-lg py-2.5",
        lg: "px-space-xl py-3.5",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
export { buttonVariants };
