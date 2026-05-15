import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { title: "Casamentos", desc: "Cerimônias inesquecíveis com requinte e atenção a cada detalhe.", icon: "♡" },
  { title: "15 Anos", desc: "A celebração da realeza da princesa, do tapete vermelho ao último brinde.", icon: "♛" },
  { title: "Aniversários", desc: "Festas marcantes com gastronomia e ambientação personalizadas.", icon: "✦" },
  { title: "Festas Infantis", desc: "Mundos encantados com cardápio que conquista crianças e adultos.", icon: "✿" },
  { title: "Formaturas", desc: "Comemore a conquista com a sofisticação que ela merece.", icon: "✎" },
  { title: "Corporativos", desc: "Eventos institucionais com elegância, discrição e excelência.", icon: "◈" },
];

const menu = [
  {
    cat: "Entradas",
    items: [
      { name: "Carpaccio de Filé Mignon", desc: "Lascas de parmesão, alcaparras, mostarda dijon e azeite trufado." },
      { name: "Burrata com Tomate Confit", desc: "Pesto de manjericão, redução balsâmica e flor de sal." },
      { name: "Canapés Premium", desc: "Seleção de canapés frios e quentes em folheado, brioche e blinis." },
    ],
  },
  {
    cat: "Pratos Principais",
    items: [
      { name: "Filé ao Molho de Vinho Tinto", desc: "Mignon ao ponto, demi-glace de vinho tinto, batatas confitadas." },
      { name: "Risoto de Funghi e Trufa", desc: "Arbóreo cremoso, mix de cogumelos selvagens e óleo trufado." },
      { name: "Bacalhau Confitado", desc: "Lombo confitado em azeite, purê rústico e azeitonas pretas." },
    ],
  },
  {
    cat: "Sobremesas",
    items: [
      { name: "Petit Gâteau de Chocolate Belga", desc: "Coração morno acompanhado de sorvete de baunilha de Madagascar." },
      { name: "Mil Folhas de Frutas Vermelhas", desc: "Folhado caramelizado, creme pâtissière e frutas frescas." },
      { name: "Mesa de Doces Finos", desc: "Brigadeiros gourmet, macarons e bombons artesanais." },
    ],
  },
];

const testimonials = [
  { name: "Mariana & Rafael", event: "Casamento", text: "Cada detalhe foi mágico. Os convidados ainda comentam sobre a comida e a decoração. Superou tudo o que sonhamos." },
  { name: "Família Andrade", event: "15 Anos da Helena", text: "A Tânia transformou nossa festa em um conto de fadas. Atendimento humano, comida divina e estrutura impecável." },
  { name: "Grupo Vértice", event: "Evento Corporativo", text: "Profissionalismo de outro nível. Pontualidade, refinamento e um cardápio que impressionou nossos clientes." },
];

const stats = [
  { num: "15+", label: "Anos de tradição" },
  { num: "1.200+", label: "Eventos realizados" },
  { num: "98%", label: "Clientes satisfeitos" },
  { num: "100%", label: "Personalizado" },
];

const differentials = [
  { title: "Gastronomia Premiada", desc: "Brigada de chefs criando experiências sensoriais únicas." },
  { title: "Decoração Autoral", desc: "Cenografia exclusiva, criada para a história do seu evento." },
  { title: "Atendimento de Excelência", desc: "Equipe maître treinada para um serviço impecável e discreto." },
  { title: "Estrutura Completa", desc: "Da louça à iluminação, todos os elementos no mais alto padrão." },
  { title: "Resposta Rápida", desc: "Orçamento ágil, planejamento eficiente, execução perfeita." },
  { title: "Personalização Total", desc: "Cada evento é desenhado sob medida para você e sua história." },
];

