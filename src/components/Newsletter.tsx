import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center card-dark !p-8 border-primary/20"
        >
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-2">
            Recibe los <span className="gradient-text-neon">mejores bonos</span> cada semana
          </h2>
          <p className="text-muted-foreground text-sm mb-5">Ofertas exclusivas, nuevos bonos y guías directo a tu email.</p>

          {submitted ? (
            <p className="text-primary font-heading font-bold">¡Gracias! Revisa tu bandeja 🎉</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary !py-3 !text-sm">
                Suscribirme <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
