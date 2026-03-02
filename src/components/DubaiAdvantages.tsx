import { motion } from "framer-motion";
import { Shield, Landmark, Globe, TrendingUp, Plane, Award } from "lucide-react";

const advantages = [
  { icon: Shield, title: "0% Income Tax", desc: "Keep 100% of your rental income and capital gains." },
  { icon: Landmark, title: "Golden Visa Eligibility", desc: "Secure 10-year residency with property investments from AED 2M." },
  { icon: Globe, title: "Global Connectivity", desc: "Dubai connects to 260+ destinations within 8 hours." },
  { icon: TrendingUp, title: "High ROI", desc: "Average rental yields of 6–10%, outperforming global cities." },
  { icon: Plane, title: "World-Class Infrastructure", desc: "Ranked #1 globally for quality of life and safety." },
  { icon: Award, title: "Freehold Ownership", desc: "Full property ownership rights for international buyers." },
];

const DubaiAdvantages = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
              Why Dubai
            </p>
            <h2 className="apple-text-headline mb-8">
              Dubai Real Estate
              <br />
              <span className="text-muted-foreground">Advantages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <adv.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{adv.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-background rounded-3xl p-12 shadow-sm">
              <p className="text-7xl md:text-8xl font-semibold text-gradient-gold mb-4">25K+</p>
              <p className="text-sm text-muted-foreground mb-8">Properties Sold in Dubai (2025)</p>
              <div className="w-full h-px bg-border mb-8" />
              <p className="text-7xl md:text-8xl font-semibold text-gradient-gold mb-4">1.5B+</p>
              <p className="text-sm text-muted-foreground">AED Transaction Volume</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DubaiAdvantages;
