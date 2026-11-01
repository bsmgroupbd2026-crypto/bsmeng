import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { Header, contact } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { ServiceContact } from "@/components/site/ServiceContact";
import { PageBanner } from "@/components/site/PageBanner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact-us")({
  head: () => ({ meta: [
    { title: "Contact BSM Engineering & Construction | Singapore" },
    { name: "description", content: "Contact BSM Engineering for manpower, reinstatement and construction enquiries. Visit us at Pioneer Point or call (+65) 6980 0553." },
    { property: "og:title", content: "Contact Us | BSM Engineering Singapore" },
    { property: "og:description", content: "Discuss your manpower and construction requirements with BSM Engineering." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <><Header /><main><PageBanner title="Contact Us" />
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_1fr] lg:px-10">
      <section><p className="eyebrow">Get in touch</p><h2 className="mb-8 mt-4 text-3xl font-extrabold">BSM Engineering<br />& Construction Pte. Ltd.</h2>
        <div className="divide-y divide-border border-y border-border">
          <div className="flex gap-4 py-5"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><h3 className="font-bold">Address</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{contact.address.join(", ")}</p><Button asChild variant="link" className="mt-2 h-auto p-0"><a href="https://www.google.com/maps/search/?api=1&query=5+Soon+Lee+Street+Pioneer+Point+Singapore+627607" target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight /></a></Button></div></div>
          <div className="flex gap-4 py-5"><Phone className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><h3 className="font-bold">Call Us</h3><a className="mt-2 block text-xl font-semibold hover:text-brand" href={`tel:${contact.tel}`}>{contact.phone}</a></div></div>
          <div className="flex gap-4 py-5"><Mail className="mt-1 h-5 w-5 shrink-0 text-brand" /><div className="min-w-0"><h3 className="font-bold">Email Us</h3>{contact.emails.map(email => <a key={email} href={`mailto:${email}`} className="mt-2 block break-all text-sm text-muted-foreground hover:text-brand">{email}</a>)}</div></div>
          <div className="flex gap-4 py-5"><Clock className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><h3 className="font-bold">Opening Hours</h3><p className="mt-2 text-sm text-muted-foreground">{contact.hours}</p></div></div>
        </div>
      </section>
      <section className="border-l-2 border-brand bg-offwhite p-6 sm:p-8"><ServiceContact service="Construction & Manpower" /></section>
    </div>
    <section className="border-t border-border"><iframe title="BSM Engineering location at Pioneer Point" src="https://maps.google.com/maps?q=5%20Soon%20Lee%20Street%20Pioneer%20Point%20Singapore%20627607&output=embed" className="h-80 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
  </main><Footer /></>;
}