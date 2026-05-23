import {
  Building2,
  CakeSlice,
  CalendarCheck,
  CheckCircle2,
  ChefHat,
  Clock3,
  Crown,
  Flower2,
  Gem,
  GraduationCap,
  Heart,
  MessageCircle,
  PartyPopper,
  Sparkles,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import buffetArrozCamarao from "@/assets/buffet/buffet-arroz-camarao.jpeg";
import buffetCamaraoCrocante from "@/assets/buffet/buffet-camarao-crocante.jpeg";
import buffetMassaCamarao from "@/assets/buffet/buffet-massa-camarao.jpeg";
import buffetMesaFria from "@/assets/buffet/buffet-mesa-fria.jpeg";
import buffetMorangos from "@/assets/buffet/buffet-morangos.jpeg";
import buffetRagu from "@/assets/buffet/buffet-ragu.jpeg";
import buffetSaladaCamarao from "@/assets/buffet/buffet-salada-camarao.jpeg";
import buffetVolAuVent from "@/assets/buffet/buffet-vol-au-vent.jpeg";
import menuFeatureImg from "@/assets/gallery-4.jpg";

export type IconContent = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export type MenuCategory = {
  cat: string;
  items: Array<{
    name: string;
    desc: string;
  }>;
};

export const homeImages = {
  hero: buffetVolAuVent,
  about: buffetCamaraoCrocante,
  menuFeature: menuFeatureImg,
  quoteBackground: buffetMorangos,
  instagram: [
    buffetMesaFria,
    buffetSaladaCamarao,
    buffetMassaCamarao,
    buffetCamaraoCrocante,
    buffetMorangos,
    buffetRagu,
  ],
};

export const services: IconContent[] = [
  {
    title: "Casamentos",
    desc: "Buffet, decoração e atendimento para celebrar com elegância do início ao fim.",
    icon: Heart,
  },
  {
    title: "15 Anos",
    desc: "Uma festa marcante, com cardápio e ambientação pensados para esse momento.",
    icon: Crown,
  },
  {
    title: "Aniversários",
    desc: "Comida boa, apresentação bonita e estrutura para receber bem seus convidados.",
    icon: PartyPopper,
  },
  {
    title: "Festas Infantis",
    desc: "Celebrações alegres, organizadas e com opções que agradam crianças e adultos.",
    icon: CakeSlice,
  },
  {
    title: "Formaturas",
    desc: "A comemoração da conquista com buffet completo e serviço bem conduzido.",
    icon: GraduationCap,
  },
  {
    title: "Corporativos",
    desc: "Eventos empresariais com pontualidade, apresentação e atendimento profissional.",
    icon: Building2,
  },
];

export const menuCategories: MenuCategory[] = [
  {
    cat: "Entradas",
    items: [
      {
        name: "Carpaccio de Filé Mignon",
        desc: "Lascas de parmesão, alcaparras, mostarda dijon e azeite trufado.",
      },
      {
        name: "Burrata com Tomate Confit",
        desc: "Pesto de manjericão, redução balsâmica e flor de sal.",
      },
      {
        name: "Canapés Premium",
        desc: "Seleção de canapés frios e quentes em folheado, brioche e blinis.",
      },
    ],
  },
  {
    cat: "Pratos Principais",
    items: [
      {
        name: "Filé ao Molho de Vinho Tinto",
        desc: "Mignon ao ponto, demi-glace de vinho tinto, batatas confitadas.",
      },
      {
        name: "Risoto de Funghi e Trufa",
        desc: "Arbóreo cremoso, mix de cogumelos selvagens e óleo trufado.",
      },
      {
        name: "Bacalhau Confitado",
        desc: "Lombo confitado em azeite, purê rústico e azeitonas pretas.",
      },
    ],
  },
  {
    cat: "Sobremesas",
    items: [
      {
        name: "Petit Gâteau de Chocolate Belga",
        desc: "Coração morno acompanhado de sorvete de baunilha de Madagascar.",
      },
      {
        name: "Mil Folhas de Frutas Vermelhas",
        desc: "Folhado caramelizado, creme pâtissière e frutas frescas.",
      },
      {
        name: "Mesa de Doces Finos",
        desc: "Brigadeiros gourmet, macarons e bombons artesanais.",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Mariana & Rafael",
    event: "Casamento",
    text: "Cada detalhe foi mágico. Os convidados ainda comentam sobre a comida e a decoração. Superou tudo o que sonhamos.",
  },
  {
    name: "Família Andrade",
    event: "15 Anos da Helena",
    text: "A Tânia transformou nossa festa em um conto de fadas. Atendimento humano, comida divina e estrutura impecável.",
  },
  {
    name: "Grupo Vértice",
    event: "Evento Corporativo",
    text: "Profissionalismo de outro nível. Pontualidade, refinamento e um cardápio que impressionou nossos clientes.",
  },
];

export const stats = [
  { num: "30+", label: "Anos de tradição" },
  { num: "3.500+", label: "Festas realizadas" },
  { num: "99%", label: "Clientes satisfeitos" },
  { num: "100%", label: "Personalizado" },
];

export const differentials: IconContent[] = [
  {
    title: "Comida de qualidade",
    desc: "Cardápios preparados com cuidado, boa apresentação e sabor para impressionar os convidados.",
    icon: ChefHat,
  },
  {
    title: "Decoração diferenciada",
    desc: "Ambientação elegante para valorizar a mesa, o salão e o estilo da sua celebração.",
    icon: Flower2,
  },
  {
    title: "Atendimento personalizado",
    desc: "Acompanhamento próximo do primeiro contato até o dia do evento.",
    icon: UsersRound,
  },
  {
    title: "Eventos grandes e pequenos",
    desc: "Estrutura adaptável para festas íntimas, eventos familiares e celebrações maiores.",
    icon: Gem,
  },
  {
    title: "Rapidez no orçamento",
    desc: "Você envia as informações principais e recebe uma proposta clara para avançar com segurança.",
    icon: Clock3,
  },
  {
    title: "Pacotes sob medida",
    desc: "Orçamentos ajustados ao tipo de festa, número de convidados e estilo desejado.",
    icon: WandSparkles,
  },
];

export const quoteSteps: IconContent[] = [
  {
    title: "Conversa inicial",
    desc: "Você envia as informações principais pelo WhatsApp para entendermos o seu evento.",
    icon: MessageCircle,
  },
  {
    title: "Proposta sob medida",
    desc: "A equipe monta uma sugestão com buffet, estrutura e atendimento de acordo com sua necessidade.",
    icon: CalendarCheck,
  },
  {
    title: "Evento bem cuidado",
    desc: "Do preparo à finalização, tudo é conduzido para você aproveitar a festa com tranquilidade.",
    icon: CheckCircle2,
  },
];

export const quoteDetails = [
  "Data do evento",
  "Quantidade de convidados",
  "Tipo de festa",
  "Cidade ou local",
  "Estilo desejado",
  "Faixa de orçamento, se quiser informar",
];

export const gallery = [
  { src: buffetMesaFria, alt: "Mesa de buffet com frios, frutas e pratos servidos" },
  { src: buffetMassaCamarao, alt: "Massa com camarões servida em réchaud" },
  { src: buffetVolAuVent, alt: "Prato folhado decorado com molho e flores comestíveis" },
  { src: buffetMorangos, alt: "Travessa com morangos em mesa de evento" },
  { src: buffetRagu, alt: "Molho servido em peça de vidro sobre mesa de buffet" },
  { src: buffetArrozCamarao, alt: "Mesa de buffet com arroz, camarões e acompanhamentos" },
];

export const heroPreview = [
  { src: buffetSaladaCamarao, alt: "Salada de camarão em travessa de vidro" },
  { src: buffetCamaraoCrocante, alt: "Camarões crocantes servidos com molho" },
  { src: buffetArrozCamarao, alt: "Mesa de buffet com arroz, camarões e acompanhamentos" },
];

export const eventPills = ["Casamentos", "15 anos", "Aniversários", "Corporativos"];

export const signatureHighlights: IconContent[] = [
  {
    title: "Buffet completo",
    desc: "Gastronomia, decoração e atendimento pensados como uma experiência completa.",
    icon: Sparkles,
  },
  {
    title: "Orçamentos sob medida",
    desc: "Cada proposta é ajustada ao tipo de celebração, convidados e estilo desejado.",
    icon: WandSparkles,
  },
  {
    title: "Atendimento próximo",
    desc: "Cuidado do primeiro contato até o dia do evento, com clareza e atenção aos detalhes.",
    icon: UsersRound,
  },
];

export const aboutHighlights = [
  "Comida de qualidade",
  "Decoração elegante",
  "Atendimento personalizado",
  "Pacotes sob medida",
];
