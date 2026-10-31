import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/bsm-logo.jpeg.asset.json";
import { Reveal } from "./Reveal";
import { real, img, manpower, engineering, industries, work } from "./data";

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-36">
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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
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
              <a href="#contact" className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem]">
                  <img src={m.image} alt={m.name} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{m.name}</h3>
                <span className="mt-4 inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-semibold text-navy">
                  Request Workers <ArrowUpRight className="h-4 w-4 text-brand transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Engineering – dark split feature */}
      <div className="bg-navy">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 p-3 lg:p-0 lg:pr-3">
            <div className="col-span-2 aspect-[16/10] overflow-hidden lg:aspect-auto"><img src={img.ceiling} alt="Ceiling and drywall reinstatement" className="h-full w-full object-cover" loading="lazy" /></div>
            <div className="aspect-square overflow-hidden lg:aspect-auto"><img src={img.electrical} alt="Bus duct installation" className="h-full w-full object-cover" loading="lazy" /></div>
            <div className="aspect-square overflow-hidden lg:aspect-auto"><img src={img.warehouse} alt="Mezzanine works" className="h-full w-full object-cover" loading="lazy" /></div>
          </div>
          <div className="px-6 py-20 lg:px-16 lg:py-28">
            <Reveal>
              <p className="eyebrow text-brand-light">02 — Services</p>
              <h2 className="mt-5 font-display text-5xl font-extrabold leading-none text-on-dark sm:text-6xl">Engineering<br />& Construction</h2>
            </Reveal>
            <ul className="mt-12 border-t border-on-dark/10">
              {engineering.map((s, k) => (
                <li key={s} className="group flex items-center justify-between border-b border-on-dark/10 py-4 transition hover:pl-3">
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-xs font-bold text-brand">{String(k + 1).padStart(2, "0")}</span>
                    <span className="font-display text-xl font-semibold text-on-dark sm:text-2xl">{s}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-brand-light opacity-0 transition group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why BSM ---------- */
const reasons = [
  ["Skilled Workforce", "Trained trades and site professionals ready to deploy."],
  ["Quality Commitment", "Workmanship that meets handover standards."],
  ["Safety-Focused Operations", "Safety supervision built into every site."],
  ["Reliable Project Support", "Responsive coordination from start to finish."],
];
export function WhyBSM() {
  return (
    <section className="relative overflow-hidden bg-slate-deep">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <img src={img.hero3} alt="Engineers inspecting industrial equipment" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-navy/30" />
          <p className="absolute bottom-8 left-6 font-display text-[7rem] font-extrabold leading-none text-on-dark/15 lg:left-10 lg:text-[11rem]">BSM</p>
        </div>
        <div className="px-6 py-20 lg:px-20 lg:py-28">
          <Reveal>
            <p className="eyebrow text-brand-light">Why BSM</p>
            <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-tight text-on-dark sm:text-5xl">Built on people.<br />Proven on site.</h2>
          </Reveal>
          <div className="mt-14 space-y-10">
            {reasons.map(([t, d], k) => (
              <Reveal key={t} delay={k * 100} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-display text-4xl font-extrabold text-brand">{String(k + 1).padStart(2, "0")}</span>
                <div className="border-l border-on-dark/15 pl-6">
                  <h3 className="font-display text-xl font-bold text-on-dark">{t}</h3>
                  <p className="mt-1 text-on-dark-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */
export function Industries() {
  const [a, b, c, d, e] = industries as [typeof industries[number], typeof industries[number], typeof industries[number], typeof industries[number], typeof industries[number]];
  const Item = ({ x, cls }: { x: typeof a; cls: string }) => (
    <div className={`group relative overflow-hidden ${cls}`}>
      <img src={x.image} alt={x.name} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
      <div className="absolute inset-0 bg-overlay-tile" />
      <h3 className="absolute bottom-6 left-6 right-6 font-display text-2xl font-bold leading-tight text-on-dark lg:text-3xl">{x.name}</h3>
    </div>
  );
  return (
    <section id="industries" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none sm:text-6xl">Sectors we serve</h2>
          </div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">05 Industries</p>
        </Reveal>
        <div className="grid auto-rows-[260px] gap-3 md:grid-cols-6 md:auto-rows-[300px]">
          <Item x={a} cls="md:col-span-4 md:row-span-2 md:h-auto" />
          <Item x={c} cls="md:col-span-2 md:row-span-2" />
          <Item x={b} cls="md:col-span-2" />
          <Item x={d} cls="md:col-span-2" />
          <Item x={e} cls="md:col-span-2" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
export function Projects() {
  return (
    <section id="projects" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-brand-light">Our Work</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none text-on-dark sm:text-6xl">On site,<br />every day.</h2>
          </div>
          <p className="max-w-sm text-on-dark-muted lg:ml-auto">A look at the kinds of work our teams deliver across Singapore.</p>
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
  return (
    <section className="border-b bg-offwhite py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[auto_1fr] lg:px-10">
        <p className="eyebrow">Credentials</p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 font-display text-lg font-bold text-navy/80">
          <span>BCA CoreTrade Tradesmen</span>
          <span className="h-6 w-px bg-border" />
          <span className="text-sm font-medium text-muted-foreground">Verified certification logos will appear here.</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
const field = "w-full border-0 border-b border-on-dark/25 bg-transparent py-3 text-on-dark placeholder:text-on-dark-muted focus:border-brand-light focus:outline-none";
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img src={img.hero1} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-overlay-hero" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <Reveal>
          <p className="eyebrow text-brand-light">Start a Project</p>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] text-on-dark sm:text-7xl">Let's Build Something Great Together.</h2>
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch shortly."); }} className="grid gap-6 bg-navy/80 p-8 backdrop-blur-md sm:grid-cols-2 lg:p-10">
            <input required className={field} placeholder="Company Name" />
            <input required className={field} placeholder="Contact Person" />
            <input required type="email" className={field} placeholder="Email" />
            <input className={field} placeholder="Phone" />
            <select required defaultValue="" className={`${field} sm:col-span-2 [&>option]:text-navy`}>
              <option value="" disabled>Service Required</option>
              <option>Manpower Solutions</option>
              {engineering.map((s) => <option key={s}>{s}</option>)}
            </select>
            <textarea rows={3} className={`${field} sm:col-span-2 resize-none`} placeholder="Message" />
            <button className="bg-primary py-4 font-semibold text-primary-foreground transition hover:bg-brand sm:col-span-2">Send Enquiry</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-navy text-on-dark-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <img src={logo.url} alt="BSM Engineering" className="h-16 w-auto rounded-sm" width={86} height={64} loading="lazy" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">BSM Engineering & Construction Pte. Ltd. — engineering, construction and manpower solutions in Singapore.</p>
        </div>
        <FooterCol title="Services" items={["Manpower Solutions", "Reinstatement", "Ceiling Works", "Electrical", "Waterproofing"]} />
        <FooterCol title="Company" items={["About", "Industries", "Projects", "Contact"]} />
        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-on-dark">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-brand" /> Singapore</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-brand" /> +65 ____ ____</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-brand" /> info@bsmengg.com</li>
          </ul>
          <div className="mt-6 flex gap-4 text-sm font-semibold text-on-dark"><a href="#">LinkedIn</a><a href="#">Facebook</a><a href="#">WhatsApp</a></div>
        </div>
      </div>
      <div className="border-t border-on-dark/10 py-6 text-center text-xs">© {new Date().getFullYear()} BSM Engineering & Construction Pte. Ltd.</div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-on-dark">{title}</h4>
      <ul className="space-y-3 text-sm">{items.map((i) => <li key={i}><a href="#" className="hover:text-brand-light">{i}</a></li>)}</ul>
    </div>
  );
}
