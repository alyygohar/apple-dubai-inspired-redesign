import { motion } from "framer-motion";
import { Building2, TrendingUp, Key, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Off-Plan Advisory",
    description:
      "Early access to Dubai's newest developments with flexible payment plans and limited-inventory units.",
  },
  {
    icon: Key,
    title: "Property Acquisition",
    description:
      "Handpicked properties aligned with your lifestyle, financial goals, and long-term vision.",
  },
  {
    icon: TrendingUp,
    title: "Investment Consultancy",
    description:
      "In-depth market analysis, ROI forecasting, and portfolio structuring for smart decision-making.",
  },
  {
    icon: BarChart3,
    title: "Rental Yield Strategy",
    description:
      "Maximize returns with strategic guidance built around Dubai's evolving leasing landscape.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-sand">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Our Services
          </p>
          <h2 className="apple-text-headline">
            Boutique Services for
            <br />
            <span className="text-muted-foreground">Refined Investors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-background rounded-2xl p-10 hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="apple-text-body text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
