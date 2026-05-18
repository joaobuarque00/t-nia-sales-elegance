import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-card/40 py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-16">
            <SectionHeader
              kicker="Depoimentos"
              title={
                <>
                  <span className="italic text-gradient-gold">Histórias</span> que celebramos
                </>
              }
            />
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="luxe-card flex h-full flex-col rounded-sm p-8 lg:p-9">
                <div className="mb-5 font-display text-5xl leading-none text-gold">"</div>
                <blockquote className="mb-8 flex-1 font-light italic leading-relaxed text-foreground/85">
                  {t.text}
                </blockquote>
                <figcaption className="border-t border-gold/15 pt-6">
                  <div className="font-display text-lg text-gradient-gold">{t.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.event}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
