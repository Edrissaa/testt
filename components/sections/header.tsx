"use client";
import { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [active, setActive] = useState<string>(navLinks[0].href);
  const [open, setOpen] = useState(false);

  // Highlight the nav pill for whichever section is in view
  useEffect(() => {
    const targets = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/80 shadow-soft backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" aria-label="Synapse AI home"><BrandLogo /></a>

        <nav aria-label="Primary" className="hidden items-center gap-space-xs rounded-full bg-surface-container-low/70 px-space-sm py-1.5 xl:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-space-md py-1.5 font-label text-label-md transition-all duration-200",
                active === l.href ? "bg-surface-container-high font-semibold text-on-surface" : "text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a href="#" className="hidden whitespace-nowrap font-label text-label-md text-on-surface-variant transition-colors hover:text-on-surface sm:inline-block">Sign in</a>
          <Button asChild className="hidden sm:inline-flex"><a href="#consultation">Schedule Demo</a></Button>
          <span className="hidden size-8 items-center justify-center rounded-full bg-primary text-on-primary md:flex"><User className="size-[18px]" /></span>
          <Button variant="secondary" size="icon" className="xl:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={cn("grid overflow-hidden transition-all duration-300 xl:hidden", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <nav className="min-h-0">
          <Container className="flex flex-col gap-1 pb-space-lg">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-full px-space-md py-3 font-label text-label-md text-on-surface-variant transition-colors hover:bg-surface-container-high/60 hover:text-on-surface">
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 sm:hidden"><a href="#consultation">Schedule Demo</a></Button>
          </Container>
        </nav>
      </div>
    </header>
  );
}
