import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-sand">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="apple-text-headline mb-6">
            Begin Your Journey
          </h2>
          <p className="apple-text-subhead text-muted-foreground mb-12">
            Schedule a confidential consultation with our market advisors.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a
              href="tel:0097145651830"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">+971 4 565 1830</span>
            </a>
            <a
              href="mailto:info@goldenkeydxb.com"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">info@goldenkeydxb.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm">Business Bay, Dubai</span>
            </div>
          </div>

          <a
            href="https://wa.link/wccsu9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
