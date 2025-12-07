import { Card, CardBody } from '@heroui/card';
import React from 'react';

interface WhatDoWeDoProps {
  data: {
    title?: string;
    body?: string;
    moreBody?: string;
  }
}

const WhatDoWeDo: React.FC<WhatDoWeDoProps> = ({data}) => {
    return (
        <section className="px-4 md:px-0">
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            {data.title || "What Do We Do?"}
          </h2>
          <Card className="border border-white/10 bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-lg shadow-slate-950/60">
            <CardBody className="gap-4 text-sm md:text-base text-slate-200 px-8 py-10">
              <p>
                {data.body}
              </p>
              <p className="font-semibold text-slate-100">
                {data.moreBody}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    );
};

export default WhatDoWeDo;