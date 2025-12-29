import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import ProductsSection from '@/components/sections/ProductsSection';
import IndianEmotionSection from '@/components/sections/IndianEmotionSection';
import StoriesSection from '@/components/sections/StoriesSection';
import MadeInIndiaSection from '@/components/sections/MadeInIndiaSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import SupportSection from '@/components/sections/SupportSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Clean, Lifestyle Focus */}
      <HeroSection />
      
      {/* Why Choose - Trust Building */}
      <WhyChooseSection />
      
      {/* Products - Solution Showcase */}
      <ProductsSection />
      
      {/* Indian Emotion - Relatable Moments */}
      <IndianEmotionSection />
      
      {/* Made in India - Pride & Heritage */}
      <MadeInIndiaSection />
      
      {/* How It Works - Simple Process */}
      <HowItWorksSection />
      
      {/* Stories - Testimonials */}
      <StoriesSection />
      
      {/* Calculator - Interactive Engagement */}
      <CalculatorSection />
      
      {/* Support - Trust & Service */}
      <SupportSection />
      
      {/* Final CTA - Conversion */}
      <FinalCTASection />
      
      <Footer />
    </main>
  );
}
