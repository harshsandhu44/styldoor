import { site } from '@/lib/site';
import { ComingSoon } from '../coming-soon';
import { HeroIllustration } from '../hero-illustration';

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:py-24">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Coming soon to {site.city}
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-balance">
            Salon-quality care, brought home
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg text-muted-foreground">
            Book a vetted stylist for a haircut, colour or hot-towel shave in{' '}
            {site.city}. They arrive with everything they need; you keep your
            morning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ComingSoon variant="solid">Get the app</ComingSoon>
            <a
              href="#for-stylists"
              className="inline-flex items-center border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              For stylists
            </a>
          </div>
        </div>

        <div className="lg:pl-4">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
