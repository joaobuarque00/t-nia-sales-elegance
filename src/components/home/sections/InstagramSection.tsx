import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { homeImages } from "@/data/home-content";

const INSTAGRAM_URL = "https://instagram.com/taniasalesbuffet";

export function InstagramSection() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-gold">Siga-nos</p>
          <h3 className="mb-8 font-display text-3xl lg:text-4xl">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 italic transition-colors hover:text-gold"
            >
              <Instagram className="h-6 w-6 text-gold" aria-hidden="true" />
              @taniasalesbuffet
            </a>
          </h3>
          <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-3">
            {homeImages.instagram.map((img, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-onyx/0 transition-colors duration-500 group-hover:bg-onyx/60">
                  <Instagram
                    className="h-5 w-5 text-gold opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
