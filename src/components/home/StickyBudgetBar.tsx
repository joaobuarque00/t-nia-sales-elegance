import { MessageCircle } from "lucide-react";

export function StickyBudgetBar() {
  return (
    <a
      href="#orcamento"
      className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gradient-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-onyx shadow-luxe sm:hidden"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      Pedir Orçamento
    </a>
  );
}
