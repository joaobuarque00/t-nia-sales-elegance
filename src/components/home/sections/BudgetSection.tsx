import { CheckCircle2, GlassWater, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { homeImages, quoteDetails, quoteSteps } from "@/data/home-content";
import { OutlineCta, PrimaryCta } from "../Cta";
import { SectionHeader } from "../SectionHeader";

export function BudgetSection() {
  return (
    <section id="orcamento" className="relative overflow-hidden py-24 lg:py-36">
      <img
        src={homeImages.quoteBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.24]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              kicker="Vamos começar"
              align="left"
              title={
                <>
                  O seu evento dos sonhos começa com uma{" "}
                  <span className="italic text-gradient-gold">conversa</span>
                </>
              }
            />
            <p className="mb-10 max-w-xl text-lg font-light text-foreground/80">
              Receba uma proposta personalizada em até 24 horas. Sem compromisso, com toda a atenção
              que você merece.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <PrimaryCta href={WHATSAPP_URL}>Solicitar Orçamento</PrimaryCta>
              <OutlineCta href={WHATSAPP_URL}>Chamar no WhatsApp</OutlineCta>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5">
              <div className="rounded-sm border border-gold/20 bg-onyx/60 p-6 backdrop-blur-md lg:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl">Como funciona</h3>
                </div>
                <div className="grid gap-4">
                  {quoteSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <span className="text-xs text-gold/75">0{i + 1}</span>
                            <h4 className="font-display text-lg">{step.title}</h4>
                          </div>
                          <p className="text-sm font-light leading-relaxed text-muted-foreground">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-sm border border-gold/20 bg-card/70 p-6 backdrop-blur-md lg:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <GlassWater className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="font-display text-xl">Para agilizar seu orçamento</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {quoteDetails.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 border border-gold/15 bg-background/45 px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-none text-gold" aria-hidden="true" />
                      <span className="text-sm text-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
