import { motion } from "framer-motion";
import interiorImg from "@/assets/interior-luxury.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
              About Us
            </p>
            <h2 className="apple-text-headline mb-8">
              A Boutique Experience
              <br />
              <span className="text-muted-foreground">Curated for You</span>
            </h2>
            <p className="apple-text-body text-muted-foreground mb-6">
              The Golden Key is a modern luxury real estate advisory firm based
              in Dubai, delivering personalized, data-driven, and high-integrity
              solutions across residential, commercial, and investment segments.
            </p>
            <p className="apple-text-body text-muted-foreground">
              We don't just guide you to properties — we open doors to
              opportunity, value, and long-term growth.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={interiorImg}
                alt="Luxury Dubai interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
