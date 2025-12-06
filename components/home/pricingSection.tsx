import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';
import { Link } from '@heroui/link';
import React from 'react';

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="px-4 md:px-0">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Prices tailored just for you
          </h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto text-sm md:text-base">
            We offer a 7 day free trial so you can try our services risk free.
          </p>
          <Card className="border border-violet-500/20 bg-gradient-to-r from-slate-900/80 to-slate-950 rounded-3xl shadow-xl shadow-violet-900/50">
            <CardBody className="py-12 text-center space-y-4">
              <p className="text-slate-200 text-sm md:text-base">
                Custom pricing based on your goals, channels, and content volume.
              </p>
              <p className="text-slate-400 text-xs md:text-sm">
                Book a call and we&apos;ll map out a plan that fits your budget.
              </p>
              <Link
                isExternal
                href="https://calendly.com/debnathrohan23/let-s-get-your-travel-agency-online"
                className="flex justify-center w-full"
              >
                <Button
                  color="primary"
                  radius="full"
                  size="md"
                  className="px-6 shadow-lg shadow-violet-500/40 hover:-translate-y-0.5 transition-transform"
                >
                  Get a Custom Quote
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </section>
    );
};

export default PricingSection;