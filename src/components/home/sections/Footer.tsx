import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";

const INSTAGRAM_URL = "https://instagram.com/taniasalesbuffet";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-[1.1fr_1fr_1fr] md:text-left lg:px-10">
        <div>
          <div className="font-display text-2xl text-gradient-gold">Tânia Sales Buffet</div>
          <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            Buffet completo com gastronomia, decoração e atendimento personalizado para eventos
            grandes e pequenos.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Orçamento
          </h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm text-foreground/85 transition-colors hover:text-gold md:justify-start"
          >
            <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
            WhatsApp: (79) 99610-3016
          </a>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
            Peça uma proposta sob medida para sua celebração.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Acompanhe
          </h3>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm text-foreground/85 transition-colors hover:text-gold md:justify-start"
          >
            <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
            @taniasalesbuffet
          </a>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
            Atendimento sob consulta conforme data, cidade e estrutura do evento.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 text-center lg:px-10">
        <p className="text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Tânia Sales Buffet · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
