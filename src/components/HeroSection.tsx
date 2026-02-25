import { motion } from "framer-motion";
import heroBg from "@/assets/hero-dubai.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dubai skyline at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-primary-foreground/70 mb-6"
        >
          Luxury Real Estate Advisory
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="apple-text-large text-primary-foreground mb-8"
        >
          Unlock Extraordinary
          <br />
          <span className="text-gradient-gold">Living in Dubai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="apple-text-subhead text-primary-foreground/80 max-w-2xl mx-auto mb-12"
        >
          Bespoke advisory, exclusive access, and intelligent investment
          guidance crafted for discerning buyers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="text-primary-foreground/90 border border-primary-foreground/30 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
