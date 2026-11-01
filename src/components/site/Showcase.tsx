import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Users, Award, Headset } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { img, real, industries } from "./data";
import plumbing from "@/assets/svc-plumbing.jpg";
import waterproof from "@/assets/svc-waterproof.jpg";
import awning from "@/assets/svc-awning.jpg";
import hacking from "@/assets/svc-hacking.jpg";

const eng = [
  { name: "Reinstatement", text: "Restoring offices and commercial spaces to handover condition.", image: img.ceiling },
  { name: "Electrical Installations", text: "Power, lighting and distribution for commercial and industrial sites.", image: img.electrical },
  { name: "Ceiling Works", text: "False ceilings, grid systems and finishing.", image: img.ceiling },
  { name: "Awning Works", text: "Glass and aluminium canopies for shopfronts and entrances.", image: awning },
  { name: "Plumbing", text: "Piping, sanitary and water systems.", image: plumbing },
  { name: "Waterproofing", text: "Membrane and liquid systems for roofs and wet areas.", image: waterproof },
  { name: "Hacking", text: "Controlled hacking and demolition works.", image: hacking },
  { name: "Drywall Partitions", text: "Fast, clean partitioning for interior layouts.", image: img.ceiling },
  { name: "Bus Duct Works", text: "Bus duct and cable tray installation.", image: img.electrical },
  { name: "Mezzanine Works", text: "Steel mezzanine floors for added space.", image: img.warehouse },
];

