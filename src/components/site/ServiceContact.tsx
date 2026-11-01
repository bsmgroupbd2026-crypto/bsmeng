import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "./Header";

export function ServiceContact({ service }: { service: string }) {
  return <>
    <h2 className="border-b-2 border-brand pb-3 font-display text-lg font-extrabold uppercase">Quick Contact</h2>
    <form className="mt-5 grid gap-4" onSubmit={event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const body = `Hello BSM Engineering,\n\nService: ${service}\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`;
      window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
    }}>
      {[["name", "Name", "text"], ["email", "Email Address", "email"], ["phone", "Phone", "tel"], ["subject", "Subject", "text"]].map(([name, label, type]) => <label key={name} className="text-xs font-semibold text-muted-foreground">{label}<input name={name} type={type} required={name !== "phone"} defaultValue={name === "subject" ? `${service} enquiry` : undefined} className="mt-2 h-11 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-brand" /></label>)}
      <label className="text-xs font-semibold text-muted-foreground">Message<textarea name="message" required rows={4} className="mt-2 w-full rounded-sm border border-input bg-background p-3 text-sm text-foreground outline-none focus:border-brand" /></label>
      <Button type="submit" className="h-11">Send via Email <ArrowUpRight /></Button>
    </form>
    <h3 className="mb-5 mt-8 border-b-2 border-brand pb-3 text-lg font-extrabold uppercase">Get In Touch</h3>
    <div className="space-y-4 text-sm leading-6 text-muted-foreground">
      <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />{contact.address.join(", ")}</p>
      {contact.emails.map(email => <a key={email} href={`mailto:${email}`} className="flex items-start gap-3 break-all hover:text-brand"><Mail className="mt-1 h-4 w-4 shrink-0 text-brand" />{email}</a>)}
      <a href={`tel:${contact.tel}`} className="flex gap-3 hover:text-brand"><Phone className="mt-1 h-4 w-4 shrink-0 text-brand" />{contact.phone}</a>
      <p className="flex gap-3"><Clock className="mt-1 h-4 w-4 shrink-0 text-brand" />{contact.hours}</p>
    </div>
  </>;
}