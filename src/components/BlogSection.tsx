import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  { title: "Mejores bonos de apuestas abril 2026", excerpt: "Recopilamos los bonos de bienvenida más generosos del mes.", date: "2 Abr 2026", tag: "Bonos" },
  { title: "Cómo elegir la mejor casa de apuestas", excerpt: "Guía definitiva para elegir la plataforma perfecta según tu perfil.", date: "28 Mar 2026", tag: "Guía" },
  { title: "Apuestas deportivas para principiantes", excerpt: "Todo lo que necesitas saber para empezar de forma inteligente.", date: "20 Mar 2026", tag: "Educación" },
  { title: "¿Es seguro apostar online en 2026?", excerpt: "Analizamos regulaciones, licencias y medidas de seguridad.", date: "15 Mar 2026", tag: "Seguridad" },
  { title: "Estrategias de apuestas que funcionan", excerpt: "Value betting, gestión de bankroll y más estrategias probadas.", date: "10 Mar 2026", tag: "Estrategia" },
];

const BlogSection = () => (
  <section id="blog" className="py-16 sm:py-20 bg-card/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-3">
          Blog & <span className="gradient-text-neon">Guías</span>
        </h2>
        <p className="text-muted-foreground text-base">Artículos y consejos para maximizar tus ganancias.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-dark group cursor-pointer flex flex-col p-5"
          >
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full self-start mb-3">{post.tag}</span>
            <h3 className="font-heading font-bold text-sm mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-muted-foreground text-xs flex-1 mb-3 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
              <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">Leer <ArrowRight className="h-3 w-3" /></span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
