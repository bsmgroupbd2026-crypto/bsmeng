import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, contact } from "./Header";
import { Footer } from "./Sections";
import { ServiceContact } from "./ServiceContact";
import { serviceLinks } from "./service-links";

export function ServicePageLayout({ title, image, imageAlt, children }: {
  title: string;
  image?: string | undefined;
  imageAlt?: string | undefined;
  children: ReactNode;
}) {
  return <><Header /><main className="service-page">
    <section className="service-cover relative isolate overflow-hidden border-b border-border bg-offwhite">
      {image && <img src={image} alt={imageAlt || title} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />}
      <div className="service-cover-overlay absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-6 pb-9 pt-12 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="size-3" />
          <Link to="/services" className="hover:text-primary">Our Services</Link><ChevronRight className="size-3" /><span className="text-foreground">{title}</span>
        </nav>
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-8 bg-primary" />BSM Engineering & Construction</p>
        <h1 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#quick-contact">Request a quote <ArrowUpRight /></a></Button>
          <Button asChild variant="outline" size="lg"><a href="#service-details">Explore service <ArrowDown /></a></Button>
        </div>
      </div>
    </section>

    <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-9 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-10 xl:gap-14">
      <div id="service-details" className="service-content min-w-0 scroll-mt-28">{children}</div>
      <aside className="min-w-0 border-t border-border pt-7 lg:sticky lg:top-24 lg:border-t-0 lg:pt-0">
        <div id="quick-contact" className="service-enquiry scroll-mt-28 border-t-4 border-primary bg-offwhite p-5"><ServiceContact service={title} /></div>
        <nav aria-label="Related services" className="mt-7">
          <h2 className="mb-3 text-sm font-extrabold">Our Services</h2>
          <div className="divide-y divide-border border-y border-border">{serviceLinks.map(service => <Link key={service.to} to={service.to} className="group flex items-center justify-between gap-3 py-3 text-sm font-medium transition-colors hover:text-primary" activeProps={{ className: "font-bold text-primary" }}><span>{service.title}</span><ChevronRight className="size-3.5 shrink-0 transition-transform motion-safe:group-hover:translate-x-1" /></Link>)}</div>
        </nav>
      </aside>
    </div>

    <section className="border-t border-border bg-offwhite py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 lg:px-10">
        <div><p className="mb-2 text-xs font-bold uppercase text-primary">Talk to BSM</p><h2 className="max-w-2xl text-2xl font-extrabold leading-snug">Discuss your {title.toLowerCase()} requirements</h2></div>
        <div className="flex flex-wrap gap-3"><Button asChild size="lg"><a href={`mailto:${contact.emails[0]}?subject=${encodeURIComponent(`${title} enquiry`)}`}><Mail />Send Enquiry</a></Button><Button asChild variant="outline" size="lg"><a href={`tel:${contact.tel}`}><Phone />{contact.phone}</a></Button></div>
      </div>
    </section>
  </main><Footer /></>;
}