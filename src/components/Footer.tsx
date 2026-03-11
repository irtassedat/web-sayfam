export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-[8px]">SI</span>
          </div>
          <span className="text-xs text-muted">Sedat Irtas</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/irtassedat" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary transition-colors">
            LinkedIn
          </a>
          <span className="text-xs text-muted/40">2025</span>
        </div>
      </div>
    </footer>
  );
}
