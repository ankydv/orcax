import { Card, CardBody } from "@heroui/card";
import React from "react";

type Props = {};

const WyWorkWithUs: React.FC<Props> = () => {
    return (
        <section className="px-4 md:px-0">
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Why Work With Us
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Content Designed To Convert",
                desc: "Posts, reels, and campaigns created with a clear goal: generate leads, enquiries, and sales.",
              },
              {
                title: "Platform-First, Mobile-First",
                desc: "Everything we create is optimized for how people actually use social apps on their phones.",
              },
              {
                title: "Clear Social Media Strategy",
                desc: "A simple, focused plan so you always know what you are posting, why you are posting it, and who it is for.",
              },
              {
                title: "High-Impact Creatives",
                desc: "Designs and videos that stand out in the feed and make people stop scrolling.",
              },
              {
                title: "Paid Ads That Bring Results",
                desc: "Target the right audiences and retarget engaged users to turn attention into action.",
              },
              {
                title: "Strong Brand & Content Structure",
                desc: "Systems and content pillars that make it easy to stay consistent over time.",
              },
              {
                title: "Content for Reach & Engagement",
                desc: "Hooks, formats, and topics proven to get more views, saves, and shares.",
              },
              {
                title: "Simple Reports & Insights",
                desc: "Easy-to-understand reports so you always know what is working and what to do next.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="border border-white/10 bg-slate-900/80 rounded-2xl shadow-md shadow-slate-950/60 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <CardBody className="gap-2 px-6 py-6">
                  <h3 className="font-semibold text-base md:text-lg text-slate-50">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-sm text-slate-300">
                    {item.desc}
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