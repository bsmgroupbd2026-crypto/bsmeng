import { ArrowUpRight, Check } from "lucide-react";
import { ServicePageLayout } from "./ServicePageLayout";
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
  return <ServicePageLayout title={content.title} image={cover?.url} imageAlt={cover?.alt}>
    {labels.length > 0 && <div className="mb-7 flex flex-wrap gap-x-5 gap-y-3 border-b border-border pb-5">{labels.map(label => <span key={label} className="flex items-center gap-2 text-xs font-semibold"><Check className="size-3.5 shrink-0 text-primary" />{label}</span>)}</div>}
    <div>{content.blocks.filter(block => block.paragraphs?.length || block.items?.length).map((block, index) => <section key={index} className="service-copy-section border-b border-border py-7 first:pt-0">
      {block.heading && <div className="mb-5 flex items-start gap-4"><span aria-hidden="true" className="mt-1 border-b-2 border-primary pb-1 text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span><h2 className="max-w-3xl text-2xl font-extrabold leading-snug">{block.heading}</h2></div>}
      <div className="space-y-4 text-sm leading-7 text-muted-foreground">{block.paragraphs?.map((paragraph, i) => <p key={i} className={index === 0 && i === 0 ? "service-lead" : undefined}>{paragraph}</p>)}</div>
      {block.items && <ul className="mt-5 grid gap-x-6 gap-y-0 sm:grid-cols-2">{block.items.map((item, i) => <li key={i} className="flex gap-3 border-b border-border py-3 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-primary" /><span>{item}</span></li>)}</ul>}
      {index === 0 && content.images.length > 1 && <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{content.images.slice(1).map((image, i) => <figure key={i} className="group overflow-hidden rounded-md"><img src={image.url} alt={image.alt || content.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" /></figure>)}</div>}
    </section>)}</div>
    <Button asChild className="mt-6"><a href="#quick-contact">Request a quote <ArrowUpRight /></a></Button>
  </ServicePageLayout>;
}