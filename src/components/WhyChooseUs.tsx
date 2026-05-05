import { motion } from "framer-motion";
import { RefreshCw, ShieldCheck, UserX, TrendingUp, BookOpen, Headphones } from "lucide-react";

const features = [
  { icon: RefreshCw, title: "Actualizado diariamente", desc: "Revisamos los bonos y condiciones cada día para que siempre tengas info al día." },
  { icon: ShieldCheck, title: "Solo casas legales", desc: "Todas las casas listadas tienen licencia DGOJ vigente en España." },
  { icon: UserX, title: "Sin registro en nuestra web", desc: "No necesitas crear cuenta aquí. Vas directo a la casa de apuestas." },
  { icon: TrendingUp, title: "Mejores cuotas y bonos", desc: "Comparamos para que accedas a las ofertas más competitivas del mercado." },
  { icon: BookOpen, title: "Guías y trucos", desc: "Contenido educativo para que apuestes de forma inteligente y responsable." },
  { icon: Headphones, title: "Soporte en español", desc: "Todas las casas que recomendamos ofrecen atención al cliente en español." },
];

const WhyChooseUs = () => (
  <section className="py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-3">
          ¿Por qué <span className="gradient-text-neon">elegirnos</span>?
        </h2>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">Somos tu aliado para encontrar las mejores oportunidades de apuestas.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-dark text-center p-5"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-sm sm:text-base mb-1.5">{f.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
