import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PropertyTypes from "@/components/PropertyTypes";
import DubaiAdvantages from "@/components/DubaiAdvantages";
import BestAreas from "@/components/BestAreas";
import GallerySection from "@/components/GallerySection";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProperties />
        <GallerySection />
        <CtaBanner />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <PropertyTypes />
        <DubaiAdvantages />
        <BestAreas />
        <Partners />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
