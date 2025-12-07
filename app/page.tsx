import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/statsSection";
import StepsSection from "@/components/home/stepsSection";
import WhatDoWeDo from "@/components/home/whatDoWeDo";
import ServicesSection from "@/components/home/servicesSection";
import WyWorkWithUs from "@/components/home/WyWorkWithUs";
import PricingSection from "@/components/home/pricingSection";
import FAQSection from "@/components/home/faqSection";
import { getHome } from "@/sanity/lib/utils";

export default async function Home() {

    const data = await getHome()
    const sections = data?.sections;
    console.log("Hero Data:", sections);


  return (
    <div className="flex flex-col gap-20 text-slate-50 pb-20">
      {/* Hero Section */}
        <HeroSection data = {sections[0]} />

      {/* Stat Section */}
        <StatsSection data={sections[1]} />

      {/* What Do We Do Section */}
        <WhatDoWeDo data={sections[2]} />

      {/* How We Get You More Business - 3 Steps */}
        <StepsSection data={sections[3]} />

      {/* Services Section */}
        <ServicesSection data={sections[4]} />

      {/* Why Work With Us Section */}
        <WyWorkWithUs data={sections[5]} />

      {/* Pricing Section */}
        <PricingSection part1={sections[6]} part2={sections[7]} />

      {/* FAQs Section */}
        <FAQSection data={sections[8]} />
    </div>
  );
}
