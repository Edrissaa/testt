"use client";
import { useState } from "react";
import { Bell, BatteryFull, CircleCheck, SlidersHorizontal, Wifi, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { capabilityTabs, images } from "@/lib/content";

function ConfigPanel({ tab }: { tab: (typeof capabilityTabs)[number] }) {
  const [rate, setRate] = useState(840);
  return (
    <Card elevation="raised" className="flex h-full flex-col justify-between p-8 lg:col-span-5">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-label text-label-sm font-semibold uppercase tracking-wider text-secondary">{tab.sub}</span>
          <SlidersHorizontal className="size-5 text-outline" />
        </div>
        <h3 className="mb-3 text-headline-md text-on-surface">{tab.title}</h3>
        <p className="mb-6 text-body-md text-on-surface-variant">{tab.desc}</p>

        <div className="mb-6 rounded-lg bg-surface-container-low p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-label text-label-sm font-medium text-on-surface" id="rate-label">Inference Velocity Limit</span>
            <span className="font-label text-label-sm font-bold tabular-nums text-secondary">{rate.toLocaleString()} req/min</span>
          </div>
          <Slider aria-labelledby="rate-label" min={100} max={2000} step={10} value={[rate]} onValueChange={([v]) => setRate(v)} />
          <div className="mt-3 flex justify-between font-label text-caption text-outline"><span>Standard (100)</span><span>Ultra-Concurrency (2,000)</span></div>
        </div>

        <ul className="mb-8 space-y-3">
          {tab.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-body-sm text-on-surface"><CircleCheck className="size-[18px] shrink-0 text-secondary" />{f}</li>
          ))}
        </ul>
      </div>
      <Button size="lg" asChild className="w-full"><a href="#consultation">Get Started — Test Agent Swarm</a></Button>
    </Card>
  );
}

function DeviceMockup() {
  return (
    <Card tone="low" elevation="flat" className="relative flex items-center justify-center overflow-hidden p-6 md:p-8 lg:col-span-7">
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-80 rounded-full bg-secondary-fixed/40 blur-3xl" />
      <Card elevation="float" interactive className="relative w-full max-w-md overflow-hidden p-6">
        <div className="mb-4 flex items-center justify-between border-b border-surface-container pb-4">
          <span className="font-label text-label-sm font-semibold">9:41</span>
          <div className="flex items-center gap-2 text-on-surface-variant [&_svg]:size-4"><Signal /><Wifi /><BatteryFull /></div>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images.appAvatar} alt="" className="size-10 rounded-full object-cover shadow-sm" />
            <div>
              <p className="font-label text-label-sm text-on-surface-variant">Insights Monitor</p>
              <p className="text-headline-sm text-on-surface">Zia AI Agent</p>
            </div>
          </div>
          <Button variant="secondary" size="icon-sm" aria-label="Notifications"><Bell className="!size-[18px]" /></Button>
        </div>

        <div className="mb-4 rounded-lg bg-surface-container-low p-4">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-label text-caption uppercase tracking-wider text-on-surface-variant">Net Operations Budget</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-label text-xs font-semibold text-emerald-800">Optimal</span>
          </div>
          <div className="text-headline-lg font-bold text-on-surface">$20,300<span className="text-sm font-normal text-on-surface-variant">.00</span></div>
          <p className="font-label text-caption text-outline">80% left of $25,400 Target Allocation</p>
        </div>

        <div className="mb-4 rounded-lg bg-surface-container-low p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-label text-label-sm font-semibold">Autonomous Throughput</span>
            <span className="font-label text-caption font-medium text-secondary">+34.8% vs human triage</span>
          </div>
          <svg className="h-24 w-full overflow-visible" fill="none" viewBox="0 0 300 80" role="img" aria-label="Throughput trending upward">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7d2dce" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7d2dce" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M 0 65 Q 40 50, 70 55 T 140 30 T 210 38 T 300 12 L 300 80 L 0 80 Z" fill="url(#chartGradient)" />
            <path d="M 0 65 Q 40 50, 70 55 T 140 30 T 210 38 T 300 12" stroke="#7d2dce" strokeLinecap="round" strokeWidth="3" />
            <circle cx="300" cy="12" r="4" fill="#7d2dce" />
          </svg>
        </div>

        <div className="space-y-2">
          {[["bg-emerald-500", "Outbound Sales Prospector", "98.2% accuracy"], ["bg-blue-500", "Compliance Document Parser", "420 doc/hr"]].map(([dot, name, stat]) => (
            <div key={name} className="flex items-center justify-between rounded-md bg-surface-container-lowest p-2.5 shadow-sm transition-colors hover:bg-surface-container-low">
              <div className="flex items-center gap-2"><span className={`size-2 rounded-full ${dot}`} /><span className="font-label text-label-sm font-medium">{name}</span></div>
              <span className="font-label text-caption text-on-surface-variant">{stat}</span>
            </div>
          ))}
        </div>
      </Card>
    </Card>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities-section" className="py-16">
      <Container>
        <Reveal className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-label text-label-sm font-semibold uppercase tracking-wider text-secondary">Core Architecture</p>
            <h2 className="text-headline-xl-mobile text-on-surface md:text-headline-lg">We help people create and build using AI</h2>
          </div>
          <p className="mt-4 max-w-md text-body-md text-on-surface-variant md:mt-0">Shift from brittle rule-based automations to autonomous goal-seeking agent networks.</p>
        </Reveal>

        <Reveal delay={100}>
          <Tabs defaultValue={capabilityTabs[0].id}>
            <TabsList className="mb-8">
              {capabilityTabs.map((t) => <TabsTrigger key={t.id} value={t.id}>{t.label}</TabsTrigger>)}
            </TabsList>
            {capabilityTabs.map((t) => (
              <TabsContent key={t.id} value={t.id}>
                <div className="grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-12">
                  <ConfigPanel tab={t} />
                  <DeviceMockup />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </Container>
    </section>
  );
}
