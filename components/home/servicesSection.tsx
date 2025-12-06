import { Card, CardBody } from '@heroui/card';
import React from 'react';

export const ServicesSection = () => {
    return (
        <section className="px-4 md:px-0" id="services">
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            We can help you with…
          </h2>
          <Card className="border border-white/10 bg-slate-900/80 rounded-3xl shadow-lg shadow-slate-950/60">
            <CardBody className="px-8 py-10">
              <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base text-slate-200">
                {[
                  "Social Media Strategy & Planning",
                  "Instagram, Facebook, and LinkedIn Content",
                  "Reels, Shorts, and Video Content",
                  "Content Calendars & Copywriting",
                  "Profile Optimization",
                  "Paid Ad Campaigns (Meta, etc.)",
                  "Community & Engagement Management",
                  "Basic Landing Page or Website Design",
                  "SEO-Optimized Blog or Social Content",
                  "Analytics & Performance Tracking",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-violet-400 font-bold">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    );
};

export default ServicesSection;