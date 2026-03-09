import { motion } from "framer-motion";
import { Building2, DollarSign, Clock, Home, TrendingUp, Briefcase, Users, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import interiorImg from "@/assets/interior-luxury.jpg";
import palmImg from "@/assets/palm-jumeirah.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const storyCards = [
  {
    title: "The Inception of Golden Key Real Estate",
    description:
      "Born from a passion to redefine how clients buy, sell, and invest in Dubai real estate. We saw an opportunity to blend traditional values of trust and integrity with modern data-driven strategies, creating a premium advisory experience.",
    image: interiorImg,
  },
  {
    title: "Understanding the Sentiment Behind Real Estate Acquisition",
    description:
      "We believe every property transaction is deeply personal. Whether it's your first home or your tenth investment, we approach each deal by understanding your aspirations, lifestyle preferences, and financial goals.",
    image: palmImg,
  },
  {
    title: "Simplifying the Real Estate Buying Process",
    description:
      "Our commitment is to ensure that buying real estate should be a seamless journey. We handle the complexity — from market analysis to legal formalities — so you can focus on what matters most: finding your perfect property.",
    image: aboutHero,
  },
];

const principles = [
  { icon: Home, title: "Right Property", description: "Matching you with properties that align perfectly with your lifestyle and investment goals." },
  { icon: DollarSign, title: "Right Price", description: "Leveraging deep market intelligence to ensure you get the best value on every transaction." },
  { icon: Clock, title: "Right Time", description: "Timing the market with precision, guided by data and years of local expertise." },
];

const services = [
  {
    title: "Buying",
    description: "With our ever-expanding portfolio of market availability, we help you discover properties that match your vision — from luxury residences to strategic investment opportunities.",
    icon: Home,
  },
  {
    title: "Selling",
    description: "Finding the best buyers for your property is what we do best. With our advanced marketing strategies and extensive network, we maximize your property's exposure and value.",
    icon: TrendingUp,
  },
  {
    title: "Leasing",
    description: "Dubai offers phenomenal opportunities for rental yields. From short-term holiday lets to long-term residential leases, our team delivers tailored leasing solutions.",
    icon: Briefcase,
  },
  {
    title: "Portfolio Management",
    description: "Managing a real estate portfolio requires expertise, attention, and strategic thinking. Our advisory team helps you build, optimize, and grow your property portfolio across Dubai.",
    icon: Building2,
  },
];

const team = [
  { name: "Ahmed Al-Rashid", role: "Senior Property Consultant", expertise: "Residential" },
  { name: "Sarah Mitchell", role: "Investment Advisor", expertise: "Commercial" },
  { name: "Omar Hassan", role: "Off-Plan Specialist", expertise: "Off-Plan" },
  { name: "Priya Sharma", role: "Leasing Manager", expertise: "Leasing" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutHero} alt="Dubai skyline" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/40" />
          </div>
          <div className="relative z-10 section-padding pb-16 max-w-[1200px] mx-auto w-full">
            <motion.p {...fadeUp} className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
              About Us
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="apple-text-headline text-primary-foreground max-w-2xl mb-6">
              Get to Know Us and Our Commitment to Your Real Estate Needs
            </motion.h1>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="apple-text-body text-primary-foreground/70 max-w-xl mb-8">
              Discover our Transparency, Expertise, and Unshakeable Service. We are committed to delivering the best real estate experience by putting our clients first.
            </motion.p>
            <motion.a
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* Brand Name */}
        <section className="section-padding text-center">
          <motion.div {...fadeUp} className="max-w-[800px] mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Est. 2020</p>
            <h2 className="apple-text-headline mb-4">
              The <span className="text-gradient-gold">Golden Key</span>
            </h2>
          </motion.div>
        </section>

        {/* Story Cards */}
        <section className="section-padding pt-0">
          <div className="max-w-[1200px] mx-auto space-y-24">
            {storyCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Our Story</p>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{card.title}</h3>
                  <p className="apple-text-body text-muted-foreground">{card.description}</p>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Principle of RIGHT */}
        <section className="section-padding bg-card">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Our Philosophy</p>
              <h2 className="apple-text-headline mb-16">
                We operate on the principle of <span className="text-gradient-gold">'RIGHT'</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <p.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.a
              {...fadeUp}
              href="#contact"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-12 hover:opacity-80 transition-opacity"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="max-w-[1200px] mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">What We Do</p>
              <h2 className="apple-text-headline">
                Real Estate Solutions <br />
                <span className="text-muted-foreground">for All Your Needs</span>
              </h2>
            </motion.div>
            <div className="space-y-0 divide-y divide-border">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-6 items-center py-10 group"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient-gold">{s.title}</h3>
                  <p className="apple-text-body text-muted-foreground">{s.description}</p>
                  <a href="#contact" className="text-accent text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity">
                    Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Vision */}
        <section className="section-padding bg-charcoal text-primary-foreground">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Leadership</p>
              <h2 className="apple-text-headline mb-12">
                A Vision of Luxury <br />
                <span className="text-gradient-gold">Real Estate in Dubai</span>
              </h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <p className="apple-text-body text-primary-foreground/70 mb-6">
                As the founder & CEO of The Golden Key, I'm proud to lead a team of real estate experts in Dubai. Our mission is clear: to deliver an unmatched advisory experience rooted in trust, transparency, and market expertise.
              </p>
              <p className="apple-text-body text-primary-foreground/70 mb-10">
                Our team of professionals is dedicated to providing you with the highest standards of service and expertise. We'll guide you every step of the way, from your first consultation to closing your deal — and beyond.
              </p>
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-accent/30">
                <img src={ceoPortrait} alt="CEO Portrait" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-semibold">Mr. Ahmed Khan</p>
              <p className="text-xs text-primary-foreground/50">Founder & CEO</p>
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="max-w-[1200px] mx-auto">
            <motion.div {...fadeUp} className="text-center mb-16">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Our Team</p>
              <h2 className="apple-text-headline">
                The Real Estate Professionals <br />
                <span className="text-muted-foreground">You Can Trust</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-full aspect-square rounded-2xl bg-card mb-6 flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-muted-foreground/20" />
                  </div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-1">{member.expertise}</p>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-card">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Testimonials</p>
              <h2 className="apple-text-headline mb-12">Words From Our Clients</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="relative">
              <blockquote className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground italic mb-8">
                "Hired services by Golden Key Real Estate, but honest the pay, highly skilled and qualified by the
                current market, determined the customer needs and gave the best available market scenario.
                Highly recommended without a second to say to our contacts."
              </blockquote>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-semibold">4.7</p>
              <p className="text-xs text-muted-foreground mt-1">Google Customer Ratings</p>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
