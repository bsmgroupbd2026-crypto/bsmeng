import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bsm-logo.jpeg.asset.json";
import { cn } from "@/lib/utils";
import { real, img, engineering } from "./data";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services", mega: true },
  { href: "#industries", label: "Industries" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-500",
      scrolled ? "bg-navy/95 py-3 shadow-lg backdrop-blur" : "bg-transparent py-6",
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <img src={logo.url} alt="BSM Engineering logo" className="h-10 w-auto rounded-sm" width={54} height={40} />
          <span className="hidden font-display text-sm font-bold leading-tight tracking-wide text-on-dark sm:block">
            BSM ENGINEERING<br /><span className="font-medium text-on-dark-muted">& Construction Pte. Ltd.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => l.mega ? (
            <div key={l.label} className="group relative">
              <a href={l.href} className="flex items-center gap-1 text-sm font-medium text-on-dark/85 transition hover:text-on-dark">
                {l.label} <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
              </a>
              <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-[1fr_1fr_1.1fr] gap-0 overflow-hidden bg-background shadow-2xl">
                  <MegaCol title="Manpower Solutions" image={real.manpower} items={["Construction Workers", "Riggers & Signalmen", "Welders", "M&E Technicians", "Site Supervisors", "Site Engineers"]} />
                  <MegaCol title="Engineering & Construction" image={img.ceiling} items={engineering.slice(0, 6)} />
                  <div className="relative">
                    <img src={img.electrical} alt="" className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-overlay-tile" />
                    <a href="#contact" className="absolute bottom-6 left-6 right-6 font-display text-lg font-bold text-on-dark">
                      Plan your next project <ArrowUpRight className="inline h-5 w-5 text-brand-light" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <a key={l.label} href={l.href} className="text-sm font-medium text-on-dark/85 transition hover:text-on-dark">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand sm:inline-block">
            Request a Quote
          </a>
          <button onClick={() => setOpen(!open)} className="text-on-dark lg:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-3 border-t border-on-dark/10 bg-navy px-6 py-6 lg:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block border-b border-on-dark/10 py-4 font-display text-xl font-semibold text-on-dark">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-6 block bg-primary py-4 text-center font-semibold text-primary-foreground">Request a Quote</a>
        </div>
      )}
    </header>
  );
}

function MegaCol({ title, image, items }: { title: string; image: string; items: string[] }) {
  return (
    <div className="p-6">
      <div className="mb-4 h-24 overflow-hidden"><img src={image} alt="" className="h-full w-full object-cover" loading="lazy" /></div>
      <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">{title}</p>
      <ul className="space-y-2">
        {items.map((i) => <li key={i}><a href="#services" className="text-sm text-foreground/80 hover:text-primary">{i}</a></li>)}
      </ul>
    </div>
  );
}
