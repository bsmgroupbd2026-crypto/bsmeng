import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, BadgeCheck, CalendarCheck, ClipboardList, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Header, contact } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { PageBanner } from "@/components/site/PageBanner";
import { Button } from "@/components/ui/button";
import { serviceLinks } from "@/components/site/service-links";
import { img } from "@/components/site/data";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({ meta: [
    { title: "Get a Quote | BSM Engineering & Construction Singapore" },
    { name: "description", content: "Request a free quote from BSM Engineering for manpower supply, reinstatement, electrical, waterproofing and other construction works in Singapore." },
    { property: "og:title", content: "Get a Quote | BSM Engineering Singapore" },
    { property: "og:description", content: "Tell us about your project and get a detailed quotation from BSM Engineering & Construction." },
    { property: "og:image", content: img.hero2 },
    { name: "twitter:image", content: img.hero2 },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: QuotePage,
});

const steps = [
  { icon: ClipboardList, title: "Share your requirements", text: "Pick the service, tell us the scope, site location and when you need it." },
  { icon: BadgeCheck, title: "Get a detailed quote", text: "We review your request and reply with pricing, manpower and timeline." },
  { icon: CalendarCheck, title: "We mobilise the team", text: "Once you approve, our workers, supervisors and engineers get to work." },
];

const timelines = ["Immediate", "Within 1–2 weeks", "1–2 months", "Flexible / planning ahead"];

const field = "h-11 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-brand";
const fieldArea = "w-full rounded-sm border border-input bg-background p-3 text-sm text-foreground outline-none focus:border-brand";
const labelCls = "text-xs font-semibold text-muted-foreground";

function QuotePage() {
  const [service, setService] = useState("");
  return <><Header /><main>
    <PageBanner title="Get a Quote" image={img.hero2} />

    {/* Steps */}
    <section className="border-b border-border bg-background py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-3 lg:px-10">
        {steps.map((step, i) => <div key={step.title} className="flex gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-brand text-on-dark"><step.icon className="h-5 w-5" /></span>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-brand">Step {i + 1}</p>
            <h2 className="mt-1 font-display text-lg font-extrabold">{step.title}</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </div>
        </div>)}
      </div>
    </section>

    {/* Form + aside */}
    <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
      <section>
        <p className="eyebrow">Quote request</p>
        <h2 className="mb-6 mt-3 text-2xl font-extrabold sm:text-3xl">Tell us about your project</h2>
        <form className="grid gap-5 sm:grid-cols-2" onSubmit={event => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const body = `Hello BSM Engineering,\n\nQuote Request\nService: ${data.get("service")}\nCompany: ${data.get("company")}\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nSite Location: ${data.get("location")}\nTimeline: ${data.get("timeline")}\n\nProject details:\n${data.get("details")}`;
          window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(`Quote request — ${String(data.get("service"))}`)}&body=${encodeURIComponent(body)}`;
        }}>
          <label className={labelCls}>Service Required
            <select name="service" required value={service} onChange={e => setService(e.target.value)} className={`mt-2 ${field} [&>option]:text-foreground`}>
              <option value="" disabled>Select a service</option>
              {serviceLinks.map(s => <option key={s.to} value={s.title}>{s.title}</option>)}
              <option>Manpower Supply</option>
              <option>Other / Not sure yet</option>
            </select>
          </label>
          <label className={labelCls}>Company Name<input name="company" required className={`mt-2 ${field}`} /></label>
          <label className={labelCls}>Contact Person<input name="name" required className={`mt-2 ${field}`} /></label>
          <label className={labelCls}>Email Address<input name="email" type="email" required className={`mt-2 ${field}`} /></label>
          <label className={labelCls}>Phone Number<input name="phone" type="tel" className={`mt-2 ${field}`} /></label>
          <label className={labelCls}>Site Location / Address<input name="location" required className={`mt-2 ${field}`} placeholder="e.g. Jurong East, Singapore" /></label>
          <label className={labelCls}>When do you need it?
            <select name="timeline" required defaultValue="" className={`mt-2 ${field} [&>option]:text-foreground`}>
              <option value="" disabled>Select a timeline</option>
              {timelines.map(t => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className={labelCls}>Project Details<textarea name="details" required rows={5} className={`mt-2 sm:col-span-2 ${fieldArea}`} placeholder="Describe the scope of work, site conditions, man-days needed or anything else we should know." /></label>
          <Button type="submit" className="h-12 sm:col-span-2">Request Quote via Email <ArrowUpRight /></Button>
          <p className="text-xs text-muted-foreground sm:col-span-2">Submitting opens a pre-filled email to {contact.emails[0]} — add photos or drawings to the message before sending.</p>
        </form>
      </section>

      <aside className="space-y-6">
        <div className="border-t-4 border-brand bg-offwhite p-6">
          <h2 className="border-b-2 border-brand pb-3 font-display text-lg font-extrabold uppercase">Direct Contact</h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
            <a href={`tel:${contact.tel}`} className="flex items-center gap-3 hover:text-brand"><Phone className="h-4 w-4 shrink-0 text-brand" />{contact.phone}</a>
            {contact.emails.map(email => <a key={email} href={`mailto:${email}`} className="flex items-start gap-3 break-all hover:text-brand"><Mail className="mt-1 h-4 w-4 shrink-0 text-brand" />{email}</a>)}
            <p className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />{contact.address.join(", ")}</p>
            <p className="flex items-start gap-3"><Clock className="mt-1 h-4 w-4 shrink-0 text-brand" />{contact.hours}</p>
          </div>
        </div>
        <div className="bg-navy p-6 text-on-dark">
          <h3 className="flex items-center gap-2 font-display text-base font-extrabold uppercase"><ShieldCheck className="h-5 w-5 text-brand-light" />Why request a quote</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-on-dark-muted">
            <li>Free, no-obligation quotation with manpower and timeline breakdown.</li>
            <li>ISO 9001:2015 certified, bizSAFE Star and BCA registered processes.</li>
            <li>On-site works during normal business hours or after-hours.</li>
          </ul>
        </div>
      </aside>
    </div>
  </main><Footer /></>;
}
