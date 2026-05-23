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
  hero: buffetMesaFria,
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
    desc: "Cerimônias inesquecíveis com requinte e atenção a cada detalhe.",
    icon: Heart,
  },
  {
    title: "15 Anos",
    desc: "A celebração da realeza da princesa, do tapete vermelho ao último brinde.",
    icon: Crown,
  },
  {
    title: "Aniversários",
    desc: "Festas marcantes com gastronomia e ambientação personalizadas.",
    icon: PartyPopper,
  },
  {
    title: "Festas Infantis",
    desc: "Mundos encantados com cardápio que conquista crianças e adultos.",
    icon: CakeSlice,
  },
  {
    title: "Formaturas",
    desc: "Comemore a conquista com a sofisticação que ela merece.",
    icon: GraduationCap,
  },
  {
    title: "Corporativos",
    desc: "Eventos institucionais com elegância, discrição e excelência.",
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
    title: "Gastronomia Premiada",
    desc: "Brigada de chefs criando experiências sensoriais únicas.",
    icon: ChefHat,
  },
  {
    title: "Decoração Autoral",
    desc: "Cenografia exclusiva, criada para a história do seu evento.",
    icon: Flower2,
  },
  {
    title: "Atendimento de Excelência",
    desc: "Equipe maître treinada para um serviço impecável e discreto.",
    icon: UsersRound,
  },
  {
    title: "Estrutura Completa",
    desc: "Da louça à iluminação, todos os elementos no mais alto padrão.",
    icon: Gem,
  },
  {
    title: "Resposta Rápida",
    desc: "Orçamento ágil, planejamento eficiente, execução perfeita.",
    icon: Clock3,
  },
  {
    title: "Personalização Total",
    desc: "Cada evento é desenhado sob medida para você e sua história.",
    icon: WandSparkles,
  },
];

export const quoteSteps: IconContent[] = [
  {
    title: "Conversa inicial",
    desc: "Você conta data, local, número de convidados e estilo do evento.",
    icon: MessageCircle,
  },
  {
    title: "Proposta sob medida",
    desc: "A equipe organiza cardápio, estrutura e atendimento em uma proposta personalizada.",
    icon: CalendarCheck,
  },
  {
    title: "Execução impecável",
    desc: "Do preparo à finalização, tudo é conduzido para você aproveitar cada instante.",
    icon: CheckCircle2,
  },
];

export const quoteDetails = [
  "Data do evento",
  "Quantidade de convidados",
  "Tipo de celebração",
  "Local ou cidade",
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
  { src: buffetVolAuVent, alt: "Prato folhado decorado com molho e flores comestíveis" },
];

export const eventPills = ["Casamentos", "15 anos", "Aniversários", "Corporativos"];

export const signatureHighlights: IconContent[] = [
  {
    title: "Buffet completo",
    desc: "Gastronomia, decoração e serviço pensados como uma única experiência.",
    icon: Sparkles,
  },
  {
    title: "Tudo sob medida",
    desc: "Cada evento é tratado como único, da primeira degustação ao último brinde.",
    icon: WandSparkles,
  },
  {
    title: "Atendimento próximo",
    desc: "Uma equipe preparada para conduzir os detalhes com elegância e discrição.",
    icon: UsersRound,
  },
];

export const aboutHighlights = [
  "Gastronomia refinada",
  "Decoração autoral",
  "Serviço impecável",
  "Evento sob medida",
];
