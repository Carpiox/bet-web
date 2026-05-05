import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ComparisonTable from "@/components/ComparisonTable";
import Reviews from "@/components/Reviews";
import StepGuide from "@/components/StepGuide";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <WhyChooseUs />
    <ComparisonTable />
    <Reviews />
    <StepGuide />
    <FAQ />
    <BlogSection />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
