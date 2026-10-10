import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { images, testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <Container>
        <Reveal><SectionHeading className="mb-14" title="Endorsed by Visionary Engineering Leaders" description="How top tier organizations achieve unprecedented throughput with Synapse AI systems." /></Reveal>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Card interactive className="flex h-full flex-col justify-between p-8">
                <figure>
                  <div className="mb-4 flex text-amber-500" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="size-[18px] fill-current" />)}
                  </div>
                  <blockquote className="mb-6 text-body-md leading-relaxed text-on-surface">“{t.quote}”</blockquote>
                </figure>
                <div className="flex items-center gap-3 border-t border-surface-container pt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images.reviewers[i]} alt="" className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="font-label text-label-md font-semibold text-on-surface">{t.name}</p>
                    <p className="font-label text-caption text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
