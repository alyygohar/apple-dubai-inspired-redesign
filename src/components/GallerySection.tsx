import { motion } from "framer-motion";
import palmImg from "@/assets/palm-jumeirah.jpg";
import penthouseImg from "@/assets/penthouse-interior.jpg";
import heroImg from "@/assets/hero-dubai.jpg";

const areas = [
  { image: palmImg, name: "Palm Jumeirah", desc: "Beachfront luxury & global appeal" },
  { image: penthouseImg, name: "Downtown Dubai", desc: "Iconic towers & elite lifestyle" },
  { image: heroImg, name: "Dubai Marina", desc: "Vibrant waterfront living" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Featured Areas
          </p>
          <h2 className="apple-text-headline">
            Dubai's Most Prestigious
            <br />
            <span className="text-muted-foreground">Communities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl font-semibold text-primary-foreground mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-primary-foreground/70">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
