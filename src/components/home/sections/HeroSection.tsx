import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { heroPreview, homeImages } from "@/data/home-content";
import { OutlineCta, PrimaryCta } from "../Cta";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[96svh] items-center justify-center overflow-hidden pb-24 pt-28">
      <img
        src={homeImages.hero}
        alt="Prato folhado decorado com molho e flores comestíveis"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="mb-6 text-[0.68rem] uppercase tracking-[0.32em] text-gold drop-shadow-[0_3px_14px_rgba(0,0,0,0.8)]">
            Tânia Sales Buffet
          </p>
        </div>

        <h1
          className="animate-fade-up mx-auto max-w-5xl font-display text-4xl font-medium leading-[1.03] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "300ms" }}
        >
          Buffet completo para transformar sua festa em um evento inesquecível
        </h1>

        <div
          className="animate-fade-up mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "500ms" }}
        >
          <PrimaryCta href={WHATSAPP_URL} tone="whatsapp">
            Pedir orçamento pelo WhatsApp
          </PrimaryCta>
          <OutlineCta href="#orcamento" tone="glass">
            Montar meu orçamento
          </OutlineCta>
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
