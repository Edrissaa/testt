import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function Editorial() {
  return (
    <section id="editorial" className="py-20 text-center">
      <Container>
        <Reveal>
          <Badge variant="muted" className="mb-6"><span className="size-2 rounded-full bg-secondary" />ABOUT COGNITIVE KITS</Badge>
          <h2 className="mx-auto mb-8 max-w-4xl text-headline-xl-mobile text-on-surface md:text-headline-xl">
            Synapse makes sure every interaction is acknowledged, <span className="text-outline">even outside regular operational hours.</span> By synthesizing customer context <span className="text-secondary">when no human is available.</span>
          </h2>
          <div className="flex items-center justify-center gap-space-md" aria-hidden>
            <div className="h-1 w-12 rounded-full bg-secondary" />
            <div className="h-1 w-4 rounded-full bg-outline-variant" />
            <div className="h-1 w-2 rounded-full bg-outline-variant" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
