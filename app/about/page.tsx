// app/about/page.tsx
"use client";

import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Avatar } from "@heroui/avatar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      {/* Shell container to align with Hero-style landing page */}
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        {/* Hero / Intro */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-5">
            <Chip
              size="sm"
              color="primary"
              variant="flat"
              radius="full"
              className="bg-cyan-500/10 text-cyan-300"
            >
              About OrcaX Media
            </Chip>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              We help your brand{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                dominate its waters.
              </span>
            </h1>
            <p className="max-w-2xl text-base text-slate-200/80 sm:text-lg">
              When you&apos;re busy running your business, handling social media,
              SEO, websites, and ads can feel like swimming against the tide.
              Most brands struggle to stay visible. Even fewer rise to the top
              of their market.
            </p>
            <p className="max-w-xl text-sm text-slate-200/80">
              OrcaX Media exists to change that.
            </p>
          </div>

          <Card
            radius="lg"
            className="border border-cyan-500/20 bg-slate-900/60 shadow-[0_0_70px_rgba(8,47,73,0.7)] backdrop-blur"
          >
            <CardBody className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Our philosophy
              </p>
              <p className="text-sm text-slate-100">
                Orcas don&apos;t just survive in the ocean — they lead it. They move
                with intention, intelligence, and precision.
              </p>
              <p className="text-sm text-slate-200/80">
                That&apos;s how we help your brand show up online: confident,
                strategic, and impossible to ignore.
              </p>
              <Divider className="bg-slate-800/80" />
              <div className="flex flex-wrap gap-2">
                <Chip size="sm" variant="flat" className="bg-slate-800 text-cyan-200">
                  Strategy-led
                </Chip>
                <Chip size="sm" variant="flat" className="bg-slate-800 text-cyan-200">
                  Design-first
                </Chip>
                <Chip size="sm" variant="flat" className="bg-slate-800 text-cyan-200">
                  Performance-minded
                </Chip>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Story */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Why we&apos;re qualified to help
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <Chip size="sm" variant="bordered" className="border-cyan-500/50 text-cyan-200">
                Built for small &amp; growing brands
              </Chip>
            </div>
          </div>

          <Card
            radius="lg"
            className="border border-slate-800 bg-slate-950/70 backdrop-blur"
          >
            <CardBody className="space-y-4 text-sm text-slate-200/85">
              <p>
                OrcaX Media didn&apos;t start as an agency. It started as three
                friends from school who loved building things on the internet.
              </p>
              <p>
                We were the ones fixing classmates&apos; websites, editing videos,
                designing graphics, and growing small pages — mostly through
                trial, error, and a healthy amount of obsession.
              </p>
              <p>
                Eventually, we realised most businesses weren&apos;t failing because
                they lacked talent. They were failing because they were trying
                to do everything alone.
              </p>
              <p>
                So we combined our skills —{" "}
                <span className="font-medium text-cyan-200">
                  strategy, design, content, and tech
                </span>{" "}
                — and built the agency we wished existed for small and growing
                brands. That&apos;s how OrcaX Media was born.
              </p>
            </CardBody>
          </Card>
        </section>

        {/* How we help */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              How we help you
            </h2>
            <p className="text-sm text-slate-200/85">
              We don&apos;t just manage your social media or run your ads. We take
              the digital weight off your shoulders so you can focus on what
              actually matters — growing your business.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Card
              radius="lg"
              className="border border-slate-800/80 bg-slate-950/80 transition hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(8,47,73,0.7)]"
            >
              <CardBody className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Social media
                </p>
                <h3 className="text-sm font-semibold text-slate-50">
                  Social media that builds authority
                </h3>
                <p className="text-sm text-slate-200/80">
                  Content that speaks clearly, looks clean, and positions your
                  brand as the leader in your space.
                </p>
              </CardBody>
            </Card>

            <Card
              radius="lg"
              className="border border-slate-800/80 bg-slate-950/80 transition hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(8,47,73,0.7)]"
            >
              <CardBody className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  SEO
                </p>
                <h3 className="text-sm font-semibold text-slate-50">
                  SEO that makes you discoverable
                </h3>
                <p className="text-sm text-slate-200/80">
                  We handle the complexity so you show up where your customers
                  are already searching.
                </p>
              </CardBody>
            </Card>

            <Card
              radius="lg"
              className="border border-slate-800/80 bg-slate-950/80 transition hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(8,47,73,0.7)]"
            >
              <CardBody className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Web
                </p>
                <h3 className="text-sm font-semibold text-slate-50">
                  Websites that convert, not confuse
                </h3>
                <p className="text-sm text-slate-200/80">
                  Clean, modern, high-performing websites designed to turn
                  visitors into customers.
                </p>
              </CardBody>
            </Card>

            <Card
              radius="lg"
              className="border border-slate-800/80 bg-slate-950/80 transition hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(8,47,73,0.7)]"
            >
              <CardBody className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Paid media
                </p>
                <h3 className="text-sm font-semibold text-slate-50">
                  Ads that scale your reach fast
                </h3>
                <p className="text-sm text-slate-200/80">
                  Targeted, data-driven campaigns that put you in front of the
                  right people at the right time.
                </p>
              </CardBody>
            </Card>
          </div>

          <p className="text-xs text-slate-300">
            Everything we do is designed to help your brand rise to the top —
            just like an orca claiming its territory.
          </p>
        </section>

        {/* Team */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                We&apos;re real people
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-200/85">
                Best friends who turned a shared passion into a brand that helps
                other brands win.
              </p>
            </div>
          </div>

          <Card
            radius="lg"
            className="border border-slate-800 bg-slate-950/80 backdrop-blur"
          >
            <CardBody className="flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between md:py-10">
              <div className="flex items-center gap-4">
                {/* Replace these with a single clean founders photo if you have one */}
                <Avatar
                  isBordered
                  radius="lg"
                  className="h-16 w-16 border-cyan-400/70 bg-slate-800"
                  src="/founders.jpg"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    The pod behind OrcaX Media
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    No hobbies. No quotes. No bios. Just the team that helps you
                    win online.
                  </p>
                </div>
              </div>
              <Divider className="bg-slate-800 md:hidden" />
              <Button
                as="a"
                href="/contact"
                color="primary"
                radius="full"
                className="bg-cyan-500 text-slate-950 shadow-[0_10px_40px_rgba(8,47,73,0.8)] hover:bg-cyan-400"
              >
                Meet the pod
              </Button>
            </CardBody>
          </Card>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-10 shadow-[0_0_60px_rgba(8,47,73,0.9)] sm:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to become the king of your market?
              </h2>
              <p className="max-w-xl text-sm text-slate-50/90">
                Your business deserves more than random posts, scattered efforts,
                and digital stress. If you want a team that helps you cut
                through the noise and dominate your waters, OrcaX Media is your
                pod.
              </p>
              <p className="text-xs text-slate-50/80">
                Let&apos;s build something powerful together.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                as="a"
                href="/contact"
                radius="full"
                size="md"
                color="default"
                className="bg-slate-950/90 text-slate-50 shadow-lg hover:bg-slate-900"
              >
                Talk to the pod
              </Button>
              <Button
                as="a"
                href="/services"
                radius="full"
                size="md"
                variant="bordered"
                className="border-slate-100/60 bg-transparent text-slate-50"
              >
                View services
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
