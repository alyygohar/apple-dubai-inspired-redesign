import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import blogHero from "@/assets/blog-hero.jpg";
import heroDubai from "@/assets/hero-dubai.jpg";
import palmImg from "@/assets/palm-jumeirah.jpg";
import penthouseImg from "@/assets/penthouse-interior.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import interiorImg from "@/assets/interior-luxury.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const categories = ["All", "News", "Projects", "Property Guides", "Trending"];

const blogPosts = [
  {
    title: "Discovering the Pinnacle of Real Estate Excellence: The top developers in Dubai",
    category: ["Projects", "Property Guides", "Trending"],
    image: heroDubai,
  },
  {
    title: "Navigating the real estate market in Dubai: Buying vs. Renting",
    category: ["Property Guides"],
    image: palmImg,
  },
  {
    title: "Dubai Maritime City, the talk of the town",
    category: ["Trending"],
    image: aboutHero,
  },
  {
    title: "The rise & rise of JVC: Why investors are flocking to this community",
    category: ["News", "Property Guides", "Trending"],
    image: penthouseImg,
  },
  {
    title: "The rise of smart homes in Dubai: Technology meets luxury living",
    category: ["Property Guides", "Trending"],
    image: interiorImg,
  },
  {
    title: "A step-by-step guide to purchasing a property in Dubai",
    category: ["Property Guides"],
    image: heroDubai,
  },
  {
    title: "Off-plan vs. ready to move in: Which is the better investment?",
    category: ["Property Guides"],
    image: palmImg,
  },
  {
    title: "Choosing between an apartment & townhouse for real estate investing",
    category: ["Property Guides"],
    image: aboutHero,
  },
  {
    title: "Commonly used terms in real estate: A glossary for buyers",
    category: ["News", "Property Guides"],
    image: penthouseImg,
  },
  {
    title: "How to get the maximum ROI on your real estate investments",
    category: ["News", "Projects"],
    image: interiorImg,
  },
  {
    title: "Should you invest in branded residences? The pros and cons",
    category: ["News", "Projects"],
    image: heroDubai,
  },
  {
    title: "The hottest upcoming real estate launches in Dubai for 2026",
    category: ["News"],
    image: palmImg,
  },
];

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category.includes(activeCategory));

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={blogHero} alt="Blog" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
          </div>
          <div className="relative z-10 section-padding pb-16 max-w-[1200px] mx-auto w-full">
            <motion.p {...fadeUp} className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
              GK Blog
            </motion.p>
            <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="apple-text-headline text-primary-foreground max-w-2xl mb-6">
              The Latest Trends and Insights in Dubai Real Estate
            </motion.h1>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="apple-text-body text-primary-foreground/70 max-w-xl mb-8">
              From expert opinions on the latest developments to insider tips on buying, selling, or renting property in Dubai. Your perfect place to stay informed and up-to-date.
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

        {/* Filter Tabs */}
        <section className="section-padding pb-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.div {...fadeUp} className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-transparent text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding pt-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, i) => (
                <motion.article
                  key={`${post.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.category.map((c) => (
                      <span key={c} className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold leading-snug group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-16">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-sm text-muted-foreground hover:border-accent/50 disabled:opacity-30 transition-all"
                >
                  ‹
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg border text-sm font-medium transition-all ${
                      currentPage === i + 1
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-sm text-muted-foreground hover:border-accent/50 disabled:opacity-30 transition-all"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
