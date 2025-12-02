import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <p>© 2025 Vinícius Diller. Todos os direitos reservados.</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <p>Desenvolvido com</p>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <p>e muita dedicação</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
