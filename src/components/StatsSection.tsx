import { motion } from "framer-motion";

const stats = [
  { value: "6-10%", label: "Rental Yields" },
  { value: "0%", label: "Property Tax" },
  { value: "750K", label: "AED for Golden Visa" },
  { value: "24/7", label: "Concierge Support" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            Why Dubai
          </p>
          <h2 className="apple-text-headline text-primary-foreground">
            Investment Without
            <br />
            <span className="text-primary-foreground/50">Compromise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-semibold text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/60 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
