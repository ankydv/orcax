import { Card, CardBody } from '@heroui/card';
import React from 'react';

interface WhatDoWeDoProps {
    
}

const WhatDoWeDo: React.FC<WhatDoWeDoProps> = ({}) => {
    return (
        <section className="px-4 md:px-0">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            What do we do?
          </h2>
          <Card className="border border-white/10 bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-lg shadow-slate-950/60">
            <CardBody className="gap-4 text-sm md:text-base text-slate-200 px-8 py-10">
              <p>
                Most businesses struggle to stand out online because they either
                post inconsistently, have no clear strategy, or do not know what
                works on each platform. With more people discovering brands
                through Instagram, Facebook, and other platforms, having a
                strong social media presence is no longer optional.
              </p>
              <p className="font-semibold text-slate-100">
                OrcaX Media helps you show up consistently with content and
                campaigns that actually drive results.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    );
};

export default WhatDoWeDo;