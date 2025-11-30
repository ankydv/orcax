import { Button } from "@heroui/button";
import { subtitle, title } from "../primitives";
import { Link } from "@heroui/link";

export default function HeroSection() {
  return (
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
  );
}
