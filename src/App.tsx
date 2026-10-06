import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CatBackground } from './components/CatBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductIntro } from './components/ProductIntro';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { IngredientsSection } from './components/IngredientsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { DistributorPolicy } from './components/DistributorPolicy';
import { UsageGuide } from './components/UsageGuide';
import { AgencyForm } from './components/AgencyForm';
import { FooterContact } from './components/FooterContact';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-200 selection:text-amber-900 pb-16 relative">
        {/* Cat-Themed Ambient Background */}
        <CatBackground />

        {/* 1. Header with Prominent Brand, Product Name & Balanced Menu */}
        <Header />

        <main className="flex-1">
          {/* 2. Hero Section: Prominent Product Name, Slogan & Packaging */}
          <Hero />

          {/* 3. Product Introduction: Why PurrSafe, Formula 70-20-10, Specs */}
          <ProductIntro />

          {/* 4. Customer Testimonials */}
          <CustomerTestimonials />

          {/* 5. Ingredients Deep Dive: 70% Đậu nành, 20% Than, 10% Khoáng chất tự nhiên */}
          <IngredientsSection />

          {/* 6. Comparison Table: PurrSafe vs Conventional Litters */}
          <ComparisonTable />

          {/* 7. Distributor & Agency Policies, Partner Benefits, 4 Steps */}
          <DistributorPolicy />

          {/* 8. 4-Step Usage Guide & Litter Care Tips */}
          <UsageGuide />

          {/* 9. Registration Form: Free Samples & Distributor Consultation */}
          <AgencyForm />
        </main>

        {/* 10. Prominent Contact Phone Number & Address at Bottom */}
        <FooterContact />

        {/* 11. Sticky Bottom Action Bar with Phone & Zalo */}
        <StickyBottomBar />
      </div>
    </LanguageProvider>
  );
}
