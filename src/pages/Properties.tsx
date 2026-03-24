import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import DubaiAdvantages from "@/components/DubaiAdvantages";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import { useConsultation } from "@/components/ConsultationProvider";
import { allProperties, ITEMS_PER_PAGE } from "@/lib/propertyData";

const Properties = () => {
  const { open: openConsultation } = useConsultation();
  const [searchQuery, setSearchQuery] = useState("");
  const [actionFilter, setActionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [developerFilter, setDeveloperFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [bedsFilter, setBedsFilter] = useState("All");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return allProperties.filter((p) => {
      if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && !p.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (actionFilter !== "All" && p.action !== actionFilter) return false;
      if (statusFilter !== "All" && p.status !== statusFilter) return false;
      if (developerFilter !== "All" && p.developer !== developerFilter) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      if (typeFilter !== "All" && p.type !== typeFilter) return false;
      if (bedsFilter !== "All" && p.beds !== Number(bedsFilter)) return false;
      if (priceMin && p.priceNum < Number(priceMin)) return false;
      if (priceMax && p.priceNum > Number(priceMax)) return false;
      return true;
    });
  }, [searchQuery, actionFilter, statusFilter, developerFilter, categoryFilter, typeFilter, bedsFilter, priceMin, priceMax]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const hasActiveFilters = searchQuery || actionFilter !== "All" || statusFilter !== "All" || developerFilter !== "All" || categoryFilter !== "All" || typeFilter !== "All" || bedsFilter !== "All" || priceMin || priceMax;

  const resetFilters = () => {
    setSearchQuery("");
    setActionFilter("All");
    setStatusFilter("All");
    setDeveloperFilter("All");
    setCategoryFilter("All");
    setTypeFilter("All");
    setBedsFilter("All");
    setPriceMin("");
    setPriceMax("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-8 section-padding bg-background">
          <div className="max-w-[1200px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Property Catalogue</p>
              <h1 className="apple-text-headline mb-4">
                Discover the Best Properties<br />
                <span className="text-muted-foreground">in Dubai</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <PropertyFilters
                searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                actionFilter={actionFilter} setActionFilter={setActionFilter}
                statusFilter={statusFilter} setStatusFilter={setStatusFilter}
                developerFilter={developerFilter} setDeveloperFilter={setDeveloperFilter}
                categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
                typeFilter={typeFilter} setTypeFilter={setTypeFilter}
                bedsFilter={bedsFilter} setBedsFilter={setBedsFilter}
                priceMin={priceMin} setPriceMin={setPriceMin}
                priceMax={priceMax} setPriceMax={setPriceMax}
                onResetPage={() => setCurrentPage(1)}
              />
            </motion.div>
          </div>
        </section>

        {/* Results count */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-4">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filtered.length}</span> Properties Found
            </p>
            {hasActiveFilters && (
              <button onClick={resetFilters} className="text-xs text-accent hover:underline">Reset All Filters</button>
            )}
          </div>
        </section>

        {/* Property Grid */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pb-16">
          <div className="max-w-[1200px] mx-auto">
            {paginated.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((prop, i) => (
                  <PropertyCard key={prop.id} property={prop} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">No properties match your filters.</p>
                <button onClick={resetFilters} className="text-sm text-accent hover:underline">Clear all filters</button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                      page === currentPage ? "bg-accent text-accent-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <DubaiAdvantages />
        <ServicesSection />
        <StatsSection />

        {/* CTA */}
        <section className="section-padding bg-sand">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">Can't Find What You're Looking For?</p>
              <h2 className="apple-text-headline mb-6">
                Let Us Find Your<br /><span className="text-muted-foreground">Perfect Property</span>
              </h2>
              <p className="apple-text-body text-muted-foreground mb-10">
                Our expert advisors have access to exclusive off-market listings and upcoming launches. Share your requirements and we'll do the rest.
              </p>
              <button onClick={openConsultation} className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
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
