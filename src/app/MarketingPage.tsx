import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PreviewSection } from './components/PreviewSection';
import { RecommendSection } from './components/RecommendSection';
import { BetaSection } from './components/BetaSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <PreviewSection />
        <RecommendSection />
        <BetaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
