"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={cn("flex w-full max-w-fit gap-2 overflow-x-auto rounded-full bg-surface-container-low p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "shrink-0 whitespace-nowrap rounded-full px-space-md py-2 font-label text-label-md text-on-surface-variant transition-all duration-200 hover:text-on-surface active:scale-[0.97] data-[state=active]:bg-primary data-[state=active]:text-on-primary data-[state=active]:shadow-md",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn("data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-1 duration-300", className)} {...props} />;
}
