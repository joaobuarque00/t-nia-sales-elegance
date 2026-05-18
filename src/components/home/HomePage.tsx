import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StickyBudgetBar } from "./StickyBudgetBar";
import {
  AboutSection,
  BudgetSection,
  DifferentialsSection,
  Footer,
  GallerySection,
  HeroSection,
  InstagramSection,
  MenuSection,
  ServicesSection,
  SignatureHighlights,
  StatsStrip,
  TestimonialsSection,
} from "./sections";

export function HomePage() {
  return (
    <div id="top" className="overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <WhatsAppFloat />
      <StickyBudgetBar />

      <HeroSection />
      <StatsStrip />
      <SignatureHighlights />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <MenuSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <BudgetSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}
