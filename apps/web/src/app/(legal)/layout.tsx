import Link from 'next/link';
import { site } from '@/lib/site';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-3 py-1.5 text-sm font-semibold"
      >
        ← Back to home
      </Link>

      <div className="mt-8 space-y-4 leading-relaxed [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_p]:text-foreground/90">
        {children}
      </div>

      <p className="mt-12 border-t-2 border-foreground pt-4 text-sm text-muted-foreground">
        This document is a plain-language template and not legal advice. It must
        be reviewed by qualified counsel before {site.name} begins operating.
        Questions: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </div>
  );
}
