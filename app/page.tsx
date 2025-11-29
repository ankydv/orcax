import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 text-slate-50 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-20 px-4">
        <div className="max-w-3xl w-full">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-8 py-10 shadow-2xl shadow-violet-500/30 backdrop-blur-md text-center mx-auto">
            <div className="space-y-2">
              <span
                className={title({
                  class:
                    "bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent text-4xl md:text-5xl",
                })}
              >
                Show Up, Stand Out, Sell More
              </span>
              <div
                className={subtitle({
                  class:
                    "mt-4 text-slate-300 text-base md:text-lg max-w-xl mx-auto",
                })}
              >
                Helping modern brands grow with social media that actually
                converts.
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <Link
                isExternal
                href="https://calendly.com/debnathrohan23/let-s-get-your-travel-agency-online"
              >
                <Button
                  color="primary"
                  radius="full"
                  size="lg"
                  className="px-8 shadow-lg shadow-violet-500/40 hover:shadow-violet-400/60 hover:-translate-y-0.5 transition-transform"
                >
                  Book a Meeting →
                </Button>
              </Link>
              <p className="text-xs md:text-sm text-slate-400">
                7-day free trial. No long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Section */}
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

      {/* What Do We Do Section */}
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

      {/* How We Get You More Business - 3 Steps */}
      <section className="px-4 md:px-0">
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

      {/* Services Section */}
      <section className="px-4 md:px-0">
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            We can help you with…
          </h2>
          <Card className="border border-white/10 bg-slate-900/80 rounded-3xl shadow-lg shadow-slate-950/60">
            <CardBody className="px-8 py-10">
              <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base text-slate-200">
                {[
                  "Social Media Strategy & Planning",
                  "Instagram, Facebook, and LinkedIn Content",
                  "Reels, Shorts, and Video Content",
                  "Content Calendars & Copywriting",
                  "Profile Optimization",
                  "Paid Ad Campaigns (Meta, etc.)",
                  "Community & Engagement Management",
                  "Basic Landing Page or Website Design",
                  "SEO-Optimized Blog or Social Content",
                  "Analytics & Performance Tracking",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-violet-400 font-bold">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Why Work With Us Section */}
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

      {/* Pricing Section */}
      <section className="px-4 md:px-0">
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

      {/* FAQs Section */}
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
    </div>
  );
}
