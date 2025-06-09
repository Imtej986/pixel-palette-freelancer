
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TemplatesSection from '../components/TemplatesSection';
import PricingSection from '../components/PricingSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <AboutSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
