import { motion } from "framer-motion";
import { casas } from "@/data/casas";
import { ExternalLink, Crown } from "lucide-react";

const ComparisonTable = () => (
  <section id="comparativa" className="py-16 sm:py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold mb-3">
          Tabla <span className="gradient-text-neon">Comparativa</span> de Bonos
        </h2>
        <p className="text-muted-foreground text-base">Compara las {casas.length} mejores casas de apuestas con licencia en España.</p>
      </motion.div>

      {/* Mobile cards */}
      <div className="lg:hidden space-y-3">
        {casas.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className={`card-dark relative ${c.destacado ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
          >
            {c.destacado && (
              <div className="absolute -top-px left-4 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-b-md flex items-center gap-1">
                <Crown className="h-3 w-3" /> MEJOR BONO
              </div>
            )}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-heading font-bold text-primary text-sm">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm">{c.name}</h3>
                  <span className="text-xs text-muted-foreground">{c.puntuacionAfiliados}/100</span>
                </div>
              </div>
              <span className="text-primary font-extrabold text-lg">{c.bonusAmount}</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-4">
              <span>Rollover: <strong className="text-foreground">{c.rollover}</strong></span>
              <span>Cuota mín: <strong className="text-foreground">{c.cuotaMinima}</strong></span>
              <span>Depósito mín: <strong className="text-foreground">{c.depositoMinimo}</strong></span>
              <span>Retiros: <strong className="text-foreground">{c.retiros}</strong></span>
            </div>
            <a href={c.affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full !py-2.5 !text-sm">
              ¡Reclamar Bono! <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Desktop table */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="hidden lg:block overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/60">
              {["Casa", "Bono", "Rollover", "Cuota Mín.", "Depósito Mín.", "Retiros", "App", "Puntuación", ""].map((h) => (
                <th key={h} className="py-3.5 px-4 text-left font-heading font-semibold text-foreground text-xs uppercase tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {casas.map((c, i) => (
              <tr key={c.id} className={`border-t border-border hover:bg-secondary/20 transition-colors ${c.destacado ? "bg-primary/[0.04]" : ""}`}>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center font-heading font-bold text-primary text-xs">
                      {c.name.charAt(0)}
                    </div>
                    <span className="font-heading font-bold whitespace-nowrap">
                      {c.name}
                      {c.destacado && <span className="ml-2 text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-bold align-middle">MEJOR</span>}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-primary font-extrabold">{c.bonusAmount}</td>
                <td className="py-3 px-4 font-medium">{c.rollover}</td>
                <td className="py-3 px-4">{c.cuotaMinima}</td>
                <td className="py-3 px-4">{c.depositoMinimo}</td>
                <td className="py-3 px-4">{c.retiros}</td>
                <td className="py-3 px-4">{c.appMovil}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full text-xs">
                    {c.puntuacionAfiliados}/100
                  </span>
                </td>
                <td className="py-3 px-4">
                  <a href={c.affiliateLink} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-4 !text-xs !rounded-md">
                    ¡Reclamar! <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
