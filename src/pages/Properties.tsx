import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Bed, Bath, Maximize, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import DubaiAdvantages from "@/components/DubaiAdvantages";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import { useConsultation } from "@/components/ConsultationProvider";
import palmImg from "@/assets/palm-jumeirah.jpg";
import penthouseImg from "@/assets/penthouse-interior.jpg";
import heroImg from "@/assets/hero-dubai.jpg";
import interiorImg from "@/assets/interior-luxury.jpg";

const allProperties = [
  {
    id: 1,
    image: palmImg,
    title: "Palm Paying | Great for Investment | Flexible...",
    location: "Palm Jumeirah",
    beds: 5,
    baths: 6,
    area: "12,500",
    price: "AED 4,410,000",
    priceNum: 4410000,
    status: "Buy",
    type: "Villa",
    category: "Ready",
  },
  {
    id: 2,
    image: penthouseImg,
    title: "Flexible payment Plan | Breathtaking view from...",
    location: "Downtown Dubai",
    beds: 4,
    baths: 5,
    area: "8,200",
    price: "AED 6,800,000",
    priceNum: 6800000,
    status: "Buy",
    type: "Penthouse",
    category: "Ready",
  },
  {
    id: 3,
    image: heroImg,
    title: "Exclusive Residential | Skyline by Address...",
    location: "Dubai Marina",
    beds: 3,
    baths: 4,
    area: "4,800",
    price: "AED 5,899,898",
    priceNum: 5899898,
    status: "Buy",
    type: "Apartment",
    category: "Ready",
  },
  {
    id: 4,
    image: interiorImg,
    title: "Luxurious Apartment | Breathtaking Rise Resi...",
    location: "Dubai Harbour",
    beds: 3,
    baths: 3,
    area: "3,200",
    price: "AED 16,000,000",
    priceNum: 16000000,
    status: "Buy",
    type: "Apartment",
    category: "Ready",
  },
  {
    id: 5,
    image: palmImg,
    title: "Ideal for Investment | Skyview | Penthouse",
    location: "Dubai Harbour",
    beds: 4,
    baths: 5,
    area: "6,500",
    price: "AED 28,000,000",
    priceNum: 28000000,
    status: "Buy",
    type: "Penthouse",
    category: "Ready",
  },
  {
    id: 6,
    image: penthouseImg,
    title: "Flexible Payment Plan – Great for Investment",
    location: "Dubai Harbour",
    beds: 2,
    baths: 3,
    area: "2,100",
    price: "AED 16,700,000",
    priceNum: 16700000,
    status: "Off-Plan",
    type: "Apartment",
    category: "Off-Plan",
  },
  {
    id: 7,
    image: heroImg,
    title: "3 Bedroom Extended Brand New Villa for rent...",
    location: "DAMAC Hills 2 (Akoya by DAMAC)",
    beds: 3,
    baths: 3,
    area: "2,800",
    price: "AED 95,000",
    priceNum: 95000,
    status: "Rent",
    type: "Villa",
    category: "Ready",
  },
  {
    id: 8,
    image: interiorImg,
    title: "3 Bedroom Corner Unit First Rate Good Investme...",
    location: "DAMAC Hills 2 (Akoya by DAMAC)",
    beds: 3,
    baths: 3,
    area: "2,200",
    price: "AED 1,800,000",
    priceNum: 1800000,
    status: "Buy",
    type: "Townhouse",
    category: "Ready",
  },
  {
    id: 9,
    image: palmImg,
    title: "KEY EXPENSES READY TO MOVE IN | 2 BR...",
    location: "Jumeirah Village Circle (JVC)",
    beds: 2,
    baths: 2,
    area: "1,200",
    price: "AED 110,000",
    priceNum: 110000,
    status: "Rent",
    type: "Apartment",
    category: "Ready",
  },
  {
    id: 10,
    image: penthouseImg,
    title: "Good For Investment | Flexible Payment Plan...",
    location: "The Valley",
    beds: 4,
    baths: 4,
    area: "3,600",
    price: "AED 3,310,000",
    priceNum: 3310000,
    status: "Buy",
    type: "Townhouse",
    category: "Off-Plan",
  },
  {
    id: 11,
    image: heroImg,
    title: "FLEXIBLE PAYMENT PLAN | NEW LAUNCH",
    location: "The Valley",
    beds: 3,
    baths: 3,
    area: "2,400",
    price: "AED 5,610,000",
    priceNum: 5610000,
    status: "Buy",
    type: "Villa",
    category: "Off-Plan",
  },
  {
    id: 12,
    image: interiorImg,
    title: "Premium Residence | Sea View | Modern Design",
    location: "JBR, Dubai",
    beds: 2,
    baths: 2,
    area: "1,800",
    price: "AED 1,448,888",
    priceNum: 1448888,
    status: "Buy",
    type: "Apartment",
    category: "Ready",
  },
];

