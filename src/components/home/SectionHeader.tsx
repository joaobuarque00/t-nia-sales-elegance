import type { ReactNode } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeader({ kicker, title, children, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-5 text-[0.7rem] uppercase tracking-[0.34em] text-gold">{kicker}</p>
      <h2 className="mb-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h2>
      <div className={`gold-divider mb-6 w-24 ${align === "center" ? "mx-auto" : ""}`} />
      {children && (
        <div className="font-light leading-relaxed text-muted-foreground">{children}</div>
      )}
    </div>
  );
}
