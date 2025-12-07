import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";

interface StepsSectionProps {
  data: {
    heading?: string;
    items?: Array<{
      heading: string;
      description: string;
    }>;
  };
}

const StepsSection: React.FC<StepsSectionProps> = ({data}) => {
  return (
    <section className="px-4 md:px-0" id="process">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          {data?.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.items?.map((item, index) => (
            <Card
              key={index}
              className="border border-violet-500/20 bg-gradient-to-b from-slate-900/80 to-slate-950 rounded-2xl shadow-md shadow-violet-900/40 hover:shadow-violet-500/50 hover:-translate-y-1 transition-all"
            >
              <CardHeader className="flex items-center gap-3 pb-1 pt-4 px-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
                  {index}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-slate-50">
                  {item.heading}
                </h3>
              </CardHeader>
              <CardBody className="px-5 pb-5 pt-2 text-sm text-slate-300">
                <p>{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
