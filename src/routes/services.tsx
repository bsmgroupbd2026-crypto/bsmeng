import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { PageBanner } from "@/components/site/PageBanner";
import { serviceLinks } from "@/components/site/service-links";
import original from "@/components/site/site-original.json";
import electrical from "@/components/site/original-services/electrical-work.json";
import waterproofing from "@/components/site/original-services/waterproofing-works.json";
import ceiling from "@/components/site/original-services/ceiling-work.json";
import plumbing from "@/components/site/original-services/plumbing-work.json";
import drywall from "@/components/site/original-services/drywall-partition-work.json";
import painting from "@/components/site/original-services/painting-work.json";
import busduct from "@/components/site/original-services/bus-duct-work.json";
import manpower from "@/assets/workforce-original-0.jpg.asset.json";
import awning from "@/assets/awning-cover.asset.json";
import reinstatement from "@/assets/reinstatement-0.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Construction & Manpower Services | BSM Engineering Singapore" },
    { name: "description", content: "Explore BSM Engineering's manpower supply, reinstatement, awning, electrical, ceiling, plumbing, waterproofing, drywall, painting and bus duct services." },
    { property: "og:title", content: "Our Services | BSM Engineering & Construction" },
    { property: "og:description", content: "Construction, repair and manpower services for Singapore properties and projects." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

const photos = [manpower.url, reinstatement.url, awning.url, electrical.images[0]?.url, waterproofing.images[0]?.url, ceiling.images[0]?.url, plumbing.images[0]?.url, drywall.images[0]?.url, painting.images[0]?.url, busduct.images[0]?.url];
const descriptions: Record<string, string> = {
  "/reinstatement-hacking-work": original.services.blocks[1].text,
  "/awning-work": original.services.blocks[2].text,
  "/electrical-work": original.services.blocks[3].text,
  "/ceiling-work": original.services.blocks[4].text,
  "/plumbing-work": original.services.blocks[5].text,
  "/drywall-partition-work": original.services.blocks[6].text,
  "/painting-work": original.services.blocks[7].text,
  "/bus-duct-work": original.services.blocks[8].text,
};
function ServicesPage() {
  return <><Header /><main><PageBanner title="Our Services" />
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10"><p className="eyebrow">Construction Services</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold">Engineering & Construction</h2><p className="mb-8 mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{original.services.blocks[0].text}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{serviceLinks.map((service, index) => <article key={service.to} className="group overflow-hidden rounded-md border border-border bg-background"><Link to={service.to} className="block">{photos[index] && <div className="overflow-hidden"><img src={photos[index]} alt={service.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform motion-safe:group-hover:scale-105" /></div>}<div className="p-5"><h3 className="flex items-center justify-between gap-3 text-xl font-bold">{service.title}<ArrowUpRight className="h-5 w-5 shrink-0 text-brand" /></h3>{descriptions[service.to] && <p className="mt-3 text-sm leading-6 text-muted-foreground">{descriptions[service.to]}</p>}</div></Link></article>)}</div>
    </section>
  </main><Footer /></>;
}