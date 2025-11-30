import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/statsSection";
import StepsSection from "@/components/home/stepsSection";
import WhatDoWeDo from "@/components/home/whatDoWeDo";
import ServicesSection from "@/components/home/servicesSection";
import WyWorkWithUs from "@/components/home/WyWorkWithUs";
import PricingSection from "@/components/home/pricingSection";
import FAQSection from "@/components/home/faqSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 text-slate-50 pb-20">
      {/* Hero Section */}
        <HeroSection />

      {/* Stat Section */}
        <StatsSection />

      {/* What Do We Do Section */}
        <WhatDoWeDo />

      {/* How We Get You More Business - 3 Steps */}
        <StepsSection />

      {/* Services Section */}
        <ServicesSection />

      {/* Why Work With Us Section */}
        <WyWorkWithUs />

      {/* Pricing Section */}
        <PricingSection />

      {/* FAQs Section */}
        <FAQSection />
    </div>
  );
}
