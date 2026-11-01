import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { PageBanner } from "@/components/site/PageBanner";
import { Button } from "@/components/ui/button";
import original from "@/components/site/site-original.json";
import reinstatement from "@/assets/reinstatement-0.asset.json";
import awning from "@/assets/awning-glass.asset.json";
import electrical from "@/components/site/original-services/electrical-work.json";
import drywall from "@/components/site/original-services/drywall-partition-work.json";
import busduct from "@/components/site/original-services/bus-duct-work.json";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects & Site Work | BSM Engineering Singapore" },
    { name: "description", content: "Explore BSM Engineering's original service photography across reinstatement, awning, electrical, partition and bus duct work in Singapore." },
    { property: "og:title", content: "Projects & Site Work | BSM Engineering" },
    { property: "og:description", content: "A photographic look at BSM Engineering's construction and repair services in Singapore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectsPage,
});

const scopes = [
  { title: "Reinstatement Work", image: reinstatement.url, to: "/reinstatement-hacking-work", source: "Reinstatement Work" },
  { title: "Awning & Canopy Work", image: awning.url, to: "/awning-work", source: "Awning Service" },
  { title: "Electrical Installation", image: electrical.images[0]?.url, to: "/electrical-work", source: "Electrical Work" },
  { title: "Drywall & Partition Work", image: drywall.images[0]?.url, to: "/drywall-partition-work", source: "Drywall Partition" },
  { title: "Bus Duct Installation", image: busduct.images[0]?.url, to: "/bus-duct-work", source: "Bus Duct Work" },
] as const;

function ProjectsPage() {
  return <><Header /><main><PageBanner title="Projects" />
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div><p className="eyebrow">BSM Engineering</p><h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">On site, every day.</h2><p className="mt-4 max-w-xl leading-7 text-muted-foreground">A look at the kinds of work our teams deliver across Singapore.</p></div>
          <Button asChild variant="outline"><Link to="/gallery">View Gallery <ArrowUpRight /></Link></Button>
        </div>
        <div className="divide-y divide-border">{scopes.map((scope, index) => <article key={scope.to} className="grid items-center gap-7 py-9 md:grid-cols-2 lg:gap-14">
          <Link to={scope.to} className={`group block overflow-hidden rounded-md ${index % 2 ? "md:order-2" : ""}`} aria-label={scope.title}>
            <img src={scope.image} alt={scope.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
          </Link>
          <div><span className="font-display text-sm font-bold text-brand">0{index + 1} / SITE WORK</span><h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">{scope.title}</h3><p className="mt-5 max-w-lg leading-8 text-muted-foreground">{original.services.blocks.find(block => block.title === scope.source)?.text}</p><Button asChild variant="outline" className="mt-6"><Link to={scope.to}>View Service <ArrowUpRight /></Link></Button></div>
        </article>)}</div>
      </div>
    </section>
    <section className="border-t border-border bg-offwhite"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10 lg:px-10"><h2 className="font-display text-2xl font-extrabold">Your next project starts here.</h2><Button asChild><Link to="/contact-us">Send Enquiry <ArrowUpRight /></Link></Button></div></section>
  </main><Footer /></>;
}