import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";

interface StepsSectionProps {
    
}

const StepsSection: React.FC<StepsSectionProps> = ({}) => {
  return (
    <section className="px-4 md:px-0" id="process">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          How we get you more business
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Build a Strong Foundation",
              desc: "We optimize your profiles, define content pillars, and create a clear brand voice so every post feels on-brand and speaks to the right people.",
            },
            {
              step: "2",
              title: "Attract the Right Audience",
              desc: "We plan and create scroll-stopping content, reels, carousels, and stories that reach people actively engaging and discovering new brands.",
            },
            {
              step: "3",
              title: "Convert & Scale with Data",
              desc: "We use analytics, audience insights, and testing to improve engagement, increase enquiries, and turn followers into paying customers.",
            },
          ].map((item) => (
            <Card
              key={item.step}
              className="border border-violet-500/20 bg-gradient-to-b from-slate-900/80 to-slate-950 rounded-2xl shadow-md shadow-violet-900/40 hover:shadow-violet-500/50 hover:-translate-y-1 transition-all"
            >
              <CardHeader className="flex items-center gap-3 pb-1 pt-4 px-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
                  {item.step}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-slate-50">
                  {item.title}
                </h3>
              </CardHeader>
              <CardBody className="px-5 pb-5 pt-2 text-sm text-slate-300">
                <p>{item.desc}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
