import { site } from '@/lib/site';
import { ComingSoon } from '../coming-soon';

export function FinalCta() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:py-20">
        <div>
          <h2 className="max-w-[18ch] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
            styldoor is coming to {site.city}
          </h2>
          <p className="mt-3 max-w-[46ch] text-muted-foreground">
            Booking isn&rsquo;t open yet. This page is the preview — check back
            for the launch date, or tell a stylist you know.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <ComingSoon variant="solid">Get the app</ComingSoon>
          <ComingSoon>List your chair</ComingSoon>
        </div>
      </div>
    </section>
  );
}
