"use client";
import { useRef, useState } from "react";
import { ArrowUp, Check, Loader2, Plus, Sparkles, Star, AudioLines } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { images, promptChips } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "done";

function PromptBar() {
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("Generate an autonomous customer intelligence pipeline for enterprise SaaS...");
  const [status, setStatus] = useState<Status>("idle");
  const [listening, setListening] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  const submit = () => {
    if (status !== "idle") return;
    setStatus("loading");
    setTimeout(() => { setStatus("done"); setTimeout(() => setStatus("idle"), 1500); }, 700);
  };

  return (
    <div className="relative z-10 mx-auto my-auto w-full max-w-2xl">
      <div className="rounded-lg bg-surface/90 p-5 shadow-2xl backdrop-blur-xl transition-shadow duration-300 focus-within:shadow-[0_30px_60px_-20px_rgb(11_28_48/0.45)]">
        <div className="mb-4 flex items-center gap-3">
          <Sparkles className="size-[22px] shrink-0 text-secondary" aria-hidden />
          <input
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            aria-label="Describe a workflow"
            placeholder={listening ? "Listening for voice command..." : "Ask Synapse to architect a workflow..."}
            className="w-full bg-transparent text-body-md text-on-surface placeholder:text-outline focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" type="button"><Plus className="!size-4" />Add Attachments</Button>
            <Button
              variant="secondary" size="icon-sm" type="button" aria-pressed={listening} aria-label="Toggle voice input"
              onClick={() => setListening((l) => !l)}
              className={cn(listening && "bg-secondary text-on-secondary hover:bg-secondary")}
            >
              <AudioLines className={cn(listening && "animate-pulse")} />
            </Button>
          </div>
          <Button size="icon" type="button" onClick={submit} aria-label="Submit prompt">
            {status === "loading" ? <Loader2 className="animate-spin" /> : status === "done" ? <Check /> : <ArrowUp />}
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="font-label text-caption font-medium text-white drop-shadow-sm">Fast deploy templates:</span>
        {promptChips.map((c) => (
          <button
            key={c.label}
            type="button"
            onClick={() => { setValue(c.text); input.current?.focus(); setFlash(c.label); setTimeout(() => setFlash(null), 300); }}
            className={cn(
              "rounded-full px-3 py-1 font-label text-label-sm text-on-surface shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface active:scale-95",
              flash === c.label ? "bg-secondary text-on-secondary" : "bg-surface/80",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center px-margin-mobile pb-16 pt-12 text-center md:px-margin md:pb-24 md:pt-16">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[360px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-secondary-fixed-dim/20 blur-[120px]" />

      <Reveal>
        <Badge className="mb-6 cursor-default transition-transform hover:scale-[1.02]">
          <Star className="size-4 fill-amber-500 text-amber-500" />
          4.9 Enterprise Trust Score across 140+ AI Deployments
        </Badge>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mb-6 max-w-4xl text-display-hero-mobile text-on-surface md:text-display-hero">Plan &amp; Scale More with Synapse AI</h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mb-8 max-w-2xl text-body-lg text-on-surface-variant">
          Projects remember. Agents think. Automations execute. Bespoke intelligent agent fleets and neural enterprise architectures engineered for market pioneers.
        </p>
      </Reveal>
      <Reveal delay={240} className="mb-14 flex flex-wrap items-center justify-center gap-space-sm">
        <Button size="lg" asChild><a href="#consultation">Schedule Consultation</a></Button>
        <Button size="lg" variant="secondary" asChild><a href="#capabilities-section">Explore Workflows</a></Button>
      </Reveal>

      <Reveal delay={320} className="w-full">
        <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-lowest shadow-xl md:rounded-xl">
          <div
            className="relative flex min-h-[440px] w-full flex-col justify-between gap-6 bg-cover bg-center p-6 md:min-h-[520px] md:p-10"
            style={{ backgroundImage: `url("${images.heroBackdrop}"), linear-gradient(135deg, #efdbff 0%, #dbb8ff 40%, #6ffbbe 100%)` }}
            role="img"
            aria-label="Abstract iridescent gradient backdrop"
          >
            <div className="flex w-full items-center justify-between">
              <Badge variant="glass"><Sparkles className="size-[18px] text-secondary" />AI Agents &amp; Multi-Modal Engine</Badge>
              <Badge variant="glass" className="hidden font-medium text-on-surface-variant sm:inline-flex">
                <span className="size-2 animate-pulse rounded-full bg-emerald-500" />Telemetry Active • 14ms latency
              </Badge>
            </div>
            <PromptBar />
            <p className="mx-auto inline-block rounded-full border border-white/20 bg-primary/40 px-4 py-1.5 text-body-sm text-white shadow-sm backdrop-blur-md">
              Don&apos;t want to wait? Try the early{" "}
              <a href="#consultation" className="font-semibold underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80">AI Beta Access</a> today.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-8 w-full max-w-xl">
        <div className="flex w-full items-center justify-between gap-4 rounded-full bg-surface-container px-5 py-2.5 shadow-md transition-shadow duration-300 hover:shadow-lg md:gap-8">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {images.team.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="" className="size-8 rounded-full object-cover shadow-sm ring-2 ring-surface-container" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-label text-label-sm font-semibold text-on-surface">Custom AI Agent Squad</p>
              <p className="font-label text-caption text-on-surface-variant">Production-ready deployment in under 14 days</p>
            </div>
          </div>
          <Button size="sm" asChild className="shrink-0"><a href="#consultation">Get Your Agent</a></Button>
        </div>
      </Reveal>
    </section>
  );
}
