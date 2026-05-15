import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-onyx/85 backdrop-blur-xl border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-display text-xl tracking-wide text-gradient-gold">Tânia Sales</span>
          <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground border-l border-gold/30 pl-3">Buffet</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-onyx bg-gradient-gold rounded-sm font-medium hover:shadow-gold transition-all duration-500"
        >
          Pedir Orçamento
        </a>
        <button
          aria-label="Menu"
          className="lg:hidden text-gold"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-onyx/95 backdrop-blur-xl border-t border-gold/15 animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/85 hover:text-gold py-2 border-b border-border/30">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-3 text-xs uppercase tracking-[0.25em] text-onyx bg-gradient-gold rounded-sm font-medium">
              Pedir Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
