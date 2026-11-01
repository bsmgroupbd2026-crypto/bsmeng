import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Check, Mail, Phone } from "lucide-react";
import { Header, contact } from "./Header";
import { Footer } from "./Sections";
import { ServiceContact } from "./ServiceContact";
import { PageBanner } from "./PageBanner";
import { serviceLinks } from "./service-links";
import { Button } from "@/components/ui/button";

export type ServiceCopy = {
  title: string;
  sourceUrl: string;
  blocks: { heading?: string; paragraphs?: string[]; items?: string[] }[];
  images: { url: string; alt: string }[];
};

export function OriginalServicePage({ content }: { content: ServiceCopy }) {
  const cover = content.images[0];
  const labels = [...new Set(content.blocks.filter(block => block.heading && !block.paragraphs?.length && !block.items?.length).map(block => block.heading))];
  return <><Header /><main><PageBanner title={content.title} image={cover?.url} service />
    <div className="mx-auto grid max-w-7xl items-start gap-9 px-6 py-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-10">
      <aside className="order-2 min-w-0 lg:order-1">
        <nav aria-label="Related services" className="mb-8 divide-y divide-border border-y border-border">{serviceLinks.map(service => <Link key={service.to} to={service.to} className="flex items-center justify-between gap-2 px-3 py-3.5 text-xs font-bold uppercase hover:bg-offwhite hover:text-brand" activeProps={{ className: "bg-offwhite text-brand" }}>{service.title}<ChevronRight className="h-3 w-3 shrink-0" /></Link>)}</nav>
        <div id="quick-contact" className="scroll-mt-24 border-l-2 border-brand bg-offwhite p-5"><ServiceContact service={content.title} /></div>
      </aside>
      <div className="order-1 min-w-0 lg:order-2">
        {cover && <figure className="mb-7 overflow-hidden rounded-md"><img src={cover.url} alt={cover.alt || content.title} className="aspect-[16/7] w-full object-cover" /></figure>}
        {labels.length > 0 && <div className="mb-7 flex flex-wrap gap-3 border-y border-border py-4">{labels.map(label => <span key={label} className="flex items-center gap-2 text-xs font-bold"><Check className="h-3 w-3 text-brand" />{label}</span>)}</div>}
        <div className="divide-y divide-border">{content.blocks.filter(block => block.paragraphs?.length || block.items?.length).map((block, index) => <section key={index} className="py-6 first:pt-0">
          {block.heading && <h2 className="mb-5 max-w-3xl text-2xl font-extrabold leading-snug">{block.heading}</h2>}
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">{block.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
          {block.items && <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">{block.items.map((item, i) => <li key={i} className="flex gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>}
        </section>)}</div>
        {content.images.length > 1 && <div className="mt-6 grid gap-4 sm:grid-cols-2">{content.images.slice(1).map((image, i) => <figure key={i} className="overflow-hidden rounded-md"><img src={image.url} alt={image.alt || content.title} loading="lazy" className="aspect-[4/3] w-full object-cover" /></figure>)}</div>}
        <Button asChild className="mt-7"><a href="#quick-contact">Request a quote <ArrowUpRight /></a></Button>
      </div>
    </div>
    <section className="border-t border-border bg-offwhite py-9"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 lg:px-10"><h2 className="text-2xl font-extrabold">Discuss your {content.title.toLowerCase()} requirements</h2><div className="flex flex-wrap gap-3"><Button asChild><a href={`mailto:${contact.emails[0]}?subject=${encodeURIComponent(`${content.title} enquiry`)}`}><Mail />Send Enquiry</a></Button><Button asChild variant="outline"><a href={`tel:${contact.tel}`}><Phone />{contact.phone}</a></Button></div></div></section>
  </main><Footer /></>;
}