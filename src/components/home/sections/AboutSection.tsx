import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { aboutHighlights, homeImages } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <div className="relative">
            <img
              src={homeImages.about}
              alt="Camarões crocantes servidos com molho"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SectionHeader
            kicker="Sobre o Buffet"
            align="left"
            title={
              <>
                30 anos cuidando de{" "}
                <span className="italic text-gradient-gold">celebrações especiais</span>
              </>
            }
          />
          <p className="mb-6 text-lg font-light leading-relaxed text-foreground/82">
            A Tânia Sales Buffet acompanha cada cliente de perto para transformar ideias em uma
            festa bem servida, bonita e organizada. O atendimento é feito com escuta, clareza e
            cuidado para entender o tamanho do evento, o estilo desejado e o que cabe no orçamento.
          </p>
          <p className="mb-8 font-light leading-relaxed text-muted-foreground">
            São mais de 3.500 festas realizadas com gastronomia, decoração e equipe preparada para
            eventos grandes e pequenos. A proposta é unir elegância e proximidade, para que você se
            sinta seguro desde o primeiro contato até o último detalhe do evento.
          </p>
          <div className="mb-7 border-l border-gold/40 bg-card/35 px-5 py-4">
            <p className="text-sm font-light leading-relaxed text-foreground/78">
              Atendimento personalizado do primeiro contato até o dia do evento.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-gold/15 bg-card/45 px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 flex-none text-gold" aria-hidden="true" />
                <span className="text-sm text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
