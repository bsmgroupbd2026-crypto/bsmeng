import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { PageBanner } from "@/components/site/PageBanner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import electrical from "@/components/site/original-services/electrical-work.json";
import busduct from "@/components/site/original-services/bus-duct-work.json";
import drywall from "@/components/site/original-services/drywall-partition-work.json";
import painting from "@/components/site/original-services/painting-work.json";
import awningCanvas from "@/assets/awning-canvas.asset.json";
import awningGlass from "@/assets/awning-glass.asset.json";
import awningPoly from "@/assets/awning-poly.asset.json";
import reinstatement from "@/assets/reinstatement-0.asset.json";
import reinstatementOffice from "@/assets/reinstatement-2.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Work Gallery | BSM Engineering & Construction Singapore" },
    { name: "description", content: "Original BSM Engineering service photography: reinstatement, awning and canopy, electrical installation, renovation and bus duct work." },
    { property: "og:title", content: "Work Gallery | BSM Engineering Singapore" },
    { property: "og:description", content: "Browse original photographs across BSM Engineering's construction services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: GalleryPage,
});
const groups = [
  { title: "Reinstatement Work", images: [{url:reinstatement.url,alt:"Reinstatement work"},{url:reinstatementOffice.url,alt:"Office reinstatement"}] },
  { title: "Awning & Canopy Work", images: [{url:awningCanvas.url,alt:"Canvas awning"},{url:awningGlass.url,alt:"Glass awning"},{url:awningPoly.url,alt:"Polycarbonate awning"}] },
  { title: "Electrical Installation Work", images: electrical.images },
  { title: "Renovation Work", images: [...drywall.images,...painting.images] },
  { title: "Bus Duct Installation Work", images: busduct.images },
];
const images = groups.flatMap(group => group.images.map(image => ({...image,category:group.title})));
function GalleryPage() {
  const [category,setCategory] = useState("All");
  const [selected,setSelected] = useState<number | null>(null);
  const active = selected === null ? undefined : images[selected];
  const filtered = images.filter(image => category === "All" || image.category === category);
  return <><Header /><main><PageBanner title="Work Gallery" />
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10"><p className="eyebrow">BSM Engineering</p><h2 className="mt-4 text-3xl font-extrabold">Our work, in pictures.</h2>
      <div aria-label="Gallery categories" className="mb-7 mt-7 flex flex-wrap gap-2 border-b border-border pb-5">{["All",...groups.map(group => group.title)].map(title => <Button key={title} variant={category===title?"default":"outline"} size="sm" aria-pressed={category===title} onClick={() => setCategory(title)}>{title}</Button>)}</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(image => <Button key={image.url} variant="ghost" className="group relative block h-auto overflow-hidden rounded-md p-0" aria-label={`View ${image.alt}`} onClick={() => setSelected(images.indexOf(image))}><img src={image.url} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform motion-safe:group-hover:scale-105" /><span className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 bg-background/95 px-4 py-3 text-left text-xs font-bold">{image.category}<Expand className="h-4 w-4 shrink-0 text-brand" /></span></Button>)}</div>
    </section>
    <Dialog open={Boolean(active)} onOpenChange={open => {if(!open)setSelected(null);}}><DialogContent className="max-w-5xl p-4"><DialogTitle>{active?.category}</DialogTitle><DialogDescription className="sr-only">{active?.alt}</DialogDescription>{active && <img src={active.url} alt={active.alt} className="max-h-[65vh] w-full object-contain" />}<div className="flex items-center justify-between"><Button variant="outline" size="icon" aria-label="Previous photo" onClick={() => setSelected(i => i===null?null:(i-1+images.length)%images.length)}><ChevronLeft /></Button><span className="text-xs text-muted-foreground">{selected===null?0:selected+1} / {images.length}</span><Button variant="outline" size="icon" aria-label="Next photo" onClick={() => setSelected(i => i===null?null:(i+1)%images.length)}><ChevronRight /></Button></div></DialogContent></Dialog>
  </main><Footer /></>;
}