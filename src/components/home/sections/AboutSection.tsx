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
            <div className="absolute -top-6 -left-6 hidden h-28 w-28 rounded-sm bg-wine-deep/40 backdrop-blur-sm md:block" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SectionHeader
            kicker="Sobre o Buffet"
            align="left"
            title={
              <>
                Quinze anos criando{" "}
                <span className="italic text-gradient-gold">experiências inesquecíveis</span>
              </>
            }
          />
          <p className="mb-6 text-lg font-light leading-relaxed text-foreground/80">
            Nascemos do desejo de oferecer mais que um buffet — uma assinatura de elegância. Cada
            evento é tratado como único, da primeira degustação ao último brinde.
          </p>
          <p className="mb-8 font-light leading-relaxed text-muted-foreground">
            Unimos a tradição da alta gastronomia, decoração autoral e atendimento à altura dos seus
            convidados. Para que sua única preocupação seja aproveitar cada instante.
          </p>
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
