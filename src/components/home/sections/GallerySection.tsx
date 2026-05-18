import { Reveal } from "@/components/Reveal";
import { gallery } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

export function GallerySection() {
  const featured = gallery[0];
  const secondaryImages = gallery.slice(1);

  return (
    <section id="galeria" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14">
            <SectionHeader
              kicker="Galeria"
              title={
                <>
                  Momentos que <span className="italic text-gradient-gold">contam histórias</span>
                </>
              }
            >
              <p>Um recorte da atmosfera, dos detalhes e da experiência que o buffet entrega.</p>
            </SectionHeader>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="group relative min-h-[460px] overflow-hidden rounded-sm">
              <img
                src={featured.src}
                alt={featured.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/75 via-onyx/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <p className="mb-3 text-[0.68rem] uppercase tracking-[0.3em] text-gold">
                  Atmosfera
                </p>
                <h3 className="max-w-md font-display text-3xl leading-tight text-foreground lg:text-4xl">
                  Ambientes preparados para receber bem e impressionar com elegância.
                </h3>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {secondaryImages.map((img, i) => (
              <Reveal key={img.alt} delay={i * 60}>
                <div
                  className={`group relative overflow-hidden rounded-sm ${
                    i === 4 ? "col-span-2 min-h-[220px]" : "aspect-square"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-onyx/0 transition-colors duration-500 group-hover:bg-onyx/35" />
                  <div className="absolute inset-0 ring-0 ring-inset ring-gold/60 transition-all duration-500 group-hover:ring-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
