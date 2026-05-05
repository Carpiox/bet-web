import { motion } from "framer-motion";
import { ArrowDown, Shield, Users, CheckCircle } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
    {/* Subtle background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(152_100%_50%/0.04)_0%,transparent_60%)]" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 text-center relative z-10 py-10">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5 mb-8 text-xs font-medium text-muted-foreground">
          <Shield className="h-3.5 w-3.5 text-primary" />
          +18 | Juega con responsabilidad | Solo casas con licencia DGOJ
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] mb-5 max-w-4xl mx-auto">
          Los Mejores Bonos de Bienvenida 2026 –{" "}
          <span className="gradient-text-neon">Hasta 300€ Gratis</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Compara las mejores ofertas de las casas de apuestas legales en España. Regístrate hoy y reclama tu bono sin complicaciones.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a href="#comparativa" className="btn-primary animate-pulse-glow text-base px-8 py-4">
            Ver Bonos Actualizados <ArrowDown className="h-4 w-4" />
          </a>
          <a href="#guia" className="btn-outline-primary text-base px-8 py-4">
            Guía para principiantes
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground text-sm">
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" /> +50.000 usuarios registrados
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" /> 100% legal y regulado
          </span>
          <span className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" /> Miles de bonos reclamados
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
