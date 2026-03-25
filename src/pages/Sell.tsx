import { motion } from "framer-motion";
import { FileText, Presentation, ClipboardList, Handshake, TrendingUp, DollarSign, Shield, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import { useConsultation } from "@/components/ConsultationProvider";
import heroImg from "@/assets/hero-dubai.jpg";
import interiorImg from "@/assets/interior-luxury.jpg";

const steps = [
  {
    step: "Step 1",
    icon: FileText,
    title: "Contact Us for Hassle Free Property Selling",
    points: [
      "If you're looking to sell your property in Dubai, we're here to help make the process as easy as possible.",
      "All you need to do is contact us with your name, email, and phone number, and our team of real estate experts will get in touch with you to guide you through every step of the selling process.",
      "We understand that selling a property can be a daunting task, but with our expertise, we'll ensure a hassle-free experience that maximizes the value of your investment.",
    ],
  },
  {
    step: "Step 2",
    icon: Presentation,
    title: "Professional Evaluation & Presentation",
    points: [
      "We believe in presenting your property in the best possible light, which is why we have a team of professionals who will visit your property to capture its true essence.",
      "Our professional photographers, videographers, and evaluators will showcase your property's unique features, highlighting what makes it stand out in the market.",
      "We understand that the first impression is crucial when it comes to selling a property, which is why we go above and beyond to ensure that your property looks its best.",
    ],
  },
  {
    step: "Step 3",
    icon: ClipboardList,
    title: "Internal Discussion & Property Valuation",
    points: [
      "Once we have evaluated your property and gathered all the necessary information, we will conduct an internal discussion to determine the perfect price for your property.",
      "Our team of experts will conduct a thorough analysis of the market, taking into consideration the current market trends, demographics, similar properties, and other relevant factors that impact property value.",
      "Our goal is to ensure that you receive the best value for your investment, and we work tirelessly to achieve this.",
    ],
  },
  {
    step: "Step 4",
    icon: Handshake,
    title: "Hassle-Free Negotiation & Closing",
    points: [
      "Negotiating and closing a deal can be stressful and time-consuming, but with us, you don't have to worry about a thing.",
      "We'll negotiate on your behalf, ensuring that you secure the best possible deal without any complications.",
      "Our team of experts will handle all the paperwork and legal requirements, ensuring that the process is hassle-free and stress-free for you.",
      "We understand that selling a property is a significant financial decision, which is why we aim to make it a smooth and seamless process for our clients.",
    ],
  },
];

const whyUsServices = [
  {
    icon: FileText,
    title: "Professional Documentation",
    description: "We understand the importance of showcasing your property in the best possible light. That's why our team of professional photographers and videographers will capture every angle of your property in the most aesthetically appealing way.",
  },
  {
    icon: Shield,
    title: "Extensive Marketing",
    description: "We understand that selling a property can be a daunting process. That's why we take the responsibility of marketing your property on every channel to ensure a speedy sale. Our marketing team is on hand to promote your property through online and offline channels.",
  },
  {
    icon: TrendingUp,
    title: "Hassle-Free Process",
    description: "We understand that selling a property can be a time-consuming and stressful process. That's why we handle all the paperwork and legalities involved in the selling process. Our experts will guide you through every step of the process, ensuring that you have a smooth and stress-free experience.",
  },
  {
    icon: DollarSign,
    title: "Maximum Return on Investment",
    description: "We understand that you want to get the best possible price for your property. That's why we use our knowledge of the Dubai real estate market to set the right price for your property. Our team of experts will help you set the right price, effectively market your property, and negotiate with potential buyers, ensuring that you get the maximum return on your investment.",
  },
];

const Sell = () => {
  const { open: openConsultation } = useConsultation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Sell your property in Dubai" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          </div>
          <div className="relative z-10 section-padding w-full">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl"
              >
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
                  Sell With Us
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-primary-foreground mb-6">
                  Sell Your Property with<br />
                  <span className="text-primary-foreground/60">Confidence and Ease</span>
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/70 font-light leading-relaxed mb-8">
                  Are you tired of dealing with the stress of selling your property? Look no further than our real estate experts to guide you through the process.
                </p>
                <button
                  onClick={openConsultation}
                  className="text-sm font-medium text-gold hover:text-gold-light transition-colors flex items-center gap-2"
                >
                  Contact Us →
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-background">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
                Four Step Process
              </p>
              <h2 className="apple-text-headline">
                Selling A Property Through<br />
                <span className="text-muted-foreground">Our Website</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 md:p-10 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={interiorImg} alt="Sell your property" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 max-w-[700px] mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary-foreground mb-4">
                Sell Your Property with<br />
                <span className="text-primary-foreground/60">Confidence and Ease</span>
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/70 font-light mb-8">
                Look no further than our real estate experts to guide you through the process.
              </p>
              <button
                onClick={openConsultation}
                className="bg-accent text-accent-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact
              </button>
            </motion.div>
          </div>
        </section>

        {/* Why Us Services */}
        <section className="section-padding bg-sand">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
                Why Us
              </p>
              <h2 className="apple-text-headline">
                Experience the Best in<br />
                <span className="text-muted-foreground">Real Estate Services</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUsServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-background rounded-2xl p-10 hover:shadow-lg transition-shadow duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="section-padding bg-charcoal">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
                Statistics
              </p>
              <h2 className="apple-text-headline text-primary-foreground">
                Awards &amp; Recognition
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-semibold text-gradient-gold mb-1">130+</p>
                  <p className="text-sm text-primary-foreground/50 mb-1">Number of properties sold</p>
                  <div className="flex items-center gap-2 mt-3">
                    <BarChart3 className="w-4 h-4 text-gold" />
                    <p className="text-sm text-primary-foreground/80 font-medium">Top Broker Award</p>
                  </div>
                  <p className="text-xs text-primary-foreground/40 ml-6">by Reportage Properties</p>
                </div>
                <div>
                  <p className="text-5xl font-semibold text-gradient-gold mb-1">200+</p>
                  <p className="text-sm text-primary-foreground/50 mb-1">RERA FACT ISDB KSB KSSA</p>
                  <div className="flex items-center gap-2 mt-3">
                    <BarChart3 className="w-4 h-4 text-gold" />
                    <p className="text-sm text-primary-foreground/80 font-medium">Featured in Khaleej Times</p>
                  </div>
                  <p className="text-xs text-primary-foreground/40 ml-6">Leading English daily newspaper in the UAE</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={interiorImg} alt="Awards and recognition" className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Sell;
