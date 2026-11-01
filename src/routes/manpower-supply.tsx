import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronRight, Mail, Phone } from "lucide-react";
import { Header, contact } from "@/components/site/Header";
import { Credentials, Footer } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { workforce, workforceCategories, workforceCover } from "@/components/site/workforce";

export const Route = createFileRoute("/manpower-supply")({
  head: () => ({ meta: [
    { title: "Manpower Supply Singapore | BSM Engineering & Construction" },
    { name: "description", content: "Explore BSM Engineering's construction and technical manpower supply in Singapore, including welders, M&E technicians, riggers and site supervisors." },
    { property: "og:title", content: "Manpower Supply | BSM Engineering Singapore" },
    { property: "og:description", content: "Find the right construction workers, technical personnel and site supervision for your project." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: workforceCover },
    { name: "twitter:image", content: workforceCover },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ManpowerPage,
});

function enquiryLink(role: string) {
  return `mailto:${contact.emails[0]}?subject=${encodeURIComponent(`Manpower enquiry — ${role}`)}&body=${encodeURIComponent(`Hello BSM Engineering,\n\nI am looking for ${role}.\n\nCompany:\nNumber of workers:\nSite location:\nStart date:\nDuration:\nContact number:\n\nThank you.`)}`;
}

function ManpowerPage() {
  const [category, setCategory] = useState<string>("All roles");
  const roles = workforce.filter(role => category === "All roles" || role.category === category);
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
          <Reveal className="grid items-end gap-5 lg:grid-cols-[1.2fr_1fr]"><div><p className="eyebrow">Our manpower solutions</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Trusted people.<br /><span className="text-brand">Reliable support.</span></h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground lg:ml-auto">Construction, technical trades and site supervision. Find the workforce your next project needs.</p></Reveal>
          <div className="mb-8 mt-7 flex flex-wrap gap-1 border-y border-border py-3" role="group" aria-label="Filter workforce">
            {workforceCategories.map(item => <Button key={item} variant={category === item ? "default" : "ghost"} className="rounded-sm px-4" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
          </div>
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
            {roles.map((role, index) => <article key={role.name} className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-brand">
              <a href={enquiryLink(role.name)} aria-label={`Enquire about ${role.name}`} className="relative block aspect-[4/5] overflow-hidden"><img src={role.image} alt={role.name} loading="lazy" className="img-zoom h-full w-full object-cover motion-safe:group-hover:scale-105" /><span className="absolute left-3 top-3 bg-background px-2 py-1 font-display text-xs font-bold text-navy">{String(index+1).padStart(2,"0")}</span><span className="absolute bottom-0 left-0 bg-brand px-3 py-2 text-xs font-semibold text-on-dark">{role.category}</span></a>
              <div className="flex flex-1 flex-col p-4"><h3 className="font-display text-lg font-bold leading-6">{role.name}</h3><p className="mb-4 mt-3 text-sm leading-6 text-muted-foreground">{role.description}</p><Button asChild variant="link" className="mt-auto h-10 justify-between border-t border-border px-0"><a href={enquiryLink(role.name)}>Enquire about this role <ArrowUpRight /></a></Button></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal className="relative"><img src={workforceCover} alt="Workforce supporting a construction project" className="aspect-[5/4] w-full rounded-tr-[4rem] object-cover" loading="lazy" /><div className="absolute bottom-0 left-0 border-r-8 border-t-8 border-offwhite bg-brand px-6 py-5 font-display text-xl font-bold leading-tight text-on-dark">Your project.<br />Our workforce.</div></Reveal>
          <div><Reveal><p className="eyebrow">From requirement to site</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Let’s get your<br />team together.</h2></Reveal>
          <div className="mt-7 space-y-5">{[
            ["01", "Share your requirements", "Tell us the roles, number of workers, site location and project schedule."],
            ["02", "Discuss the right fit", "We’ll discuss your scope, workforce requirements and availability."],
            ["03", "Coordinate your workforce", "Agree the details and arrange the manpower support for your project."],
          ].map(([number,title,text]) => <div key={number} className="flex gap-5 border-t border-border pt-5"><span className="font-display text-xl font-bold text-brand">{number}</span><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div>)}</div></div>
        </div>
      </section>

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