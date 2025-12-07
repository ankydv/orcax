import { Card, CardBody } from '@heroui/card';
import React from 'react';

interface FAQSectionProps {
  data: {
    heading: string;
    items: Array<{
      heading: string;
      description: string;
    }>;
  };
}

const FAQSection: React.FC<FAQSectionProps> = ({data}) => {
   

    return (
        <section className="px-4 md:px-0">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            {data?.heading || "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {data?.items?.map((item, idx) => (
              <Card
                key={idx}
                className="border border-white/10 bg-slate-900/80 rounded-2xl shadow-md shadow-slate-950/60"
              >
                <CardBody className="gap-3 px-6 py-6">
                  <h3 className="font-semibold text-base md:text-lg text-slate-50">
                    {item.heading}
                  </h3>
                  <p className="text-sm md:text-sm text-slate-300">
                    {item.description}
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