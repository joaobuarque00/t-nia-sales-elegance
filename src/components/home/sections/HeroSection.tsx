import { heroPreview, homeImages } from "@/data/home-content";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[96svh] items-center justify-center overflow-hidden pb-24 pt-28">
      <img
        src={homeImages.hero}
        alt="Mesa de buffet com frios, frutas e pratos servidos"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="mb-7 text-[0.68rem] uppercase tracking-[0.32em] text-gold/75">
            Buffet premium
          </p>
        </div>

        <h1
          className="animate-fade-up font-display text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-8xl"
          style={{ animationDelay: "300ms" }}
        >
          <span className="block text-foreground">Tânia Sales</span>
          <span className="mt-3 block text-[0.82em] font-normal italic text-gradient-gold">Buffet</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-foreground/78 sm:text-lg"
          style={{ animationDelay: "500ms" }}
        >
          Gastronomia e decoração para celebrações elegantes, planejadas em cada detalhe.
        </p>
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
