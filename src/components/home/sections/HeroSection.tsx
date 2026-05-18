import { eventPills, heroPreview, homeImages } from "@/data/home-content";

const signatureLine = ["Gastronomia refinada", "Decoração autoral", "Serviço impecável"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[96svh] items-center justify-center overflow-hidden pb-24 pt-28">
      <img
        src={homeImages.hero}
        alt="Mesa de banquete sofisticada com velas douradas e flores vinho"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="mb-6 text-[0.7rem] uppercase tracking-[0.38em] text-gold/85">
            Buffet Premium · Desde 2010
          </p>
        </div>

        <h1
          className="animate-fade-up font-display text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-8xl"
          style={{ animationDelay: "300ms" }}
        >
          <span className="block text-foreground">Tânia Sales</span>
          <span className="shimmer mt-2 block font-normal italic">Buffet</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mb-10 mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/85 sm:text-xl"
          style={{ animationDelay: "500ms" }}
        >
          A arte de transformar momentos em memórias eternas. Gastronomia refinada, decoração
          autoral e o serviço impecável que o seu evento merece.
        </p>

        <div
          className="animate-fade-up mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2"
          style={{ animationDelay: "620ms" }}
        >
          {eventPills.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gold/25 bg-onyx/35 px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/80 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>

        <div
          className="animate-fade-up mx-auto mt-9 flex max-w-3xl items-center justify-center gap-4 text-[0.68rem] uppercase tracking-[0.24em] text-foreground/72"
          style={{ animationDelay: "760ms" }}
        >
          <span className="hidden h-px w-16 bg-gold/35 sm:block" />
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {signatureLine.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <span className="hidden h-px w-16 bg-gold/35 sm:block" />
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden grid-cols-3 gap-3 xl:grid">
        {heroPreview.map((photo, index) => (
          <div
            key={photo.alt}
            className="h-28 w-24 overflow-hidden rounded-sm border border-gold/25 bg-card shadow-luxe"
            style={{ transform: `translateY(${index % 2 === 0 ? "12px" : "-8px"})` }}
          >
            <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
      </div>
    </section>
  );
}
