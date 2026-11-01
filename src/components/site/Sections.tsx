import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/bsm-logo.jpeg.asset.json";
import certIso from "@/assets/cert-iso.png.asset.json";
import certGebiz from "@/assets/cert-gebiz.png.asset.json";
import certBca from "@/assets/cert-bca.png.asset.json";
import certBizsafe from "@/assets/cert-bizsafe.png.asset.json";
import { serviceLinks } from "./service-links";
import { contact } from "./Header";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
export { Engineering, WhyBSM, Industries, Testimonials } from "./Showcase";
import { real, img, manpower, engineering, industries, work } from "./data";

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="relative lg:col-span-7">
          <div className="aspect-[4/5] overflow-hidden rounded-tr-[6rem] rounded-bl-[6rem] sm:aspect-[5/4] lg:mr-16">
            <img src={real.blueprint} alt="Engineers reviewing building plans on site" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-10 right-0 hidden w-[42%] border-8 border-background shadow-2xl sm:block">
            <img src={real.scaffold} alt="Scaffolding works" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -left-6 top-10 hidden h-40 w-1 bg-brand lg:block" />
        </Reveal>
        <Reveal className="lg:col-span-5" delay={150}>
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Engineering Strength.<br /><span className="text-brand">Workforce Excellence.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            A Singapore construction and manpower partner with an in-house team of BCA CoreTrade masons, electricians, plumbers, partition and ceiling specialists.
          </p>
          <a href="#services" className="group mt-10 inline-flex items-center gap-3 font-display font-bold text-navy">
            <span className="border-b-2 border-brand pb-1">Discover our capabilities</span>
            <ArrowUpRight className="h-5 w-5 text-brand transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Tile({ name, image, className = "", index }: { name: string; image: string; className?: string; index?: string }) {
  return (
    <a href="#contact" className={`group relative block overflow-hidden bg-navy ${className}`}>
      <img src={image} alt={name} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
      <div className="absolute inset-0 bg-overlay-tile opacity-90 transition group-hover:opacity-100" />
      {index && <span className="absolute left-5 top-5 font-display text-xs font-bold tracking-widest text-on-dark-muted">{index}</span>}
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
        <h4 className="font-display text-lg font-bold text-on-dark sm:text-xl">{name}</h4>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-light opacity-0 transition group-hover:opacity-100" />
      </div>
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
    </a>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-offwhite">
      {/* Manpower */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">01 — Services</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none sm:text-7xl">Manpower<br />Solutions</h2>
          </Reveal>
          <Reveal delay={100}><p className="max-w-md text-lg text-muted-foreground lg:ml-auto">Skilled, safety-trained personnel for construction and industrial sites.</p></Reveal>
        </div>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {[{ name: "Construction Workers", image: real.manpower }, ...manpower.slice(1)].map((m, k) => (
            <Reveal key={m.name} delay={(k % 3) * 100}>
              <Link to="/manpower-supply" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem]">
                  <img src={m.image} alt={m.name} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{m.name}</h3>
                <span className="mt-4 inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-semibold text-navy">
                  Request Workers <ArrowUpRight className="h-4 w-4 text-brand transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ---------- Projects ---------- */
export function Projects() {
  return (
    <section id="projects" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Our Work</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none text-navy sm:text-6xl">On site,<br /><span className="text-brand">every day.</span></h2>
          </div>
          <p className="max-w-sm text-muted-foreground lg:ml-auto">A look at the kinds of work our teams deliver across Singapore.</p>
        </Reveal>
        <div className="grid gap-3 md:grid-cols-12">
          {work.map((w, k) => (
            <figure key={w.label} className={`group relative overflow-hidden ${["md:col-span-7 aspect-[16/10]", "md:col-span-5 aspect-[4/5] md:aspect-auto", "md:col-span-4 aspect-square", "md:col-span-4 aspect-square", "md:col-span-4 aspect-square"][k]}`}>
              <img src={w.image} alt={w.label} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/40" />
              <figcaption className="absolute bottom-0 left-0 bg-background px-5 py-4">
                <span className="block font-display text-[10px] font-bold uppercase tracking-[0.25em] text-brand">{w.cat}</span>
                <span className="font-display font-bold text-navy">{w.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Credentials ---------- */
export function Credentials() {
  const certs = [
    { src: certIso.url, t: "ISO 9001:2015" },
    { src: certGebiz.url, t: "GeBIZ" },
    { src: certBca.url, t: "BCA" },
    { src: certBizsafe.url, t: "bizSAFE Star" },
  ];
  return (
    <section className="bg-background py-14 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow justify-center">We are certified by</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold">Credentials you can trust</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 items-center gap-10 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c.t} className="flex h-32 items-center justify-center bg-background px-6 transition hover:-translate-y-1">
              <img src={c.src} alt={`${c.t} certification logo`} className="max-h-24 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
const field = "w-full border-0 border-b border-border bg-transparent py-3 text-navy placeholder:text-muted-foreground focus:border-brand focus:outline-none";
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img src={img.hero1} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <Reveal>
          <p className="eyebrow">Start a Project</p>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] text-navy sm:text-7xl">Let's Build Something Great Together.</h2>
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const body = Array.from(data.entries()).map(([key,value]) => `${key}: ${value}`).join("\n"); window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent("BSM Engineering enquiry")}&body=${encodeURIComponent(body)}`; }} className="grid gap-6 bg-background p-8 shadow-2xl border border-border sm:grid-cols-2 lg:p-10">
            <input name="Company" aria-label="Company Name" required className={field} placeholder="Company Name" />
            <input name="Name" aria-label="Contact Person" required className={field} placeholder="Contact Person" />
            <input name="Email" aria-label="Email" required type="email" className={field} placeholder="Email" />
            <input name="Phone" aria-label="Phone" className={field} placeholder="Phone" />
            <select name="Service" aria-label="Service Required" required defaultValue="" className={`${field} sm:col-span-2 [&>option]:text-navy`}>
              <option value="" disabled>Service Required</option>
              <option>Manpower Solutions</option>
              {engineering.map((s) => <option key={s}>{s}</option>)}
            </select>
            <textarea name="Message" aria-label="Message" rows={3} className={`${field} sm:col-span-2 resize-none`} placeholder="Message" />
            <Button type="submit" className="h-12 sm:col-span-2">Send via Email <ArrowUpRight /></Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

const footLinks = [{label:"About Us",to:"/about"},{label:"Services",to:"/services"},{label:"Projects",to:"/projects"},{label:"Gallery",to:"/gallery"},{label:"Testimonials",to:"/testimonials"},{label:"Get a Quote",to:"/get-a-quote"},{label:"Contact Us",to:"/contact-us"}] as const;
function FootTitle({ children }: { children: string }) {
  return (
    <div className="mb-8">
      <h4 className="font-display text-lg font-extrabold uppercase tracking-[0.12em] text-on-dark">{children}</h4>
      <div className="mt-4 flex items-center gap-1.5"><span className="h-1 w-24 bg-brand" /><span className="h-1 w-1.5 bg-brand" /><span className="h-1 w-1.5 bg-brand" /></div>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="bg-navy text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1.1fr_0.8fr_1.2fr] lg:px-10">
        <div className="text-center lg:text-left">
          <img src={logo.url} alt="BSM Engineering" className="mx-auto h-28 w-auto lg:mx-0" loading="lazy" />
          <a href="tel:+6569800553" className="mt-6 block font-display text-3xl font-extrabold hover:text-brand-light">(+65) 6980 0553</a>
          <p className="mt-6 text-sm leading-7 text-on-dark-muted">BSM Engineering is a construction company specialized in providing dedicated reinstatement and repair works services. With the team’s expertise, we are able to work on-site during normal business hours as well as after-hours for those who need their premises restored quickly.</p>
        </div>
        <div>
          <FootTitle>Popular Services</FootTitle>
          <ul className="space-y-3">{serviceLinks.map(service => <li key={service.to}><Link to={service.to} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide transition hover:translate-x-1 hover:text-brand-light"><span className="text-brand">—</span>{service.title}</Link></li>)}</ul>
        </div>
        <div>
          <FootTitle>Useful Link</FootTitle>
          <ul className="space-y-4">{footLinks.map(link => <li key={link.to}><Link to={link.to} className="flex items-center gap-3 text-sm transition hover:translate-x-1 hover:text-brand-light"><span className="text-brand">—</span>{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <FootTitle>Contact Info</FootTitle>
          <ul className="space-y-7">
            <FootContact icon={Mail} t="Email" href="mailto:enquiry@bsmengg.com" lines={["enquiry@bsmengg.com"]} />
            <FootContact icon={Phone} t="Contact Us" href="tel:+6569800553" lines={["+65 6980 0553"]} />
            <FootContact icon={MapPin} t="Address" lines={["5 Soon Lee St, #04-49", "Pioneer Point, Singapore 627607"]} />
          </ul>
        </div>
      </div>
      <div className="bg-brand py-5 text-center text-sm text-on-dark">Copyright © {new Date().getFullYear()} BSM Engineering & Construction Pte Ltd. All Rights Reserved.</div>
    </footer>
  );
}
function FootContact({ icon: Icon, t, lines, href }: { icon: typeof Mail; t: string; lines: string[]; href?: string }) {
  const body = <><p className="font-display text-sm font-bold uppercase tracking-[0.15em]">{t}</p>{lines.map((l) => <p key={l} className="text-sm text-on-dark-muted">{l}</p>)}</>;
  return (
    <li className="flex items-center gap-4">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand"><Icon className="h-6 w-6" /></span>
      <div>{href ? <a href={href} className="hover:text-brand-light">{body}</a> : body}</div>
    </li>
  );
}
