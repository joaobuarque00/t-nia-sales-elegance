import { Reveal } from "@/components/Reveal";
import { services } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative bg-gradient-to-b from-background via-card/50 to-background py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-16">
            <SectionHeader
              kicker="Eventos"
              title={
                <>
                  Para cada <span className="italic text-gradient-gold">ocasião memorável</span>
                </>
              }
            >
              <p>Atendemos eventos de todos os portes com o mesmo padrão de excelência.</p>
            </SectionHeader>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <div className="luxe-card group h-full rounded-sm p-8">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-onyx">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 font-display text-2xl">{s.title}</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
