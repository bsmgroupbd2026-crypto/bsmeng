import { Check, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "./Header";
import original from "./manpower-original.json";
import management from "@/assets/workforce-management.jpg.asset.json";
import services from "@/assets/workforce-services.jpg.asset.json";

const scope = ["Permanent Staffing", "Temporary Staffing", "Construction Manpower Management", "Customized Workforce Solutions", "Compliance with Industry Standards and Safety Regulations", "Skilled and Unskilled Labor for Various Sectors", "End-to-end Recruitment Process", "On-site Workforce Supervision", "Project-based Staffing Solutions", "Quick Deployment of Manpower", "Expertise in Multiple Industries"];

export function ManpowerContent() {
  return <>
    <section className="border-y border-border bg-offwhite py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.15fr_1fr] lg:px-10">
        <aside>
          <h2 className="border-b-2 border-brand pb-3 text-lg font-bold uppercase">Quick Contact</h2>
          <form className="mt-5 grid gap-4" onSubmit={event => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
            window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
          }}>
            {[["name","Name","text"],["email","Email Address","email"],["phone","Phone","tel"],["subject","Subject","text"]].map(([name,label,type]) => <label key={name} className="text-xs font-semibold text-muted-foreground">{label}<input required={name !== "phone"} name={name} type={type} className="mt-1 h-10 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-brand" /></label>)}
            <label className="text-xs font-semibold text-muted-foreground">Message<textarea required name="message" rows={3} className="mt-1 w-full rounded-sm border border-input bg-background p-3 text-sm text-foreground outline-none focus:border-brand" /></label>
            <Button type="submit" className="h-11">Send via Email <ArrowUpRight /></Button>
          </form>
          <h3 className="mb-5 mt-10 border-b-2 border-brand pb-3 text-lg font-bold uppercase">Get In Touch</h3>
          <div className="space-y-4 text-sm leading-6 text-muted-foreground">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />{contact.address.join(", ")}</p>
            {contact.emails.map(email => <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 break-all hover:text-brand"><Mail className="h-4 w-4 shrink-0 text-brand" />{email}</a>)}
            <a href={`tel:${contact.tel}`} className="flex items-center gap-3 hover:text-brand"><Phone className="h-4 w-4 text-brand" />{contact.phone}</a><p>{contact.hours}</p>
          </div>
        </aside>
        <div><p className="text-sm font-bold uppercase text-brand">Manpower Supply</p><h2 className="mt-2 text-2xl font-extrabold leading-tight">Affordable Manpower Supplier in Singapore</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{original.intro}</p><h3 className="mb-5 mt-8 border-l-4 border-brand pl-3 font-bold uppercase">Our Scope of Work</h3><ul className="space-y-3">{scope.map(item => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" />{item}</li>)}</ul></div>
        <div className="space-y-8"><img src={management.url} alt="Construction Manpower Management" className="aspect-[4/3] w-full rounded-md border border-border bg-background object-contain" loading="lazy" /><img src={services.url} alt="BSM manpower supply services" className="aspect-[4/3] w-full rounded-md object-cover" loading="lazy" /></div>
      </div>
    </section>
    <section className="bg-background py-12 lg:py-16"><div className="mx-auto max-w-7xl px-6 lg:px-10"><h2 className="border-b border-border pb-6 text-center text-3xl font-extrabold leading-tight">The Ways Of Manpower Outsourcing in Singapore</h2><div className="mt-8 space-y-10">{original.methods.map((method,index) => <div key={method.title} className="grid gap-5 border-b border-border pb-8 lg:grid-cols-[0.7fr_2fr]"><h3 className="text-xl font-bold"><span className="mb-2 block text-sm text-brand">0{index+1}</span>{method.title}</h3><div className="space-y-4 text-sm leading-7 text-muted-foreground">{method.blocks.map((block,k) => <p key={k}>{block.lead ? <><strong className="font-semibold text-foreground">{block.lead}</strong>{block.text.slice(block.lead.length)}</> : block.text}</p>)}</div></div>)}</div></div></section>
    <section className="bg-offwhite py-12 lg:py-16"><div className="mx-auto max-w-7xl px-6 lg:px-10"><h2 className="mb-8 border-b border-border pb-6 text-center text-3xl font-extrabold leading-tight">Manpower Outsourcing Solutions Across All Industries</h2><div className="mx-auto max-w-4xl space-y-5 text-sm leading-7 text-muted-foreground">{original.industries.map((block,index) => <p key={index} className={index === original.industries.length-1 ? "border-l-4 border-brand bg-background p-6 font-medium text-foreground" : ""}>{block.lead ? <><strong className="text-foreground">{block.lead}</strong>{block.text.slice(block.lead.length)}</> : block.text}</p>)}</div></div></section>
  </>;
}