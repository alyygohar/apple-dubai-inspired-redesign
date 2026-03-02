import { motion } from "framer-motion";
import palmImg from "@/assets/palm-jumeirah.jpg";
import penthouseImg from "@/assets/penthouse-interior.jpg";
import heroImg from "@/assets/hero-dubai.jpg";

const properties = [
  {
    image: palmImg,
    title: "Seafront Villa — Palm Jumeirah",
    beds: 5,
    baths: 6,
    area: "12,500 sq.ft",
    price: "AED 45,000,000",
  },
  {
    image: penthouseImg,
    title: "Sky Penthouse — Downtown Dubai",
    beds: 4,
    baths: 5,
    area: "8,200 sq.ft",
    price: "AED 28,000,000",
  },
  {
    image: heroImg,
    title: "Marina Residence — Dubai Marina",
    beds: 3,
    baths: 4,
    area: "4,800 sq.ft",
    price: "AED 12,500,000",
  },
];

const FeaturedProperties = () => {
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
            Exclusive Listings
          </p>
          <h2 className="apple-text-headline">
            Experience the Best of
            <br />
            <span className="text-muted-foreground">Dubai Living</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{prop.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span>{prop.beds} Beds</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{prop.baths} Baths</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{prop.area}</span>
                </div>
                <p className="text-lg font-semibold text-accent">{prop.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
