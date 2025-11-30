import { Card, CardBody } from '@heroui/card';
import React from 'react';

const FAQSection: React.FC = () => {
   

    return (
        <section className="px-4 md:px-0">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to start seeing results on social media?",
                a: "Organic growth usually starts to show visible improvements in 4–8 weeks, while paid campaigns can generate results much faster depending on your budget and goals.",
              },
              {
                q: "Do you also create content for us?",
                a: "Yes, we handle everything from strategy and ideas to scripts, captions, creatives, and posting.",
              },
              {
                q: "Can you manage our ads as well?",
                a: "Yes, we can plan, launch, and optimize your paid campaigns to help you get more leads, traffic, or sales based on your goals.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border border-white/10 bg-slate-900/80 rounded-2xl shadow-md shadow-slate-950/60"
              >
                <CardBody className="gap-3 px-6 py-6">
                  <h3 className="font-semibold text-base md:text-lg text-slate-50">
                    {item.q}
                  </h3>
                  <p className="text-sm md:text-sm text-slate-300">
                    {item.a}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQSection;