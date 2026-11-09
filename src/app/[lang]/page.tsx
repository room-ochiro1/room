import { notFound } from "next/navigation";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";
import { Work } from "@/components/work";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} t={t.header} nav={t.nav} />
      <main className="flex-1">
        <Hero lang={lang} t={t.hero} />
        <Clients t={t.clients} />
        <Services t={t.services} />
        <Work t={t.work} />
        <Process t={t.process} />
        <WhyUs t={t.why} />
        <Testimonials t={t.testimonials} />
        <Faq t={t.faq} />
        <Contact t={t.contact} form={t.form} serviceCopy={t.services.items} />
      </main>
      <SiteFooter t={t.footer} nav={t.nav} />
    </>
  );
}
