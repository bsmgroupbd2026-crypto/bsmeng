import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, MapPin, Clock, Mail, Phone, Settings } from "lucide-react";
import logo from "@/assets/bsm-logo.jpeg.asset.json";
import { real, img, engineering } from "./data";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services", mega: true },
  { href: "#industries", label: "Industries" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const contact = {
  address: ["5 Soon Lee St, #04-49", "Pioneer Point, S-627607"],
  hours: "Mon – Sat : 8 AM – 5 PM",
  emails: ["enquiry@bsmengg.com", "bsmengineering1@gmail.com"],
  phone: "(+65) 6980 0553",
  tel: "+6569800553",
};

function InfoItem({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-brand text-on-dark"><Icon className="h-5 w-5" /></span>
      <div className="min-w-0">
        <p className="font-display text-base font-bold uppercase tracking-[0.12em] text-navy">{title}</p>
        {lines.map((l) => <p key={l} className="text-sm leading-relaxed text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-navy text-sm font-semibold text-on-dark md:flex">
        <div className="flex items-center gap-3 bg-brand py-3 pl-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))] pr-16 [clip-path:polygon(0_0,100%_0,calc(100%-2rem)_100%,0_100%)]">
          <Settings className="h-4 w-4" /> We Are Provider Of Industrial Solutions.
        </div>
        <div className="flex flex-1 items-center justify-end gap-12 pr-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))]">
          <a href="#contact" className="flex items-center gap-2 hover:text-brand-light"><Mail className="h-4 w-4" /> Send Enquiry</a>
          <a href={`tel:${contact.tel}`} className="flex items-center gap-2 hover:text-brand-light"><Phone className="h-4 w-4" /> Call Us Today! {contact.phone}</a>
        </div>
      </div>

      {/* Logo + info row */}
      <div className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 pb-16 pt-6 lg:px-10">
          <a href="#top" className="shrink-0">
            <img src={logo.url} alt="BSM Engineering logo" className="h-16 w-auto rounded-md sm:h-24" width={130} height={96} />
          </a>
          <div className="hidden gap-10 lg:flex">
            <InfoItem icon={MapPin} title="Address" lines={contact.address} />
            <InfoItem icon={Clock} title="Opening Hours" lines={[contact.hours]} />
            <InfoItem icon={Mail} title="Email Us" lines={contact.emails} />
          </div>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center bg-brand text-on-dark lg:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Blue nav bar, overlaps hero, sticks on scroll */}
      <div className="sticky top-0 z-50 -mb-10 hidden px-6 lg:block lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-md bg-brand py-2 pl-10 pr-2 shadow-xl">
          <div className="flex items-center gap-9">
            {links.map((l) => l.mega ? (
              <div key={l.label} className="group relative py-4">
                <a href={l.href} className="flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wide text-on-dark">
                  {l.label} <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-0 top-full w-[760px] pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-[1fr_1fr_1.1fr] overflow-hidden rounded-md bg-background shadow-2xl">
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
              <a key={l.label} href={l.href} className="py-4 font-display text-sm font-bold uppercase tracking-wide text-on-dark transition hover:text-navy">{l.label}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-md bg-navy px-9 py-4 font-display text-sm font-bold uppercase tracking-wide text-on-dark transition hover:bg-slate-deep">Get Quote</a>
        </nav>
      </div>

      {open && (
        <div className="sticky top-0 z-50 bg-navy px-6 py-6 lg:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block border-b border-on-dark/10 py-4 font-display text-xl font-semibold text-on-dark">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-6 block bg-primary py-4 text-center font-semibold text-primary-foreground">Get Quote</a>
        </div>
      )}
    </>
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
