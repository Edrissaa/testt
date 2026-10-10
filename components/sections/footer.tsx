"use client";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { fieldClass } from "@/components/ui/input";
import { footerColumns } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.02)]">
      <Container className="pb-space-lg pt-space-xl">
        <div className="mb-space-xl grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-space-md lg:col-span-2">
            <BrandLogo size="sm" />
            <p className="max-w-sm text-body-sm text-on-surface-variant">Engineering high-leverage cognitive systems, autonomous agent fleets, and neuro-symbolic enterprise architectures for tomorrow&apos;s pioneers.</p>
            <form className="space-y-space-xs pt-space-xs" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="font-label text-label-sm font-semibold text-on-surface">Stay updated with Neural Digest</label>
              <div className="flex max-w-sm gap-space-xs">
                <input id="newsletter" type="email" required placeholder="Enter your work email" className={cn(fieldClass, "flex-1 !bg-surface-container-low !py-2 !text-body-sm !shadow-none focus:!bg-surface-container")} />
                <Button size="sm" type="submit" className="px-space-md">Subscribe</Button>
              </div>
            </form>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-space-sm">
              <h3 className="font-label text-label-sm font-semibold uppercase tracking-wider text-on-surface">{col.title}</h3>
              <ul className="space-y-space-sm">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-body-sm text-on-surface-variant transition-colors duration-200 hover:text-on-surface">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-space-md pt-space-lg md:flex-row">
          <div className="flex items-center gap-space-md font-label text-caption text-on-surface-variant">
            <p>© 2025 Synapse AI Inc. All rights reserved.</p>
            <span className="size-1.5 rounded-full bg-tertiary-fixed-dim" aria-hidden />
            <p>Operational Grade 99.98%</p>
          </div>
          <div className="flex items-center gap-space-lg font-label text-caption text-on-surface-variant">
            {["Privacy Policy", "Terms of Service", "Security Protocols"].map((l) => <a key={l} href="#" className="transition-colors hover:text-on-surface">{l}</a>)}
          </div>
        </div>
      </Container>
    </footer>
  );
}
