import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";

export function StickyBudgetBar() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gradient-gold px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-onyx shadow-luxe sm:hidden"
    >
      <MessageCircle className="h-4 w-4 flex-none" aria-hidden="true" />
      Pedir orçamento pelo WhatsApp
    </a>
  );
}
