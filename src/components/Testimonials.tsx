import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Rashid",
    role: "Investor, UAE",
    text: "Golden Key's market insight and personalized approach helped me secure a high-yield property in Downtown Dubai. Truly world-class service.",
  },
  {
    name: "Sarah Mitchell",
    role: "Homeowner, UK",
    text: "From virtual viewings to handover, the team made buying my dream villa on Palm Jumeirah seamless and stress-free.",
  },
  {
    name: "James & Priya Chen",
    role: "Investors, Singapore",
    text: "Their data-driven advisory helped us build a diversified Dubai portfolio with exceptional returns. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Testimonials
          </p>
          <h2 className="apple-text-headline mb-4">
            Words From Our Clients
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-semibold">4.7</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Based on 200+ client reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8"
            >
              <p className="apple-text-body text-muted-foreground mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
