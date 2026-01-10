import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { BookSessionCTA } from "@/components/home/BookSessionCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { OutreachSection } from "@/components/home/OutreachSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <FeaturedSection />
        <OutreachSection />
        <BookSessionCTA />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
