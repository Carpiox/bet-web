import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { casas } from "@/data/casas";
import { Star, ThumbsUp, ThumbsDown, ExternalLink, ChevronDown } from "lucide-react";

const Reviews = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="resenas" className="py-16 sm:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-3">
            Reseñas <span className="gradient-text-neon">Detalladas</span>
          </h2>
          <p className="text-muted-foreground text-base">Análisis completo basado en experiencia real.</p>
        </motion.div>

        <div className="space-y-2.5 max-w-3xl mx-auto">
          {casas.slice(0, 8).map((casa) => {
            const isExpanded = expandedId === casa.id;
            return (
              <motion.div key={casa.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-dark !p-4">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : casa.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center font-heading font-bold text-primary text-sm">
                      {casa.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm">{casa.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-accent fill-accent" />
                        <span className="text-xs text-accent">{casa.rating}/10</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pt-4 mt-4 border-t border-border space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">{casa.review}</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="flex items-center gap-2 font-heading font-semibold text-primary text-sm mb-2">
                              <ThumbsUp className="h-3.5 w-3.5" /> Pros
                            </h4>
                            <ul className="space-y-1">
                              {casa.pros.map((p) => (
                                <li key={p} className="text-xs text-muted-foreground">✓ {p}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="flex items-center gap-2 font-heading font-semibold text-destructive text-sm mb-2">
                              <ThumbsDown className="h-3.5 w-3.5" /> Contras
                            </h4>
                            <ul className="space-y-1">
                              {casa.cons.map((c) => (
                                <li key={c} className="text-xs text-muted-foreground">✗ {c}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <a href={casa.affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !text-xs inline-flex">
                          Registrarme en {casa.name} <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
