import { Card } from "@/components/ui/card";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { metrics } from "@/lib/content";

export function Metrics() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionHeading className="mb-12" title="Bring Existing Customers to Hyper-Focus" description="Designed to capture every customer moment—day or night—without needing someone constantly online." />
        </Reveal>
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.value} delay={i * 80}>
              <Card tone="low" interactive className="h-full p-8">
                <p className="mb-2 font-label text-label-sm text-on-surface-variant">{m.prefix}</p>
                <div className="mb-2 text-headline-xl text-on-surface">{m.value}</div>
                <p className="text-body-sm text-on-surface-variant">{m.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
