import { navLinks, site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <p className="text-lg font-semibold lowercase">{site.name}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              At-home salon and barber services. Launching in {site.city},{' '}
              {site.region}.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-2 text-sm">
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {site.email}
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <p className="max-w-prose">
            styldoor is not yet operational. Nothing on this page is an offer to
            provide services, and prices shown are indicative only. styldoor is
            a platform that connects independent stylists with customers; it is
            not the provider of the salon services listed.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} {site.entity}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
