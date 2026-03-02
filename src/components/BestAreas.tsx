import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Palm Jumeirah", roi: "7.2%", type: "Beachfront" },
  { name: "Downtown Dubai", roi: "6.8%", type: "Urban Core" },
  { name: "Dubai Marina", roi: "7.5%", type: "Waterfront" },
  { name: "Business Bay", roi: "8.1%", type: "Commercial" },
  { name: "JBR", roi: "6.9%", type: "Leisure" },
  { name: "Dubai Hills", roi: "7.0%", type: "Community" },
];

const BestAreas = () => {
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
            Market Insights
          </p>
          <h2 className="apple-text-headline text-primary-foreground">
            Best Performing
            <br />
            <span className="text-primary-foreground/50">Areas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-primary-foreground/5 rounded-2xl p-6 text-center border border-primary-foreground/10 hover:border-accent/40 transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-primary-foreground mb-1">{area.name}</h3>
              <p className="text-2xl font-semibold text-gradient-gold mb-1">{area.roi}</p>
              <p className="text-xs text-primary-foreground/50">{area.type} · Avg ROI</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestAreas;
