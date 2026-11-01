import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Mail, Phone } from "lucide-react";
import { Header, contact } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { ServiceContact } from "@/components/site/ServiceContact";
import { Button } from "@/components/ui/button";
import content from "@/components/site/awning-original.json";
import cover from "@/assets/awning-cover.asset.json";
import canvasAwning from "@/assets/awning-canvas.asset.json";
import glassAwning from "@/assets/awning-glass.asset.json";
import polyAwning from "@/assets/awning-poly.asset.json";

export const Route = createFileRoute("/awning-work")({
  head: () => ({ meta: [
    { title: "Awning Work & Contractor Singapore | BSM Engineering" },
    { name: "description", content: "BSM Engineering is a trusted awning contractor in Singapore for canvas, glass and polycarbonate awnings — design, installation, repair and maintenance for commercial and residential properties." },
    { property: "og:title", content: "Awning Work | BSM Engineering Singapore" },
    { property: "og:description", content: "End-to-end awning services in Singapore: design, installation and maintenance of canvas, glass and polycarbonate awnings." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AwningPage,
});

const typeImages: Record<string, string> = {
  "awning-canvas": canvasAwning.url,
  "awning-glass": glassAwning.url,
  "awning-poly": polyAwning.url,
};
const related = ["Reinstatement & Hacking", "Electrical Work", "Ceiling Work", "Plumbing", "Drywall Partition", "Painting"];
const enquiry = `mailto:${contact.emails[0]}?subject=${encodeURIComponent("Awning Work enquiry")}`;

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return <div className="space-y-4 text-sm leading-7 text-muted-foreground">{paragraphs.map((text, index) => <p key={index}>{text}</p>)}</div>;
}

function WorkList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>;
}

function AwningPage() {
  return <><Header /><main>
    <section className="relative overflow-hidden bg-navy">
      <img src={cover.url} alt="Awning installation work in Singapore" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-overlay-hero" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-on-dark"><Link to="/">Home</Link><ChevronRight className="h-3 w-3" /><span>Our Services</span><ChevronRight className="h-3 w-3" /><span>Awning Work</span></nav>
        <div className="flex flex-wrap items-end justify-between gap-5"><div><h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-on-dark sm:text-4xl">Awning Work<br />& Installation</h1><p className="mt-3 text-sm text-on-dark">Commercial · Residential · Industrial</p></div><Button asChild size="lg"><a href="#overview">Our scope of work <ArrowDown /></a></Button></div>
      </div>
    </section>

    <div className="mx-auto grid max-w-7xl items-start gap-9 px-6 py-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:px-10">
      <aside className="order-2 min-w-0 lg:order-1">
        <nav aria-label="Related services" className="mb-8 border-y border-border">
          <Link to="/awning-work" className="flex items-center justify-between border-b border-border bg-offwhite px-3 py-4 text-xs font-bold uppercase text-brand">Awning Work <ChevronRight className="h-4 w-4" /></Link>
          <Link to="/reinstatement-hacking-work" className="flex items-center justify-between border-b border-border px-3 py-3 text-xs font-semibold uppercase hover:text-brand">Reinstatement & Hacking<ChevronRight className="h-3 w-3" /></Link>
          {related.slice(1).map(name => <a key={name} href="/#services" className="flex items-center justify-between border-b border-border px-3 py-3 text-xs font-semibold uppercase hover:text-brand">{name}<ChevronRight className="h-3 w-3" /></a>)}
          <Link to="/manpower-supply" className="flex items-center justify-between px-3 py-3 text-xs font-semibold uppercase hover:text-brand">Manpower Supply<ChevronRight className="h-3 w-3" /></Link>
        </nav>
        <div id="quick-contact" className="scroll-mt-24 border-l-2 border-brand bg-offwhite p-5"><ServiceContact service="Awning Work" /></div>
      </aside>

      <div className="order-1 min-w-0 lg:order-2">
        <section id="overview" className="scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase text-brand">Awning Contractor Singapore</p>
          <h2 className="mb-5 max-w-2xl text-3xl font-extrabold leading-tight">Awning Contractor for Commercial and Residential Properties</h2>
          <Paragraphs paragraphs={content.intro} />
          <div className="mt-7 grid items-start gap-6 xl:grid-cols-2">
            <div><h3 className="mb-5 border-l-2 border-brand pl-3 text-sm font-bold uppercase">Our Scope of Awning Work</h3><WorkList items={content.scope} /></div>
            <img src={cover.url} alt="Awning service in Singapore" className="aspect-[4/3] w-full rounded-md border border-border object-cover" loading="lazy" />
          </div>
          <div className="my-7 border-l-4 border-brand bg-offwhite p-5"><h3 className="mb-3 text-lg font-bold">Why Choose BSM Engineering?</h3><p className="text-sm leading-7 text-muted-foreground">{content.whyChoose}</p></div>
        </section>

        <section className="py-7">
          <h2 className="mb-7 border-b border-border pb-5 text-2xl font-extrabold leading-snug">BSM Provide the Following Types of Awning Work</h2>
          <div className="grid gap-5 sm:grid-cols-3">{content.types.map((type, index) => <article key={type.title} className="group overflow-hidden rounded-md border border-border bg-background"><a href={enquiry} aria-label={`Enquire about ${type.title}`}><img src={typeImages[type.image]} alt={type.title} className="aspect-[4/3] w-full object-cover transition-transform motion-safe:group-hover:scale-105" loading="lazy" /><div className="flex items-center justify-between gap-2 border-t border-border p-4"><h3 className="text-sm font-bold">{type.title}</h3><span className="text-xs font-semibold text-brand">0{index + 1}</span></div></a></article>)}</div>
        </section>

        <section className="border-y border-border bg-offwhite p-6 sm:p-7"><h2 className="mb-5 text-2xl font-extrabold leading-snug">{content.quality.title}</h2><Paragraphs paragraphs={content.quality.paragraphs} /></section>

        <section className="py-9">
          <h2 className="mb-5 text-2xl font-extrabold leading-snug">{content.services.title}</h2>
          <Paragraphs paragraphs={[content.services.intro]} />
          <div className="mt-7 divide-y divide-border border-t border-border">{content.services.items.map((item, index) => <div key={item.title} className="grid gap-3 py-5 sm:grid-cols-[0.8fr_1.6fr]">
            <h3 className="flex gap-3 text-base font-bold"><span className="text-sm text-brand">{String(index + 1).padStart(2, "0")}</span>{item.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
          </div>)}</div>
          <Button asChild className="mt-6"><a href="#quick-contact">Request a quote <ArrowUpRight /></a></Button>
        </section>
      </div>
    </div>
    <section className="border-t border-border bg-offwhite py-10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 lg:px-10"><div><p className="mb-2 text-xs font-bold uppercase text-brand">Talk to BSM</p><h2 className="text-2xl font-extrabold">Need an awning installed or repaired?</h2></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><a href={enquiry}><Mail /> Send Enquiry</a></Button><Button asChild variant="outline" size="lg"><a href={`tel:${contact.tel}`}><Phone />{contact.phone}</a></Button></div></div></section>
  </main><Footer /></>;
}