function Home() {
  return (
    <div id="top" className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Mesa de banquete sofisticada com velas douradas e flores vinho"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" style={{ background: "linear-gradient(180deg, oklch(0.05 0 0 / 0.55) 0%, oklch(0.05 0 0 / 0.85) 100%)" }} />
        <div className="absolute inset-0 bg-radial-gold opacity-60" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <p className="text-[0.7rem] uppercase tracking-[0.5em] text-gold/80 mb-6">Buffet Premium · Desde 2010</p>
          </div>
          <h1 className="animate-fade-up font-display text-5xl sm:text-6xl lg:text-8xl font-medium leading-[0.95] mb-8" style={{ animationDelay: "300ms" }}>
            <span className="block text-foreground">Tânia Sales</span>
            <span className="block shimmer italic font-normal mt-2">Buffet</span>
          </h1>
          <p className="animate-fade-up max-w-2xl mx-auto text-lg sm:text-xl text-foreground/85 leading-relaxed mb-10 font-light" style={{ animationDelay: "500ms" }}>
            A arte de transformar momentos em memórias eternas. Gastronomia refinada, decoração autoral e o serviço impecável que o seu evento merece.
          </p>
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "700ms" }}>
            <a
              href={WHATSAPP_URL}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-onyx text-xs uppercase tracking-[0.3em] font-semibold rounded-sm hover:shadow-gold transition-all duration-500"
            >
              Pedir Orçamento
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold/10 hover:border-gold transition-all duration-500 rounded-sm"
            >
              WhatsApp Direto
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 lg:py-40 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={g1} alt="Salão de festas elegante" loading="lazy" width={1024} height={1280} className="rounded-sm w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-8 -right-8 hidden md:block w-48 h-48 border border-gold/40 rounded-sm" />
              <div className="absolute -top-8 -left-8 hidden md:block w-32 h-32 bg-wine-deep/40 backdrop-blur-sm rounded-sm" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-5">Sobre o Buffet</p>
            <h2 className="font-display text-4xl lg:text-6xl mb-8 leading-tight">
              Quinze anos criando <span className="italic text-gradient-gold">experiências inesquecíveis</span>
            </h2>
            <div className="gold-divider w-24 mb-8" />
            <p className="text-foreground/80 text-lg leading-relaxed mb-6 font-light">
              Nascemos do desejo de oferecer mais que um buffet — uma assinatura de elegância. Cada evento é tratado como único, da primeira degustação ao último brinde.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Unimos a tradição da alta gastronomia, decoração autoral e atendimento à altura dos seus convidados. Para que sua única preocupação seja aproveitar cada instante.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-gold/40 pl-4">
                  <div className="font-display text-3xl lg:text-4xl text-gradient-gold">{s.num}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 lg:py-40 bg-gradient-to-b from-background via-card/50 to-background relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-5">Eventos</p>
              <h2 className="font-display text-4xl lg:text-6xl mb-6">
                Para cada <span className="italic text-gradient-gold">ocasião memorável</span>
              </h2>
              <div className="gold-divider w-24 mx-auto mb-6" />
              <p className="text-muted-foreground font-light">Atendemos eventos de todos os portes com o mesmo padrão de excelência.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="luxe-card rounded-sm p-10 h-full">
                  <div className="text-4xl text-gold mb-6 font-display">{s.icon}</div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-5">Galeria</p>
              <h2 className="font-display text-4xl lg:text-6xl mb-6">
                Momentos que <span className="italic text-gradient-gold">contam histórias</span>
              </h2>
              <div className="gold-divider w-24 mx-auto" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[240px]">
            {[
              { src: g1, span: "row-span-2", alt: "Salão luxuoso com lustre dourado" },
              { src: g2, span: "", alt: "Decoração de aniversário com balões dourados" },
              { src: g3, span: "row-span-2", alt: "Salão escuro com mesas postas" },
              { src: g4, span: "", alt: "Canapés gourmet em prato preto" },
              { src: g5, span: "row-span-2 col-span-2 lg:col-span-1", alt: "Bolo de 15 anos com rosas vinho" },
              { src: g6, span: "col-span-2 lg:col-span-1", alt: "Mesa de doces sofisticada" },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 60} className={img.span}>
                <div className="group relative overflow-hidden rounded-sm h-full cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-colors duration-500" />
                  <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-inset ring-gold/60 transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="py-28 lg:py-40 bg-gradient-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-onyx/60" />
        <div className="absolute inset-0 bg-radial-gold opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-5">Cardápio</p>
              <h2 className="font-display text-4xl lg:text-6xl mb-6">
                Uma jornada <span className="italic text-gradient-gold">gastronômica</span>
              </h2>
              <div className="gold-divider w-24 mx-auto mb-6" />
              <p className="text-foreground/75 font-light max-w-xl mx-auto">Pratos autorais elaborados pela nossa brigada. Cardápios totalmente personalizáveis para o seu evento.</p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-10">
            {menu.map((cat, i) => (
              <Reveal key={cat.cat} delay={i * 120}>
                <div className="border border-gold/20 bg-onyx/40 backdrop-blur-sm p-8 lg:p-10 rounded-sm h-full">
                  <h3 className="font-display text-2xl text-gradient-gold mb-2">{cat.cat}</h3>
                  <div className="gold-divider w-16 mb-8" />
                  <ul className="space-y-7">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="font-display text-lg mb-1.5 text-foreground">{item.name}</div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-5">Diferenciais</p>
              <h2 className="font-display text-4xl lg:text-6xl mb-6">
                Por que escolher a <span className="italic text-gradient-gold">Tânia Sales</span>
              </h2>
              <div className="gold-divider w-24 mx-auto" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
            {differentials.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div className="bg-background p-10 h-full hover:bg-card transition-colors duration-500">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-gold/60 text-sm">0{i + 1}</span>
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{d.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-28 lg:py-40 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-5">Depoimentos</p>
              <h2 className="font-display text-4xl lg:text-6xl mb-6">
                <span className="italic text-gradient-gold">Histórias</span> que celebramos
              </h2>
              <div className="gold-divider w-24 mx-auto" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="luxe-card rounded-sm p-10 h-full flex flex-col">
                  <div className="font-display text-5xl text-gold leading-none mb-4">"</div>
                  <blockquote className="text-foreground/85 leading-relaxed font-light italic mb-8 flex-1">
                    {t.text}
                  </blockquote>
                  <figcaption>
                    <div className="font-display text-lg text-gradient-gold">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.event}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40 relative overflow-hidden">
        <img src={g3} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-6">Vamos começar</p>
            <h2 className="font-display text-4xl lg:text-6xl mb-8 leading-tight">
              O seu evento dos sonhos <br className="hidden md:block" />
              começa com uma <span className="italic text-gradient-gold">conversa</span>
            </h2>
            <p className="text-foreground/80 text-lg font-light mb-10 max-w-xl mx-auto">
              Receba uma proposta personalizada em até 24 horas. Sem compromisso, com toda a atenção que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-gold text-onyx text-xs uppercase tracking-[0.3em] font-semibold rounded-sm hover:shadow-gold transition-all duration-500">
                Solicitar Orçamento
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-gold/50 text-foreground text-xs uppercase tracking-[0.3em] hover:bg-gold/10 hover:border-gold transition-all duration-500 rounded-sm">
                Chamar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold mb-4">Siga-nos</p>
            <h3 className="font-display text-3xl lg:text-4xl mb-8">
              <a href="https://instagram.com/taniasalesbuffet" target="_blank" rel="noopener noreferrer" className="hover:text-gradient-gold transition-colors italic">
                @taniasalesbuffet
              </a>
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
              {[g1, g2, g3, g4, g5, g6].map((img, i) => (
                <a key={i} href="https://instagram.com/taniasalesbuffet" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-sm">
                  <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/60 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl text-gradient-gold">Tânia Sales Buffet</div>
          <p className="text-xs text-muted-foreground tracking-wider">© {new Date().getFullYear()} Tânia Sales Buffet · Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
