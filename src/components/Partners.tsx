import { motion } from "framer-motion";

const partners = [
  "EMAAR", "DAMAC", "Nakheel", "Meraas", "Sobha", "DEYAAR", "Azizi", "Ellington",
];

const Partners = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Collaborations
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12">
            Our Trusted Partners
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {partners.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-semibold tracking-tight text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 cursor-default"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
