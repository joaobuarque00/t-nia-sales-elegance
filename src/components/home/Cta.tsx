import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

type CtaProps = {
  href: string;
  children: ReactNode;
  tone?: "default" | "whatsapp" | "glass";
};

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};
}

export function PrimaryCta({ href, children, tone = "default" }: CtaProps) {
  const Icon = href.startsWith("http") ? MessageCircle : ArrowRight;
  const toneClass =
    tone === "whatsapp"
      ? "min-h-14 border border-emerald-200/60 bg-[#0F8F4D] text-white shadow-[0_28px_80px_-18px_rgba(15,143,77,0.95)] ring-2 ring-white/20 hover:bg-[#0C7F43] hover:ring-emerald-100/35"
      : "bg-gradient-gold text-onyx hover:shadow-gold";

  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm px-5 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-all duration-500 sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em] ${toneClass}`}
    >
      {children}
      <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}

export function OutlineCta({ href, children, tone = "default" }: CtaProps) {
  const Icon = href.startsWith("http") ? MessageCircle : ArrowRight;
  const toneClass =
    tone === "glass"
      ? "min-h-14 border-white/35 bg-black/55 text-white shadow-[0_26px_70px_-26px_rgba(0,0,0,0.9)] backdrop-blur-md hover:border-gold/80 hover:bg-black/70"
      : "border-gold/40 text-foreground hover:border-gold hover:bg-gold/10";

  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm border px-5 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-all duration-500 sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em] ${toneClass}`}
    >
      {children}
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
