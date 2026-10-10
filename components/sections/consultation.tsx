"use client";
import { useState } from "react";
import { ArrowRight, Check, Loader2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { consultationPoints } from "@/lib/content";

export function Consultation() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 800);
  };

  return (
    <section id="consultation" className="py-20">
      <Container>
        <Reveal>
          <Card elevation="float" className="p-6 sm:p-8 md:p-14">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <Badge variant="accent"><Zap className="size-4" />Priority Strategy Intake</Badge>
                <h2 className="text-headline-xl-mobile text-on-surface md:text-headline-xl">Accelerate your AI roadmaps with senior AI architects.</h2>
                <p className="text-body-lg text-on-surface-variant">Skip months of exploratory trial-and-error. Reserve a 45-minute technical discovery session to evaluate your data readiness, agent architectures, and ROI models.</p>
                <ul className="space-y-4 pt-2">
                  {consultationPoints.map((p) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-container"><Check className="size-4 text-secondary" /></span>
                      <div>
                        <p className="font-label text-label-md font-semibold text-on-surface">{p.title}</p>
                        <p className="text-body-sm text-on-surface-variant">{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Card tone="low" elevation="raised" className="p-5 sm:p-8 lg:col-span-6">
                <form onSubmit={onSubmit} className="space-y-4">
                  <h3 className="mb-2 text-headline-sm text-on-surface">Claim Your AI Strategy Session</h3>
                  <p className="mb-4 text-body-sm text-on-surface-variant">Direct access with a Principal AI Systems Engineer. No sales scripts.</p>
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" required placeholder="e.g. Julian Ross" autoComplete="name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="julian@company.com" autoComplete="email" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="size">Organization Scale</Label>
                      <Select id="size" name="size" defaultValue="51 - 250 employees">
                        <option>10 - 50 employees</option><option>51 - 250 employees</option><option>251 - 1,000 employees</option><option>1,000+ Enterprise</option>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="focus">Primary Focus</Label>
                      <Select id="focus" name="focus">
                        <option>Autonomous Agent Swarms</option><option>Enterprise RAG &amp; Knowledge</option><option>Workflow Automation</option><option>SLM Fine-Tuning</option>
                      </Select>
                    </div>
                  </div>
                  <div className="pt-2" aria-live="polite">
                    {state === "sent" ? (
                      <div className="animate-in fade-in-0 zoom-in-95 rounded-md bg-emerald-50 p-3 text-center font-label text-label-sm text-emerald-800 duration-300">
                        ✓ Strategy slot reserved! A Principal Engineer will contact you within 2 hours.
                      </div>
                    ) : (
                      <Button type="submit" size="lg" disabled={state === "sending"} className="w-full py-4 font-semibold">
                        {state === "sending" ? <><Loader2 className="animate-spin" />Securing Slot...</> : <>Confirm Strategy Session <ArrowRight /></>}
                      </Button>
                    )}
                  </div>
                  <p className="text-center font-label text-caption text-outline">SOC2 Type II certified. We sign strict Non-Disclosure Agreements prior to every consultation.</p>
                </form>
              </Card>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
