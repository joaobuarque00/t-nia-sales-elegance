import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

type CtaProps = {
  href: string;
  children: ReactNode;
};

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};
}

export function PrimaryCta({ href, children }: CtaProps) {
  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-gradient-gold px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-onyx transition-all duration-500 hover:shadow-gold"
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

export function OutlineCta({ href, children }: CtaProps) {
  const Icon = href.startsWith("http") ? MessageCircle : ArrowRight;

  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-gold/40 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition-all duration-500 hover:border-gold hover:bg-gold/10"
    >
      {children}
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
