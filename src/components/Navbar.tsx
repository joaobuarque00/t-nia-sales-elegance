import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Eventos" },
  { href: "#galeria", label: "Fotos" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#orcamento", label: "Orçamento" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-gold/15 bg-onyx/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-wide text-gradient-gold">Tânia Sales</span>
          <span className="hidden border-l border-gold/30 pl-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Buffet
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm tracking-wide text-foreground/80 transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:content-[''] hover:text-gold hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#orcamento"
          className="hidden min-h-11 items-center gap-2 rounded-sm bg-gradient-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-onyx transition-all duration-500 hover:shadow-gold lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Montar orçamento
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold transition-colors hover:bg-gold/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="animate-fade-up border-t border-gold/15 bg-onyx/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/30 py-3 text-foreground/85 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#orcamento"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gradient-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-onyx"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Montar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
