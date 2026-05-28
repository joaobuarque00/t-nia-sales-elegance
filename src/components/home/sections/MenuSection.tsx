import { ExternalLink, FileText, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { homeImages } from "@/data/home-content";
import { SectionHeader } from "../SectionHeader";

const MENU_PDF_URL = "/cardapio-buffet-tania-sales-2025.pdf";

const menuHighlights = ["Quiches", "Canapés", "Salgados fritos", "Especiais", "Mini comidinhas"];

export function MenuSection() {
  return (
    <section id="cardapio" className="relative overflow-hidden bg-onyx py-24 lg:py-36">
      <img
        src={homeImages.menuFeature}
        alt="Mesa de buffet Tânia Sales com pratos preparados para evento"
        loading="lazy"
        className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-20 mix-blend-luminosity lg:w-1/2"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,oklch(0.78_0.14_80/0.18),transparent_32%),linear-gradient(135deg,oklch(0.07_0.005_30)_0%,oklch(0.22_0.1_18)_55%,oklch(0.07_0.005_30)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.95_0.01_80/0.045)_1px,transparent_1px),linear-gradient(180deg,oklch(0.95_0.01_80/0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14 max-w-4xl">
            <SectionHeader
              align="left"
              kicker="Cardápio 2025"
              title={
                <>
                  O sabor da festa em uma vitrine{" "}
                  <span className="italic text-gradient-gold">irresistível</span>
                </>
              }
            >
              <p>
                Consulte o cardápio completo Tânia Sales Buffet em PDF, com as opções organizadas
                para escolher com calma e pedir um orçamento sob medida.
              </p>
            </SectionHeader>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <article className="relative overflow-hidden rounded-sm border border-gold/25 bg-black/45 shadow-luxe backdrop-blur-md">
            <img
              src={homeImages.menuFeature}
              alt="Buffet com apresentação elegante de pratos para eventos"
              loading="lazy"
              className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-60 mix-blend-luminosity lg:block"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/92 to-onyx/38" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:p-10">
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-onyx/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  menu oficial em pdf
                </div>

                <h3 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  Cardápio completo Tânia Sales 2025
                </h3>
                <p className="mt-5 max-w-2xl font-light leading-relaxed text-white/72">
                  Quiches, canapés, salgados fritos, especiais e mini comidinhas reunidos no
                  material oficial para consulta em uma nova aba.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {menuHighlights.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
                  <a
                    href={MENU_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-sm bg-gradient-gold px-5 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-onyx transition-all duration-500 hover:shadow-gold sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                  >
                    Abrir cardápio em PDF
                    <ExternalLink
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-sm border border-emerald-200/60 bg-[#0F8F4D] px-5 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_28px_80px_-18px_rgba(15,143,77,0.95)] ring-2 ring-white/20 transition-all duration-500 hover:bg-[#0C7F43] hover:ring-emerald-100/35 sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
                  >
                    Pedir orçamento
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <a
                href={MENU_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[18rem] overflow-hidden rounded-sm border border-gold/25 bg-white/[0.05] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[0.08] sm:min-h-[20rem]"
                aria-label="Abrir cardápio completo em PDF"
              >
                <div className="absolute inset-4 border border-gold/15 bg-black/25" />
                <div className="relative flex h-full min-h-[16rem] flex-col justify-between border border-white/10 bg-onyx/82 p-6 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.95)]">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold shadow-[0_0_40px_rgba(212,175,55,0.18)]">
                      <FileText className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold/80">
                      PDF oficial
                    </p>
                    <h4 className="mt-3 font-display text-3xl leading-tight text-white">
                      Buffet Tânia Sales
                    </h4>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                    <span>Cardápio 2025</span>
                    <ExternalLink
                      className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
