import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, MapPin, Clock, Mail, Phone, Settings } from "lucide-react";
import logo from "@/assets/bsm-logo.jpeg.asset.json";
import { serviceLinks } from "./service-links";
import { Button } from "@/components/ui/button";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services", mega: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact-us", label: "Contact" },
] as const;

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
          <Link to="/contact-us" className="flex items-center gap-2 hover:text-brand-light"><Mail className="h-4 w-4" /> Send Enquiry</Link>
          <a href={`tel:${contact.tel}`} className="flex items-center gap-2 hover:text-brand-light"><Phone className="h-4 w-4" /> Call Us Today! {contact.phone}</a>
        </div>
      </div>

      {/* Logo + info row */}
      <div className="bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 pb-6 pt-6 lg:px-10">
          <Link to="/" className="shrink-0">
            <img src={logo.url} alt="BSM Engineering logo" className="h-16 w-auto rounded-md sm:h-24" width={130} height={96} />
          </Link>
          <div className="hidden gap-10 lg:flex">
            <InfoItem icon={MapPin} title="Address" lines={contact.address} />
            <InfoItem icon={Clock} title="Opening Hours" lines={[contact.hours]} />
            <InfoItem icon={Mail} title="Email Us" lines={contact.emails} />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center bg-brand text-on-dark lg:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Blue nav bar, overlaps hero, sticks on scroll */}
      <div className="sticky top-0 z-50 -mb-10 hidden px-6 lg:block lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-md bg-brand py-2 pl-10 pr-2 shadow-xl">
          <div className="flex items-center gap-9">
            {links.map((l) => "mega" in l ? (
              <div key={l.label} className="group relative py-4">
                <Link to={l.to} className="flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wide text-on-dark">{l.label}<ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></Link>
                <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-sm bg-background py-2 shadow-2xl">{serviceLinks.map(service => <li key={service.to}><Link to={service.to} className="block border-b border-border px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-navy transition hover:bg-offwhite hover:pl-8 hover:text-brand">{service.title}</Link></li>)}</ul>
                </div>
              </div>
            ) : <Link key={l.label} to={l.to} className="py-4 font-display text-sm font-bold uppercase tracking-wide text-on-dark transition hover:text-navy" activeProps={{ className: "text-navy" }} activeOptions={{ exact: true }}>{l.label}</Link>)}
          </div>
          <Button asChild className="h-auto bg-navy px-9 py-4 hover:bg-slate-deep"><Link to="/contact-us">Get Quote</Link></Button>
        </nav>
      </div>

      {open && (
        <div className="sticky top-0 z-50 bg-navy px-6 py-6 lg:hidden">
          {links.map(l => <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="block border-b border-on-dark/10 py-4 font-display text-xl font-semibold text-on-dark">{l.label}</Link>)}
          {serviceLinks.map(service => <Link key={service.to} to={service.to} onClick={() => setOpen(false)} className="block border-b border-on-dark/10 py-3 pl-4 font-display text-base font-semibold text-brand-light">{service.title}</Link>)}
          <Button asChild className="mt-6 w-full"><Link to="/contact-us" onClick={() => setOpen(false)}>Get Quote</Link></Button>
        </div>
      )}
    </>
  );
}
