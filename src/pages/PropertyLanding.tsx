import { useState } from "react";
import { useConsultation } from "@/components/ConsultationProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  MapPin, Bed, Bath, Maximize, Building2, Shield, TrendingUp,
  Landmark, Car, Plane, ShoppingBag, GraduationCap, Heart,
  Waves, Dumbbell, TreePine, Baby, Sun, Wifi, Lock,
  Phone, Mail, ArrowRight, CheckCircle2, Calendar, CreditCard
} from "lucide-react";

// ── Template data (replace per property) ──────────────────────
const PROPERTY = {
  name: "Luxury Residences at Dubai Marina",
  tagline: "Where Iconic Living Meets Waterfront Serenity",
  developer: "Premium Developers",
  location: "Dubai Marina, Dubai, UAE",
  startingPrice: "AED 1,200,000",
  unitTypes: "Studio – 3 BR",
  handover: "Q4 2027",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
  overview: "A sophisticated collection of waterfront residences designed for those who seek the extraordinary. Nestled in the heart of Dubai Marina, this development offers panoramic views of the Arabian Gulf, world-class amenities, and seamless connectivity to everything Dubai has to offer.",
  highlights: [
    { icon: Building2, label: "Premium Finishes", desc: "Italian marble & designer fittings" },
    { icon: Waves, label: "Waterfront Living", desc: "Direct marina & sea views" },
    { icon: TrendingUp, label: "High ROI", desc: "12-18% projected rental yield" },
    { icon: Shield, label: "Freehold Ownership", desc: "100% foreign ownership" },
  ],
  specs: [
    { icon: Bed, label: "Bedrooms", value: "Studio – 3 BR" },
    { icon: Bath, label: "Bathrooms", value: "1 – 4" },
    { icon: Maximize, label: "Area", value: "From 450 sq.ft" },
    { icon: Building2, label: "Floors", value: "45 Levels" },
  ],
  amenities: [
    { icon: Waves, label: "Infinity Pool" },
    { icon: Dumbbell, label: "State-of-Art Gym" },
    { icon: TreePine, label: "Landscaped Gardens" },
    { icon: Baby, label: "Kids Play Area" },
    { icon: Sun, label: "Sun Deck & Lounge" },
    { icon: Wifi, label: "Smart Home Tech" },
    { icon: Lock, label: "24/7 Security" },
    { icon: Car, label: "Covered Parking" },
  ],
  nearbyPlaces: [
    { icon: ShoppingBag, label: "Dubai Mall", time: "15 mins" },
    { icon: Plane, label: "DXB Airport", time: "20 mins" },
    { icon: Landmark, label: "Burj Khalifa", time: "12 mins" },
    { icon: GraduationCap, label: "Top Schools", time: "5 mins" },
    { icon: Heart, label: "Hospitals", time: "8 mins" },
    { icon: Car, label: "Metro Station", time: "3 mins" },
  ],
  paymentPlan: [
    { pct: "20%", label: "On Booking" },
    { pct: "40%", label: "During Construction" },
    { pct: "40%", label: "On Handover" },
  ],
  investReasons: [
    "0% property tax for the lifetime of your investment",
    "UAE Golden Visa with qualifying purchase",
    "Title Deed registered with Dubai Land Department",
    "100% foreign freehold ownership",
    "Among Dubai's highest-yielding communities",
    "Strong capital appreciation driven by Dubai 2040 Vision",
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const PropertyLanding = () => {
  const { open: openConsultation } = useConsultation();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openConsultation();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PROPERTY.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4">
              {PROPERTY.developer} — {PROPERTY.location.split(",")[0]}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl">
              {PROPERTY.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 font-light max-w-xl">
              {PROPERTY.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Button
                onClick={openConsultation}
                className="bg-accent text-accent-foreground hover:opacity-90 rounded-full px-8 py-3 h-auto text-sm font-medium"
              >
                Register Interest
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href="#gallery"
                className="inline-flex items-center px-8 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                View Gallery
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { label: "Starting", value: PROPERTY.startingPrice },
                { label: "Units", value: PROPERTY.unitTypes },
                { label: "Handover", value: PROPERTY.handover },
              ].map((item) => (
                <div key={item.label} className="text-white/50 text-xs uppercase tracking-wider">
                  {item.label}
                  <span className="block text-white text-base md:text-lg font-semibold mt-0.5 normal-case tracking-normal">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK HIGHLIGHTS ── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Why This Property</span>
            <h2 className="apple-text-headline mt-3">Key Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PROPERTY.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-base font-semibold">{item.label}</h3>
                <p className="text-sm text-muted-foreground mt-1 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section-padding bg-card">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Overview</span>
            <h2 className="apple-text-headline mt-3">A New Standard of Modern Living</h2>
            <p className="apple-text-body text-muted-foreground mt-6">{PROPERTY.overview}</p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {PROPERTY.specs.map((spec) => (
                <div key={spec.label} className="flex items-center gap-3 p-3 rounded-xl bg-background">
                  <spec.icon className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{spec.label}</p>
                    <p className="text-sm font-semibold">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="rounded-2xl overflow-hidden aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt={PROPERTY.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">World-Class</span>
            <h2 className="apple-text-headline mt-3">Every Amenity Imagined</h2>
            <p className="apple-text-subhead text-muted-foreground mt-4 max-w-2xl mx-auto">
              Resort-inspired amenities crafted around the way you live
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {PROPERTY.amenities.map((amenity, i) => (
              <motion.div
                key={amenity.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <amenity.icon className="h-6 w-6 text-gold" />
                </div>
                <span className="text-sm font-medium">{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="section-padding bg-card">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Visual Showcase</span>
            <h2 className="apple-text-headline mt-3">Gallery & Design</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-12">
            {PROPERTY.galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
              >
                <img
                  src={img}
                  alt={`${PROPERTY.name} - View ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Prime Location</span>
            <h2 className="apple-text-headline mt-3">The Heart of Connectivity</h2>
            <p className="apple-text-subhead text-muted-foreground mt-4 max-w-2xl">
              Perfectly positioned with every landmark, beach, and business hub within effortless reach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="grid grid-cols-2 gap-4">
              {PROPERTY.nearbyPlaces.map((place, i) => (
                <motion.div
                  key={place.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <place.icon className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{place.label}</p>
                    <p className="text-xs text-muted-foreground">{place.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden bg-muted aspect-[4/3] flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="h-10 w-10 text-gold mx-auto mb-3" />
                <p className="text-sm font-medium">{PROPERTY.location}</p>
                <p className="text-xs text-muted-foreground mt-1">Map placeholder — embed Google Maps here</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT PLAN ── */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Investment Structure</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mt-3">
              Flexible Payment Plan
            </h2>
            <p className="text-lg text-white/60 font-light mt-4 max-w-2xl mx-auto">
              Structured to make your investment journey seamless — aligned with your financial goals from day one.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-14">
            {PROPERTY.paymentPlan.map((step, i) => (
              <motion.div
                key={step.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex-1 w-full md:max-w-xs text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  {i === 0 ? <Calendar className="h-7 w-7 text-gold" /> : i === 1 ? <Building2 className="h-7 w-7 text-gold" /> : <CreditCard className="h-7 w-7 text-gold" />}
                </div>
                <p className="text-3xl font-bold text-gold">{step.pct}</p>
                <p className="text-sm text-white/60 mt-2">{step.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INVEST ── */}
      <section className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Investment Opportunity</span>
            <h2 className="apple-text-headline mt-3">Why Invest in This Property?</h2>

            <ul className="mt-8 space-y-4">
              {PROPERTY.investReasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground font-light">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-8 rounded-2xl bg-card border border-border text-center">
              <TrendingUp className="h-8 w-8 text-gold mx-auto mb-3" />
              <p className="text-3xl font-bold">12-18%</p>
              <p className="text-xs text-muted-foreground mt-1">Projected Rental Yield</p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border text-center">
              <Shield className="h-8 w-8 text-gold mx-auto mb-3" />
              <p className="text-3xl font-bold">0%</p>
              <p className="text-xs text-muted-foreground mt-1">Property Tax</p>
            </div>
            <div className="col-span-2 p-8 rounded-2xl bg-accent/10 border border-accent/20 text-center">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-3xl md:text-4xl font-bold text-gold mt-1">{PROPERTY.startingPrice}</p>
              <p className="text-sm text-muted-foreground mt-2">Freehold · 100% Foreign Ownership</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEAD CAPTURE ── */}
      <section className="section-padding bg-card">
        <div className="max-w-[800px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">Get In Touch</span>
            <h2 className="apple-text-headline mt-3">Register Your Interest</h2>
            <p className="apple-text-subhead text-muted-foreground mt-4">
              Get exclusive pricing, floor plans, and payment plan details
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="mt-10 p-8 md:p-10 rounded-2xl bg-background border border-border"
          >
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name</label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Phone Number</label>
                <Input
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-xl h-12"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl h-12"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6 bg-accent text-accent-foreground hover:opacity-90 rounded-full h-12 text-sm font-medium"
            >
              <Phone className="mr-2 h-4 w-4" />
              Request a Call Back
            </Button>

            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +971 XX XXX XXXX</span>
              <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> info@goldenkey.ae</span>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-charcoal text-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Don't Miss This Opportunity
          </h2>
          <p className="text-white/60 font-light mt-4">
            Limited units available. Secure your investment in one of Dubai's most prestigious addresses today.
          </p>
          <Button
            onClick={openConsultation}
            className="mt-8 bg-accent text-accent-foreground hover:opacity-90 rounded-full px-10 py-3 h-auto text-sm font-medium"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* ── Minimal branded footer ── */}
      <footer className="px-6 py-6 bg-background border-t border-border text-center">
        <span className="text-sm font-semibold tracking-tight text-gradient-gold">Golden Key</span>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} The Golden Key. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default PropertyLanding;
