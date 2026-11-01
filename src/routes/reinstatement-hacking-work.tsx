import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { contact } from "@/components/site/Header";
import { Button } from "@/components/ui/button";
import content from "@/components/site/reinstatement-original.json";
import cover from "@/assets/svc-hacking.jpg";
import scopeImage from "@/assets/reinstatement-0.asset.json";
import commercial from "@/assets/reinstatement-1.asset.json";
import office from "@/assets/reinstatement-2.asset.json";
import privateProperty from "@/assets/reinstatement-3.asset.json";

export const Route = createFileRoute("/reinstatement-hacking-work")({
  head: () => ({ meta: [
    { title: "Reinstatement & Hacking Work Singapore | BSM Engineering" },
    { name: "description", content: "BSM Engineering provides commercial, office, retail and private property reinstatement and hacking services in Singapore. Explore our scope of work and enquire." },
    { property: "og:title", content: "Reinstatement & Hacking | BSM Engineering Singapore" },
    { property: "og:description", content: "Reinstatement, demolition, fixture removal and property restoration for commercial and industrial spaces in Singapore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ReinstatementPage,
});

const properties = [
  { title: "Commercial Property", image: commercial.url },
  { title: "Office & Shops", image: office.url },
  { title: "Private Property", image: privateProperty.url },
];

const enquiry = `mailto:${contact.emails[0]}?subject=${encodeURIComponent("Reinstatement & Hacking enquiry")}`;

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return <div className="space-y-4 text-sm leading-7 text-muted-foreground">{paragraphs.map((text, index) => <p key={index}>{text}</p>)}</div>;
}

function WorkList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>;
}

function DetailRows({ group }: { group: { title: string; items: string[]; paragraphs: string[] } }) {
  return <section className="border-t border-border py-9">
    <h2 className="mb-6 text-2xl font-extrabold leading-snug">{group.title}</h2>
    <div className="divide-y divide-border">{group.items.map((item, index) => <div key={item} className="grid gap-3 py-5 sm:grid-cols-[0.8fr_1.6fr]">
      <h3 className="flex gap-3 text-base font-bold"><span className="text-sm text-brand">{String(index + 1).padStart(2, "0")}</span>{item.replace(/:$/, "")}</h3>
      <p className="text-sm leading-7 text-muted-foreground">{group.paragraphs[index]}</p>
    </div>)}</div>
  </section>;
}

function ReinstatementPage() {
  return <ServicePageLayout title="Reinstatement & Hacking" image={cover} imageAlt="Interior hacking and reinstatement work">
        <section id="overview" className="scroll-mt-24">
          <p className="mb-3 text-xs font-bold uppercase text-brand">Reinstatement & Hacking Work</p>
          <h2 className="mb-5 max-w-2xl text-3xl font-extrabold leading-tight">We Reinstate Commercial and Industrial Properties</h2>
          <Paragraphs paragraphs={[content.intro]} />
          <div className="mt-7 grid items-start gap-6 xl:grid-cols-2">
            <div><h3 className="mb-5 border-l-2 border-brand pl-3 text-sm font-bold uppercase">Our Scope of Work</h3><WorkList items={content.scope} /></div>
            <img src={scopeImage.url} alt="Reinstatement work in Singapore" className="aspect-[4/3] w-full rounded-md border border-border object-cover" loading="lazy" />
          </div>
          <h3 className="mb-4 mt-8 text-xl font-extrabold">{content.choosing.title}</h3><Paragraphs paragraphs={content.choosing.paragraphs} />
          <div className="my-7 border-l-4 border-brand bg-offwhite p-5"><h3 className="mb-3 text-lg font-bold">{content.importance.title}</h3><Paragraphs paragraphs={content.importance.paragraphs} /></div>
        </section>

        <section className="py-7">
          <h2 className="mb-7 border-b border-border pb-5 text-2xl font-extrabold leading-snug">{content.services.title}</h2>
          <div className="mb-7 grid gap-5 sm:grid-cols-3">{properties.map((property, index) => <article key={property.title} className="group overflow-hidden rounded-md border border-border bg-background"><a href={enquiry} aria-label={`Enquire about ${property.title}`}><img src={property.image} alt={property.title} className="aspect-[4/3] w-full object-cover transition-transform motion-safe:group-hover:scale-105" loading="lazy" /><div className="flex items-center justify-between gap-2 border-t border-border p-4"><h3 className="text-sm font-bold">{property.title}</h3><span className="text-xs font-semibold text-brand">0{index + 1}</span></div></a></article>)}</div>
          <Paragraphs paragraphs={content.services.paragraphs} />
          <div className="mt-5"><WorkList items={content.services.items} /></div>
        </section>

        <section className="border-t border-border py-9"><h2 className="mb-5 text-2xl font-extrabold leading-snug">{content.understanding.title}</h2><Paragraphs paragraphs={content.understanding.paragraphs} /><Button asChild className="mt-6"><a href="#quick-contact">Request a quote <ArrowUpRight /></a></Button></section>
        <DetailRows group={content.components} />
        <section className="border-y border-border bg-offwhite p-6 sm:p-7"><h2 className="mb-6 text-2xl font-extrabold leading-snug">{content.advantages.title}</h2><WorkList items={content.advantages.paragraphs} /></section>
        <section className="py-9"><h2 className="mb-5 text-2xl font-extrabold leading-snug">{content.business.title}</h2><Paragraphs paragraphs={content.business.paragraphs} /></section>
        <DetailRows group={content.applications} />
        <DetailRows group={content.considerations} />
        <section className="border-t border-border py-8"><h2 className="mb-5 text-2xl font-extrabold">{content.conclusion.title}</h2><Paragraphs paragraphs={content.conclusion.paragraphs} /></section>
  </ServicePageLayout>;
}
