import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { services } from "@/data/home-content";
import { OutlineCta } from "../Cta";
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
              <p>
                Casamentos, aniversários, 15 anos, formaturas, eventos corporativos e festas
                pequenas com o mesmo cuidado nos detalhes.
              </p>
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

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 border-y border-gold/15 py-7 text-center lg:flex-row lg:text-left">
            <div className="flex max-w-2xl flex-col gap-2">
              <div className="mx-auto flex items-center gap-3 text-gold lg:mx-0">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-[0.68rem] uppercase tracking-[0.2em]">
                  Orçamento sem compromisso
                </span>
              </div>
              <p className="font-light text-foreground/78">
                Eventos grandes e pequenos com o mesmo cuidado nos detalhes.
              </p>
            </div>
            <OutlineCta href={WHATSAPP_URL}>Falar com a equipe</OutlineCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
