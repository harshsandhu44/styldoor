import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms that govern use of ${site.name}.`,
};

export default function Terms() {
  return (
    <article>
      <h1 className="font-display text-4xl font-extrabold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {site.legalUpdated}
      </p>

      <p className="mt-6">
        These terms govern your use of the {site.name} website and, once live,
        the {site.name} app and services. By using them you agree to these
        terms.
      </p>

      <h2>What {site.name} is</h2>
      <p>
        {site.name} is an online platform that connects customers with
        independent salons and stylists who provide services at the
        customer&rsquo;s location. {site.name} is a technology intermediary. It
        does not employ stylists and is not the provider of the haircut, colour,
        shave or other service — that contract is between you and the stylist.
      </p>

      <h2>Current status</h2>
      <p>
        The service is not yet operating. This website is a preview. Nothing on
        it is an offer to provide services, a booking, or a binding price.
        Features and prices described may change before launch.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old to create an account. Services for
        minors must be booked and supervised by a parent or guardian.
      </p>

      <h2>Bookings and payments (at launch)</h2>
      <ul>
        <li>
          Prices shown are set within published bands; the final price is
          confirmed before you book.
        </li>
        <li>Payment is handled through a licensed payment gateway.</li>
        <li>
          Cancellation windows and any fees will be shown at the time of
          booking.
        </li>
      </ul>

      <h2>Stylist obligations (at launch)</h2>
      <ul>
        <li>
          Provide accurate identity and qualification information for
          verification.
        </li>
        <li>Hold any licences or registrations the law requires.</li>
        <li>
          Meet hygiene and safety standards and carry their own insured
          equipment.
        </li>
        <li>Honour confirmed bookings and the published price bands.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the platform: no fraud, harassment, unsafe conduct,
        scraping, or attempts to break security. We may suspend accounts that
        do.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The {site.name} name, brand and site content belong to {site.name}. You
        may not copy or reuse them without permission.
      </p>

      <h2>Disclaimers and liability</h2>
      <p>
        The website is provided &ldquo;as is&rdquo;. To the extent permitted by
        law, {site.name} is not liable for the acts or omissions of independent
        stylists or customers, or for indirect or consequential loss. Nothing in
        these terms limits liability that cannot be limited under Indian law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. The courts at {site.city}
        , {site.region} have jurisdiction, subject to any applicable
        consumer-protection rights.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the service develops and will change the
        &ldquo;last updated&rdquo; date above. Continued use means you accept
        the change.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </article>
  );
}
