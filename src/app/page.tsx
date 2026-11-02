import { ClientMarquee } from "@/components/client-marquee";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ClientMarquee />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
