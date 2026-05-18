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
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

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
  hero: heroImg,
  about: g1,
  menuFeature: g4,
  quoteBackground: g3,
  instagram: [g1, g2, g3, g4, g5, g6],
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
  { num: "15+", label: "Anos de tradição" },
  { num: "1.200+", label: "Eventos realizados" },
  { num: "98%", label: "Clientes satisfeitos" },
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
  { src: g1, alt: "Salão luxuoso com lustre dourado" },
  { src: g2, alt: "Decoração de aniversário com balões dourados" },
  { src: g3, alt: "Salão escuro com mesas postas" },
  { src: g4, alt: "Canapés gourmet em prato preto" },
  { src: g5, alt: "Bolo de 15 anos com rosas vinho" },
  { src: g6, alt: "Mesa de doces sofisticada" },
];

export const heroPreview = [
  { src: g4, alt: "Canapés gourmet em prato preto" },
  { src: g5, alt: "Bolo de 15 anos com rosas vinho" },
  { src: g6, alt: "Mesa de doces sofisticada" },
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
