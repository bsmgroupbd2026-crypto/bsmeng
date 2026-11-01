import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Sections";
import { PageBanner } from "@/components/site/PageBanner";
import { Button } from "@/components/ui/button";
import original from "@/components/site/site-original.json";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [
    { title: "Client Testimonials | BSM Engineering Singapore" },
    { name: "description", content: "Read original BSM Engineering client testimonials on reinstatement, ceiling and glass roof work in Singapore." },
    { property: "og:title", content: "Testimonials | BSM Engineering & Construction" },
    { property: "og:description", content: "What our clients say about BSM Engineering's construction and restoration work." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: TestimonialsPage,
});

function TestimonialsPage() {
  return <><Header /><main><PageBanner title="Testimonials" />
    <section className="bg-offwhite py-10"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="eyebrow">Our Clients</p><h2 className="mt-4 text-3xl font-extrabold">What our clients say</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Don't just take our word for it; rather, check what our clients have to say about us.</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">{original.testimonials.map(review => <figure key={review.name} className="flex flex-col rounded-md border border-border bg-background p-7"><Quote className="h-9 w-9 text-brand" /><div aria-label="5 out of 5 stars" className="my-5 flex gap-1 text-brand">{Array.from({length:5},(_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><blockquote className="flex-1 text-base leading-8">{review.quote}</blockquote><figcaption className="mt-7 flex items-center gap-4 border-t border-border pt-5"><img src={review.image} alt={review.name} className="h-16 w-16 rounded-full border-2 border-brand object-cover" /><span className="font-display font-extrabold text-brand">{review.name}</span></figcaption></figure>)}</div>
      <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-7"><h2 className="text-xl font-bold">Your next project starts here.</h2><Button asChild><Link to="/contact-us">Send Enquiry <ArrowUpRight /></Link></Button></div>
    </div></section>
  </main><Footer /></>;
}