const ITEMS_PER_PAGE = 9;

const Properties = () => {
  const { open: openConsultation } = useConsultation();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return allProperties.filter((p) => {
      if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && !p.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (statusFilter !== "All" && p.status !== statusFilter) return false;
      if (typeFilter !== "All" && p.type !== typeFilter) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      if (priceFilter === "Under 1M" && p.priceNum >= 1000000) return false;
      if (priceFilter === "1M - 5M" && (p.priceNum < 1000000 || p.priceNum > 5000000)) return false;
      if (priceFilter === "5M - 15M" && (p.priceNum < 5000000 || p.priceNum > 15000000)) return false;
      if (priceFilter === "15M+" && p.priceNum < 15000000) return false;
      return true;
    });
  }, [searchQuery, statusFilter, typeFilter, categoryFilter, priceFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setTypeFilter("All");
    setCategoryFilter("All");
    setPriceFilter("All");
    setCurrentPage(1);
  };

  const selectClass = "w-full bg-muted/50 border border-border rounded-xl py-2.5 px-4 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-8 section-padding bg-background">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
                Property Catalogue
              </p>
              <h1 className="apple-text-headline mb-4">
                Discover the Best Properties
                <br />
                <span className="text-muted-foreground">in Dubai</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card rounded-2xl p-4 md:p-6 border border-border"
            >
              {/* Search row */}
              <div className="flex gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by location or property name..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="w-full bg-muted/50 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors md:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Filter row */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${showFilters ? "block" : "hidden md:grid"}`}>
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Status</label>
                  <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }} className={selectClass}>
                    <option>All</option>
                    <option>Buy</option>
                    <option>Rent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Category</label>
                  <select value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }} className={selectClass}>
                    <option>All</option>
                    <option>Ready</option>
                    <option>Off-Plan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Type</label>
                  <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }} className={selectClass}>
                    <option>All</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Townhouse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1.5 px-1">Price</label>
                  <select value={priceFilter} onChange={(e) => { setPriceFilter(e.target.value); setCurrentPage(1); }} className={selectClass}>
                    <option>All</option>
                    <option>Under 1M</option>
                    <option>1M - 5M</option>
                    <option>5M - 15M</option>
                    <option>15M+</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results count & reset */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-4">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filtered.length}</span> Properties Found
            </p>
            {(searchQuery || statusFilter !== "All" || typeFilter !== "All" || categoryFilter !== "All" || priceFilter !== "All") && (
              <button onClick={resetFilters} className="text-xs text-accent hover:underline">
                Reset All Filters
              </button>
            )}
          </div>
        </section>

        {/* Property Grid */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-16">
          <div className="max-w-[1200px] mx-auto">
            {paginated.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((prop, i) => (
                  <motion.div
                    key={prop.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="text-[10px] font-medium tracking-wider uppercase bg-accent text-accent-foreground px-3 py-1 rounded-full">
                          {prop.status}
                        </span>
                        {prop.category === "Off-Plan" && (
                          <span className="text-[10px] font-medium tracking-wider uppercase bg-foreground/80 text-primary-foreground px-3 py-1 rounded-full">
                            Off-Plan
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-semibold mb-2 line-clamp-1">{prop.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span>{prop.location}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {prop.beds}</span>
                        <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {prop.baths}</span>
                        <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {prop.area} sq.ft</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-base font-semibold text-accent">{prop.price}</p>
                        <button
                          onClick={openConsultation}
                          className="text-xs font-medium border border-accent text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">No properties match your filters.</p>
                <button onClick={resetFilters} className="text-sm text-accent hover:underline">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                      page === currentPage
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Dubai */}
        <DubaiAdvantages />

        {/* Why Us */}
        <ServicesSection />

        {/* Awards & Recognition */}
        <StatsSection />

        {/* CTA */}
        <section className="section-padding bg-sand">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
                Can't Find What You're Looking For?
              </p>
              <h2 className="apple-text-headline mb-6">
                Let Us Find Your
                <br />
                <span className="text-muted-foreground">Perfect Property</span>
              </h2>
              <p className="apple-text-body text-muted-foreground mb-10">
                Our expert advisors have access to exclusive off-market listings and upcoming launches. Share your requirements and we'll do the rest.
              </p>
              <button
                onClick={openConsultation}
                className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
              </button>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
