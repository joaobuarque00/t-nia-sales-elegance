import { Reveal } from "@/components/Reveal";
import { signatureHighlights } from "@/data/home-content";

export function SignatureHighlights() {
  return (
    <section className="border-b border-gold/10 bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3 lg:px-10">
        {signatureHighlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group h-full border border-gold/15 bg-card/35 p-6 transition-colors duration-500 hover:border-gold/30 hover:bg-card/55">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <span className="font-display text-sm text-gold/55">0{i + 1}</span>
                </div>
                <h2 className="mb-3 font-display text-2xl">{item.title}</h2>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
