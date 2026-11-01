import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageBanner({ title, image, service = false }: { title: string; image?: string | undefined; service?: boolean }) {
  return <section className="relative overflow-hidden border-b border-border bg-offwhite">
    {image && <><img src={image} alt={title} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-background/85" /></>}
    <div className="relative mx-auto max-w-7xl px-6 pb-9 pt-16 lg:px-10">
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground"><Link to="/" className="hover:text-brand">Home</Link><ChevronRight className="h-3 w-3" />{service && <><Link to="/services">Our Services</Link><ChevronRight className="h-3 w-3" /></>}<span>{title}</span></nav>
      <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h1>
    </div>
  </section>;
}