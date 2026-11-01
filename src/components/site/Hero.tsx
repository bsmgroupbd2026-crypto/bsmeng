import { ArrowUpRight, Phone } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import poster from "@/assets/hero-1.jpg";
import { contact } from "./Header";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] max-h-[860px] min-h-[620px] overflow-hidden bg-navy">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-overlay-hero" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-10 lg:px-10">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="eyebrow mb-6 text-brand-light">Engineering & Construction</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-on-dark sm:text-6xl lg:text-[5.5rem]">
            Engineering Excellence.<br />
            <span className="text-brand-light">Built for Singapore.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-on-dark-muted">
            Construction, reinstatement and M&E works delivered with precision across Singapore.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="group inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-brand">
              Explore Services <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={`tel:${contact.tel}`} className="inline-flex items-center gap-2 border border-on-dark/40 px-7 py-4 text-sm font-semibold text-on-dark transition hover:bg-on-dark hover:text-navy">
              <Phone className="h-4 w-4" /> {contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 pb-8 lg:px-10">
          <p className="hidden font-display text-xs font-bold uppercase tracking-[0.3em] text-on-dark-muted sm:block">
            Manpower · Reinstatement · M&E Works
          </p>
          <a href="#about" className="flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-on-dark-muted transition hover:text-on-dark">
            Scroll
            <span className="block h-8 w-px bg-on-dark/40" />
          </a>
        </div>
      </div>
    </section>
  );
}
