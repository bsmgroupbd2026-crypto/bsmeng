import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Eye, Gem, Lightbulb, Phone, Target } from "lucide-react";
import { Header, contact } from "@/components/site/Header";
import { Credentials, Footer } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { real, img } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | BSM Engineering & Construction Singapore" },
      { name: "description", content: "BSM Engineering — a Singapore construction company specialising in reinstatement and repair works, with an in-house team of skilled tradesmen." },
      { property: "og:title", content: "About BSM Engineering & Construction" },
      { property: "og:description", content: "Dedicated reinstatement and repair works across Singapore — on time, on budget, to handover standard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Lightbulb,
    t: "Vision",
    d: "To be a leader in the construction repairing industry by improving our quality and service.",
  },
  {
    icon: Target,
    t: "Mission",
    d: "To provide valued construction services to our consumers using our experience in the design, repair, and installation of building components.",
  },
  {
    icon: Gem,
    t: "Values",
    d: "Quality service, customer satisfaction, good practice for safety, health & environment — and continuously training our employees to improve their skill.",
  },
];

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page banner */}
        <section className="relative overflow-hidden bg-navy">
          <img src={real.scaffold} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <p className="eyebrow text-brand-light">Who We Are</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-none text-on-dark sm:text-7xl">About Us</h1>
            <p className="mt-6 max-w-xl text-lg text-on-dark-muted">
              A full-service company offering handyman solutions and repair services from start to finish.
            </p>
            <nav className="mt-10 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-on-dark-muted">
              <Link to="/" className="transition hover:text-brand-light">Home</Link>
              <ChevronRight className="h-4 w-4 text-brand-light" />
              <span className="text-brand-light">About Us</span>
            </nav>
          </div>
        </section>

        {/* Who we are */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <Reveal>
              <p className="eyebrow">Who We Are</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl">
                Specialists in reinstatement <span className="text-brand">& repair works.</span>
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                <p>BSM Engineering is a construction company specialised in providing dedicated reinstatement and repair works services.</p>
                <p>With the team's expertise, we are able to work on-site during normal business hours as well as after-hours for those who need their premises restored quickly.</p>
                <p>What sets us apart from our competitors is that we have an in-house team of tradesmen who can carry out all necessary repairs and restoration work with minimal fuss and disruption to your daily routine.</p>
                <p>We can be mobilised at short notice for carrying out any challenging works to meet customers' and landlords' requirements professionally and on time.</p>
              </div>
              <a href="/#contact" className="group mt-10 inline-flex items-center gap-3 font-display font-bold text-navy">
                <span className="border-b-2 border-brand pb-1">Start a project with us</span>
                <ArrowUpRight className="h-5 w-5 text-brand transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Reveal>
            <Reveal delay={150} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-tr-[6rem] rounded-bl-[6rem] sm:aspect-[5/4] lg:ml-16">
                <img src={real.blueprint} alt="BSM engineers reviewing building plans on site" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-10 left-0 hidden w-[42%] border-8 border-background shadow-2xl sm:block">
                <img src={real.rebar} alt="Rebar and formwork on site" className="aspect-[3/4] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -right-6 top-10 hidden h-40 w-1 bg-brand lg:block" />
            </Reveal>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="relative overflow-hidden bg-offwhite py-16 lg:py-24">
          <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="eyebrow">Why Choose</p>
                <h2 className="mt-5 font-display text-5xl font-extrabold leading-none text-navy sm:text-6xl">What drives us</h2>
              </div>
              <p className="max-w-sm text-muted-foreground lg:ml-auto">When you need a team of professionals to handle any challenging job, we are here for your service.</p>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map(({ icon: Icon, t, d }, k) => (
                <Reveal key={t} delay={k * 120}>
                  <div className="group relative h-full overflow-hidden rounded-tr-[2.5rem] border border-border bg-background p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:bg-navy lg:p-10">
                    <span className="absolute right-6 top-4 font-display text-6xl font-extrabold text-navy/10 transition group-hover:text-on-dark/10">{String(k + 1).padStart(2, "0")}</span>
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-on-dark transition group-hover:bg-brand-light group-hover:text-navy"><Icon className="h-6 w-6" /></span>
                    <h3 className="mt-8 font-display text-2xl font-bold text-navy transition group-hover:text-on-dark">{t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition group-hover:text-on-dark-muted">{d}</p>
                    <span className="absolute bottom-0 left-0 h-1 w-full bg-brand" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">On The Ground</p>
                <h2 className="mt-5 font-display text-4xl font-extrabold leading-none text-navy sm:text-5xl">Our people, our work</h2>
              </div>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { image: real.welder, label: "Welders" },
                { image: real.rigger, label: "Riggers & Signalmen" },
                { image: real.me, label: "M&E Technicians" },
                { image: real.supervisor, label: "Site Supervisors" },
              ].map((x, k) => (
                <Reveal key={x.label} delay={k * 100}>
                  <figure className="group relative aspect-[3/4] overflow-hidden rounded-tr-[3rem]">
                    <img src={x.image} alt={x.label} loading="lazy" className="img-zoom h-full w-full object-cover group-hover:scale-105" />
                    <div className="absolute inset-0 bg-overlay-tile opacity-80 transition group-hover:opacity-100" />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-6 font-display text-lg font-bold text-on-dark">{x.label}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Credentials />

        {/* CTA */}
        <section className="relative overflow-hidden">
          <img src={img.hero3} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-20 text-center lg:px-10 lg:py-28">
            <Reveal>
              <h2 className="font-display text-4xl font-extrabold leading-tight text-on-dark sm:text-6xl">Ready to restore<br /><span className="text-brand-light">your space?</span></h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap justify-center gap-4">
              <a href="/#contact" className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-brand">
                Send Enquiry <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href={`tel:${contact.tel}`} className="inline-flex items-center gap-2 border border-on-dark/40 px-8 py-4 text-sm font-semibold text-on-dark transition hover:bg-on-dark hover:text-navy">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
