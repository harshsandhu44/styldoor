// Single source for copy that repeats across the landing page and legal pages.
// TODO: replace contact + domain + entity placeholders before launch.
export const site = {
  name: 'styldoor',
  domain: 'styldoor.in',
  url: 'https://styldoor.in',
  email: 'hello@styldoor.in',
  entity: 'Styldoor (India) — entity name to be confirmed',
  city: 'Ludhiana',
  region: 'Punjab',
  legalUpdated: 'February 2026',
} as const;

export const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#services', label: 'Services' },
  { href: '#for-stylists', label: 'For stylists' },
  { href: '#faq', label: 'FAQ' },
] as const;

export type Service = {
  name: string;
  blurb: string;
  from: number; // ₹, indicative
};

export const services: Service[] = [
  {
    name: 'Haircut & styling',
    blurb: 'A proper cut and finish, done at your mirror instead of theirs.',
    from: 249,
  },
  {
    name: 'Beard & shave',
    blurb: 'Line-up, trim or a hot-towel shave without the queue.',
    from: 149,
  },
  {
    name: 'Hair colour',
    blurb: 'Global colour, roots or grey coverage with a patch test first.',
    from: 799,
  },
  {
    name: 'Bridal & party',
    blurb: 'Hair and make-up for the whole group, at home before you leave.',
    from: 2499,
  },
  {
    name: 'Head & scalp spa',
    blurb: 'Wash, massage and treatment. The good chair is now your sofa.',
    from: 399,
  },
  {
    name: 'Kids’ haircut',
    blurb: 'Familiar room, favourite show on, no meltdown in a strange salon.',
    from: 199,
  },
];

export const steps = [
  {
    n: 1,
    title: 'Pick a service and a time',
    body: 'Choose what you need and when. You see the price band before you book.',
    img: { src: '/illustrations/booking.svg', w: 853, h: 565 },
  },
  {
    n: 2,
    title: 'We match you nearby',
    body: 'styldoor ranks available stylists by distance, customer rating and recent track record, then suggests the best fit.',
    img: { src: '/illustrations/current-location.svg', w: 749, h: 699 },
  },
  {
    n: 3,
    title: 'Your stylist arrives',
    body: 'They bring their own kit and setup. You get their name and photo before they knock.',
    img: { src: '/illustrations/at-home.svg', w: 316, h: 468 },
  },
  {
    n: 4,
    title: 'Rate the visit',
    body: 'Your rating feeds the ranking. Stylists who do good work get seen by more customers.',
    img: { src: '/illustrations/feedback.svg', w: 719, h: 602 },
  },
] as const;

export const faq = [
  {
    q: 'When does styldoor launch?',
    a: 'We are starting with a Ludhiana pilot. This page is a preview — booking is not open yet. Check back, or follow us for the launch date.',
  },
  {
    q: 'How are stylists vetted?',
    a: 'Every stylist submits ID and proof of experience, and we verify it before their profile goes live. Customer ratings after each visit keep the bar high.',
  },
  {
    q: 'How is pricing set?',
    a: 'Each service has a published price band. You see the band before booking and the final price before you confirm. No surge, no surprise charges.',
  },
  {
    q: 'Which areas will be covered?',
    a: 'At launch, selected neighbourhoods across Ludhiana. Enter your area at booking and we will tell you if a stylist can reach you.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Free cancellation up to a set window before the appointment. The exact window and any late fee will be shown when you book.',
  },
  {
    q: 'I run a salon or work solo — how do I join?',
    a: 'Stylist sign-up opens alongside the customer launch. You will set your own hours and service area, keep the bulk of what you earn, and climb the ranking through good work.',
  },
] as const;
