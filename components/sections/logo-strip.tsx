import { Grid2x2, AudioLines, Waves } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  Fagron: <Grid2x2 className="text-secondary" />,
  Spotify: <AudioLines />,
  ripple: <Waves className="text-secondary" />,
};

export function LogoStrip() {
  return (
    <section className="w-full bg-surface-container-lowest py-12 shadow-sm">
      <Container>
        <Reveal>
          <p className="mb-8 text-center font-label text-caption uppercase tracking-wider text-outline">Powering autonomous intelligence for frontier scale teams</p>
          <ul className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
            {clients.map((c) => (
              <li key={c} className="flex items-center gap-1.5 text-headline-sm font-bold tracking-tighter text-on-surface opacity-60 transition-opacity duration-300 hover:opacity-100 [&_svg]:size-6">
                {icons[c]}{c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
