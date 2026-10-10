import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { Metrics } from "@/components/sections/metrics";
import { QuoteBreakout } from "@/components/sections/quote-breakout";
import { Editorial } from "@/components/sections/editorial";
import { Capabilities } from "@/components/sections/capabilities";
import { BigStat } from "@/components/sections/big-stat";
import { Testimonials } from "@/components/sections/testimonials";
import { Consultation } from "@/components/sections/consultation";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface pt-20">
        <Hero />
        <LogoStrip />
        <Metrics />
        <QuoteBreakout />
        <Editorial />
        <Capabilities />
        <BigStat />
        <Testimonials />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