/* ---------- Engineering & Construction: interactive showcase ---------- */
export function Engineering() {
  const [a, setA] = useState(0);
  const cur = eng[a] ?? eng[0]!;
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">02 — Services</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none text-navy sm:text-6xl">Engineering<br />& Construction</h2>
          </div>
          <p className="max-w-sm text-muted-foreground lg:ml-auto">An in-house team of BCA CoreTrade masons, electricians, plumbers, partition and false ceiling specialists — for commercial, office, HDB and residential sites.</p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          {/* Big image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] lg:aspect-auto lg:min-h-[620px]">
            {eng.map((e, i) => (
              <img key={e.name} src={e.image} alt={e.name} loading="lazy"
                className={cn("absolute inset-0 h-full w-full object-cover transition-all duration-700", i === a ? "scale-100 opacity-100" : "scale-105 opacity-0")} />
            ))}
            <div className="absolute inset-0 bg-overlay-tile" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <span className="font-display text-7xl font-extrabold leading-none text-on-dark/20 lg:text-9xl">{String(a + 1).padStart(2, "0")}</span>
              <h3 className="-mt-6 font-display text-3xl font-bold text-on-dark lg:text-4xl">{cur.name}</h3>
              <p className="mt-2 max-w-md text-on-dark-muted">{cur.text}</p>
            </div>
          </div>

          {/* Service list */}
          <ul className="grid content-center">
            {eng.map((e, i) => (
              <li key={e.name}>
                <button onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)}
                  className={cn("group flex w-full items-center justify-between border-b border-border py-4 text-left transition-all", i === a && "border-brand pl-4")}>
                  <span className="flex items-baseline gap-5">
                    <span className={cn("font-display text-xs font-bold", i === a ? "text-brand" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("font-display text-xl font-semibold transition sm:text-2xl", i === a ? "text-navy" : "text-navy/55")}>{e.name}</span>
                  </span>
                  <span className={cn("grid h-9 w-9 place-items-center rounded-full transition", i === a ? "bg-brand text-on-dark" : "text-transparent")}>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why BSM: full-bleed image with glass panels ---------- */
const reasons = [
  { icon: Users, t: "Skilled Workforce", d: "Trained trades and site professionals ready to deploy." },
  { icon: Award, t: "Quality Commitment", d: "Workmanship that meets handover standards." },
  { icon: ShieldCheck, t: "Safety-Focused", d: "Safety supervision built into every site." },
  { icon: Headset, t: "Reliable Support", d: "Responsive coordination from start to finish." },
];
export function WhyBSM() {
  return (
    <section className="relative overflow-hidden">
      <img src={real.lifting} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-background/90" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="eyebrow">Why BSM</p>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] text-navy sm:text-7xl">Built on people.<br /><span className="text-brand">Proven on site.</span></h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-lg text-muted-foreground lg:ml-auto">Businesses across Singapore rely on us for workforce and construction support that simply gets the job done.</p>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, t, d }, k) => (
            <Reveal key={t} delay={k * 120}>
              <div className="group relative h-full overflow-hidden rounded-tr-[2.5rem] border border-border bg-background shadow-lg p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-brand">
                <span className="absolute right-6 top-4 font-display text-6xl font-extrabold text-navy/10">{String(k + 1).padStart(2, "0")}</span>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-on-dark transition group-hover:bg-navy"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-8 font-display text-xl font-bold text-navy group-hover:text-on-dark">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-on-dark">{d}</p>
                <span className="absolute bottom-0 left-0 h-1 w-full bg-brand-light" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries: expanding panels ---------- */
export function Industries() {
  const [a, setA] = useState(0);
  return (
    <section id="industries" className="bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none sm:text-6xl">Sectors we serve</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Trusted across five core sectors in Singapore.</p>
        </Reveal>

        <div className="flex flex-col gap-3 lg:h-[560px] lg:flex-row">
          {industries.map((x, i) => {
            const on = i === a;
            return (
              <button key={x.name} onMouseEnter={() => setA(i)} onClick={() => setA(i)}
                className={cn("group relative h-56 overflow-hidden rounded-tr-[3rem] text-left transition-all duration-700 ease-out lg:h-auto",
                  on ? "lg:flex-[4]" : "lg:flex-1")}>
                <img src={x.image} alt={x.name} loading="lazy" className={cn("absolute inset-0 h-full w-full object-cover transition duration-700", on ? "scale-100" : "scale-110")} />
                <div className={cn("absolute inset-0 transition duration-500", on ? "bg-overlay-tile" : "bg-navy/70")} />
                <span className="absolute left-6 top-6 font-display text-sm font-bold text-brand-light">{String(i + 1).padStart(2, "0")}</span>
                {/* collapsed vertical label */}
                <span className={cn("absolute bottom-8 left-1/2 hidden origin-bottom-left -translate-x-1/2 whitespace-nowrap font-display text-lg font-bold text-on-dark transition lg:block lg:[writing-mode:vertical-rl] lg:rotate-180 lg:translate-x-[-50%]",
                  on ? "opacity-0" : "opacity-100")}>{x.name}</span>
                {/* expanded label */}
                <div className={cn("absolute bottom-0 left-0 right-0 p-8 transition duration-500", on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-100 lg:opacity-0")}>
                  <h3 className="font-display text-2xl font-bold text-on-dark lg:text-4xl">{x.name}</h3>
                  <span className="mt-4 hidden h-1 w-16 bg-brand lg:block" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (from bsmengg.com) ---------- */
const quotes = [
  { n: "Mr Wong", i: "https://bsmengg.com/wp-content/uploads/2024/10/Client-1.jpg.webp", q: "BSM Engineering has been fantastic in providing skilled and reliable workers. Their efficiency and professionalism make them our go-to for manpower needs. Highly recommended!" },
  { n: "Faizal", i: "https://bsmengg.com/wp-content/uploads/2024/10/Client-2.png.webp", q: "We hired them to do our ceiling work and are quite happy to work with them. They are very professional, efficient, and delivered excellent results." },
  { n: "Jacob Tan", i: "https://bsmengg.com/wp-content/uploads/2024/10/Client-3.jpg.webp", q: "Great work! We hired them to handle our glass roof project, and they did an excellent job. The work was completed on time, with high quality and professionalism." },
];
export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-offwhite py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">Testimonial</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase text-navy sm:text-5xl">What our clients say</h2>
          <div className="mt-5 flex items-center justify-center gap-2"><span className="h-1 w-1.5 bg-brand" /><span className="h-1 w-24 bg-brand" /><span className="h-1 w-1.5 bg-brand" /></div>
        </Reveal>
        <div className="mt-16 grid gap-x-8 gap-y-20 lg:grid-cols-3">
          {quotes.map((x, k) => (
            <Reveal key={x.n} delay={k * 120}>
              <figure className={cn("group relative flex h-full flex-col items-center bg-background px-8 pb-20 pt-10 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:border-brand", k === 1 ? "border-2 border-brand" : "border-2 border-border")}>
                <span className="font-display text-7xl font-extrabold leading-[0.6] text-brand">”</span>
                <div className="mt-6 flex gap-1 text-brand">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-6 flex-1 leading-loose text-foreground/80">{x.q}</blockquote>
                <figcaption className="mt-6 font-display text-xl font-extrabold uppercase tracking-wider text-brand">{x.n}</figcaption>
                <img src={x.i} alt={x.n} loading="lazy" className="absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-4 border-brand bg-background object-cover" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
