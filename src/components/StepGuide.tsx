import { motion } from "framer-motion";
import { UserPlus, CreditCard, Gift, PartyPopper } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "1. Elige tu casa", description: "Compara nuestras recomendaciones y elige la que mejor se adapte." },
  { icon: CreditCard, title: "2. Regístrate", description: "Haz clic en nuestro enlace, completa el formulario y verifica tu identidad." },
  { icon: Gift, title: "3. Reclama tu bono", description: "Realiza tu primer depósito y activa tu bono de bienvenida exclusivo." },
  { icon: PartyPopper, title: "4. ¡A apostar!", description: "Explora los mercados, usa tu bono y apuesta de forma responsable." },
];

const StepGuide = () => (
  <section id="guia" className="py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-3">
          Cómo registrarte en <span className="gradient-text-neon">3 minutos</span>
        </h2>
        <p className="text-muted-foreground text-base">Sigue estos pasos y empieza a apostar con bono incluido.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-dark text-center p-5"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <step.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-1.5">{step.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepGuide;
