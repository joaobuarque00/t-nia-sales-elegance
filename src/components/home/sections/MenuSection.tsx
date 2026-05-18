import { Utensils } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { homeImages, menuCategories } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

export function MenuSection() {
  return (
    <section id="cardapio" className="relative overflow-hidden bg-gradient-wine py-24 lg:py-36">
      <div className="absolute inset-0 bg-onyx/60" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-16">
            <SectionHeader
              kicker="Cardápio"
              title={
                <>
                  Uma jornada <span className="italic text-gradient-gold">gastronômica</span>
                </>
              }
            >
              <p>
                Pratos autorais elaborados pela nossa brigada. Cardápios totalmente personalizáveis
                para o seu evento.
              </p>
            </SectionHeader>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden rounded-sm border border-gold/20">
              <img
                src={homeImages.menuFeature}
                alt="Canapés gourmet em prato preto"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Utensils className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl leading-tight">
                  Cardápios pensados para combinar com o estilo da celebração.
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {menuCategories.map((cat, i) => (
              <Reveal key={cat.cat} delay={i * 100}>
                <div className="rounded-sm border border-gold/20 bg-onyx/45 p-6 backdrop-blur-sm lg:p-7">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Utensils className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-gradient-gold">{cat.cat}</h3>
                      <div className="gold-divider mt-3 w-16" />
                    </div>
                  </div>
                  <ul className="grid gap-5 md:grid-cols-3">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="mb-1.5 font-display text-lg leading-tight text-foreground">
                          {item.name}
                        </div>
                        <p className="text-sm font-light leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
