export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left lg:px-10">
        <div className="font-display text-xl text-gradient-gold">Tânia Sales Buffet</div>
        <p className="text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Tânia Sales Buffet · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
