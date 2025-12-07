import { Card, CardBody } from "@heroui/card";
import React from "react";

type ListProps = {
  data: {
    heading: string;
    items: Array<{
      heading: string;
      description: string;
    }>;
  };
};

const WyWorkWithUs: React.FC<ListProps> = ({data}) => {
    return (
        <section className="px-4 md:px-0">
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            {data?.heading || "Why Work With Us"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {data?.items?.map((item, idx) => (
              <Card
                key={idx}
                className="border border-white/10 bg-slate-900/80 rounded-2xl shadow-md shadow-slate-950/60 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <CardBody className="gap-2 px-6 py-6">
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

export default WyWorkWithUs;