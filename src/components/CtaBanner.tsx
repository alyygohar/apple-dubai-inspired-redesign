import { motion } from "framer-motion";
import heroImg from "@/assets/hero-dubai.jpg";

const CtaBanner = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Dubai skyline"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="apple-text-headline text-primary-foreground mb-6">
            Ready to find your dream
            <br />
            property in Dubai?
          </h2>
          <p className="apple-text-subhead text-primary-foreground/70 mb-10">
            Let our experts guide you to the perfect investment.
          </p>
          <a
            href="#contact"
            className="inline-flex bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
