import AdsCarouselModal from "@/components/AdsCarouselModal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteCTASection from "@/components/QuoteCTASection";
import WhyMactechSection from "@/components/WhyMactechSection";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <AdsCarouselModal />
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhyMactechSection />
        {/* <ProjectsSection /> */}
        <QuoteCTASection />
        <Footer />
      </main>
    </div>
  );
}
