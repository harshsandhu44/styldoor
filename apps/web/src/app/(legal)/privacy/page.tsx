import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} handles personal data.`,
};

export default function Privacy() {
  return (
    <article>
      <h1 className="font-display text-4xl font-extrabold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {site.legalUpdated}
      </p>

      <p className="mt-6">
        This policy explains how {site.name} (&ldquo;we&rdquo;) collects, uses
        and protects personal data, in line with the Digital Personal Data
        Protection Act, 2023 (&ldquo;DPDP Act&rdquo;). {site.name} is not yet
        operating; this describes what will apply once the {site.city} pilot
        goes live.
      </p>

      <h2>What we collect today</h2>
      <p>
        This site does not have accounts, forms or payments. The only data
        involved right now is:
      </p>
      <ul>
        <li>
          your cookie choice, stored in your own browser so we do not ask again;
        </li>
        <li>
          standard server logs (IP address, browser type, pages requested) kept
          briefly by our hosting provider for security and diagnostics.
        </li>
      </ul>

      <h2>What we will collect at launch</h2>
      <ul>
        <li>
          <strong>Customers:</strong> name, phone number, service address,
          booking history and ratings you leave.
        </li>
        <li>
          <strong>Stylists:</strong> name, contact details, government ID and
          proof of experience for verification, service area, payout details.
        </li>
        <li>Payment information, processed by a licensed payment gateway.</li>
      </ul>

      <h2>How we will use it</h2>
      <ul>
        <li>To match customers with nearby stylists and complete bookings.</li>
        <li>To verify stylist identity and keep the marketplace safe.</li>
        <li>To process payments and payouts.</li>
        <li>To provide support and respond to complaints.</li>
        <li>
          To meet legal obligations and enforce our{' '}
          <a href="/terms">Terms of Service</a>.
        </li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We will share the minimum needed: a customer&rsquo;s name, address and
        phone with the assigned stylist for that visit; data with payment,
        verification, hosting and communication providers acting on our
        instructions; and data with authorities where the law requires it. We do
        not sell personal data.
      </p>

      <h2>Retention</h2>
      <p>
        We keep personal data only as long as needed for the purposes above or
        as required by law, then delete or anonymise it.
      </p>

      <h2>Your rights under the DPDP Act</h2>
      <p>
        You may request access to, correction of, or erasure of your personal
        data, withdraw consent, and nominate another person to exercise your
        rights. To do so, contact us at{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Grievance officer</h2>
      <p>
        Once operational, we will name a Grievance Officer as required by the
        DPDP Act and publish their contact details here. Until then, use{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Children</h2>
      <p>
        Services booked for children are arranged by a parent or guardian, who
        provides consent for any processing of the child&rsquo;s data.
      </p>

      <h2>Changes</h2>
      <p>
        We will update this policy as the service develops and change the
        &ldquo;last updated&rdquo; date above.
      </p>
    </article>
  );
}
