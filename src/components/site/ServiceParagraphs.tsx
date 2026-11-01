import { Check } from "lucide-react";

// Keep source strings verbatim; recognise the original inline scope lists only.
export function ServiceParagraphs({ paragraphs, lead = false }: { paragraphs: string[]; lead?: boolean }) {
  const scopeIndex = paragraphs.findIndex(text => /^(Our Scope of Work|Our Services Include:|Our Service IncludeS)$/i.test(text));
  const scopeEnd = scopeIndex < 0 ? -1 : paragraphs.findIndex((text, index) => index > scopeIndex && /^BSM Provide/i.test(text));
  return <div className="space-y-4 text-sm leading-7 text-muted-foreground">{paragraphs.map((paragraph, index) => {
    if (scopeIndex >= 0 && index > scopeIndex && (scopeEnd < 0 || index < scopeEnd)) return null;
    if (index === scopeIndex) {
      const items = paragraphs.slice(scopeIndex + 1, scopeEnd < 0 ? paragraphs.length : scopeEnd);
      return <div key={index} className="service-scope border-y border-border py-5">
        <h3 className="mb-3 text-lg font-extrabold text-foreground">{paragraph}</h3>
        <ul className="grid gap-x-5 sm:grid-cols-2">{items.map((item, i) => <li key={i} className="flex items-start gap-3 py-2"><Check className="mt-1 size-4 shrink-0 text-primary" /><span>{item}</span></li>)}</ul>
      </div>;
    }
    if (paragraph.length < 90 && /^(Why |Affordable|Trusted and|BSM Engineering’s|BSM Provide)/.test(paragraph)) return <h3 key={index} className="pt-3 text-lg font-extrabold text-foreground">{paragraph}</h3>;
    return <p key={index} className={lead && index === 0 ? "service-lead" : undefined}>{paragraph}</p>;
  })}</div>;
}