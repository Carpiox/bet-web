import { useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#comparativa", label: "Bonos" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#guia", label: "Guía" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <a href="#" className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          <span className="font-heading text-lg font-extrabold gradient-text-neon">EliteApuestas</span>
        </a>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#comparativa" className="btn-primary !py-2 !px-5 !text-sm">
            Ver Bonos
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground font-medium py-2 text-sm">
                  {l.label}
                </a>
              ))}
              <a href="#comparativa" onClick={() => setOpen(false)} className="btn-primary text-center !text-sm !py-2.5 mt-2">
                Ver Bonos
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
