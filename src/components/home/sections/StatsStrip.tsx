import { stats } from "@/data/home-content";

export function StatsStrip() {
  return (
    <section className="border-y border-gold/10 bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-5 sm:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="px-3 py-4 text-center">
            <div className="font-display text-3xl text-gradient-gold lg:text-4xl">{s.num}</div>
            <div className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
