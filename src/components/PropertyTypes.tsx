import { motion } from "framer-motion";
import palmImg from "@/assets/palm-jumeirah.jpg";
import penthouseImg from "@/assets/penthouse-interior.jpg";
import heroImg from "@/assets/hero-dubai.jpg";
import interiorImg from "@/assets/interior-luxury.jpg";

const types = [
  { image: palmImg, label: "Apartments", count: "350+ Available" },
  { image: penthouseImg, label: "Penthouses", count: "120+ Available" },
  { image: interiorImg, label: "Townhouses", count: "80+ Available" },
  { image: heroImg, label: "Villas", count: "200+ Available" },
];

const PropertyTypes = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Property Types
          </p>
          <h2 className="apple-text-headline">
            Discover Our Wide Range of
            <br />
            <span className="text-muted-foreground">Properties in Dubai</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {types.map((type, i) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={type.image}
                alt={type.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                  {type.label}
                </h3>
                <p className="text-xs text-primary-foreground/60">{type.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
