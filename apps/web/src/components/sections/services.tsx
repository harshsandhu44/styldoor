import { services, site } from '@/lib/site';
import { Reveal } from '../motion/reveal';

const inr = new Intl.NumberFormat('en-IN');

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
            What you can book
          </h2>
          <p className="mt-4 text-muted-foreground">
            Indicative starting prices for the {site.city} pilot. The final
            price is always shown before you confirm.
          </p>
        </div>

        <Reveal className="mt-12">
          <ul className="grid border-t border-border sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.name}
                className="flex flex-col gap-1 border-b border-border py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold tracking-tight">{s.name}</h3>
                  <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                    from ₹{inr.format(s.from)}
                  </span>
                </div>
                <p className="max-w-[48ch] text-sm text-muted-foreground">
                  {s.blurb}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
