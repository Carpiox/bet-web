import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo funciona el bono de bienvenida?",
    a: "Al registrarte en una casa de apuestas a través de nuestros enlaces, recibirás un bono que normalmente iguala tu primer depósito hasta cierta cantidad. Por ejemplo, si depositas 50€ y el bono es del 100%, recibirás 50€ adicionales para apostar."
  },
  {
    q: "¿Es legal apostar online en España?",
    a: "Sí, apostar online es completamente legal en España siempre que lo hagas en casas de apuestas con licencia de la DGOJ (Dirección General de Ordenación del Juego). Todas las casas que listamos tienen licencia vigente."
  },
  {
    q: "¿Necesito un código promocional para activar el bono?",
    a: "En la mayoría de los casos no necesitas código. Al acceder a través de nuestros enlaces de afiliado, el bono se activa automáticamente al completar el registro y tu primer depósito."
  },
  {
    q: "¿Qué es el rollover o requisito de apuesta?",
    a: "El rollover indica cuántas veces debes apostar el importe del bono antes de poder retirarlo. Por ejemplo, un rollover x5 sobre un bono de 100€ significa que debes apostar 500€ en total antes de retirar las ganancias del bono."
  },
  {
    q: "¿Puedo registrarme en varias casas de apuestas?",
    a: "Sí, puedes tener cuentas en múltiples casas de apuestas. De hecho, es una estrategia recomendada para aprovechar varios bonos de bienvenida y comparar cuotas entre diferentes casas."
  },
  {
    q: "¿Cuánto tiempo tarda un retiro?",
    a: "El tiempo varía según la casa y el método de pago elegido. Normalmente entre 24 y 72 horas. Métodos como PayPal o monederos electrónicos suelen ser más rápidos que las transferencias bancarias."
  },
  {
    q: "¿EliteApuestas es una casa de apuestas?",
    a: "No. EliteApuestas es un comparador independiente. No ofrecemos servicios de juego ni gestionamos apuestas. Solo comparamos y referimos a plataformas reguladas con licencia DGOJ."
  },
  {
    q: "¿Qué hago si creo que tengo un problema con el juego?",
    a: "Si sientes que el juego está afectando tu vida, contacta con la línea de ayuda de Jugarbien.es o con el servicio de atención de la DGOJ. Todas las casas que recomendamos ofrecen herramientas de autoexclusión y límites de depósito."
  }
];

const FAQ = () => (
  <section id="faq" className="py-16 sm:py-20 bg-card/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-3">
          Preguntas <span className="gradient-text-neon">Frecuentes</span>
        </h2>
        <p className="text-muted-foreground text-base">Resolvemos tus dudas más comunes sobre apuestas y bonos.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-dark !p-0 border border-border rounded-xl overflow-hidden">
              <AccordionTrigger className="px-5 py-4 text-left font-heading font-semibold text-sm sm:text-base hover:no-underline hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
