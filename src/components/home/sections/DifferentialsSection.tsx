import { Reveal } from "@/components/Reveal";
import { differentials } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

export function DifferentialsSection() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-16">
            <SectionHeader
              kicker="Diferenciais"
              title={
                <>
                  Por que escolher a <span className="italic text-gradient-gold">Tânia Sales</span>
                </>
              }
            />
          </div>
        </Reveal>
        <div className="grid gap-px border border-gold/15 bg-gold/15 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 60}>
                <div className="h-full bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-10">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="font-display text-sm text-gold/65">0{i + 1}</span>
                    <Icon className="h-5 w-5 text-gold/80" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 font-display text-xl">{d.title}</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
