import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { contact } from "@/components/site/Header";
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
    { property: "og:image", content: cover.url },
    { name: "twitter:image", content: cover.url },
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

const enquiry = `mailto:${contact.emails[0]}?subject=${encodeURIComponent("Awning Work enquiry")}`;

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return <div className="space-y-4 text-sm leading-7 text-muted-foreground">{paragraphs.map((text, index) => <p key={index}>{text}</p>)}</div>;
}

function WorkList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>;
}

function AwningPage() {
  return <ServicePageLayout title="Awning Work" image={cover.url} imageAlt="Awning installation work in Singapore">
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
  </ServicePageLayout>;
}
