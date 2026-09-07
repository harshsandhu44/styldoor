import { Illustration } from '../illustration';
import { Reveal } from '../motion/reveal';

const factors = [
  {
    n: 1,
    name: 'Distance',
    body: 'Closer stylists reach you sooner and cost less to book.',
  },
  {
    n: 2,
    name: 'Rating',
    body: 'The average score customers have left after their visits.',
  },
  {
    n: 3,
    name: 'Rank',
    body: 'How a stylist is trending lately — recent work counts more than old work.',
  },
];

export function RankingExplainer() {
  return (
    <section id="matching" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
            How we match you
          </h2>
          <p className="mt-4 max-w-[52ch] text-muted-foreground">
            When you book, styldoor scores every available stylist on three
            things and suggests the strongest fit. You can always pick someone
            else.
          </p>
          <dl className="mt-8 flex flex-col divide-y divide-border border-y border-border">
            {factors.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[2rem_1fr] gap-3 py-4"
              >
                <dt className="text-sm text-muted-foreground tabular-nums">
                  {String(f.n).padStart(2, '0')}
                </dt>
                <dd>
                  <span className="font-semibold">{f.name}</span>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="lg:pl-8">
          <Illustration
            src="/illustrations/location-search.svg"
            alt="Searching a map for nearby stylists."
            width={982}
            height={763}
          />
        </Reveal>
      </div>
    </section>
  );
}
