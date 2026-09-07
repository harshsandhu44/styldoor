import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Providers } from './providers';

// TODO: replace styldoor.in with the real domain before launch.
export const metadata: Metadata = {
  metadataBase: new URL('https://styldoor.in'),
  title: {
    default: 'styldoor — salon-quality care, brought home',
    template: '%s — styldoor',
  },
  description:
    'Book a vetted stylist for a haircut, colour or shave at home in Ludhiana. Salons and solo barbers: get matched to nearby customers by distance, rating and rank.',
  keywords: [
    'at-home salon',
    'home haircut Ludhiana',
    'mobile barber',
    'doorstep salon',
    'salon at home',
  ],
  openGraph: {
    title: 'styldoor — salon-quality care, brought home',
    description:
      'At-home salon and barber services in Ludhiana. Book a vetted stylist online.',
    url: 'https://styldoor.in',
    siteName: 'styldoor',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
