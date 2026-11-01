import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronRight, Mail, Phone } from "lucide-react";
import { Header, contact } from "@/components/site/Header";
import { Credentials, Footer } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { workforceCover } from "@/components/site/workforce";
import original from "@/components/site/manpower-original.json";
import { ManpowerContent } from "@/components/site/ManpowerContent";

export const Route = createFileRoute("/manpower-supply")({
  head: () => ({ meta: [
    { title: "Manpower Supply Singapore | BSM Engineering & Construction" },
    { name: "description", content: "Explore BSM Engineering's construction and technical manpower supply in Singapore, including welders, M&E technicians, riggers and site supervisors." },
    { property: "og:title", content: "Manpower Supply | BSM Engineering Singapore" },
    { property: "og:description", content: "Find the right construction workers, technical personnel and site supervision for your project." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ManpowerPage,
});

function enquiryLink(role: string) {
  return `mailto:${contact.emails[0]}?subject=${encodeURIComponent(`Manpower enquiry — ${role}`)}&body=${encodeURIComponent(`Hello BSM Engineering,\n\nI am looking for ${role}.\n\nCompany:\nNumber of workers:\nSite location:\nStart date:\nDuration:\nContact number:\n\nThank you.`)}`;
}

function ManpowerPage() {
  const roles = original.roles;
  return <>
    <Header />
    <main>
      <section className="relative overflow-hidden bg-navy">
        <img src={workforceCover} alt="Construction workers on site" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-overlay-hero" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-10 lg:pb-10 lg:pt-16">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-on-dark">
            <Link to="/" className="hover:text-brand-light">Home</Link><ChevronRight className="h-3 w-3" /><span>Our Services</span><ChevronRight className="h-3 w-3" /><span>Manpower Supply</span>
          </nav>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><h1 className="max-w-xl font-display text-4xl font-extrabold leading-tight text-on-dark sm:text-5xl">Manpower Supply</h1><p className="mt-3 max-w-md text-base leading-relaxed text-on-dark">The right people. For the work ahead.</p></div>
            <Button asChild size="lg" className="h-12"><a href="#workforce">Explore our workforce <ArrowDown /></a></Button>
          </div>
        </div>
      </section>

      <section id="workforce" className="scroll-mt-24 bg-background py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-8 border-b-2 border-brand pb-5 text-center font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Trusted & Reliable Manpower Supply Solutions</h2>
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
            {roles.map((role, index) => <article key={role.name} className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-brand">
              <a href={enquiryLink(role.name)} aria-label={`Enquire about ${role.name}`} className="relative block aspect-[4/3] overflow-hidden"><img src={role.image} alt={role.name} loading="lazy" className="img-zoom h-full w-full object-cover motion-safe:group-hover:scale-105" /><span className="absolute left-3 top-3 bg-background px-2 py-1 font-display text-xs font-bold text-navy">{String(index+1).padStart(2,"0")}</span></a>
              <div className="flex flex-1 flex-col p-4"><h3 className="font-display text-lg font-bold leading-6">{role.name}</h3><p className="mb-4 mt-3 text-sm leading-6 text-muted-foreground">{role.description}</p><Button asChild variant="link" className="mt-auto h-10 justify-between border-t border-border px-0"><a href={enquiryLink(role.name)}>Enquire about this role <ArrowUpRight /></a></Button></div>
            </article>)}
          </div>
        </div>
      </section>

      <ManpowerContent />

      <Credentials />
      <section className="bg-offwhite py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
          <div><p className="eyebrow">Talk to BSM</p><h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Need people on site?</h2><p className="mt-4 text-muted-foreground">Let’s discuss the team your project needs.</p></div>
          <div className="flex flex-wrap gap-3 lg:justify-end"><Button asChild size="lg" className="h-12"><a href={enquiryLink("manpower support")}><Mail /> Send Enquiry</a></Button><Button asChild variant="outline" size="lg" className="h-12"><a href={`tel:${contact.tel}`}><Phone /> {contact.phone}</a></Button></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}