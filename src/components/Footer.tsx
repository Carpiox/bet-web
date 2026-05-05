import { Trophy, Heart } from "lucide-react";
import { casas } from "@/data/casas";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-heading text-base font-extrabold gradient-text-neon">EliteApuestas</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">Tu comparador de confianza para encontrar las mejores casas de apuestas legales con bonos exclusivos.</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-sm mb-3 text-foreground">Navegación</h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li><a href="#comparativa" className="hover:text-primary transition-colors">Tabla de Bonos</a></li>
            <li><a href="#resenas" className="hover:text-primary transition-colors">Reseñas</a></li>
            <li><a href="#guia" className="hover:text-primary transition-colors">Guía</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-sm mb-3 text-foreground">Casas Recomendadas</h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {casas.slice(0, 6).map((c) => (
              <li key={c.id}><a href={c.affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{c.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-sm mb-3 text-foreground">Legal</h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Juego Responsable</a></li>
            <li><a href="https://www.ordenacionjuego.es" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DGOJ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-t border-border pt-6 space-y-3">
        <div className="bg-secondary/50 rounded-lg p-4 text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          <p className="font-bold text-foreground mb-1">⚠️ +18 | El juego compulsivo es perjudicial. Juega con responsabilidad.</p>
          <p>EliteApuestas es un sitio de comparación y afiliación independiente. No somos una casa de apuestas ni ofrecemos servicios de juego. Solo comparamos y referimos a plataformas reguladas con licencia DGOJ en España. Las apuestas implican riesgo de pérdida económica y pueden causar adicción. Si necesitas ayuda, visita{" "}
            <a href="https://www.jugarbien.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">jugarbien.es</a>{" "}
            o contacta con la <a href="https://www.ordenacionjuego.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DGOJ</a>.
          </p>
        </div>
        <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
          © 2026 EliteApuestas. Hecho con <Heart className="h-3 w-3 text-destructive" /> para apostadores responsables.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
