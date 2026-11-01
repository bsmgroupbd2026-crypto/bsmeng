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
        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pb-14 lg:pt-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-on-dark">
            <Link to="/" className="hover:text-brand-light">Home</Link><ChevronRight className="h-3 w-3" /><span>Our Services</span><ChevronRight className="h-3 w-3" /><span>Manpower Supply</span>
          </nav>
          <h1 className="max-w-xl font-display text-4xl font-extrabold leading-tight text-on-dark sm:text-5xl lg:text-6xl">Manpower Supply</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-on-dark">The right people.<br />For the work ahead.</p>
          <Button asChild size="lg" className="mt-7 h-12"><a href="#workforce">Explore our workforce <ArrowDown /></a></Button>
        </div>
      </section>

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-10">
          <Reveal><p className="eyebrow">People behind the progress</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Your project.<br /><span className="text-brand">Our workforce.</span></h2></Reveal>
          <Reveal delay={100}><p className="max-w-lg leading-relaxed text-muted-foreground">Construction workers, technical specialists and site supervisors for projects across Singapore. Tell us the trade, team size and schedule you need—we’ll discuss the right manpower support for your site.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-sm font-semibold"><span>Construction</span><span className="text-brand">Technical trades</span><span>Site supervision</span></div></Reveal>
        </div>
      </section>

      <section id="workforce" className="scroll-mt-24 bg-offwhite py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><p className="eyebrow">Our manpower solutions</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Find your team.</h2></Reveal>
          <div className="mb-8 mt-7 flex flex-wrap gap-2" role="group" aria-label="Filter workforce">
            {workforceCategories.map(item => <Button key={item} variant={category === item ? "default" : "outline"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
          </div>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {roles.map(role => <article key={role.name} className="group overflow-hidden rounded-md border border-border bg-card">
              <a href={enquiryLink(role.name)} aria-label={`Enquire about ${role.name}`} className="block aspect-[4/3] overflow-hidden"><img src={role.image} alt={role.name} loading="lazy" className="img-zoom h-full w-full object-cover motion-safe:group-hover:scale-105" /></a>
              <div className="p-5"><p className="text-xs font-semibold uppercase text-brand">{role.category}</p><h3 className="mt-2 font-display text-xl font-bold">{role.name}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{role.description}</p><Button asChild variant="link" className="mt-3 h-10 px-0"><a href={enquiryLink(role.name)}>Enquire about this role <ArrowUpRight /></a></Button></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><p className="eyebrow">From requirement to site</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Let’s get your team together.</h2></Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">{[
            ["01", "Share your requirements", "Tell us the roles, number of workers, site location and project schedule."],
            ["02", "Discuss the right fit", "We’ll discuss your scope, workforce requirements and availability."],
            ["03", "Coordinate your workforce", "Agree the details and arrange the manpower support for your project."],
          ].map(([number,title,text]) => <div key={number} className="border-t-2 border-brand pt-5"><span className="font-display text-sm font-bold text-brand">{number}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
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