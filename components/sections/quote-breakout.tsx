import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/content";

export function QuoteBreakout() {
  return (
    <section id="case-study" className="py-8">
      <Container>
        <Reveal>
          <div className="group relative overflow-hidden rounded-xl shadow-xl">
            <div
              className="relative flex min-h-[380px] flex-col justify-between gap-6 bg-cover bg-center p-8 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02] md:min-h-[420px] md:p-14"
              style={{ backgroundImage: `url("${images.quoteBackdrop}"), linear-gradient(135deg, #efdbff 0%, #dbb8ff 40%, #6ffbbe 100%)` }}
              role="img"
              aria-label="Soft pink petals blending into mint luminescence"
            />
            <div className="absolute inset-0 flex flex-col justify-between gap-6 bg-gradient-to-t from-primary/40 via-transparent to-transparent p-8 md:p-14">
              <Quote className="size-9 text-white/80" aria-hidden />
              <blockquote className="max-w-2xl text-headline-md font-medium leading-snug text-white drop-shadow-md md:text-headline-lg">
                “Synapse has made us completely available to our enterprise accounts. Now we have the cognitive scale to offer 24/7 intelligent workflows across all thirty global markets.”
              </blockquote>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images.exec} alt="Wayne Grimshawe" className="size-12 rounded-full object-cover shadow-md" />
                  <div>
                    <p className="font-label text-label-md font-semibold text-white drop-shadow">Wayne Grimshawe</p>
                    <p className="font-label text-caption font-medium text-white drop-shadow">Group Director of Intelligent Automation @ Netzoeche</p>
                  </div>
                </div>
                <Button variant="glass" className="self-start sm:self-auto">View case study <ArrowRight className="!size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" /></Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
