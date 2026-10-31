import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { slides } from "./data";

export function Hero() {
  const [i, setI] = useState(0);
  const go = useCallback((d: number) => setI((p) => (p + d + slides.length) % slides.length), []);
  useEffect(() => { const t = setTimeout(() => go(1), 6500); return () => clearTimeout(t); }, [i, go]);

  return (
    <section id="top" className="relative h-[100svh] max-h-[860px] min-h-[620px] overflow-hidden bg-navy">
      {slides.map((s, idx) => (
        <div key={idx} className={cn("absolute inset-0 transition-opacity duration-[1400ms]", idx === i ? "opacity-100" : "opacity-0")} aria-hidden={idx !== i}>
          <img src={s.image} alt="" width={1920} height={1088} className={cn("h-full w-full object-cover", idx === i && "animate-kenburns")} />
          <div className="absolute inset-0 bg-overlay-hero" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-10">
        <div key={i} className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="eyebrow mb-6 text-brand-light">{slides[i].kicker}</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-on-dark sm:text-6xl lg:text-[5.5rem]">
            {slides[i].title[0]}<br /><span className="text-brand-light">{slides[i].title[1]}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-on-dark-muted">{slides[i].text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-brand">Explore Services</a>
            <a href="#contact" className="border border-on-dark/40 px-7 py-4 text-sm font-semibold text-on-dark transition hover:bg-on-dark hover:text-navy">Request a Quote</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 pb-10 lg:px-10">
          <div className="flex flex-1 gap-3 sm:max-w-md">
            {slides.map((s, idx) => (
              <button key={idx} onClick={() => setI(idx)} className="group flex-1 text-left" aria-label={`Slide ${idx + 1}`}>
                <span className="mb-2 hidden font-display text-xs font-semibold text-on-dark-muted sm:block">0{idx + 1}</span>
                <span className="block h-0.5 w-full overflow-hidden bg-on-dark/25">
                  {idx === i && <span key={i} className="block h-full bg-brand-light animate-progress" />}
                  {idx < i && <span className="block h-full bg-on-dark/70" />}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label="Previous slide" className="grid h-12 w-12 place-items-center border border-on-dark/30 text-on-dark transition hover:bg-on-dark hover:text-navy"><ArrowLeft className="h-5 w-5" /></button>
            <button onClick={() => go(1)} aria-label="Next slide" className="grid h-12 w-12 place-items-center bg-primary text-primary-foreground transition hover:bg-brand"><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
