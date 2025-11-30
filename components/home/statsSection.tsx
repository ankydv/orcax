import { Card, CardBody } from '@heroui/card';
import React from 'react';

interface StatsSectionProps {
    
}

const StatsSection: React.FC<StatsSectionProps> = (props) => {
    return (
        <section className="px-4 md:px-0">
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-12">
          <Card className="w-full border border-violet-500/20 bg-gradient-to-r from-slate-900/80 to-slate-950/90 backdrop-blur-md shadow-xl shadow-slate-950/70 rounded-3xl">
            <CardBody className="gap-4 text-center px-8 py-10">
              <h2 className="text-5xl font-extrabold tracking-tight text-violet-300">
                80%
              </h2>
              <p className="text-lg md:text-xl text-slate-100">
                of people are much more likely to buy from brands they regularly
                see on social media.
              </p>
              <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
                OrcaX Media helps you build a strong, consistent online presence
                so you get more leads, customers, and brand awareness.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    );
};

export default StatsSection;