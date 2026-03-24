import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize, Building, Hash, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PaymentCalculator from "@/components/PaymentCalculator";
import { useConsultation } from "@/components/ConsultationProvider";
import { allProperties } from "@/lib/propertyData";

const PropertyDetail = () => {
  const { id } = useParams();
  const { open: openConsultation } = useConsultation();
  const property = allProperties.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const [showMore, setShowMore] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-accent hover:underline">Back to Properties</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = property.images;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Back link */}
        <section className="pt-24 pb-4 px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-[1200px] mx-auto">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Properties
            </Link>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-3"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={images[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              {/* Thumbnails grid */}
              <div className="grid grid-cols-2 gap-3">
                {images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === i ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Title + Contact */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] font-medium tracking-wider uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {property.action}
                  </span>
                  <span className={`text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full ${
                    property.status === "Off Plan"
                      ? "bg-foreground/80 text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}>
                    {property.status}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
                  {property.title}
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-accent">{property.price}</p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6 md:w-[280px] shrink-0 text-center">
                <p className="text-sm font-semibold mb-1">Get In Touch With Us</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Get free consultation with a professional real estate consultant.
                </p>
                <button
                  onClick={openConsultation}
                  className="w-full border border-accent text-accent py-2.5 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Details */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-lg font-semibold mb-4">Quick Details</h2>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Area</p>
                    <p className="text-sm font-semibold flex items-center gap-1.5">
                      <Maximize className="w-3.5 h-3.5 text-accent" /> {property.area} SQFT
                    </p>
                  </div>
                  {property.beds > 0 && (
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Bedrooms</p>
                      <p className="text-sm font-semibold flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-accent" /> {property.beds}
                      </p>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Bathrooms</p>
                      <p className="text-sm font-semibold flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-accent" /> {property.baths}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Tower Name</p>
                    <p className="text-sm font-semibold flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-accent" /> {property.towerName}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Locality</p>
                    <p className="text-sm font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {property.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Type</p>
                    <p className="text-sm font-semibold">{property.type}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">Prop. Ref. No</p>
                  <p className="text-sm font-semibold flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-accent" /> {property.refNo}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Description */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-12">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold mb-4">Project Description</h2>
              <div className="bg-card rounded-2xl border border-border p-6">
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {showMore ? property.description : property.description.slice(0, 200) + (property.description.length > 200 ? "..." : "")}
                </p>
                {property.description.length > 200 && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-sm text-accent hover:underline mt-3"
                  >
                    {showMore ? "View Less ↑" : "View More ↓"}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Payment Calculator */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-16">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <PaymentCalculator defaultPrice={property.priceNum} />
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
