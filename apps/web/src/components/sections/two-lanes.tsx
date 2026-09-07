import { ComingSoon } from '../coming-soon';
import { Illustration } from '../illustration';
import { Reveal } from '../motion/reveal';

const forYou = [
  'Every stylist is ID-checked and rated by real customers',
  'See the price band before you book — no surge, no surprises',
  'Pick your slot; they bring the chair, cape and kit',
  'Reschedule or cancel inside the window, free',
];

const forStylists = [
  'Set your own hours and the area you cover',
  'Keep the bulk of what you earn on every visit',
  'One profile customers actually browse — photos, services, reviews',
  'Do good work, climb the ranking, get sent more bookings',
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col divide-y divide-border border-y border-border">
      {items.map((t) => (
        <li key={t} className="py-3 text-muted-foreground">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function TwoLanes() {
  return (
    <section id="for-stylists" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <Reveal className="border-b border-border px-4 py-16 sm:px-6 lg:border-r lg:border-b-0 lg:pr-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            For customers
          </h2>
          <p className="mt-2 text-muted-foreground">
            A salon visit without leaving home.
          </p>
          <List items={forYou} />
          <div className="mt-8">
            <ComingSoon variant="solid">Get the app</ComingSoon>
          </div>
        </Reveal>

        <Reveal className="px-4 py-16 sm:px-6 lg:pl-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            For stylists
          </h2>
          <p className="mt-2 text-muted-foreground">
            Your chair, your hours, more customers.
          </p>
          <Illustration
            src="/illustrations/makeup-artist.svg"
            alt="A stylist at work with a client."
            width={930}
            height={802}
            className="mt-6 w-full max-w-sm"
          />
          <List items={forStylists} />
          <div className="mt-8">
            <ComingSoon>List your chair</ComingSoon>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
