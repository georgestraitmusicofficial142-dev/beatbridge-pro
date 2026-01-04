import { motion } from "framer-motion";

const logos = [
  { name: "Universal Music", opacity: 0.6 },
  { name: "Sony Music", opacity: 0.5 },
  { name: "Warner Bros", opacity: 0.55 },
  { name: "Atlantic Records", opacity: 0.5 },
  { name: "Def Jam", opacity: 0.6 },
  { name: "Interscope", opacity: 0.5 },
];

export const TrustedBySection = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by Leading Labels & Brands
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="transition-all duration-300"
              style={{ opacity: logo.opacity }}
            >
              <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
